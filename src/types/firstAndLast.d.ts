type URLObject = {
  destination: string;
  target: string;
};

export type PuppeteerObject = {
  stationId: string;
  name: string;
  urls: URLObject[];
};
