/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
import type { StationResponse } from "./types/station";

import { getS3LineStatus, writeS3LineStatus } from "./lib/s3";
import { fetchLineStatus } from "./fetchLineStatus";

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

const transform = (data) => {
  const { items } = data;
  return {
    ...data,
    items: [
      items.map((item) => {
        if (item.detail) {
          return {
            ...item,
            detail: item.detail.replace(/<\/?[^>]+(>|$)/g, ""),
          };
        }
        return {
          ...item,
        };
      }),
    ].flat(),
  };
};

export const lineStatus = async (event): Promise<StationResponse> => {
  try {
    const action = event?.pathParameters?.action;
    if (action === "retrieve") {
      const response = await getS3LineStatus();
      return generateResponseBody(response);
    }
    const { data } = await fetchLineStatus();
    const transformed = transform(data);
    await writeS3LineStatus(transformed);
    return generateResponseBody("success");
  } catch (error) {
    console.log("🚀 | file: lineStatus.ts | line 34 | error", error);
  }
};
