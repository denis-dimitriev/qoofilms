import {
  useLazyGetMovieCreditsQuery,
  useLazyGetMovieDetailsQuery,
} from "../../services/api/tmdbMovies";
import { useEffect } from "react";
import { Error, Spinner, Tag } from "../../components/atoms";
import { StarIcon } from "../../assets/icons";
import { altNoImage } from "../../assets/img";
import { ICast, ICrew } from "../../types/movie-credits";

export const ItemDetails = () => {
  const [fetchMovie, { data: movie, isLoading, error, isError }] =
    useLazyGetMovieDetailsQuery();

  const [fetchCredits, { data: credits }] = useLazyGetMovieCreditsQuery();

  useEffect(() => {
    fetchMovie(101);
    fetchCredits(101);
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

  console.log(credits);

  const genres = movie.genres.map((el) => el.name).toString();
  const spokenLanguages = movie.spoken_languages
    .map((el) => el.name)
    .toString();
  const productionCompanies = movie.production_companies
    .map((el) => el.name)
    .toString();
  const year = movie.release_date.substring(0, 4);
  const voteAvg = movie.vote_average.toString().substring(0, 3);

  const topActors: ICast[] | undefined = credits?.cast.slice(0, 10);
  const topCrew: ICrew[] | undefined = credits?.crew.slice(0, 10);

  return (
    <div className="relative mt-5 h-full w-full">
      <div className="flex gap-[30px] tablet-sm:flex-col tablet-sm:items-center tablet:flex-wrap">
        <div className="flex h-full h-full w-[300px] flex-col gap-3 phone:flex-wrap tablet:w-full tablet:flex-row tablet:justify-center">
          <img
            className="h-[450px] w-[300px] object-cover object-center"
            src={movie.poster_path ? movie.poster_path : movie.backdrop_path}
            alt={altNoImage}
          />
          <img
            className="h-[450px] w-[300px] w-full object-cover object-center"
            src={movie.backdrop_path}
            alt=""
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
            <li className="p-2 text-sm font-bold">
              Genre:&nbsp;
              <span className="text-sm font-medium">{genres}</span>
            </li>
            <li className="p-2 text-sm font-bold">
              Release:&nbsp;
              <span className="text-sm font-medium">{movie.release_date}</span>
            </li>
            <li className="p-2 text-sm font-bold">
              Spoken languages:&nbsp;
              <span className="text-sm font-medium">{spokenLanguages}</span>
            </li>
            <li className="p-2 text-sm font-bold">
              Budget($):&nbsp;
              <span className="text-sm font-medium">{movie.budget}</span>
            </li>
            <li className="p-2 text-sm font-bold">
              Gross worldwide($):&nbsp;
              <span className="text-sm font-medium">{movie.revenue}</span>
            </li>
            <li className="p-2 text-sm font-bold">
              Production companies:&nbsp;
              <span className="text-sm font-medium">{productionCompanies}</span>
            </li>
          </ul>
          <ul className="flex w-3/4 flex-wrap tablet-sm:justify-center">
            {topCrew?.map((job) => (
              <li
                key={`${job.id} + ${job.department}`}
                className="p-2 text-sm font-bold"
              >
                {job.department}:&nbsp;
                <span className="text-sm font-medium">{job.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-screen w-1/6 flex-col items-start overflow-scroll tablet-sm:w-full tablet-sm:justify-center">
          <Tag>Top cast</Tag>
          <ul className="flex flex-col tablet-sm:flex-row tablet-sm:flex-wrap">
            {topActors?.map((actor) => (
              <li key={`${actor.id + actor.name}`} className="w-[100px] p-2">
                <div className="flex flex-col">
                  <img
                    className="h-full w-full"
                    src={actor.profile_path}
                    alt={altNoImage}
                  />
                  <span className="text-sm font-bold">{actor.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
