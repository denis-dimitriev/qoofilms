import { Error, Spinner, Title } from "../../atoms";
import { useLazySearchMoviesQuery } from "../../../services/api/tmdbSearch";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { Card } from "../../molecules";
import { Link } from "react-router-dom";
import { setHiddenHeader } from "../../../features/header/header.slice";

export const Search = () => {
  const { searchValue } = useAppSelector((state) => state.movieSearch);
  const [search, { data, isLoading, isError, error }] =
    useLazySearchMoviesQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHiddenHeader(false));
  }, [dispatch]);

  useEffect(() => {
    if (searchValue.length > 0) {
      search(searchValue);
    }
  }, [searchValue, search]);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  if (searchValue.length < 1) {
    return <h1 className="text-2xl font-bold">Nothing to search</h1>;
  }

  return (
    <div className="flex w-full flex-col items-center gap-y-5">
      <Title>Search Result</Title>
      <div className="flex flex-wrap justify-center gap-2">
        {data?.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
            <Card
              key={movie.id}
              thumbnail={
                movie.backdrop_path ? movie.backdrop_path : movie.poster_path
              }
              title={movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
