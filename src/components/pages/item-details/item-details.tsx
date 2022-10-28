import {
  useLazyGetMovieCreditsQuery,
  useLazyGetMovieDetailsQuery,
  useLazyGetMovieImagesQuery,
} from "../../../services/api/tmdbMovies";
import { useEffect } from "react";
import { Error, Spinner, Tag } from "../../atoms";
import { StarIcon } from "../../../assets/icons";
import { altNoImage } from "../../../assets/img";
import { BackdropList, CastList, CrewList, PosterList } from "../../molecules";

export const ItemDetails = () => {
  const [fetchMovie, { data: movie, isLoading, error, isError }] =
    useLazyGetMovieDetailsQuery();

  const [fetchCredits, { data: credits }] = useLazyGetMovieCreditsQuery();
  const [fetchImages, { data: movieImages }] = useLazyGetMovieImagesQuery();

  useEffect(() => {
    fetchMovie(101);
    fetchCredits(101);
    fetchImages(101);
  }, []);

  if (isLoading) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  if (!movie) {
    return <Tag>No data about this movie</Tag>;
  }

  const genres = movie.genres.map((el) => el.name).toString();
  const spokenLanguages = movie.spoken_languages
    .map((el) => el.name)
    .toString();
  const productionCompanies = movie.production_companies
    .map((el) => el.name)
    .toString();
  const year = movie.release_date.substring(0, 4);
  const voteAvg = movie.vote_average.toString().substring(0, 3);

  return (
    <div className="relative mt-5 h-full w-full">
      <div className="flex gap-[30px] tablet-sm:flex-col tablet-sm:items-center tablet:flex-wrap">
        <div className="flex h-full w-[300px] flex-col tablet:w-full">
          <img
            className="m-auto h-[450px] w-[300px] object-cover object-center shadow-2xl"
            src={movie.poster_path ? movie.poster_path : movie.backdrop_path}
            alt={altNoImage}
          />
        </div>
        <div className="flex w-3/4 flex-col items-start tablet-sm:w-full tablet-sm:items-center">
          <h1 className="flex gap-x-3 text-5xl font-bold tablet-sm:text-center pc-sm:text-4xl">
            {movie.title}&nbsp;({year})
          </h1>
          <p className="mb-5">{movie.tagline}</p>
          <div className="relative mb-4 flex items-center">
            <span className="text-4xl font-bold text-[#d4af37]">{voteAvg}</span>
            <StarIcon className="absolute top-0 right-[-15px] h-[15px] w-[15px]" />
          </div>

          <Tag>About</Tag>
          <h3 className="mt-3 font-bold">Overview</h3>
          <p className="mb-4 w-3/4">{movie.overview}</p>
          <h3 className="mt-3 font-bold">Details</h3>
          <ul className="flex w-3/4 flex-wrap tablet-sm:justify-center">
            <li className="p-1 text-sm font-bold">
              Genre:&nbsp;
              <span className="text-sm font-medium">{genres}</span>
            </li>
            <li className="p-1 text-sm font-bold">
              Release:&nbsp;
              <span className="text-sm font-medium">{movie.release_date}</span>
            </li>
            <li className="p-1 text-sm font-bold">
              Spoken languages:&nbsp;
              <span className="text-sm font-medium">{spokenLanguages}</span>
            </li>
            <li className="p-1 text-sm font-bold">
              Budget($):&nbsp;
              <span className="text-sm font-medium">{movie.budget}</span>
            </li>
            <li className="p-1 text-sm font-bold">
              Gross worldwide($):&nbsp;
              <span className="text-sm font-medium">{movie.revenue}</span>
            </li>
            <li className="p-1 text-sm font-bold">
              Production companies:&nbsp;
              <span className="text-sm font-medium">{productionCompanies}</span>
            </li>
          </ul>
          {credits && <CrewList crewList={credits.crew} />}
        </div>

        {credits && <CastList cast={credits.cast} />}
      </div>

      {movieImages && <BackdropList backdrops={movieImages.backdrops} />}
      {movieImages && <PosterList posters={movieImages.posters} />}
    </div>
  );
};
