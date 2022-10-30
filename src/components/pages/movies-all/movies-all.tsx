import { useAppDispatch } from "../../../hooks/redux";
import { useEffect } from "react";
import { setHiddenHeader } from "../../../features/header/header.slice";
import { Error, Spinner, Title } from "../../atoms";
import {
  useGetMovieDiscoverQuery,
  useGetPopularMoviesQuery,
} from "../../../services/api/tmdbMovies";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";
import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { useCombineData } from "../../../hooks/useCombineData";

export const MoviesAll = () => {
  const { page, scrollNextPage } = useScrollNextPage();
  const { isLoading, isError, error, data } = useGetMovieDiscoverQuery({
    sortBy: "",
    pageNumber: page,
  });
  const allMovies = useCombineData(data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHiddenHeader(false));
  }, [dispatch]);

  if (isLoading && !allMovies) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  console.log(data);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center gap-y-5">
          <Title>All movies</Title>
          <InfiniteScrolling
            data={allMovies}
            fetchNextPageData={scrollNextPage}
            linkPath="movies"
          />
        </div>
      </div>
    </div>
  );
};

/*
* Allowed Values: , popularity.asc, popularity.desc,
* release_date.asc, release_date.desc,
* revenue.asc, revenue.desc, primary_release_date.asc,
* primary_release_date.desc, original_title.asc,
* original_title.desc, vote_average.asc,
* vote_average.desc,
*  vote_count.asc, vote_count.desc
default: popularity.desc
* */
