import axios from "axios";

import { station } from "../handler";

jest.mock("axios");
const fullDataResponse = require("./data/full.json");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Station", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should make an axios request for station data", async () => {
    const event = {
      pathParameters: {
        stationId: "NIS",
      },
    };

    // Provide the data object to be returned
    mockedAxios.get.mockResolvedValue(fullDataResponse);

    await station(event);
    expect(axios.get).toHaveBeenCalled();
  });
});
