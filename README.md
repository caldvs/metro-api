<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# metro-api

Serverless API endpoint for Metrolink data

## Usage

Public gateway URLs:

dev: `https://vc3rds0ko2.execute-api.eu-west-2.amazonaws.com/{path}`

prod: `https://vh8bmjelah.execute-api.eu-west-2.amazonaws.com/{path}`

### Available paths

- `/{stationId}` e.g. `SPS`, `NIS`, `CNK`


### Deployment

Run `sls deploy` locally to deploy to dev environment.
CI will deploy to production on merges to `main` branch.

### Local development

Invoke functions locally by using the following command:
```
npm run invoke:station
```