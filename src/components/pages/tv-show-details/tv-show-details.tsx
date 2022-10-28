import {
  useLazyGetTVShowCreditsQuery,
  useLazyGetTVShowDetailsQuery,
  useLazyGetTVShowImagesQuery,
} from "../../../services/api/tmdbTVShows";
import { useEffect } from "react";
import { Error, Spinner, Tag } from "../../atoms";
import { altNoImage } from "../../../assets/img";
import { StarIcon } from "../../../assets/icons";
import { BackdropList, CastList, CrewList, PosterList } from "../../molecules";
import { useParams } from "react-router-dom";

export const TvShowDetails = () => {
  const { id } = useParams();

  const [fetchTvShow, { data: tvShow, isLoading, isError, error }] =
    useLazyGetTVShowDetailsQuery();

  const [fetchImages, { data: tvShowImages }] = useLazyGetTVShowImagesQuery();
  const [fetchCredits, { data: credits }] = useLazyGetTVShowCreditsQuery();

  useEffect(() => {
    if (id) {
      fetchTvShow(id);
      fetchImages(id);
      fetchCredits(id);
    }
  }, [fetchCredits, fetchImages, fetchTvShow, id]);

  if (isLoading) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  if (!tvShow) {
    return <Tag>No data about this movie</Tag>;
  }

  const year = tvShow.first_air_date.substring(0, 4);
  const createdBy = tvShow.created_by.map((el) => el.name).toString();
  const voteAvg = tvShow.vote_average.toString().substring(0, 3);
  const country = tvShow.origin_country.map((el) => el).toString();
  const networks = tvShow.networks.map((el) => el.name).toString();

  return (
    <div className="container">
      <div className="relative mt-5 h-full w-full">
        <div className="flex gap-[30px] tablet-sm:flex-col tablet-sm:items-center tablet:flex-wrap">
          <div className="flex h-full w-[300px] flex-col tablet:w-full">
            <img
              className="m-auto h-[450px] w-[300px] object-cover object-center shadow-2xl"
              src={
                tvShow.poster_path ? tvShow.poster_path : tvShow.backdrop_path
              }
              alt={altNoImage}
            />
          </div>
          <div className="flex w-3/4 flex-col items-start tablet-sm:w-full tablet-sm:items-center">
            <h1 className="flex gap-x-3 text-5xl font-bold tablet-sm:text-center pc-sm:text-4xl">
              {tvShow.name}&nbsp;({year})
            </h1>
            <p className="mb-5">{createdBy}</p>
            <div className="relative mb-4 flex items-center">
              <span className="text-4xl font-bold text-[#d4af37]">
                {voteAvg}
              </span>
              <StarIcon className="absolute top-0 right-[-15px] h-[15px] w-[15px]" />
            </div>

            <Tag>About</Tag>
            <h3 className="mt-3 font-bold">Overview</h3>
            <p className="mb-4 w-3/4">{tvShow.overview}</p>
            <h3 className="mt-3 font-bold">Details</h3>
            <ul className="flex w-3/4 flex-wrap tablet-sm:justify-center">
              <li className="p-1 text-sm font-bold">
                Country:&nbsp;
                <span className="text-sm font-medium">{country}</span>
              </li>
              <li className="p-1 text-sm font-bold">
                Season count:&nbsp;
                <span className="text-sm font-medium">
                  {tvShow.number_of_seasons}
                </span>
              </li>
              <li className="p-1 text-sm font-bold">
                Episodes count:&nbsp;
                <span className="text-sm font-medium">
                  {tvShow.number_of_episodes}
                </span>
              </li>
              <li className="p-1 text-sm font-bold">
                First air date:&nbsp;
                <span className="text-sm font-medium">
                  {tvShow.first_air_date}
                </span>
              </li>
              <li className="p-1 text-sm font-bold">
                Last air date:&nbsp;
                <span className="text-sm font-medium">
                  {tvShow.last_air_date}
                </span>
              </li>
              <li className="p-1 text-sm font-bold">
                Networks:&nbsp;
                <span className="text-sm font-medium">"{networks}"</span>
              </li>
            </ul>
            {credits && <CrewList crewList={credits.crew} />}
          </div>
          {credits && <CastList cast={credits.cast} />}
        </div>

        {tvShowImages && <BackdropList backdrops={tvShowImages.backdrops} />}
        {tvShowImages && <PosterList posters={tvShowImages.posters} />}
      </div>
    </div>
  );
};
