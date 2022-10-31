import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MovieFilterType =
  | "popularity.desc"
  | "release_date.desc"
  | "revenue.desc"
  | "vote_average.desc";

export type TVShowFilterType =
  | "vote_average.desc"
  | "first_air_date.desc"
  | "popularity.desc";

const initialState = {
  moviesFilter: "popularity.desc" as MovieFilterType,
  tvShowsFilter: "popularity.desc" as TVShowFilterType,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMoviesFilter: (state, action: PayloadAction<MovieFilterType>) => {
      return {
        ...state,
        moviesFilter: action.payload,
      };
    },
    setTVShowsFilter: (state, action: PayloadAction<TVShowFilterType>) => {
      return {
        ...state,
        tvShowsFilter: action.payload,
      };
    },
  },
});

export const { setMoviesFilter, setTVShowsFilter } = filterSlice.actions;
export default filterSlice.reducer;
