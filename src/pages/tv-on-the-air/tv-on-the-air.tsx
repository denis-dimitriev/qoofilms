import { useScrollNextPage } from "../../hooks/useScrollNextPage";
import { useCombineData } from "../../hooks/useCombineData";
import { Error, Spinner, Title } from "../../components/atoms";
import InfiniteScrolling from "../../components/organisms/infinite-scrolling/infinite-scrolling";
import { useGetOnTheAirShowsQuery } from "../../services/api/tmdbTVShows";

const TvOnTheAir = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { error, isError, isLoading, data } = useGetOnTheAirShowsQuery(page);
  const onTheAirList = useCombineData(data);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>On the Air</Title>
        <InfiniteScrolling
          data={onTheAirList}
          fetchNextPageData={scrollNextPage}
        />
      </div>
    </div>
  );
};

export default TvOnTheAir;
