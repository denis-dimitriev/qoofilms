import { configureStore } from "@reduxjs/toolkit";
import { tmdbMovies } from "../services/api/tmdbMovies";
import { tmdbTVShows } from "../services/api/tmdbTVShows";
import { upcomingMoviesSlice } from "../features/upcoming-movies/upcoming-movies.slice";

export const store = configureStore({
  reducer: {
    [tmdbMovies.reducerPath]: tmdbMovies.reducer,
    [tmdbTVShows.reducerPath]: tmdbTVShows.reducer,
    upcomingMovies: upcomingMoviesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbMovies.middleware).concat(tmdbTVShows.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
