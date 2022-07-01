import { allStations, getPath } from "./lib/mapping";
import { save } from "./lib/s3";

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
  return Promise.all(
    puppeteerObject.map(async ({ code, urls }) => {
      const destinations = await Promise.all(
        urls.map(async ({ destination, target }) => {
          try {
            const { data } = await axios.get(target);
            const $ = cheerio.load(data);
            const range = [0, 1, 2, 3, 4, 5, 6];

            const trams = range.map((i) => {
              const day = $(`#first-last-${i}`);
              const rowDate = day.children(".first-last-day").text().trim();

              const firstTram = $(
                `#first-last-${i} .first-last-times table tbody tr .first-last-first .first-last-departure-time`
              ).text();
              const lastTram = $(
                `#first-last-${i} .first-last-times table tbody tr .first-last-last .first-last-departure-time`
              ).text();

              return {
                rowDate,
                firstTram,
                lastTram,
              };
            });

            // const date = rowDate.split(" ")[1]; // day 3
            // const month = getMonthFromString(rowDate.split(" ")[2]);  // month 7

            return {
              destination,
              trams,
            };
          } catch (error) {
            console.log("🚀 | file: firstAndLast.ts | line 98 | error", error);
          }
        })
      );

      const data = {
        code,
        destinations,
      };
      await save(code, data);
    })
  );
};

export const firstAndLast = async (): Promise<any> => {
  await scrapePages();
};
