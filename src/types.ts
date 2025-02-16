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
  detail: ValidationError[];
}

export interface MoviesRequestParams {
  skip?: number;
  limit?: number;
  query?: string;
}

export interface State {
  totalMovies: number;
  movies: Movie[];
  page: number;
  itemsPerPage: number;
  query: string;
  error: string | null;
}

export type Action =
  | { type: "SET_TOTAL_MOVIES"; payload: number }
  | { type: "SET_MOVIES"; payload: Movie[] }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_ITEMS_PER_PAGE"; payload: number }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_ERROR"; payload: string };
