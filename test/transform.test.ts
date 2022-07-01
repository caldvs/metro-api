import transform from "../src/transform";

const fullDataResponse = require("./data/full.json");

describe("transform", () => {
  describe("a simple station", () => {
    it("should return an array of objects with departures and messages", () => {
      const stationId = "NIS";
      const transformed = transform(fullDataResponse, stationId);
      expect(transformed).toEqual({
        departures: [
          { destination: "Ashton-under-Lyne", mins: [11] },
          { destination: "Eccles via MediaCityUK", mins: [7, 19] },
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
        value: [
          {
            TLAREF: "NIS",
            AtcoCode: "9400ZZMANIS1",
            Dest0: "My house",
            Wait0: "0",
          },
        ],
      };
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual({
        departures: [{ destination: "My house", mins: [0] }],
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
            { destination: "Altrincham", mins: [2, 10] },
            { destination: "Eccles via MediaCityUK", mins: [5] },
            { destination: "East Didsbury", mins: [3, 10, 14] },
            { destination: "Ashton-under-Lyne", mins: [2] },
            { destination: "Victoria", mins: [3] },
            { destination: "Piccadilly", mins: [7] },
            { destination: "Shaw and Crompton", mins: [0, 9] },
            { destination: "Rochdale Town Centre", mins: [4] },
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