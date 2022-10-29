import { useGetUpcomingMoviesQuery } from "../../../services/api/tmdbMovies";
import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";
import { Error, Spinner, Title } from "../../atoms";
import { useCombineData } from "../../../hooks/useCombineData";
import { useAppDispatch } from "../../../hooks/redux";
import { useEffect } from "react";
import { setHiddenHeader } from "../../../features/header/header.slice";

export const MoviesUpcoming = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { error, isError, isLoading, data } = useGetUpcomingMoviesQuery(page);
  const upComingList = useCombineData(data);

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
        <Title>Up Coming</Title>
        <InfiniteScrolling
          data={upComingList}
          fetchNextPageData={scrollNextPage}
          linkPath="movies"
        />
      </div>
    </div>
  );
};
