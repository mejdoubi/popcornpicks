export interface Movie {
  id: string;
  title: string;
  description: string;
  image_url: string;
  rating: number;
}

export interface PaginatedMovies {
  total: number;
  items: Movie[];
}

export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail: ValidationError[] | string;
}

export interface MoviesRequestParams {
  skip?: number;
  limit?: number;
  query?: string;
}

export interface State {
  isFetching: boolean;
  totalMovies: number;
  movies: Movie[];
  page: number;
  query: string;
  errorMessage: string | null;
}

export type Action =
  | { type: "SET_IS_FETCHING"; payload: boolean }
  | { type: "SET_TOTAL_MOVIES"; payload: number }
  | { type: "SET_MOVIES"; payload: Movie[] }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_ERROR_MESSAGE"; payload: string };

export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMDBSearchMovieResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}
