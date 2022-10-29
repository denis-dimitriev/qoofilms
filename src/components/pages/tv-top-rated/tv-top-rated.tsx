import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { useGetTopRatedTVShowsQuery } from "../../../services/api/tmdbTVShows";
import { useCombineData } from "../../../hooks/useCombineData";
import { Error, Spinner, Title } from "../../atoms";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";
import { useAppDispatch } from "../../../hooks/redux";
import { useEffect } from "react";
import { setHiddenHeader } from "../../../features/header/header.slice";

export const TvTopRated = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { error, isError, isLoading, data } = useGetTopRatedTVShowsQuery(page);
  const topRatedList = useCombineData(data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHiddenHeader(false));
  }, [dispatch]);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>TV Top Rated</Title>
        <InfiniteScrolling
          data={topRatedList}
          fetchNextPageData={scrollNextPage}
          linkPath="tv-shows"
        />
      </div>
    </div>
  );
};
