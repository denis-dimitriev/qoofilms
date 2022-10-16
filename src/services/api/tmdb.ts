import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const API_KEY = "1655ca58bc63dc76eb67fe7a0f9f9ef7";
export const BASE_URL = "https://api.themoviedb.org/3/";
export const tmdbQueryParams = {
  api_key: "1655ca58bc63dc76eb67fe7a0f9f9ef7",
  lang: "en-US",
};

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getLatest: builder.query<any, void>({
      query: () => ({
        url: "movie/latest",
        params: tmdbQueryParams,
      }),
    }),
    getNowPlaying: builder.query<any, number | void>({
      query: (pageNumber = 1) => ({
        url: `movie/now_playing`,
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      //transformResponse: (res) => res?.data?.results,
    }),
  }),
});

export const { useGetLatestQuery, useGetNowPlayingQuery } = tmdbApi;
