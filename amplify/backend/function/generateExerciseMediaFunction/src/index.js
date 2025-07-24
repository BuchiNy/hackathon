const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const https = require("https");
const { URL } = require("url");

// Initialize AWS SDK v3 clients
const dynamodb = new DynamoDBClient({});

// Environment variables
const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const AZURE_API_KEY = process.env.AZURE_API_KEY;
const DEPLOYMENT_NAME = process.env.DEPLOYMENT_NAME;

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

exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event));

  try {
    // Validate environment variables
    if (!AZURE_OPENAI_ENDPOINT || !AZURE_API_KEY || !DEPLOYMENT_NAME) {
      throw new Error("Missing required environment variables");
    }

    // Parse input
    const body = JSON.parse(event.body || "{}");
    const prompt =
      body.prompt || "a person doing a physical therapy shoulder stretch";

    // Submit video generation job
    const apiVersion = "preview";
    const createUrl = `${AZURE_OPENAI_ENDPOINT}/openai/v1/video/generations/jobs?api-version=${apiVersion}`;
    const payload = {
      prompt,
      width: 480,
      height: 480,
      n_seconds: 5,
      model: DEPLOYMENT_NAME,
    };

    console.log("Submitting video generation job:", JSON.stringify(payload));
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

    if (jobResponse.statusCode !== 200 && jobResponse.statusCode !== 201) {
      throw new Error(
        `Job submission failed (${jobResponse.statusCode}): ${JSON.stringify(
          jobResponse.body
        )}`
      );
    }

    const jobId = jobResponse.body.id;
    console.log("Job submitted successfully. Job ID:", jobId);

    // Store job metadata in DynamoDB
    await dynamodb.send(
      new PutItemCommand({
        TableName: "VideoJobs",
        Item: {
          jobId: { S: jobId },
          userId: {
            S: event.requestContext?.authorizer?.claims?.sub || "anonymous",
          },
          status: { S: "queued" },
          prompt: { S: prompt },
          created_at: { N: Math.floor(Date.now() / 1000).toString() },
        },
      })
    );

    return {
      statusCode: 202,
      body: JSON.stringify({
        message: "Job created successfully",
        jobId,
      }),
    };
  } catch (err) {
    console.error("Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
        timestamp: new Date().toISOString(),
      }),
    };
  }
};
