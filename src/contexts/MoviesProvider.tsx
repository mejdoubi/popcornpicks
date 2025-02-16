import { ReactNode, useCallback, useEffect, useReducer } from "react";

import { MoviesContext } from "./MoviesContext";
import { fetchMovies } from "../api/movies";
import { moviesReducer } from "./moviesReducer";

import { HTTPValidationError } from "../types";
import { defaultErrorMessage, initialState } from "../constants";

interface MoviesProviderProps {
  children: ReactNode;
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const getMovies = useCallback(async () => {
    try {
      const data = await fetchMovies({
        skip: (state.page - 1) * state.itemsPerPage,
        limit: state.itemsPerPage,
        query: state.query,
      });
      dispatch({ type: "SET_MOVIES", payload: data.items });
      dispatch({ type: "SET_TOTAL_MOVIES", payload: data.total });
    } catch (error: unknown) {
      const errorDetail = (error as HTTPValidationError).detail;
      const errorMessage = errorDetail
        ? errorDetail[0].msg
        : defaultErrorMessage;

      dispatch({ type: "SET_ERROR", payload: errorMessage });
    }
  }, [state.page, state.itemsPerPage, state.query]);

  const nextPage = () =>
    dispatch({ type: "SET_PAGE", payload: state.page + 1 });
  const previousPage = () =>
    dispatch({ type: "SET_PAGE", payload: Math.max(state.page - 1, 1) });
  const setItemsPerPageCount = (count: number) =>
    dispatch({ type: "SET_ITEMS_PER_PAGE", payload: count });
  const setQueryString = (queryString: string) =>
    dispatch({ type: "SET_QUERY", payload: queryString });

  useEffect(() => {
    getMovies();
  }, [getMovies, state.page, state.itemsPerPage, state.query]);

  return (
    <MoviesContext
      value={{
        totalMovies: state.totalMovies,
        movies: state.movies,
        getMovies,
        nextPage,
        previousPage,
        setItemsPerPageCount,
        setQueryString,
        error: state.error,
      }}
    >
      {children}
    </MoviesContext>
  );
};
