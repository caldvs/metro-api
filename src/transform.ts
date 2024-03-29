import type { TransformationResponse, PID } from "./types/station";
import { destinationToCode } from "./lib/mapping";

const _ = require("lodash");

const DEST_KEYS = ["Dest0", "Dest1", "Dest2", "Dest3"];
const WAIT_KEYS = ["Wait0", "Wait1", "Wait2", "Wait3"];
const CARRIAGES_KEYS = ["Carriages0", "Carriages1", "Carriages2", "Carriages3"];
const TLAREF = "TLAREF";
const ATCO_CODE = "AtcoCode";

export const transform = (
  { data: { value } },
  stationId
): TransformationResponse => {
  const filteredByStationId = Object.values(value).filter(
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

    const services = filterByATCO
      .map((platform) =>
        DEST_KEYS.map((key, i) => {
          if (platform[key] === destination) {
            return {
              mins: platform[WAIT_KEYS[i]],
              carriages: platform[CARRIAGES_KEYS[i]],
            };
          }
        }).filter(Boolean)
      )
      .flat()
      .filter((value) => value.length !== 0);
    return {
      code: destinationToCode(destination),
      destination,
      mins,
      services,
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
