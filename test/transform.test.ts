const { transform } = require("../src/transform.ts");

const fullDataResponse = require("./data/full.json");

describe("transform", () => {
  describe("a simple station", () => {
    it("should return an array of objects with departures and messages", () => {
      const stationId = "NIS";
      const transformed = transform(fullDataResponse, stationId);
      expect(transformed).toEqual({
        departures: [
          {
            code: "ASH",
            destination: "Ashton-under-Lyne",
            mins: [11],
            services: [{ mins: "11", carriages: "Single" }],
          },
          {
            code: "ECC",
            destination: "Eccles via MediaCityUK",
            mins: [7, 19],
            services: [
              { mins: "7", carriages: "Double" },
              { mins: "19", carriages: "Single" },
            ],
          },
        ],
        messages: [
          "Welcome to Metrolink. Ticket checks are taking place across the network today. Please ensure you have a valid ticket before travelling. For up to date travel information visit www.TfGM.com.",
        ],
      });
    });

    it("should return an empty array if the station does not exist", () => {
      const stationId = "NOPE";
      const transformed = transform(fullDataResponse, stationId);
      expect(transformed).toEqual({ departures: [], messages: [] });
    });

    it("should return an empty array if the station has no departures", () => {
      const stationId = "NIS";
      const mockData = {
        data: {
          value: [
            {
              TLAREF: "NIS",
              AtcoCode: "9400ZZMANIS1",
              Dest0: "",
              Wait0: "",
              MessageBoard:
                "Welcome to Metrolink. Ticket checks are taking place across the network today. Please ensure you have a valid ticket before travelling. For up to date travel information visit www.TfGM.com.",
            },
          ],
        },
      };
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual({
        departures: [],
        messages: [
          "Welcome to Metrolink. Ticket checks are taking place across the network today. Please ensure you have a valid ticket before travelling. For up to date travel information visit www.TfGM.com.",
        ],
      });
    });

    it("should include wait times of 0", () => {
      const stationId = "NIS";
      const mockData = {
        data: {
          value: [
            {
              TLAREF: "NIS",
              AtcoCode: "9400ZZMANIS1",
              Dest0: "My house",
              Wait0: "0",
              Carriages0: "Single",
            },
          ],
        },
      };
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual({
        departures: [
          {
            code: "",
            destination: "My house",
            mins: [0],
            services: [{ mins: "0", carriages: "Single" }],
          },
        ],
        messages: [],
      });
    });
  });

  describe("a large station", () => {
    it("should return an array of objects with departures and messages", () => {
      const stationId = "SPS";
      const transformed = transform(fullDataResponse, stationId);
      expect(transformed).toEqual(
        expect.objectContaining({
          departures: [
            {
              code: "ALT",
              destination: "Altrincham",
              mins: [2, 10],
              services: [
                { mins: "2", carriages: "Single" },
                { mins: "10", carriages: "Double" },
              ],
            },
            {
              code: "ECC",
              destination: "Eccles via MediaCityUK",
              mins: [5],
              services: [{ mins: "5", carriages: "Single" }],
            },
            {
              code: "EDD",
              destination: "East Didsbury",
              mins: [3, 10, 14],
              services: [
                { mins: "3", carriages: "Single" },
                { mins: "10", carriages: "Single" },
                { mins: "14", carriages: "Single" },
              ],
            },
            {
              code: "ASH",
              destination: "Ashton-under-Lyne",
              mins: [2],
              services: [{ mins: "2", carriages: "Single" }],
            },
            {
              code: "VIC",
              destination: "Victoria",
              mins: [3],
              services: [{ mins: "3", carriages: "Single" }],
            },
            {
              code: "PIC",
              destination: "Piccadilly",
              mins: [7],
              services: [{ mins: "7", carriages: "Single" }],
            },
            {
              code: "SHC",
              destination: "Shaw and Crompton",
              mins: [0, 9],
              services: [
                { mins: "0", carriages: "Double" },
                { mins: "9", carriages: "Double" },
              ],
            },
            {
              code: "RTC",
              destination: "Rochdale Town Centre",
              mins: [4],
              services: [{ mins: "4", carriages: "Single" }],
            },
          ],
          messages: [
            "Welcome to Metrolink. Ticket checks are taking place across the network today. Please ensure you have a valid ticket before travelling. For up to date travel information visit www.TfGM.com.",
            "A different message.",
          ],
        })
      );
    });
  });
});
