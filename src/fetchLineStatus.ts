import axios from "axios";

export const fetchLineStatus = async (): Promise<any> => {
  const epoch = new Date();
  const url = `https://tfgm.com/api/statuses/tram?_=${epoch}`;
  return axios.get(url);
};
