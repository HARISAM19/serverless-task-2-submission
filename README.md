# Task 2 – Serverless Application Walkthrough

## Candidate
Hari Prasad  
Role: Cloud Engineer

## Overview
This project demonstrates a serverless REST API built using AWS Lambda, API Gateway, and DynamoDB.
The focus of this task is to understand cloud-native serverless architecture rather than a specific programming language.

## Architecture
Client → API Gateway → AWS Lambda → DynamoDB

## AWS Services Used
- AWS Lambda (Node.js 24.x)
- API Gateway (HTTP API)
- DynamoDB
- IAM

## API Endpoints

### Add user
POST /add-user  
Request Body:
```json
{
  "name": "Hari",
  "email": "hari@gmail.com"
}


