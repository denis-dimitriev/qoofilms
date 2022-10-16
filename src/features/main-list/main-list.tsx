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
    <div className="h-auto w-full">
      <Fragment>
        <Tag>Upcoming movies</Tag>
        <Carousel movies={upComing} />
      </Fragment>
    </div>
  );
};

export default MainList;
