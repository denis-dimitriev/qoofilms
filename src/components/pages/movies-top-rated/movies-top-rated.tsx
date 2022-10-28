import { useGetTopRatedMoviesQuery } from "../../../services/api/tmdbMovies";
import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { Error, Spinner, Title } from "../../atoms";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";
import { useCombineData } from "../../../hooks/useCombineData";

export const MoviesTopRated = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { isError, error, isLoading, data } = useGetTopRatedMoviesQuery(page);

  const topRatedList = useCombineData(data);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>Top Rated</Title>
        <InfiniteScrolling
          data={topRatedList}
          fetchNextPageData={scrollNextPage}
        />
      </div>
    </div>
  );
};
