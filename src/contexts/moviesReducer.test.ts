import { moviesReducer } from "./moviesReducer";

import { State, Action, Movie } from "../types";

describe("moviesReducer", () => {
  const initialState: State = {
    isFetching: false,
    totalMovies: 0,
    movies: [],
    page: 1,
    query: "",
    errorMessage: null,
  };

  it("should set isFetching", () => {
    const action: Action = { type: "SET_IS_FETCHING", payload: true };
    const newState = moviesReducer(initialState, action);
    expect(newState.isFetching).toBe(true);
  });

  it("should set movies, reset page and errorMessage", () => {
    const movies: Movie[] = [
      {
        id: "1",
        title: "Movie 1",
        description: "Description 1",
        image_url: "url1",
        rating: 5,
      },
      {
        id: "2",
        title: "Movie 2",
        description: "Description 2",
        image_url: "url2",
        rating: 4,
      },
    ];
    const action: Action = { type: "SET_MOVIES", payload: movies };
    const newState = moviesReducer(initialState, action);
    expect(newState.movies).toEqual(movies);
    expect(newState.page).toBe(1);
    expect(newState.errorMessage).toBeNull();
  });

  it("should set total movies", () => {
    const action: Action = { type: "SET_TOTAL_MOVIES", payload: 100 };
    const newState = moviesReducer(initialState, action);
    expect(newState.totalMovies).toBe(100);
  });

  it("should set page", () => {
    const action: Action = { type: "SET_PAGE", payload: 2 };
    const newState = moviesReducer(initialState, action);
    expect(newState.page).toBe(2);
  });

  it("should set query", () => {
    const action: Action = { type: "SET_QUERY", payload: "test" };
    const newState = moviesReducer(initialState, action);
    expect(newState.query).toBe("test");
  });

  it("should set error message", () => {
    const action: Action = {
      type: "SET_ERROR_MESSAGE",
      payload: "An error occurred",
    };
    const newState = moviesReducer(initialState, action);
    expect(newState.errorMessage).toBe("An error occurred");
  });
});
