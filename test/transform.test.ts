const { transform } = require("../src/transform.ts");

const fullDataResponse = require("./data/full.json");

describe("transform", () => {
  describe("a simple station", () => {
    it("should return an array of objects with departures and messages", () => {
      const stationId = "NIS";
      const transformed = transform(fullDataResponse, stationId);
      expect(transformed).toEqual({
        departures: [
          { code: "ASH", destination: "Ashton-under-Lyne", mins: [11] },
          { code: "ECC", destination: "Eccles via MediaCityUK", mins: [7, 19] },
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
            },
          ],
        },
      };
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual({
        departures: [{ code: "", destination: "My house", mins: [0] }],
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
            { code: "ALT", destination: "Altrincham", mins: [2, 10] },
            { code: "ECC", destination: "Eccles via MediaCityUK", mins: [5] },
            { code: "EDD", destination: "East Didsbury", mins: [3, 10, 14] },
            { code: "ASH", destination: "Ashton-under-Lyne", mins: [2] },
            { code: "VIC", destination: "Victoria", mins: [3] },
            { code: "PIC", destination: "Piccadilly", mins: [7] },
            { code: "SHC", destination: "Shaw and Crompton", mins: [0, 9] },
            { code: "RTC", destination: "Rochdale Town Centre", mins: [4] },
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
