import { fetch } from './fetch';
var _ = require('lodash');

export const station = async (stationId: string) => {
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
                        wait: pid[waits[e]]
                    };    
                }
            })
        }).flat().filter(Boolean);
    };
    const filtered = data.data.value.filter((station) => station.TLAREF === stationId)
    const destinations = Array.from(new Set(filtered.map((pid) => [pid.Dest0, pid.Dest1, pid.Dest2, pid.Dest3]).flat().filter(Boolean)));

    const departuresSorted = destinations.map((destination) => {
        const destinationsAndWaits = pickDestinationAndWait(filtered).map((departure) => {
            return departure.destination === destination && departure.wait;
         }).filter(Boolean)
        return {
            destination,
            wait: _.sortedUniq(destinationsAndWaits)
        }
    });

    return {
        departures: departuresSorted,
        messages: ['hi'],
        firstAndLast: ['06:00', '23:59']
    }
}