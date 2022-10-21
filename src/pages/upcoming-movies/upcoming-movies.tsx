import { Spinner } from "../../components/atoms/ui/spinner/spinner";
import { useInfScroll } from "../../hooks/useInfScroll";
import InfiniteScrolling from "../../features/infinite-scrolling/infinite-scrolling";

const UpcomingMovies = () => {
  const { isError, error, isLoading, list, fetchNextPageData } = useInfScroll();

  if (isLoading) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return (
      <h1>
        Error
        <p>{`${error}`}</p>
      </h1>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <h1 className="mb-2 mt-5 text-center text-4xl font-extrabold text-gray-900">
          <span className="bg-gradient-to-r from-black/60 to-sky-500 bg-clip-text text-transparent">Up Coming</span>
        </h1>
        <InfiniteScrolling list={list} fetchNextPageData={fetchNextPageData} />
      </div>
    </div>
  );
};

export default UpcomingMovies;
