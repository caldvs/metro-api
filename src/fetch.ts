import axios from "axios";
import type { APIResponse } from "./types/station";

export const fetch = async (): Promise<any> => {
  const url = "https://api.tfgm.com/odata/Metrolinks";
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Ocp-Apim-Subscription-Key": process.env.TFGM_KEY,
    responseType: "json",
  };
  return axios.get(url, { headers });
};
