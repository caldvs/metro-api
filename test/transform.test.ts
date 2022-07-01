const { transform } = require("../src/transform");
const mockData = require("./data/full.json");
describe("transform", () => {
  describe("a simple station", () => {
    it("should return an array of objects with the destination and the wait times", () => {
      const stationId = "NIS";
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual([
        {
          destination: "Ashton-under-Lyne",
          mins: [11],
        },
        {
          destination: "Eccles via MediaCityUK",
          mins: [7, 19],
        },
      ]);
    });

    it("should return an empty array if the station does not exist", () => {
      const stationId = "NOPE";
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual([]);
    });

    it("should return an empty array if the station has no departures", () => {
      const stationId = "NIS";
      const mockData = {
        value: [{
          "TLAREF": "NIS",
          "AtcoCode": "9400ZZMANIS1",
          "Dest0": "",
          "Wait0": "",
        }]
      };
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual([]);
    });

    it("should include wait times of 0", () => {
      const stationId = "NIS";
      const mockData = {
        value: [{
          "TLAREF": "NIS",
          "AtcoCode": "9400ZZMANIS1",
          "Dest0": "My house",
          "Wait0": "0",
        }]
      };
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual([
        {
          destination: "My house",
          mins: [0],
        },
      ]);
    });
  });

  describe("a large station", () => {
    it("should return an array of objects with the destination and the wait times", () => {
      const stationId = "SPS";
      const transformed = transform(mockData, stationId);
      expect(transformed).toEqual(
        expect.arrayContaining([
          { destination: "Altrincham", mins: [2, 10] },
          { destination: "Eccles via MediaCityUK", mins: [5] },
          { destination: "East Didsbury", mins: [3, 10, 14] },
          { destination: "Ashton-under-Lyne", mins: [2] },
          { destination: "Victoria", mins: [3] },
          { destination: "Piccadilly", mins: [7] },
          { destination: "Shaw and Crompton", mins: [0, 9] },
          { destination: "Rochdale Town Centre", mins: [4] },
        ])
      );
    });
  });

});