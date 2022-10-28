import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITVShow, ServerResponse } from "../../types/app.types";
import {
  BASE_IMAGE_URL,
  BASE_POSTER_URL,
  BASE_URL,
  tmdbQueryParams,
} from "./tmdbMovies";
import { ITVShowDetails } from "../../types/tv-show";
import { ServerImagesResponse } from "../../types/movie-images";
import { ServerCreditsResponse } from "../../types/movie-credits";

const transformTVShowsResultWithImages = (arr: ITVShow[]) => {
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

export const tmdbTVShows = createApi({
  reducerPath: "tmdbTvShows",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPopularTVShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "tv/popular",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) =>
        transformTVShowsResultWithImages(res.results),
    }),
    getTopRatedTVShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "tv/top_rated",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) =>
        transformTVShowsResultWithImages(res.results),
    }),
    getOnTheAirTVShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "tv/on_the_air",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) =>
        transformTVShowsResultWithImages(res.results),
    }),
    getTVShowDetails: builder.query<ITVShowDetails, string>({
      query: (tvId: string) => ({
        url: `tv/${tvId}`,
        params: tmdbQueryParams,
      }),
      transformResponse: (res: ITVShowDetails) => {
        return {
          ...res,
          backdrop_path: BASE_IMAGE_URL.concat(res.backdrop_path),
          poster_path: BASE_POSTER_URL.concat(res.poster_path),
        };
      },
    }),
    getTVShowCredits: builder.query<ServerCreditsResponse, string>({
      query: (tvId: string) => ({
        url: `tv/${tvId}/credits`,
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
    getTVShowImages: builder.query<ServerImagesResponse, string>({
      query: (tvId: string) => ({
        url: `tv/${tvId}/images`,
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
  useGetPopularTVShowsQuery,
  useGetTopRatedTVShowsQuery,
  useGetOnTheAirTVShowsQuery,
  useLazyGetTVShowDetailsQuery,
  useLazyGetTVShowCreditsQuery,
  useLazyGetTVShowImagesQuery,
} = tmdbTVShows;
