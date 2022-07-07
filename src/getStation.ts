const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-2" });

/* eslint-disable import/extensions */
import type { StationResponse } from "./types/types";
// eslint-disable-next-line import/no-unresolved
import fetch from "./fetch";
// eslint-disable-next-line import/no-unresolved
import transform from "./transform";
import codeToDestination from "./lib/mapping";

export default async (stationId: string): Promise<StationResponse> => {
  const { data } = await fetch();
  const metric = {
    MetricData: [
      {
        MetricName: "Request",
        Dimensions: [
          {
            Name: "stationId",
            Value: stationId,
          },
          {
            Name: "stationName",
            Value: codeToDestination(stationId),
          },
        ],
        Timestamp: new Date(),
        Unit: "Count",
        Value: 1,
      },
    ],
    Namespace: "my metrics" /* required */,
  };

  const cloudwatch = new AWS.CloudWatch({ region: "eu-west-2" });
  await cloudwatch
    .putMetricData(metric, (err, data) => {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        console.log(data); // successful response
      }
    })
    .promise();
  const { departures, messages } = transform(data, stationId);
  return {
    version: `metro-api-${process.env.environment}`,
    departures,
    messages,
  };
};
