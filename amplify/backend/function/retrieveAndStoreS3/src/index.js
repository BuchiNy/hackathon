const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const {
  DynamoDBClient,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const https = require("https");
const { URL } = require("url");

// Initialize AWS SDK v3 clients
const s3 = new S3Client({});
const dynamodb = new DynamoDBClient({});

// Environment variables
const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const AZURE_API_KEY = process.env.AZURE_API_KEY;
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

exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event));

  try {
    const { jobId, generationId } = event;
    if (!jobId || !generationId) {
      throw new Error("Missing jobId or generationId in event");
    }

    // Download video
    const apiVersion = "preview";
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

    // Upload to S3
    const key = `videos/sora-generated-${Date.now()}.mp4`;
    await s3.send(
      new PutObjectCommand({
        Bucket: S3_BUCKET_NAME,
        Key: key,
        Body: videoBuffer,
        ContentType: "video/mp4",
      })
    );

    // Generate pre-signed URL
    const presignedUrl = await s3
      .send(
        new GetObjectCommand({
          Bucket: S3_BUCKET_NAME,
          Key: key,
          ResponseContentDisposition:
            'attachment; filename="exercise-video.mp4"',
        })
      )
      .then((cmd) => {
        return s3.getSignedUrl("getObject", {
          Bucket: S3_BUCKET_NAME,
          Key: key,
          Expires: 3600, // 1 hour
        });
      });

    // Update DynamoDB with video URL
    await dynamodb.send(
      new UpdateItemCommand({
        TableName: "VideoJobs",
        Key: { jobId: { S: jobId } },
        UpdateExpression: "SET video_url = :url, updated_at = :updated_at",
        ExpressionAttributeValues: {
          ":url": { S: presignedUrl },
          ":updated_at": { N: Math.floor(Date.now() / 1000).toString() },
        },
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Video uploaded successfully",
        s3Key: key,
        jobId,
        generationId,
        videoUrl: presignedUrl,
        videoSizeBytes: videoBuffer.length,
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
