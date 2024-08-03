import axios from "axios";

axios.defaults.baseURL = "https://sw-api.starnavi.io";

interface Endpoints {
  CHARACTERS: string;
  FILMS: string;
  STARSHIPS: string;
}

const ENDPOINTS: Endpoints = {
  CHARACTERS: "/people/",
  FILMS: "/films/",
  STARSHIPS: "/starships/"
}


// get all characters
export const fetchAllCharacters = async (url?: string): Promise<any> => {
  const fetchUrl = url || axios.defaults.baseURL + ENDPOINTS.CHARACTERS;
  return axios.get(fetchUrl)
  .then(response => response.data)
}

// get films for current character
export const fetchFilmsForCharacterById = async (id: number): Promise<any> => {
  return axios.get(`${ENDPOINTS.FILMS}?characters=${id}`)
   .then(response => response.data)
}

//get starships in the film for current character
export const fetchStarshipsInFilmForCharacter = async (pilotId: number, filmId: number): Promise<any> => {
  return axios.get(`${ENDPOINTS.STARSHIPS}?pilots=${pilotId}&films=${filmId}`)
    .then(response => response.data);
}



