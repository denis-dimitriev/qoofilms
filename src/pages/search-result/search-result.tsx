import { Error, Spinner, Title } from "../../components/atoms";
import { useLazySearchMoviesQuery } from "../../services/api/tmdbSearch";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Card } from "../../components/molecules";

const SearchResult = () => {
  const { searchValue } = useAppSelector((state) => state.movieSearch);
  const [search, { data, isLoading, isError, error }] = useLazySearchMoviesQuery();

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
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>Search Result</Title>
        <div className="flex flex-wrap justify-center gap-2">
          {data?.map((movie) => (
            <Card
              key={movie.id}
              thumbnail={movie.backdrop_path ? movie.backdrop_path : movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
