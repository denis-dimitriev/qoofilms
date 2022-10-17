import { MainMovieList } from "../../organisms/main-movie-list/main-movie-list";
import { MainTvShowsList } from "../../organisms/main-tv-shows-list/main-tv-shows-list";
import { Fragment } from "react";

const MainList = () => {
  return (
    <Fragment>
      <h1 className="mb-4 mt-5 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
          Best Movies
        </span>
      </h1>
      <MainMovieList />

      <h1 className="mb-4 mt-5 text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
          Best On TV
        </span>
      </h1>
      <MainTvShowsList />
    </Fragment>
  );
};

export default MainList;
