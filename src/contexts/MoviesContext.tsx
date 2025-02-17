import { createContext } from "react";

import { Movie } from "../types";

export interface MoviesContextType {
  isFetching: boolean;
  totalMovies: number;
  movies: Movie[];
  getMovies: () => void;
  nextPage: () => void;
  previousPage: () => void;
  setQueryString: (queryString: string) => void;
  errorMessage: string | null;
  isNextPageDisabled: boolean;
  isPreviousPageDisabled: boolean;
}

export const MoviesContext = createContext<MoviesContextType>(
  {} as MoviesContextType
);
