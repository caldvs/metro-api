/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
import type { StationResponse } from "./types/station";

import { get } from "./lib/s3";
import { fetch } from "./fetch";
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

export const station = async (event): Promise<StationResponse> => {
  const stationId = event?.pathParameters?.stationId;

  if (!stationId) {
    return generateResponseBody("No stationId. Probably scheduled.");
  }

  const data = await fetch();

  if (process.env.environment === "prod") {
    postMetric(stationId);
  }

  const { departures, messages } = transform(data, stationId);
  const firstAndLast = await get(stationId);

  const stationObject = {
    version: `metro-api-${process.env.environment}`,
    stationId,
    station: codeToDestination(stationId),
    messages,
    departures,
    firstAndLast,
  };

  return generateResponseBody(stationObject);
};
