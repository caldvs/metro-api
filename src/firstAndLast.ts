import { allStations, getPath, codeToDestination } from "./lib/mapping";
import { save } from "./lib/s3";
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

const generateUrl = (start, end) => {
  const from = getPath(start);
  const to = getPath(end);
  return `https://tfgm.com/public-transport/tram/stops/${from}-tram/tram-schedule/${to}-tram#tram-schedule-panel`;
};

const generatePuppeteerObject = () => {
  const stationsToScrape = allStations();
  return Object.values(stationsToScrape).map(({ code, goesTo }) => {
    return {
      code,
      urls: goesTo.map((destination) => {
        return {
          destination,
          target: generateUrl(code, destination),
        };
      }),
    };
  });
};

const scrapePages = async () => {
  const puppeteerObject = generatePuppeteerObject();
  Promise.all(
    puppeteerObject.map(async ({ code, urls }) => {
      const result = {};
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

              if (result[dateKey]) {
                result[dateKey].services[destination] = {
                  destination,
                  fullName: codeToDestination(destination),
                  firstTram,
                  lastTram,
                };
              } else {
                result[dateKey] = {
                  date: prettyDate,
                  services: {
                    [destination]: {
                      destination,
                      fullName: codeToDestination(destination),
                      firstTram,
                      lastTram,
                    },
                  },
                };
              }
            });
          } catch (error) {
            console.log("🚀 | file: firstAndLast.ts | line 98 | error", error);
            return false;
          }
        })
      );
      console.log("🚀 | file: firstAndLast.ts | line 85 | result", result);
      await save(code, result);
    })
  );
};

export const firstAndLast = async (): Promise<any> => {
  await scrapePages();
};
