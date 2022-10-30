import { useAppDispatch } from "../../../hooks/redux";
import { useEffect, useState } from "react";
import { setHiddenHeader } from "../../../features/header/header.slice";
import { Error, Spinner, Title } from "../../atoms";
import { useGetMovieDiscoverQuery } from "../../../services/api/tmdbMovies";
import InfiniteScrolling from "../../organisms/infinite-scrolling/infinite-scrolling";
import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { useCombineData } from "../../../hooks/useCombineData";
import { Filter } from "../../molecules";

export const MoviesAll = () => {
  const [filter, setFilter] = useState<string>("popularity.desc");

  console.log(filter);

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

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center gap-y-5">
          <Title>All movies</Title>
          <Filter setFilter={setFilter} />
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
