import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  BASE_URL,
  tmdbQueryParams,
  transformMovieResultWithImages,
} from "./tmdbMovies";
import { IMovie, ServerResponse } from "../../types/general.types";

export const tmdbSearch = createApi({
  reducerPath: "tmdbSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<IMovie[], string>({
      query: (searchValue: string) => ({
        url: "/search/movie",
        params: {
          ...tmdbQueryParams,
          query: searchValue,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) =>
        transformMovieResultWithImages(res.results),
    }),
  }),
});

export const { useSearchMoviesQuery, useLazySearchMoviesQuery } = tmdbSearch;
