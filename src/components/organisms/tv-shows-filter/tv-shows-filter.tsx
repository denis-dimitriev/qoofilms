import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setTVShowsFilter,
  TVShowFilterType,
} from "../../../features/filter/filter.slice";
import { FilterList } from "../../molecules";

const filterList = [
  { name: "Popularity", value: "popularity.desc", active: false },
  { name: "Fir Air Date", value: "first_air_date.desc", active: false },
  { name: "Vote average", value: "vote_average.desc", active: false },
] as { name: string; value: TVShowFilterType; active: boolean }[];

export const TvShowsFilter = () => {
  const { tvShowsFilter } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const onFilterClickHandler = useCallback(
    (filterValue: TVShowFilterType) => dispatch(setTVShowsFilter(filterValue)),
    [dispatch]
  );

  useMemo(() => {
    filterList.forEach((el) => {
      if (el.active) {
        el.active = false;
      }
      if (el.value === tvShowsFilter) {
        el.active = true;
      }
      return el;
    });
  }, [tvShowsFilter]);

  return (
    <FilterList filterList={filterList} onFilterClick={onFilterClickHandler} />
  );
};
