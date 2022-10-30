import { ArrowRightIcon, FilterIcon } from "../../../assets/icons";
import { useCallback, useMemo, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { FilterType } from "../../../features/filter/filter.slice";

const filterList = [
  { name: "Popularity", value: "popularity.desc", active: false },
  { name: "Release Date", value: "release_date.desc", active: false },
  { name: "Revenue", value: "revenue.desc", active: false },
  { name: "Vote", value: "vote_average.desc", active: false },
] as { name: string; value: FilterType; active: boolean }[];

export const Filter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { filter } = useAppSelector((state) => state.filter);

  const onFilterClickHandler = useCallback((filterValue: FilterType) => {
    localStorage.setItem("sortBy", JSON.stringify(filterValue));
    window.location.reload();
  }, []);

  useMemo(() => {
    filterList.forEach((el) => {
      if (el.active) {
        el.active = false;
      }
      if (el.value === filter) {
        el.active = true;
      }
      return el;
    });
  }, [filter]);

  const onToggleHandler = () => setOpen((prev) => !prev);

  return (
    <div className="flex w-full select-none items-center tablet:justify-center">
      <ul
        className={`flex ${
          open ? "h-[auto]" : "h-[30px]"
        } animate-fadeIn gap-x-5 gap-y-2 overflow-hidden tablet:flex-col`}
      >
        <div
          className="flex cursor-pointer items-center justify-around rounded-md text-lg font-bold tablet:bg-blue-100"
          onClick={onToggleHandler}
        >
          <span className="inline-flex items-center">
            <FilterIcon className="w-[25px]" />
            Filters by
          </span>
          <span className="hidden tablet:visible">
            <ArrowRightIcon
              className={`w-[12px] ${open && "rotate-90"} transition-transform`}
            />
          </span>
        </div>

        {filterList.map((el, index) => (
          <li
            key={el.value + index}
            className={`${
              el.active ? "bg-gray-700 text-white" : "bg-gray-200"
            } cursor-pointer rounded-lg py-1 px-4 text-center text-sm hover:bg-gray-700 hover:text-white tablet:px-2`}
            onClick={() => onFilterClickHandler(el.value)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
