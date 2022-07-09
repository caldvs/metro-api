/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */

// eslint-disable-next-line import/extensions
import { station } from "./src/station";

// eslint-disable-next-line import/extensions
import { firstAndLast } from "./src/firstAndLast";
import { postMetric } from "./src/lib/postMetric";

module.exports.station = async (event) => {
  const scheduled = Object.keys(event).length === 0;
  const stationId = event?.pathParameters?.stationId || "SPS";
  if (process.env.environment === "prod" && !scheduled) {
    console.log("got here");
    postMetric(stationId);
  }

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
