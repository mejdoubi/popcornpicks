import { useContext } from "react";

import { MoviesContext } from "../contexts/MoviesContext";

import { MoviesContextType } from "../contexts/MoviesContext";

export const useMovies = (): MoviesContextType => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
};
