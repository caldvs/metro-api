const _ = require("lodash");

const DEST_KEYS = ["Dest0", "Dest1", "Dest2", "Dest3"];
const WAIT_KEYS = ["Wait0", "Wait1", "Wait2", "Wait3"];
const TLAREF = "TLAREF";
const ATCO_CODE = "AtcoCode";

export type TransformationResponse = {
  departures: DeparturesGroupedByDestination[];
  messages: string[];
};

export type DeparturesGroupedByDestination = {
  destination: string;
  mins: Number[];
};

type PID = {
  Id: string;
  Line: string;
  TLAREF: string;
  PIDREF: string;
  StationLocation: string;
  AtcoCode: string;
  Direction: string;
  Dest0: string;
  Carriages0: string;
  Status0: string;
  Wait0: string;
  Dest1: string;
  Carriages1: string;
  Status1: string;
  Wait1: string;
  Dest2: string;
  Carriages2: string;
  Status2: string;
  Wait2: string;
  Dest3: string;
  Carriages3: string;
  Status3: string;
  MessageBoard: string;
  Wait3: string;
  LastUpdated: string;
};

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
        )
      )
      .filter(Boolean);
    return {
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
