/* Amplify Params - DO NOT EDIT
	API_HAM_GRAPHQLAPIENDPOINTOUTPUT
	API_HAM_GRAPHQLAPIIDOUTPUT
	API_HAM_GRAPHQLAPIKEYOUTPUT
	API_HAM_VIDEOJOBTABLE_ARN
	API_HAM_VIDEOJOBTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */const {
  DynamoDBClient,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const https = require("https");
const { URL } = require("url");

// Initialize AWS SDK v3 clients
const dynamodb = new DynamoDBClient({});

// Environment variables
const AZURE_OPENAI_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const AZURE_API_KEY = process.env.AZURE_API_KEY;

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
    const jobId = event.jobId;
    if (!jobId) {
      throw new Error("Missing jobId in event");
    }

    const apiVersion = "preview";
    const statusUrl = `${AZURE_OPENAI_ENDPOINT}/openai/v1/video/generations/jobs/${jobId}?api-version=${apiVersion}`;

    const response = await makeRequest(statusUrl, {
      method: "GET",
      headers: {
        "api-key": AZURE_API_KEY,
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

    // Update DynamoDB with job status
    await dynamodb.send(
      new UpdateItemCommand({
        TableName: "VideoJobs",
        Key: { jobId: { S: jobId } },
        UpdateExpression: "SET #status = :status, updated_at = :updated_at",
        ExpressionAttributeNames: { "#status": "status" },
        ExpressionAttributeValues: {
          ":status": { S: jobData.status },
          ":updated_at": { N: Math.floor(Date.now() / 1000).toString() },
        },
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        jobId,
        status: jobData.status,
        generationId: jobData.generations?.[0]?.id,
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
