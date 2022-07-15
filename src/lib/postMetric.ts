import { codeToDestination } from "./mapping";

const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-west-2" });
const cloudwatch = new AWS.CloudWatch({ region: "eu-west-2" });

export const postMetric = async (stationId: string) => {
  const metric = {
    MetricData: [
      {
        MetricName: "Request",
        Dimensions: [
          {
            Name: "Invocation",
            Value: 1,
          },
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
    Namespace: "my metrics",
  };
  try {
    await cloudwatch
      .putMetricData(metric, (err, data) => {
        if (err) {
          console.log(err, err.stack); // an error occurred
        } else {
          console.log(data); // successful response
        }
      })
      .promise();
  } catch (error) {
    console.log("error putting stationId metric with params", metric);
    console.log(error);
  }
};
