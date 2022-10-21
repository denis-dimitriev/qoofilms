import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../models/main-list.models";

export const upcomingMoviesSlice = createSlice({
  name: "upcoming-movies",
  initialState: [] as IMovie[],
  reducers: {},
});

export default upcomingMoviesSlice.reducer;
