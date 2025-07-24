const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const https = require("https");
const { URL } = require("url");

// Init AWS SDK v3 clients
const s3 = new S3Client({});

// HARDCODED VALUES FOR TESTING
const AZURE_OPENAI_ENDPOINT = "https://ahm.openai.azure.com";
const AZURE_API_KEY = process.env.AZURE_API_KEY;
const DEPLOYMENT_NAME = "sora";
const S3_BUCKET_NAME = process.env.STORAGE_HAM_BUCKETNAME;

/**
 * Helper to fetch a binary file from a given URL
 */
const fetchBinary = (fileUrl, headers = {}) => {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(fileUrl);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: "GET",
      headers: headers,
    };

    https
      .get(options, (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
};

/**
 * Make HTTP request helper
 */
const makeRequest = (url, options, data = null) => {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        try {
          const parsedBody = body ? JSON.parse(body) : {};
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: parsedBody,
          });
        } catch (parseError) {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: body,
          });
        }
      });
    });

    req.on("error", reject);
    if (data) {
      req.write(typeof data === "string" ? data : JSON.stringify(data));
    }
    req.end();
  });
};

/**
 * Poll job status until completion
 */
const pollJobStatus = async (
  endpoint,
  jobId,
  apiVersion,
  apiKey,
  maxAttempts = 60,
  intervalMs = 10000
) => {
  const statusUrl = `${endpoint}/openai/v1/video/generations/jobs/${jobId}?api-version=${apiVersion}`;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    console.log(`Polling job status, attempt ${attempt + 1}/${maxAttempts}`);

    const response = await makeRequest(statusUrl, {
      method: "GET",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (response.statusCode !== 200) {
      throw new Error(
        `Job status check failed (${response.statusCode}): ${JSON.stringify(
          response.body
        )}`
      );
    }

    const jobData = response.body;
    console.log("Job status:", jobData.status);

    switch (jobData.status) {
      case "succeeded":
        return jobData;
      case "failed":
        throw new Error(
          `Video generation failed: ${JSON.stringify(
            jobData.failure_reason || jobData
          )}`
        );
      case "cancelled":
        throw new Error("Video generation was canceled");
      case "queued":
      case "preprocessing":
      case "running":
      case "processing":
        // Continue polling
        console.log(
          `Job ${jobData.status}, waiting ${intervalMs}ms before next check...`
        );
        await new Promise((resolve) => setTimeout(resolve, intervalMs));
        break;
      default:
        console.log(`Unknown job status: ${jobData.status}`);
        await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  }

  throw new Error(
    `Job did not complete within ${maxAttempts} attempts (${
      (maxAttempts * intervalMs) / 1000 / 60
    } minutes)`
  );
};

/**
 * Lambda entry point
 */
exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event));

  try {
    // Validate hardcoded values
    if (
      AZURE_OPENAI_ENDPOINT === "https://your-resource-name.openai.azure.com" ||
      AZURE_API_KEY === "your-api-key-from-azure-portal" ||
      S3_BUCKET_NAME === "your-s3-bucket-name"
    ) {
      throw new Error(
        "Please update the hardcoded values at the top of the file with your actual Azure OpenAI and S3 details"
      );
    }

    console.log("Using hardcoded values:");
    console.log("Endpoint:", AZURE_OPENAI_ENDPOINT);
    console.log(
      "API Key (first 10 chars):",
      AZURE_API_KEY.substring(0, 10) + "..."
    );
    console.log("Deployment:", DEPLOYMENT_NAME);
    console.log("S3 Bucket:", S3_BUCKET_NAME);

    // Step 1: Submit video generation job
    const apiVersion = "preview";
    const createUrl = `${AZURE_OPENAI_ENDPOINT}/openai/v1/video/generations/jobs?api-version=${apiVersion}`;

    const payload = {
      prompt: "a person doing a physical therapy shoulder stretch",
      width: 480,
      height: 480,
      n_seconds: 5,
      model: DEPLOYMENT_NAME,
    };

    console.log("Submitting video generation job:", JSON.stringify(payload));
    console.log("Create URL:", createUrl);

    const jobResponse = await makeRequest(
      createUrl,
      {
        method: "POST",
        headers: {
          "api-key": AZURE_API_KEY,
          "Content-Type": "application/json",
        },
      },
      payload
    );

    console.log("Job submission response status:", jobResponse.statusCode);
    console.log(
      "Job submission response body:",
      JSON.stringify(jobResponse.body)
    );

    if (jobResponse.statusCode !== 200 && jobResponse.statusCode !== 201) {
      throw new Error(
        `Job submission failed (${jobResponse.statusCode}): ${JSON.stringify(
          jobResponse.body
        )}`
      );
    }

    const jobId = jobResponse.body.id;
    console.log("Job submitted successfully. Job ID:", jobId);

    // Step 2: Poll for job completion
    console.log("Starting to poll for job completion...");
    const completedJob = await pollJobStatus(
      AZURE_OPENAI_ENDPOINT,
      jobId,
      apiVersion,
      AZURE_API_KEY
    );
    console.log("Job completed successfully!");
    console.log("Completed job data:", JSON.stringify(completedJob));

    // Step 3: Extract video from generations array
    const generations = completedJob.generations || [];
    if (generations.length === 0) {
      throw new Error("No generations found in completed job");
    }

    const generation = generations[0];
    const generationId = generation.id;
    console.log("Generation ID:", generationId);

    // Step 4: Download video using the content endpoint
    const videoUrl = `${AZURE_OPENAI_ENDPOINT}/openai/v1/video/generations/${generationId}/content/video?api-version=${apiVersion}`;
    console.log("Downloading video from:", videoUrl);

    const videoBuffer = await fetchBinary(videoUrl, {
      "api-key": AZURE_API_KEY,
    });
    console.log(
      "Video downloaded successfully, size:",
      videoBuffer.length,
      "bytes"
    );

    // Step 5: Upload to S3
    const key = `videos/sora-generated-${Date.now()}.mp4`;
    console.log("Uploading to S3 bucket:", S3_BUCKET_NAME);
    console.log("S3 key:", key);

    await s3.send(
      new PutObjectCommand({
        Bucket: S3_BUCKET_NAME,
        Key: key,
        Body: videoBuffer,
        ContentType: "video/mp4",
      })
    );

    console.log("Upload to S3 successful!");

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Video uploaded successfully",
        s3Key: key,
        jobId: jobId,
        generationId: generationId,
        provider: "Azure OpenAI Sora",
        videoSizeBytes: videoBuffer.length,
      }),
    };
  } catch (err) {
    console.error("Lambda error:", err);
    console.error("Error stack:", err.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
        timestamp: new Date().toISOString(),
      }),
    };
  }
};
