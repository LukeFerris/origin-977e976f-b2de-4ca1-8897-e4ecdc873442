// ["DealAPI", "LambdaFunctionNodeJsCode"]    


import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
  GetItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
} from "@aws-sdk/client-dynamodb";
import crypto from "crypto";

const dynamoClient = new DynamoDBClient({ region: "eu-central-1" }); // IMPORTANT: do not change the region from eu-central-1
const tableName = process.env.TABLE_NAME; // IMPORTANT: do not change the table name - it is imported from process.env

export async function handler(event, context) {
  try {
    const httpMethod = event.requestContext.http.method;

    if (httpMethod === "POST") {
      const { clientName, startDate, endDate } = JSON.parse(event.body);

      if (!clientName || clientName.trim() === "") {
        return errorResponse(400, "Client name is required and cannot be empty.");
      }

      if (!isValidDate(startDate) || !isValidDate(endDate)) {
        return errorResponse(400, "Invalid date format. Use YYYY-MM-DD.");
      }

      if (new Date(startDate) > new Date(endDate)) {
        return errorResponse(400, "Start date must be before or equal to end date.");
      }

      const id = crypto.randomUUID();
      await dynamoClient.send(
        new PutItemCommand({
          TableName: tableName,
          Item: {
            id: { S: id },
            clientName: { S: clientName },
            startDate: { S: startDate },
            endDate: { S: endDate },
          },
        })
      );

      return successResponse(201, { id, clientName, startDate, endDate });
    } else if (httpMethod === "GET") {
      const { id } = event.pathParameters || {};

      if (id) {
        const result = await dynamoClient.send(
          new GetItemCommand({
            TableName: tableName,
            Key: { id: { S: id } },
          })
        );

        if (!result.Item) {
          return errorResponse(404, `Deal with ID ${id} not found`);
        }

        return successResponse(200, {
          id: result.Item.id.S,
          clientName: result.Item.clientName.S,
          startDate: result.Item.startDate.S,
          endDate: result.Item.endDate.S,
        });
      } else {
        const result = await dynamoClient.send(
          new ScanCommand({ TableName: tableName })
        );

        const items = result.Items.map((item) => ({
          id: item.id.S,
          clientName: item.clientName.S,
          startDate: item.startDate.S,
          endDate: item.endDate.S,
        }));

        return successResponse(200, items);
      }
    } else if (httpMethod === "PUT") {
      const { id } = event.pathParameters || {};
      const { clientName, startDate, endDate } = JSON.parse(event.body);

      if (!id) {
        return errorResponse(400, "Deal ID is required");
      }

      if (!clientName || clientName.trim() === "") {
        return errorResponse(400, "Client name is required and cannot be empty.");
      }

      if (!isValidDate(startDate) || !isValidDate(endDate)) {
        return errorResponse(400, "Invalid date format. Use YYYY-MM-DD.");
      }

      if (new Date(startDate) > new Date(endDate)) {
        return errorResponse(400, "Start date must be before or equal to end date.");
      }

      const result = await dynamoClient.send(
        new UpdateItemCommand({
          TableName: tableName,
          Key: { id: { S: id } },
          UpdateExpression: "SET clientName = :clientName, startDate = :startDate, endDate = :endDate",
          ExpressionAttributeValues: {
            ":clientName": { S: clientName },
            ":startDate": { S: startDate },
            ":endDate": { S: endDate },
          },
          ReturnValues: "ALL_NEW",
        })
      );

      if (!result.Attributes) {
        return errorResponse(404, `Deal with ID ${id} not found`);
      }

      return successResponse(200, {
        id: result.Attributes.id.S,
        clientName: result.Attributes.clientName.S,
        startDate: result.Attributes.startDate.S,
        endDate: result.Attributes.endDate.S,
      });
    } else if (httpMethod === "DELETE") {
      const { id } = event.pathParameters || {};

      if (!id) {
        return errorResponse(400, "Deal ID is required");
      }

      await dynamoClient.send(
        new DeleteItemCommand({
          TableName: tableName,
          Key: { id: { S: id } },
        })
      );

      return successResponse(204);
    } else {
      return errorResponse(405, "Method not allowed");
    }
  } catch (error) {
    console.error(error);
    return errorResponse(500, "Failed to process request. Error was: " + error.toString());
  }
}

function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

function successResponse(statusCode, body = {}) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function errorResponse(statusCode, message) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  };
}