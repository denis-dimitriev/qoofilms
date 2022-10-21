import React from "react";
import { IMovie, ITVShow } from "../../models/main-list.models";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../../components/atoms/ui/spinner/spinner";
import { Card } from "../../components/molecules/card/card";

interface InfiniteScrollingProps {
  list: IMovie[] | ITVShow[];
  fetchNextPageData: () => void;
}

const InfiniteScrolling = ({ list, fetchNextPageData }: InfiniteScrollingProps) => {
  return (
    <InfiniteScroll
      className="flex flex-col gap-y-5"
      dataLength={list.length}
      hasMore={true}
      loader={<Spinner />}
      next={fetchNextPageData}
    >
      <div className="flex w-full flex-wrap justify-center gap-y-3 gap-x-1">
        {list.map((movie) => (
          <Card
            key={movie.id}
            thumbnail={movie.backdrop_path ? movie.backdrop_path : movie.poster_path}
            title={"title" in movie ? movie.title : movie.name}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default InfiniteScrolling;
