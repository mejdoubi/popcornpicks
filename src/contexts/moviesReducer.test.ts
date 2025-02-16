import { moviesReducer } from "./moviesReducer";

import { State, Action, Movie } from "../types";

describe("moviesReducer", () => {
  const initialState: State = {
    totalMovies: 0,
    movies: [],
    page: 1,
    itemsPerPage: 10,
    query: "",
    error: null,
  };

  it("should set movies", () => {
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

  it("should set items per page", () => {
    const action: Action = { type: "SET_ITEMS_PER_PAGE", payload: 20 };
    const newState = moviesReducer(initialState, action);
    expect(newState.itemsPerPage).toBe(20);
  });

  it("should set query", () => {
    const action: Action = { type: "SET_QUERY", payload: "test" };
    const newState = moviesReducer(initialState, action);
    expect(newState.query).toBe("test");
  });

  it("should set error", () => {
    const action: Action = { type: "SET_ERROR", payload: "An error occurred" };
    const newState = moviesReducer(initialState, action);
    expect(newState.error).toBe("An error occurred");
  });
});
