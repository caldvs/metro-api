/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
import type { StationResponse } from "./types/station";

import { getS3LineStatus, writeS3LineStatus } from "./lib/s3";
import { fetchLineStatus } from "./fetchLineStatus";
import { transform } from "./transform";
import { postMetric } from "./lib/postMetric";
import { codeToDestination } from "./lib/mapping";

const generateResponseBody = (body) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(body, null, 2),
  };
};

export const lineStatus = async (event): Promise<StationResponse> => {
  try {
    const action = event?.pathParameters?.action;
    if (action === "retrieve") {
      const response = await getS3LineStatus();
      console.log("🚀 | file: lineStatus.ts | line 28 | response", response);
      return generateResponseBody(response);
    }
    const { data } = await fetchLineStatus();
    await writeS3LineStatus(data);
    return generateResponseBody("success");
  } catch (error) {
    console.log("🚀 | file: lineStatus.ts | line 34 | error", error);
  }
};
