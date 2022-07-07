/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */
import type { StationResponse } from "./types/types";

import { fetch } from "./fetch";
import { transform } from "./transform";
import { get } from "./lib/s3";

export const station = async (stationId: string): Promise<StationResponse> => {
  const { data } = await fetch();
  const { departures, messages } = transform(data, stationId);
  const firstAndLast = await get(stationId);
  return {
    version: `metro-api-${process.env.environment}`,
    departures,
    messages,
    firstAndLast,
  };
};