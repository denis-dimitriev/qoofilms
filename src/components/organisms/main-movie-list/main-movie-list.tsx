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
          <LinkBadge link="/home/upcoming-movies">See more</LinkBadge>
        </Tag>
        {upComing && <Carousel list={upComing} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Top Rated{" "}
          <LinkBadge link="/home/top-rated-movies">See more</LinkBadge>
        </Tag>
        {topRated && <Carousel list={topRated} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Popular <LinkBadge link="/home/popular-movies">See more</LinkBadge>
        </Tag>
        {popular && <Carousel list={popular} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>
          Now playing{" "}
          <LinkBadge link="/home/now-playing-movies">See more</LinkBadge>
        </Tag>
        {nowPlaying && <Carousel list={nowPlaying} />}
      </div>
    </div>
  );
};
