import { useScrollNextPage } from "../../hooks/useScrollNextPage";
import { useGetPopularShowsQuery } from "../../services/api/tmdbTVShows";
import { useCombineData } from "../../hooks/useCombineData";
import { Error, Spinner, Title } from "../../components/atoms";
import InfiniteScrolling from "../../components/organisms/infinite-scrolling/infinite-scrolling";

const TvPopular = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { error, isError, isLoading, data } = useGetPopularShowsQuery(page);
  const popularTVList = useCombineData(data);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>Popular on TV</Title>
        <InfiniteScrolling
          data={popularTVList}
          fetchNextPageData={scrollNextPage}
        />
      </div>
    </div>
  );
};

export default TvPopular;
