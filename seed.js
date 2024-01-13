import dotenv from "dotenv";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { referrersData } from "./data.js";

dotenv.config();

// Configure AWS DynamoDB client
const dynamoDBClient = new DynamoDBClient({
	region: process.env.AWS_DEFAULT_REGION,
});
const db = DynamoDBDocumentClient.from(dynamoDBClient);
const tableName = "jobs";

async function seedDynamoDB() {
	for (const item of referrersData) {
		try {
			const params = {
				TableName: tableName,
				Item: item,
			};

			await db.send(new PutCommand(params));
			console.log(`Item with jobId ${item.jobId} added to DynamoDB.`);
		} catch (error) {
			console.error(`Error adding item with jobId ${item.jobId}:`, error);
		}
	}
}

// Run the seeding function
seedDynamoDB();
