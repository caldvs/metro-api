import type { StationResponse } from "./types/types";

const { fetch } = require("./fetch.ts");
const { transform } = require("./transform.ts");

export default async (stationId: string): Promise<StationResponse> => {
  const { data } = await fetch();
  const { departures, messages } = transform(data, stationId);
  return {
    version: `metro-api-${process.env.environment}`,
    departures,
    messages,
    firstAndLast: ["06:00", "23:59"],
  };
};
