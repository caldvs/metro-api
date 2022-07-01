const { transform } = require("../src/transform");
const mockData = require("./data/raw.json");
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
          { destination: "Shaw and Crompton", mins: [9] },
          { destination: "Rochdale Town Centre", mins: [4] },
        ])
      );
    });
  });
});
