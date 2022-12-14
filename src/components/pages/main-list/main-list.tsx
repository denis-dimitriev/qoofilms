import { Fragment } from "react";
import { MainBanner, MainMovieList, MainTvShowsList } from "../../organisms";

export const MainList = () => {
  return (
    <Fragment>
      <MainBanner />
      <Fragment>
        <h1 className="mb-4 mt-5 text-center text-5xl font-extrabold text-gray-900">
          <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
            Best Movies
          </span>
        </h1>
        <MainMovieList />

        <h1 className="mb-4 mt-5 text-center text-5xl font-extrabold text-gray-900">
          <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
            Best On TV
          </span>
        </h1>
        <MainTvShowsList />
      </Fragment>
    </Fragment>
  );
};
