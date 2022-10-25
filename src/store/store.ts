import { configureStore } from "@reduxjs/toolkit";
import { tmdbMovies } from "../services/api/tmdbMovies";
import { tmdbTVShows } from "../services/api/tmdbTVShows";
import { tmdbSearch } from "../services/api/tmdbSearch";
import searchSlice from "../features/search/search.slice";
import mobileMenuSlice from "../features/mobile-menu/mobile-menu.slice";

export const store = configureStore({
  reducer: {
    [tmdbMovies.reducerPath]: tmdbMovies.reducer,
    [tmdbTVShows.reducerPath]: tmdbTVShows.reducer,
    [tmdbSearch.reducerPath]: tmdbSearch.reducer,
    movieSearch: searchSlice,
    mobileMenu: mobileMenuSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbMovies.middleware).concat(tmdbTVShows.middleware).concat(tmdbSearch.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
