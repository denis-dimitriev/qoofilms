import {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
} from "../../../services/api/tmdb";
import { Spinner } from "../../atoms/ui/spinner/spinner";
import { Tag } from "../../atoms/ui/tag/tag";
import { Carousel } from "../../organisms/carousel/carousel";

const MainList = () => {
  const { data: upComing } = useGetUpcomingQuery();
  const { data: topRated } = useGetTopRatedQuery();
  const { data: popular } = useGetPopularQuery();
  const { data: nowPlaying } = useGetNowPlayingQuery();

  if (!upComing || !topRated || !popular || !nowPlaying) {
    return <Spinner />;
  }

  return (
    <div className="flex h-auto w-full flex-col gap-y-2">
      <div className="flex flex-col gap-y-2">
        <Tag>Upcoming movies</Tag>
        <Carousel movies={upComing} />
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Top Rated</Tag>
        <Carousel movies={topRated} />
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Popular</Tag>
        <Carousel movies={popular} />
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Now playing</Tag>
        <Carousel movies={nowPlaying} />
      </div>
    </div>
  );
};

export default MainList;
