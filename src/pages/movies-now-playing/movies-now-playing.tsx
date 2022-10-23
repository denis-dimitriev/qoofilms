import { useScrollNextPage } from "../../hooks/useScrollNextPage";
import { useGetNowPlayingMoviesQuery } from "../../services/api/tmdbMovies";
import { useCombineData } from "../../hooks/useCombineData";
import { Spinner } from "../../components/atoms";
import { Error } from "../../components/atoms";
import { Title } from "../../components/atoms";
import InfiniteScrolling from "../../features/infinite-scrolling/infinite-scrolling";

const MoviesNowPlaying = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { error, isError, isLoading, data } = useGetNowPlayingMoviesQuery(page);
  const nowPlayingList = useCombineData(data);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>Now Playing in Cinema</Title>
        <InfiniteScrolling data={nowPlayingList} fetchNextPageData={scrollNextPage} />
      </div>
    </div>
  );
};

export default MoviesNowPlaying;
