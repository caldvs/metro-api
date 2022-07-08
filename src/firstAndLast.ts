import {
  allStations,
  allTerminus,
  stationCodeToPath,
  codeToDestination,
  destinationToCode,
} from "./lib/mapping";
import { save, getOldestFile } from "./lib/s3";
import { getMonthFromString } from "./lib/date";

const util = require("util");
const axios = require("axios");
const cheerio = require("cheerio");

type puppeteerScrapeInput = {
  code: string;
  urls: destinationUrls[];
};

type destinationUrls = {
  destination: string;
  target: string;
};

type URLObject = {
  destination: string;
  target: string;
};

type PuppeteerObject = {
  stationId: string;
  name: string;
  urls: URLObject[];
};

const generateUrl = (start: string, end: string): string => {
  const from = stationCodeToPath(start);
  const to = stationCodeToPath(end);
  return `https://tfgm.com/public-transport/tram/stops/${from}-tram/tram-schedule/${to}-tram#tram-schedule-panel`;
};

const generatePuppeteerObject = (stationId: string): PuppeteerObject => {
  const terminus = allTerminus.filter((t) => t !== stationId);
  return {
    stationId,
    name: codeToDestination(stationId),
    urls: terminus.map((t) => {
      return {
        destination: codeToDestination(t),
        target: generateUrl(stationId, t),
      };
    }),
  };
};

const scrapePages = async () => {
  const oldestStation = await getOldestFile();
  console.log(
    "🚀 | file: firstAndLast.ts | line 49 | oldestStation",
    oldestStation
  );
  const { stationId, name, urls} = generatePuppeteerObject(oldestStation);
  console.log(
    "🚀 | file: firstAndLast.ts | line 54 | util.inspect puppeteerObject",
    util.inspect(puppeteerObject, false, null, true /* enable colors */)
  );

  const result = {};
  Promise.all(
    await Promise.all(
      urls.map(async ({ destination, target }) => {
        try {
          const { data } = await axios.get(target);
          const $ = cheerio.load(data);
          const range = [0, 1, 2, 3, 4, 5, 6];

          range.forEach((i) => {
            const day = $(`#first-last-${i}`);
            const prettyDate = day.children(".first-last-day").text().trim();
            const dayNumber = "0".concat(prettyDate.split(" ")[1]).slice(-2);
            const month = "0"
              .concat(String(getMonthFromString(prettyDate.split(" ")[2])))
              .slice(-2); // month 7
            const dateKey = `${dayNumber}-${month}`;
            const firstTram = $(
              `#first-last-${i} .first-last-times table tbody tr .first-last-first .first-last-departure-time`
            ).text();
            const lastTram = $(
              `#first-last-${i} .first-last-times table tbody tr .first-last-last .first-last-departure-time`
            ).text();
            const changeLocationFirst = $(
              `#first-last-${i} .first-last-times table tbody tr .first-last-first .first-last-route`
            ).text();
            const changeLocationLast = $(
              `#first-last-${i} .first-last-times table tbody tr .first-last-last .first-last-route`
            ).text();
            console.log("here");
            if (result[dateKey]) {
              result[dateKey].services[destination] = {
                destination,
                code: destinationToCode(destination),
                firstTram,
                lastTram,
                changeLocationFirst,
                changeLocationLast,
              };
            } else {
              result[dateKey] = {
                date: prettyDate,
                services: {
                  [destination]: {
                    destination,
                    code: destinationToCode(destination),
                    firstTram,
                    lastTram,
                    changeLocationFirst,
                    changeLocationLast,
                  },
                },
              };
            }
          });
        } catch (error) {
          console.log("🚀 | file: firstAndLast.ts | line 119 | error", error);
        }
      })
    )
    await save(stationId, result);
  );
};

export const firstAndLast = async (): Promise<any> => {
  await scrapePages();
};
