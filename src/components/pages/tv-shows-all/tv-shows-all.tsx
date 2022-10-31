import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { useCombineData } from "../../../hooks/useCombineData";
import { useEffect } from "react";
import { setTVShowsFilter } from "../../../features/filter/filter.slice";
import { setHiddenHeader } from "../../../features/header/header.slice";
import { Error, Spinner, Title } from "../../atoms";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";
import { useLazyGetTVShowsDiscoverQuery } from "../../../services/api/tmdbTVShows";
import { TvShowsFilter } from "../../organisms";

export const TvShowsAll = () => {
  const { tvShowsFilter } = useAppSelector((state) => state.filter);

  const { page, scrollNextPage } = useScrollNextPage();
  const [fetchTVShows, { data, isLoading, isError, error }] =
    useLazyGetTVShowsDiscoverQuery();

  const allTVShows = useCombineData(data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filterFromLocalStorage = JSON.parse(
      localStorage.getItem("tvShowsSortBy")!!
    );
    dispatch(setTVShowsFilter(filterFromLocalStorage));
  }, [tvShowsFilter, dispatch]);

  useEffect(() => {
    dispatch(setHiddenHeader(false));
  }, [dispatch]);

  useEffect(() => {
    fetchTVShows({ sort: tvShowsFilter, pageNumber: page });
  }, [tvShowsFilter, page, fetchTVShows]);

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
          <Title>All TV Shows</Title>
          <TvShowsFilter />
          <InfiniteScrolling
            data={allTVShows}
            fetchNextPageData={scrollNextPage}
            linkPath="movies"
          />
        </div>
      </div>
    </div>
  );
};
