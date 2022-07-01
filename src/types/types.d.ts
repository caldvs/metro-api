export type DeparturesGroupedByDestination = {
  destination: string;
  mins: Number[];
};

export type TransformationResponse = {
  departures: DeparturesGroupedByDestination[];
  messages: string[];
};

export type StationResponse = {
  version: string;
  departures: DeparturesGroupedByDestination[];
  messages: string[];
  firstAndLast: string[];
};

export type PID = {
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

export type APIResponse = {
  "@odata.context": string;
  value: PID[];
};
