import { State } from "./types";

export const NOV7_API_URL =
  "https://november7-730026606190.europe-west1.run.app";

export const TMDB_API_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const TMDB_API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

export const ITEMS_PER_PAGE = 10;

export const DEBOUNCE_TIME_MS = 500;

export const initialState: State = {
  isFetching: false,
  totalMovies: 0,
  movies: [],
  page: 1,
  query: "",
  errorMessage: null,
};

export const defaultErrorMessage = "An unknown error occurred";
