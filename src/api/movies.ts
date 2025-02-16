import { PaginatedMovies, MoviesRequestParams } from "../types";
import { API_URL } from "../constants";

export const fetchMovies = async (
  params: MoviesRequestParams
): Promise<PaginatedMovies> => {
  const query = new URLSearchParams(params as any).toString();
  const response = await fetch(`${API_URL}/api/movies?${query}`);
  const data: PaginatedMovies = await response.json();
  return data;
};
