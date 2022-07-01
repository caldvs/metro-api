const _ = require("lodash"); 
const DEST_KEYS = ["Dest0", "Dest1", "Dest2", "Dest3"];
const WAIT_KEYS = ["Wait0", "Wait1", "Wait2", "Wait3"];
const TLAREF = 'TLAREF';
const ATCO_CODE = 'AtcoCode';

export type DeparturesGroupedByDestination = {
    destination: string;
    mins: Number[]
}

export const transform = ({value}, stationId): DeparturesGroupedByDestination[] => {
    const filteredByStationId = value.filter((station) => station[TLAREF] === stationId)
    const filterByATCO = _.uniqBy(filteredByStationId, ATCO_CODE);
    const allDestinations = _.uniq(filterByATCO.map((station) => DEST_KEYS.map((key) => station[key]).filter(Boolean)).flat());
    
    const groupByDestination = allDestinations.map((destination) => {
        const mins = filterByATCO.map((platform) => {
            return DEST_KEYS.map((key, i) => {
                if (platform[key] == destination) {
                    return Number(platform[WAIT_KEYS[i]]);
                }
            }).filter((min) => min === 0 || min);
        }).flat();

        return {
            destination,
            mins
        }
    });
    return groupByDestination;
};
