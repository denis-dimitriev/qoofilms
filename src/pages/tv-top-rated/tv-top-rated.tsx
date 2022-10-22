import { useScrollNextPage } from "../../hooks/useScrollNextPage";
import { useGetTopRatedShowsQuery } from "../../services/api/tmdbTVShows";
import { useCombineData } from "../../hooks/useCombineData";
import { Spinner } from "../../components/atoms";
import { Error } from "../../components/atoms";
import { Title } from "../../components/atoms";
import InfiniteScrolling from "../../features/infinite-scrolling/infinite-scrolling";

const TvTopRated = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { error, isError, isLoading, data } = useGetTopRatedShowsQuery(page);
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
        <Title>TV Top Rated</Title>
        <InfiniteScrolling data={topRatedList} fetchNextPageData={scrollNextPage} />
      </div>
    </div>
  );
};

export default TvTopRated;
