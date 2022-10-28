import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { useGetPopularMoviesQuery } from "../../../services/api/tmdbMovies";
import { useCombineData } from "../../../hooks/useCombineData";
import { Error, Spinner, Title } from "../../atoms";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";

export const MoviesPopular = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { error, isError, isLoading, data } = useGetPopularMoviesQuery(page);
  const popularList = useCombineData(data);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>Popular movies</Title>
        <InfiniteScrolling
          data={popularList}
          fetchNextPageData={scrollNextPage}
        />
      </div>
    </div>
  );
};
