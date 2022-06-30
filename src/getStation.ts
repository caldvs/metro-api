import { fetch } from './fetch';
var _ = require('lodash');

export const station = async (stationId: string) => {
    const data = await fetch();
    const extractDestinationsAndWaits = (filteredByStationId) => {
        return filteredByStationId.map((pid) => {
            const range = [0,1,2,3];
            const dests = Array.from(range, x => `Dest${x}`)
            const waits = Array.from(range, x => `Wait${x}`)
            return range.map((e) => {
                if (pid[dests[e]]) {
                    return {
                        destination: pid[dests[e]],
                        wait: pid[waits[e]]
                    };    
                }
            })
        }).flat().filter(Boolean);
    };
    const filteredByStationId = data.data.value.filter((station) => station.TLAREF === stationId)
    const destinations = Array.from(new Set(filteredByStationId.map((pid) => [pid.Dest0, pid.Dest1, pid.Dest2, pid.Dest3]).flat().filter(Boolean)));
    const messages = _.uniq(filteredByStationId.map((pid) => pid.MessageBoard));

    const groupByDestination = destinations.map((destination) => {
        const waitsGroupedByDestination = extractDestinationsAndWaits(filteredByStationId).map((departure) => {
            return departure.destination === destination && Number(departure.wait);
         }).filter(Boolean)
        console.log("🚀 | file: getStation.ts | line 29 | waitsGroupedByDestination", waitsGroupedByDestination)
        return {
            destination,
            mins: waitsGroupedByDestination
        }
    });
    return {
        version: `metro-api-${process.env.environment}`,
        departures: groupByDestination,
        messages,
        firstAndLast: ['06:00', '23:59']
    }
}