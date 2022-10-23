import { Error, Spinner, Title } from "../../components/atoms";
import { useParams } from "react-router-dom";
import { useLazySearchMoviesQuery, useSearchMoviesQuery } from "../../services/api/tmdbSearch";
import { useEffect } from "react";
import InfiniteScrolling from "../../features/infinite-scrolling/infinite-scrolling";
import { useScrollNextPage } from "../../hooks/useScrollNextPage";
import { useCombineData } from "../../hooks/useCombineData";

const SearchResult = () => {
  const { title } = useParams();
  const { page, scrollNextPage } = useScrollNextPage();
  const [search, { data, isLoading, isError, error }] = useLazySearchMoviesQuery();
  const searchResult = useCombineData(data?.results);

  useEffect(() => {
    if (title) {
      search({ term: title, pageNumber: page });
    }
  }, [title, page]);

  if (isLoading && !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  console.log(data);

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center gap-y-5">
        <Title>Search Result</Title>
        <h1 className="w-full text-start font-bold">Total items: {data?.total_results}</h1>
        <InfiniteScrolling data={searchResult} fetchNextPageData={scrollNextPage} />
      </div>
    </div>
  );
};

export default SearchResult;
