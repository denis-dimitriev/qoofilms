import { Tag } from "../../atoms/ui/tag/tag";
import { Carousel } from "../carousel/carousel";
import {
  useGetOnTheAirShowsQuery,
  useGetPopularShowsQuery,
  useGetTopRatedShowsQuery,
} from "../../../services/api/tmdbTVShows";
import { LinkBadge } from "../../atoms/ui/link-badge/link-badge";

export const MainTvShowsList = () => {
  const { isLoading: popularLoading, data: popular } = useGetPopularShowsQuery();
  const { isLoading: topRatedLoading, data: topRated } = useGetTopRatedShowsQuery();
  const { isLoading: onTheAieLoading, data: onTheAir } = useGetOnTheAirShowsQuery();

  const blurEffect = onTheAieLoading || topRatedLoading || popularLoading;

  return (
    <div className={`flex h-auto w-full flex-col gap-y-2 ${blurEffect && "blur-xl"}`}>
      <div className="flex flex-col gap-y-2">
        <Tag>
          On the air <LinkBadge link={""}>See more</LinkBadge>
        </Tag>
        {onTheAir && <Carousel movies={onTheAir} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Top Rated
          <LinkBadge link={""}>See more</LinkBadge>
        </Tag>
        {topRated && <Carousel movies={topRated} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Popular
          <LinkBadge link={""}>See more</LinkBadge>
        </Tag>
        {popular && <Carousel movies={popular} />}
      </div>
    </div>
  );
};
