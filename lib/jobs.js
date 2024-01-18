import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
	DynamoDBDocumentClient,
	ScanCommand,
	GetCommand,
	PutCommand,
	DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const dynamoDBClient = new DynamoDBClient({
	region: process.env.AWS_DEFAULT_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	},
});

const documentClient = DynamoDBDocumentClient.from(dynamoDBClient);

const TABLE_NAME = "jobs";

export const getJobs = async () => {
	const params = {
		TableName: TABLE_NAME,
	};
	try {
		// await new Promise((resolve) => {
		// 	setTimeout(resolve, 5000);
		// });

		// throw new Error("Loading jobs failed.");
		const jobs = await documentClient.send(new ScanCommand(params));
		return jobs.Items;
	} catch (error) {
		console.error("Error retrieving jobs:", error);
	}
};

export const getJobById = async (jobId) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			jobId,
		},
	};

	try {
		const job = await documentClient.send(new GetCommand(params));
		// console.log("Job retrieved successfully:", job.Items);
		return job.Item;
	} catch (error) {
		console.error("Error retrieving job:", error);
	}
};

export const addJob = async (job) => {
	const params = {
		TableName: TABLE_NAME,
		Item: { ...job, datePosted: Date.now() },
	};
	try {
		const response = await documentClient.send(new PutCommand(params));
		console.log("Job added successfully:", response);
	} catch (error) {
		console.error("Error adding job:", error);
	}
};

export const deleteJobById = async (jobId) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			jobId,
		},
	};

	try {
		const job = await documentClient.send(new DeleteCommand(params));
		console.log("Job deleted successfully:", job.Items);
		return job;
	} catch (error) {
		console.error("Error retrieving job:", error);
	}
};
