import { State, Action } from "../types";

export const moviesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_IS_FETCHING":
      return { ...state, isFetching: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload, page: 1, errorMessage: null };
    case "SET_TOTAL_MOVIES":
      return { ...state, totalMovies: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
