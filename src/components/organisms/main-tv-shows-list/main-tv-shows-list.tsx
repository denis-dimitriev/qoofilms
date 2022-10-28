import { LinkBadge, Tag } from "../../atoms";
import { Carousel } from "../carousel/carousel";
import {
  useGetOnTheAirTVShowsQuery,
  useGetPopularTVShowsQuery,
  useGetTopRatedTVShowsQuery,
} from "../../../services/api/tmdbTVShows";

export const MainTvShowsList = () => {
  const { isLoading: popularLoading, data: popular } =
    useGetPopularTVShowsQuery();
  const { isLoading: topRatedLoading, data: topRated } =
    useGetTopRatedTVShowsQuery();
  const { isLoading: onTheAieLoading, data: onTheAir } =
    useGetOnTheAirTVShowsQuery();

  const blurEffect = onTheAieLoading || topRatedLoading || popularLoading;

  return (
    <div
      className={`flex h-auto w-full flex-col gap-y-2 ${
        blurEffect && "blur-xl"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        <Tag>
          On the air <LinkBadge link="tv-shows/on-the-air">See more</LinkBadge>
        </Tag>
        {onTheAir && <Carousel list={onTheAir} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Top Rated
          <LinkBadge link="tv-shows/top-rated">See more</LinkBadge>
        </Tag>
        {topRated && <Carousel list={topRated} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Popular
          <LinkBadge link="tv-shows/popular">See more</LinkBadge>
        </Tag>
        {popular && <Carousel list={popular} />}
      </div>
    </div>
  );
};
