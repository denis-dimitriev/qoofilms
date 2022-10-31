import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { MovieFilterType } from "../../../features/filter/filter.slice";
import { FilterList } from "../../molecules";

const filterList = [
  { name: "Popularity", value: "popularity.desc", active: false },
  { name: "Release Date", value: "release_date.desc", active: false },
  { name: "Revenue", value: "revenue.desc", active: false },
  { name: "Vote", value: "vote_average.desc", active: false },
] as { name: string; value: MovieFilterType; active: boolean }[];

export const MoviesFilter = () => {
  const { moviesFilter } = useAppSelector((state) => state.filter);

  const onFilterClickHandler = useCallback((filterValue: MovieFilterType) => {
    localStorage.setItem("moviesSortBy", JSON.stringify(filterValue));
    window.location.reload();
  }, []);

  useMemo(() => {
    filterList.forEach((el) => {
      if (el.active) {
        el.active = false;
      }
      if (el.value === moviesFilter) {
        el.active = true;
      }
      return el;
    });
  }, [moviesFilter]);

  return (
    <FilterList filterList={filterList} onFilterClick={onFilterClickHandler} />
  );
};
