"use strict";

module.exports.station = async (event) => {
  console.log("🚀 | file: handler.ts | line 4 | event", event)
  // const data = getStation(stationId: string);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
