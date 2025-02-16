import { State, Action } from "../types";

export const moviesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_TOTAL_MOVIES":
      return { ...state, totalMovies: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_ITEMS_PER_PAGE":
      return { ...state, itemsPerPage: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
