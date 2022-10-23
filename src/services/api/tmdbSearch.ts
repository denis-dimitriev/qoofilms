import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, tmdbQueryParams } from "./tmdbMovies";
import { ServerResponse } from "../../types/app.types";

export const tmdbSearch = createApi({
  reducerPath: "tmdbSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<ServerResponse<any>, { term: string; pageNumber: number | void }>({
      query: (params: { term: string; pageNumber: number }) => ({
        url: "/search/movie",
        params: {
          ...tmdbQueryParams,
          query: params.term,
          page: params.pageNumber,
        },
      }),
    }),
  }),
});

export const { useSearchMoviesQuery, useLazySearchMoviesQuery } = tmdbSearch;
