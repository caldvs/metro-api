import station from "./src/getStation";
import firstAndLast from "./src/firstAndLast";

module.exports.station = async ({ pathParameters: { stationId } }) => {
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
  return firstAndLast();
};
