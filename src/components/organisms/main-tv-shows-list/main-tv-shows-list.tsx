import { Tag } from "../../atoms/ui/tag/tag";
import { Carousel } from "../carousel/carousel";
import {
  useGetOnTheAirShowsQuery,
  useGetPopularShowsQuery,
  useGetTopRatedShowsQuery,
} from "../../../services/api/tmdbTVShows";

export const MainTvShowsList = () => {
  const { isLoading: popularLoading, data: popular } =
    useGetPopularShowsQuery();
  const { isLoading: topRatedLoading, data: topRated } =
    useGetTopRatedShowsQuery();
  const { isLoading: onTheAieLoading, data: onTheAir } =
    useGetOnTheAirShowsQuery();

  console.log(popular);

  const blurEffect = onTheAieLoading || topRatedLoading || popularLoading;

  return (
    <div
      className={`flex h-auto w-full flex-col gap-y-2 ${
        blurEffect && "blur-xl"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        <Tag>On the air</Tag>
        {onTheAir && <Carousel movies={onTheAir} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Top Rated</Tag>
        {topRated && <Carousel movies={topRated} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Popular</Tag>
        {popular && <Carousel movies={popular} />}
      </div>
    </div>
  );
};
