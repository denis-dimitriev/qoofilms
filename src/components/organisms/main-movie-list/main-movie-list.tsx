import {
  useGetNowPlayingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../../../services/api/tmdbMovies";
import { Tag } from "../../atoms/ui/tag/tag";
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
        <Tag>Upcoming movies</Tag>
        {upComing && <Carousel movies={upComing} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Top Rated</Tag>
        {topRated && <Carousel movies={topRated} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Popular</Tag>
        {popular && <Carousel movies={popular} />}
      </div>
      <div className="flex flex-col gap-y-2">
        <Tag>Now playing</Tag>
        {nowPlaying && <Carousel movies={nowPlaying} />}
      </div>
    </div>
  );
};
