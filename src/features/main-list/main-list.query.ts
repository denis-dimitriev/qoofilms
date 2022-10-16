import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, tmdbQueryParams } from "../../services/api/tmdb";
import { IUpcoming, ServerResponse } from "./main-list.models";

export const mainListQuery = createApi({
  reducerPath: "main-list",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUpcoming: builder.query<IUpcoming[], number | void>({
      query: (pageNumber: number = 1) => ({
        url: "/movie/upcoming",
        params: {
          ...tmdbQueryParams,
          page: pageNumber,
        },
      }),
      transformResponse: (res: ServerResponse<IUpcoming>) => res.results,
    }),
  }),
});

export const { useGetUpcomingQuery } = mainListQuery;
