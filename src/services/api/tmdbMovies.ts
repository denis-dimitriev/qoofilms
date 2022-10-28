import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovie, ServerResponse } from "../../types/general.types";
import { IMovieDetails } from "../../types/movie-details";
import { ServerCreditsResponse } from "../../types/credits";
import { ServerImagesResponse } from "../../types/images";

export const API_KEY = "1655ca58bc63dc76eb67fe7a0f9f9ef7";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500";
export const tmdbQueryParams = {
  api_key: API_KEY,
  lang: "en-US",
};

export const transformMovieResultWithImages = (arr: IMovie[]) => {
  return arr.map((el) => {
    if (el.backdrop_path) {
      el.backdrop_path = BASE_IMAGE_URL.concat(el.backdrop_path);
    }
    if (el.poster_path) {
      el.poster_path = BASE_POSTER_URL.concat(el.poster_path);
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
        url: "movie/upcoming",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) =>
        transformMovieResultWithImages(res.results),
    }),
    getTopRatedMovies: builder.query<IMovie[], number | void>({
      query: (pageNumber: number) => ({
        url: "movie/top_rated",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) =>
        transformMovieResultWithImages(res.results),
    }),
    getPopularMovies: builder.query<IMovie[], number | void>({
      query: (pageNumber: number) => ({
        url: "movie/popular",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) =>
        transformMovieResultWithImages(res.results),
    }),
    getNowPlayingMovies: builder.query<IMovie[], number | void>({
      query: (pageNumber: number) => ({
        url: "movie/now_playing",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IMovie>) =>
        transformMovieResultWithImages(res.results),
    }),
    getMovieDetails: builder.query<IMovieDetails, string>({
      query: (movieId: string) => ({
        url: `movie/${movieId}`,
        params: tmdbQueryParams,
      }),
      transformResponse: (res: IMovieDetails) => {
        return {
          ...res,
          backdrop_path: BASE_IMAGE_URL.concat(res.backdrop_path),
          poster_path: BASE_POSTER_URL.concat(res.poster_path),
        };
      },
    }),
    getMovieCredits: builder.query<ServerCreditsResponse, string>({
      query: (movieId: string) => ({
        url: `movie/${movieId}/credits`,
        params: tmdbQueryParams,
      }),
      transformResponse: (res: ServerCreditsResponse) => {
        const castWithImages = res.cast.map((actor) => {
          if (actor.profile_path) {
            actor.profile_path = BASE_POSTER_URL.concat(actor.profile_path);
          }
          return actor;
        });
        return {
          ...res,
          cast: castWithImages,
        };
      },
    }),
    getMovieImages: builder.query<ServerImagesResponse, string>({
      query: (movieId: string) => ({
        url: `movie/${movieId}/images`,
        params: tmdbQueryParams,
      }),
      transformResponse: (res: ServerImagesResponse) => {
        res.backdrops.map((item) => {
          return (item.file_path = BASE_IMAGE_URL.concat(item.file_path));
        });
        res.posters.map((item) => {
          return (item.file_path = BASE_POSTER_URL.concat(item.file_path));
        });
        return {
          ...res,
        };
      },
    }),
  }),
});

export const {
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetPopularMoviesQuery,
  useGetNowPlayingMoviesQuery,
  useLazyGetMovieDetailsQuery,
  useLazyGetMovieCreditsQuery,
  useLazyGetMovieImagesQuery,
} = tmdbMovies;
