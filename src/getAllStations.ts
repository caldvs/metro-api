import { fetch } from './fetch';
var _ = require('lodash');

export const stations = async () => {
    const data = await fetch();
    const pickDestinationAndWait = (filtered) => {
        return filtered.map((pid) => {
            const range = [0,1,2,3];
            const dests = Array.from(range, x => `Dest${x}`)
            const waits = Array.from(range, x => `Wait${x}`)
            return range.map((e) => {
                if (pid[dests[e]]) {
                    return {
                        destination: pid[dests[e]],
                        wait: pid[waits[e]],
                        stationOrigin: pid.StationLocation
                    };    
                }
            })
        }).flat().filter(Boolean);
    };
    const destinations = Array.from(new Set(data.data.value.map((pid) => [pid.Dest0, pid.Dest1, pid.Dest2, pid.Dest3]).flat().filter(Boolean)));
    const departuresSorted = destinations.map((destination) => {
        const destinationsAndWaits = pickDestinationAndWait(data.data.value).map((departure) => {
            return departure.destination === destination && [Number(departure.wait), departure.stationOrigin];
         }).filter(Boolean)
        const mins = _.uniq(destinationsAndWaits);
        const mean = _.round(_.mean(mins.map((min) => min[0])), 0).toFixed(0)
        console.log("🚀 | file: getAllStations.ts | line 34 |", {
            destination,
            mins: _.uniq(destinationsAndWaits),
            mean
        })
        return {
            destination,
            mins: _.uniq(destinationsAndWaits),
            mean
        }
    });
    return {
        version: `metro-api-${process.env.stageEnv}`,
        network: departuresSorted
    }
}