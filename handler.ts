"use strict";
import { station } from './src/getStation';

module.exports.station = async ({ pathParameters: { stationId }}) => {
  const data = await station(stationId);
  return {
    statusCode: 200,
    body: JSON.stringify({data}, null, 2),
  };
};
