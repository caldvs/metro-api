"use strict";
import { station } from './src/getStation';

module.exports.station = async ({ pathParameters: { stationId }}) => {
  const data = station(stationId);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        data,
      },
      null,
      2
    ),
  };
};
