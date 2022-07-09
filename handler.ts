/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */

// eslint-disable-next-line import/extensions
import { station } from "./src/station";

// eslint-disable-next-line import/extensions
import { firstAndLast } from "./src/firstAndLast";

module.exports.station = async (event) => {
  console.log("🚀 | file: handler.ts | line 11 | event", event);
  const scheduled = Object.keys(event).length === 0;

  if (scheduled) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: "Scheduled",
    };
  }

  const stationId = event?.pathParameters?.stationId || "SPS";

  const data = await station(stationId);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(data, null, 2),
  };
};

module.exports.firstAndLast = async () => {
  await firstAndLast();
};
