import {
  allTerminus,
  codeToPath,
  codeToDestination,
  destinationToCode,
} from "./lib/mapping";
import { save, getOldestFile } from "./lib/s3";
import { getMonthFromString } from "./lib/date";

import type { PuppeteerObject } from "./types/firstAndLast";

const util = require("util");
const axios = require("axios");
const cheerio = require("cheerio");

const generateUrl = (start: string, end: string): string => {
  const from = codeToPath(start);
  const to = codeToPath(end);
  return `https://tfgm.com/public-transport/tram/stops/${from}-tram/tram-schedule/${to}-tram#tram-schedule-panel`;
};

const generatePuppeteerObject = (stationId: string): any => {
  return {
    stationId,
    name: codeToDestination(stationId),
    urls: [generateUrl(stationId, "eccles")],
  };
};

const scrapePages = async () => {
  const oldestStation = "PIC";
  console.log("🚀 | Getting: ", oldestStation);
  const { urls } = generatePuppeteerObject(oldestStation);
  // console.log(
  //   "🚀 | file: firstAndLast.ts | line 54 | util.inspect puppeteerObject",
  //   util.inspect(urls, false, null, true /* enable colors */)
  // );

  const result = {};
  let stationLocation;
  Promise.all(
    await Promise.all(
      urls.map(async (url) => {
        try {
          const { data } = await axios.get(url);
          const $ = cheerio.load(data);
          const range = [0, 1, 2, 3, 4, 5, 6];

          range.forEach((i) => {
            const location = $(`.station-address-link`).getAttribute("href");
            console.log(
              "🚀 | file: firstAndLast.ts | line 56 | location",
              location
            );
            stationLocation = location;
          });
        } catch (error) {
          console.log("🚀 | file: firstAndLast.ts | line 119 | error", error);
        }
      })
    )
  );
  console.log(
    "🚀 | file: firstAndLast.ts | line 40 | stationLocation",
    stationLocation
  );
  // await save(stationId, result);
};

export const firstAndLast = async (): Promise<any> => {
  await scrapePages();
};
