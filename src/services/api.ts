import axios from "axios";

axios.defaults.baseURL = "https://sw-api.starnavi.io";

interface Endpoints {
  CHARACTERS: string;
}

const ENDPOINTS: Endpoints = {
  CHARACTERS: "/people"
}


// get all characters
export const fetchAllCharacters = async (url?: string): Promise<any> => {
  const fetchUrl = url || axios.defaults.baseURL + ENDPOINTS.CHARACTERS;
  return axios.get(fetchUrl)
  .then(response => response.data)
}
