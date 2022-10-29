import { IMovie, ITVShow } from "../../../types/general.types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../../atoms";
import { Card } from "../../molecules";
import { Link } from "react-router-dom";

interface InfiniteScrollingProps {
  data: IMovie[] | ITVShow[];
  fetchNextPageData: () => void;
  linkPath: string;
}

const InfiniteScrolling = ({
  data,
  fetchNextPageData,
  linkPath,
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
        {data.map((movie, index) => (
          <Link key={`${movie.id}[${index}]`} to={`/${linkPath}/${movie.id}`}>
            <Card
              thumbnail={
                movie.poster_path ? movie.poster_path : movie.backdrop_path
              }
              title={"title" in movie ? movie.title : movie.name}
            />
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrolling;
