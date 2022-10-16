import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovieList, ServerResponse } from "../../models/main-list.models";

export const API_KEY = "1655ca58bc63dc76eb67fe7a0f9f9ef7";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const tmdbQueryParams = {
  api_key: API_KEY,
  lang: "en-US",
};

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUpcoming: builder.query<IMovieList[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/movie/upcoming",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovieList>) => res.results,
    }),
    getTopRated: builder.query<IMovieList[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/movie/top_rated",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovieList>) => res.results,
    }),
    getPopular: builder.query<IMovieList[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/movie/popular",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovieList>) => res.results,
    }),
    getNowPlaying: builder.query<IMovieList[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/movie/now_playing",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovieList>) => res.results,
    }),
  }),
});

export const {
  useGetUpcomingQuery,
  useGetTopRatedQuery,
  useGetPopularQuery,
  useGetNowPlayingQuery,
} = tmdbApi;
