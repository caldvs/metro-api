const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-2" });
const cloudwatch = new AWS.CloudWatch({ apiVersion: "2010-08-01" });

/* eslint-disable import/extensions */
import type { StationResponse } from "./types/types";
// eslint-disable-next-line import/no-unresolved
import fetch from "./fetch";
// eslint-disable-next-line import/no-unresolved
import transform from "./transform";
import { codeToDestination } from "./lib/mapping";

export default async (stationId: string): Promise<StationResponse> => {
  const { data } = await fetch();
  const params = {
    MetricData: {
      MetricName: "station",
      Timestamp: new Date(),
      Value: codeToDestination(stationId),
    },
    Namespace: "FrequencyMonitoring",
  };
  cloudwatch.putMetricData(params, (err: any, data: any) => {
    if (err) console.log(err, err.stack); // an error occurred
    console.log(JSON.stringify(params));
  });
  const { departures, messages } = transform(data, stationId);
  return {
    version: `metro-api-${process.env.environment}`,
    departures,
    messages,
  };
};
