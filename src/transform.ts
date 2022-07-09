import type { TransformationResponse, PID } from "./types/types";
import { destinationToCode } from "./lib/mapping";

const _ = require("lodash");

const DEST_KEYS = ["Dest0", "Dest1", "Dest2", "Dest3"];
const WAIT_KEYS = ["Wait0", "Wait1", "Wait2", "Wait3"];
const TLAREF = "TLAREF";
const ATCO_CODE = "AtcoCode";

export const transform = ({ value }, stationId): TransformationResponse => {
  const filteredByStationId = value.filter(
    (station) => station[TLAREF] === stationId
  );
  const filterByATCO = _.uniqBy(filteredByStationId, ATCO_CODE);
  const allDestinations = _.uniq(
    filterByATCO
      .map((station: PID) =>
        DEST_KEYS.map((key) => station[key]).filter(Boolean)
      )
      .flat()
  );
  const groupByDestination = allDestinations.map((destination: string) => {
    const mins = filterByATCO
      .map((platform) =>
        DEST_KEYS.map(
          (key, i) =>
            platform[key] === destination && Number(platform[WAIT_KEYS[i]])
        ).filter((min) => min === 0 || min)
      )
      .sort()
      .flat();
    return {
      code: destinationToCode(destination),
      destination,
      mins,
    };
  });

  const messages = _.uniq(
    filterByATCO.map((station) => station.MessageBoard).filter(Boolean)
  );
  return {
    departures: groupByDestination,
    messages,
  };
};
