import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import { setHiddenHeader } from "../../../features/header/header.slice";
import { Error, Spinner, Title } from "../../atoms";
import { useLazyGetMovieDiscoverQuery } from "../../../services/api/tmdbMovies";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";
import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { useCombineData } from "../../../hooks/useCombineData";
import { MoviesFilter } from "../../organisms";
import { setMoviesFilter } from "../../../features/filter/filter.slice";

/*
I had a problem with sorting data. To get the fresh data need to refresh page browser.
I decided to save user wish in local storage, force refresh page and activate new request
*/

export const MoviesAll = () => {
  const { moviesFilter } = useAppSelector((state) => state.filter);

  const { page, scrollNextPage } = useScrollNextPage();
  const [fetchMovies, { data, isLoading, isError, error }] =
    useLazyGetMovieDiscoverQuery();

  const allMovies = useCombineData(data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filterFromLocalStorage = JSON.parse(
      localStorage.getItem("moviesSortBy")!!
    );
    dispatch(setMoviesFilter(filterFromLocalStorage));
  }, [moviesFilter, dispatch]);

  useEffect(() => {
    dispatch(setHiddenHeader(false));
  }, [dispatch]);

  useEffect(() => {
    fetchMovies({ sort: moviesFilter, pageNumber: page });
  }, [moviesFilter, page, fetchMovies]);

  if (isLoading) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center gap-y-5">
          <Title>All movies</Title>
          <MoviesFilter />
          <InfiniteScrolling
            data={allMovies}
            fetchNextPageData={scrollNextPage}
            linkPath="movies"
          />
        </div>
      </div>
    </div>
  );
};
