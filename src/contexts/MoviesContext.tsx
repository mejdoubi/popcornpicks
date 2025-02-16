import { createContext } from "react";

import { Movie } from "../types";

export interface MoviesContextType {
  totalMovies: number;
  movies: Movie[];
  getMovies: () => void;
  nextPage: () => void;
  previousPage: () => void;
  setItemsPerPageCount: (count: number) => void;
  setQueryString: (queryString: string) => void;
  error: string | null;
}

export const MoviesContext = createContext<MoviesContextType>(
  {} as MoviesContextType
);
