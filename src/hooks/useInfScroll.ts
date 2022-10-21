import { useMemo, useState } from "react";
import { IMovie } from "../models/main-list.models";
import { useGetUpcomingMoviesQuery } from "../services/api/tmdbMovies";

export const useInfScroll = () => {
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<IMovie[]>([]);

  const { error, isError, isLoading, data } = useGetUpcomingMoviesQuery(page);

  useMemo(() => {
    if (data) {
      setList((prevState) => [...prevState, ...data]);
    }
  }, [data]);

  function fetchNextPageData() {
    setPage((prev) => prev + 1);
  }

  return {
    error,
    isError,
    isLoading,
    list,
    fetchNextPageData,
  };
};
