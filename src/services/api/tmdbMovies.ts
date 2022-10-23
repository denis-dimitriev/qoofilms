import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovie, ServerResponse } from "../../types/app.types";

export const API_KEY = "1655ca58bc63dc76eb67fe7a0f9f9ef7";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";
export const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500/";
export const tmdbQueryParams = {
  api_key: API_KEY,
  lang: "en-US",
};

const transformResultWithImages = (arr: IMovie[]) => {
  return arr.map((el) => {
    if (el.backdrop_path) {
      el.backdrop_path = `${BASE_IMAGE_URL}${el.backdrop_path}`;
    }
    if (el.poster_path) {
      el.poster_path = `${BASE_POSTER_URL}${el.poster_path}`;
    }
    return el;
  });
};

export const tmdbMovies = createApi({
  reducerPath: "tmdbMovies",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUpcomingMovies: builder.query<IMovie[], number | void>({
      query: (pageNumber: number) => ({
        url: "/movie/upcoming",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) => transformResultWithImages(res.results),
    }),
    getTopRatedMovies: builder.query<IMovie[], number | void>({
      query: (pageNumber: number) => ({
        url: "/movie/top_rated",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) => transformResultWithImages(res.results),
    }),
    getPopularMovies: builder.query<IMovie[], number | void>({
      query: (pageNumber: number) => ({
        url: "/movie/popular",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) => transformResultWithImages(res.results),
    }),
    getNowPlayingMovies: builder.query<IMovie[], number | void>({
      query: (pageNumber: number) => ({
        url: "/movie/now_playing",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) => transformResultWithImages(res.results),
    }),
  }),
});

export const {
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
} = tmdbMovies;
