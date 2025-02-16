import { State } from "./types";

export const API_URL = "https://november7-730026606190.europe-west1.run.app";

export const initialState: State = {
  totalMovies: 0,
  movies: [],
  page: 1,
  itemsPerPage: 10,
  query: "",
  error: null,
};

export const defaultErrorMessage = "An unknown error occurred";
