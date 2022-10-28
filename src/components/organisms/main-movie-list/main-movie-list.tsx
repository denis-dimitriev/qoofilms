import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../../../services/api/tmdbMovies";
import { LinkBadge, Tag } from "../../atoms";
import { Carousel } from "../carousel/carousel";

export const MainMovieList = () => {
  const { isLoading: upComingLoading, data: upComing } =
    useGetUpcomingMoviesQuery();
  const { isLoading: topRatedLoading, data: topRated } =
    useGetTopRatedMoviesQuery();
  const { isLoading: popularLoading, data: popular } =
    useGetPopularMoviesQuery();
  const { isLoading: nowPlayingLoading, data: nowPlaying } =
    useGetNowPlayingMoviesQuery();

  const blurEffect =
    upComingLoading || topRatedLoading || popularLoading || nowPlayingLoading;

  return (
    <div
      className={`flex h-auto w-full flex-col gap-y-2 ${
        blurEffect && "blur-xl"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        <Tag>
          Upcoming movies
          <LinkBadge link="movies/upcoming">See more</LinkBadge>
        </Tag>
        {upComing && <Carousel list={upComing} linkPath={"movies"} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Top Rated <LinkBadge link="movies/top-rated">See more</LinkBadge>
        </Tag>
        {topRated && <Carousel list={topRated} linkPath={"movies"} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Popular <LinkBadge link="movies/popular">See more</LinkBadge>
        </Tag>
        {popular && <Carousel list={popular} linkPath={"movies"} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Now playing <LinkBadge link="movies/now-playing">See more</LinkBadge>
        </Tag>
        {nowPlaying && <Carousel list={nowPlaying} linkPath={"movies"} />}
      </div>
    </div>
  );
};
