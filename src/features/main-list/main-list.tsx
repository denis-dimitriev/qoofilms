import { Tag } from "../../components/atoms/ui/tag/tag";
import { useGetUpcomingQuery } from "./main-list.query";
import { Fragment } from "react";
import { Carousel } from "../../components/organisms/carousel/carousel";

const MainList = () => {
  const { error, isError, isLoading, data: upComing } = useGetUpcomingQuery();

  console.log(upComing);

  if (!upComing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-auto w-full flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <Tag>Upcoming movies</Tag>
        <Carousel movies={upComing} />
      </div>
    </div>
  );
};

export default MainList;
