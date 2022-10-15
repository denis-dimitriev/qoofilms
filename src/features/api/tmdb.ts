import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const APIKEY = "1655ca58bc63dc76eb67fe7a0f9f9ef7";

const tmdbParams = {
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
        params: tmdbParams,
      }),
    }),
    getNowPlaying: builder.query<any, void>({
      query: () => ({
        url: `movie/now_playing`,
        params: tmdbParams,
      }),
    }),
  }),
});

export const { useGetLatestQuery, useGetNowPlayingQuery } = tmdbApi;
