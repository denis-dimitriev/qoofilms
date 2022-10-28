import { IMovie, ITVShow } from "../../../types/general.types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../../atoms";
import { Card } from "../../molecules";

interface InfiniteScrollingProps {
  data: IMovie[] | ITVShow[];
  fetchNextPageData: () => void;
}

const InfiniteScrolling = ({
  data,
  fetchNextPageData,
}: InfiniteScrollingProps) => {
  return (
    <InfiniteScroll
      className="flex flex-col gap-y-5"
      dataLength={data.length}
      hasMore={true}
      loader={<Spinner />}
      next={fetchNextPageData}
    >
      <div className="flex w-full flex-wrap justify-center gap-y-3 gap-x-1">
        {data.map((movie) => (
          <Card
            key={movie.id}
            thumbnail={
              movie.poster_path ? movie.poster_path : movie.backdrop_path
            }
            title={"title" in movie ? movie.title : movie.name}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrolling;
