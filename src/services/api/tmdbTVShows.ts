import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITVShow, ServerResponse } from "../../models/main-list.models";
import { BASE_IMAGE_URL, BASE_POSTER_URL, BASE_URL, tmdbQueryParams } from "./tmdbMovies";

const transformResultWithImages = (arr: ITVShow[]) => {
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
    getPopularShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/tv/popular",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) => transformResultWithImages(res.results),
    }),
    getTopRatedShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/tv/top_rated",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) => transformResultWithImages(res.results),
    }),
    getOnTheAirShows: builder.query<ITVShow[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/tv/on_the_air",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<ITVShow>) => transformResultWithImages(res.results),
    }),
  }),
});

export const { useGetPopularShowsQuery, useGetTopRatedShowsQuery, useGetOnTheAirShowsQuery } = tmdbTVShows;
