import { ReactNode, useCallback, useEffect, useReducer } from "react";

import { MoviesContext } from "./MoviesContext";
import { moviesReducer } from "./moviesReducer";
import { fetchMovies, fetchMovieByTitle } from "../apis";

import { HTTPValidationError } from "../types";
import {
  ITEMS_PER_PAGE,
  defaultErrorMessage,
  initialState,
} from "../constants";

interface MoviesProviderProps {
  children: ReactNode;
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const { isFetching, movies, totalMovies, page, query, errorMessage } = state;

  const setIsFetching = (value: boolean) =>
    dispatch({ type: "SET_IS_FETCHING", payload: value });

  const getMovies = useCallback(async () => {
    setIsFetching(true);
    try {
      const { items, total } = await fetchMovies({
        skip: (page - 1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
        query: query,
      });

      const updatedMovies = await Promise.all(
        items.map(async (movie) => {
          let imageUrl = movie.image_url;

          try {
            const response = await fetchMovieByTitle(movie.title);
            if (response.results.length > 0) {
              imageUrl = response.results[0].poster_path;
            }
          } catch (error) {
            console.error(
              `Error fetching movie by title: ${movie.title}`,
              error
            );
          }

          return {
            ...movie,
            image_url: imageUrl,
          };
        })
      );

      dispatch({ type: "SET_MOVIES", payload: updatedMovies });
      dispatch({ type: "SET_TOTAL_MOVIES", payload: total });
    } catch (error: unknown) {
      let errorMessage = defaultErrorMessage;
      const errorDetail = (error as HTTPValidationError).detail;
      // fix this if
      if (typeof errorDetail !== "string" && !!errorDetail[0]?.msg) {
        errorMessage = `Something went wrong: ${errorDetail[0].msg}`;
      }

      dispatch({ type: "SET_ERROR_MESSAGE", payload: errorMessage });
    } finally {
      setIsFetching(false);
    }
  }, [page, query]);

  const nextPage = () => dispatch({ type: "SET_PAGE", payload: page + 1 });

  const previousPage = () =>
    dispatch({ type: "SET_PAGE", payload: Math.max(page - 1, 1) });

  const setQueryString = (queryString: string) => {
    if (queryString !== query) {
      dispatch({ type: "SET_QUERY", payload: queryString });
    }
  };

  const isNextPageDisabled = page * ITEMS_PER_PAGE >= totalMovies;
  const isPreviousPageDisabled = page === 1;

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <MoviesContext
      value={{
        isFetching,
        totalMovies,
        movies,
        getMovies,
        nextPage,
        previousPage,
        setQueryString,
        errorMessage,
        isNextPageDisabled,
        isPreviousPageDisabled,
      }}
    >
      {children}
    </MoviesContext>
  );
};
