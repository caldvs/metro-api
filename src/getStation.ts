import type { DeparturesGroupedByDestination } from "./transform";

const { fetch } = require("./fetch.ts");
const { transform } = require("./transform.ts");

type StationResponse = {
  version: string;
  departures: DeparturesGroupedByDestination[];
  messages: string[];
  firstAndLast: string[];
};

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
