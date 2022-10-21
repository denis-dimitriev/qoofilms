import { MouseEvent, useState } from "react";
import { useGetUpcomingMoviesQuery } from "../../services/api/tmdbMovies";
import { Card } from "../../components/molecules/card/card";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons";

const UpcomingMovies = () => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data } = useGetUpcomingMoviesQuery(page);

  const onNextClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  const onPrevClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <h1 className="mb-2 mt-5 text-center text-4xl font-extrabold text-gray-900">
          <span className="bg-gradient-to-r from-black/60 to-sky-500 bg-clip-text text-transparent">Up Coming</span>
        </h1>
        <div className="flex w-full flex-wrap justify-center gap-y-3 gap-x-1">
          {data?.map((movie) => (
            <Card
              key={movie.id}
              thumbnail={movie.backdrop_path ? movie.backdrop_path : movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
        <div className="flex items-center">
          <button
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={onPrevClickHandler}
            disabled={page <= 1}
          >
            <ArrowLeftIcon className="w-[25px] fill-white" />
          </button>
          <button
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={onNextClickHandler}
            disabled={page >= 5}
          >
            <ArrowRightIcon className="w-[25px] fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
