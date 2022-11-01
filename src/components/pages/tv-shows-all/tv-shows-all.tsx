import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import { setHiddenHeader } from "../../../features/header/header.slice";
import { Error, Spinner, Title } from "../../atoms";
import { useLazyGetTVShowsDiscoverQuery } from "../../../services/api/tmdbTVShows";
import { TvShowsFilter } from "../../organisms";
import { Card, PoorPagination } from "../../molecules";
import { useScrollNextPage } from "../../../hooks/useScrollNextPage";
import { Link, useLocation } from "react-router-dom";

export const TvShowsAll = () => {
  const { tvShowsFilter } = useAppSelector((state) => state.filter);

  const [fetchTVShows, { data, isLoading, isError, error, isFetching }] =
    useLazyGetTVShowsDiscoverQuery();

  const { page, scrollNextPage, scrollPrevPage } = useScrollNextPage();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const parentLocation = location.pathname.substring(
    0,
    location.pathname.length - 3
  );

  useEffect(() => {
    dispatch(setHiddenHeader(false));
  }, [dispatch]);

  useEffect(() => {
    fetchTVShows({ sort: tvShowsFilter, pageNumber: page });
  }, [tvShowsFilter, page, fetchTVShows]);

  if (isLoading || isFetching || !data) {
    return <Spinner className="absolute top-[20%] left-[50%]" />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center gap-y-5">
          <Title>All TV Shows</Title>
          <TvShowsFilter />
          {data.total_pages && (
            <PoorPagination
              onNextPage={scrollNextPage}
              onPrevPage={scrollPrevPage}
              currentPage={page}
              totalPages={data.total_pages}
            />
          )}
          <ul className="flex flex-wrap justify-center gap-x-1 gap-y-3">
            {data?.results.map((el) => (
              <li key={el.id}>
                <Link to={`${parentLocation}${el.id}`}>
                  <Card thumbnail={el.backdrop_path} title={el.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
