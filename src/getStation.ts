/* eslint-disable import/extensions */
import type { StationResponse } from "./types/types";

// eslint-disable-next-line import/no-unresolved
import fetch from "./fetch";
// eslint-disable-next-line import/no-unresolved
import transform from "./transform";

export default async (stationId: string): Promise<StationResponse> => {
  const { data } = await fetch();
  const { departures, messages } = transform(data, stationId);
  return {
    version: `metro-api-${process.env.environment}`,
    departures,
    messages,
  };
};
