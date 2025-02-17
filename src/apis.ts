import {
  MoviesRequestParams,
  PaginatedMovies,
  TMDBSearchMovieResponse,
} from "./types";
import { NOV7_API_URL, TMDB_API_TOKEN, TMDB_API_URL } from "./constants";

export const fetchMovies = async (
  params: MoviesRequestParams
): Promise<PaginatedMovies> => {
  const query = new URLSearchParams(params as URLSearchParams).toString();
  const response = await fetch(`${NOV7_API_URL}/movies/?${query}`);

  const data: PaginatedMovies = await response.json();
  return data;
};

export const fetchMovieByTitle = async (
  title: string
): Promise<TMDBSearchMovieResponse> => {
  const response = await fetch(`${TMDB_API_URL}/search/movie?query=${title}`, {
    headers: {
      Authorization: `Bearer ${TMDB_API_TOKEN}`,
    },
  });

  const data: TMDBSearchMovieResponse = await response.json();
  return data;
};
