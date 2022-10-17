import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITVShow, ServerResponse } from "../../models/main-list.models";
import { BASE_URL, tmdbQueryParams } from "./tmdbMovies";

export const tmdbTVShows = createApi({
  reducerPath: "tmdbTvShows",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPopularShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/tv/popular",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) => res.results,
    }),
    getTopRatedShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/tv/top_rated",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) => res.results,
    }),
    getOnTheAirShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/tv/on_the_air",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) => res.results,
    }),
  }),
});

export const {
  useGetPopularShowsQuery,
  useGetTopRatedShowsQuery,
  useGetOnTheAirShowsQuery,
} = tmdbTVShows;
