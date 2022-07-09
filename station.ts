/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-import-module-exports */

// eslint-disable-next-line import/extensions
import { station } from "./src/station";

module.exports.run = async (event) => {
  const stationId = event?.pathParameters?.stationId;

  if (!stationId) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: "No stationId. Probably scheduled.",
    };
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
