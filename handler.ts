"use strict";
import { station } from './src/getStation';
import { stations } from './src/getAllStations';

module.exports.station = async ({ pathParameters: { stationId }}) => {
  const data = await station(stationId);
  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  };
};

module.exports.stations = async () => {
  const data = await stations();
  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  };
};
