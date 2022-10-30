import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterType =
  | "popularity.desc"
  | "release_date.desc"
  | "revenue.desc"
  | "vote_average.desc";

const initialState = {
  filter: "popularity.desc" as FilterType,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      return {
        filter: action.payload,
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
