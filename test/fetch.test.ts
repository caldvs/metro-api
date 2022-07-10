import axios from "axios";

import { station } from "../handler";

const fullDataResponse = require("./data/full.json");

describe("Station", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.mock("axios");
  });

  it("should make an axios request for station data", async () => {
    const event = {
      pathParameters: {
        stationId: "NIS",
      },
    };
    (axios.get as jest.Mock).mockResolvedValue(fullDataResponse);
    await station(event);
    expect(axios.get).toHaveBeenCalled();
  });
});
