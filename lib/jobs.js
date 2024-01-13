import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
	DynamoDBDocumentClient,
	ScanCommand,
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
		const jobs = await documentClient.send(new ScanCommand(params));
		// console.log("Jobs retrieved successfully:", jobs.Items);
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
		const job = await documentClient.send(new ScanCommand(params));
		console.log("Job retrieved successfully:", job.Items);
		return job;
	} catch (error) {
		console.error("Error retrieving job:", error);
	}
};

export const addJob = async (job) => {
	const params = {
		TableName: TABLE_NAME,
		Item: job,
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
