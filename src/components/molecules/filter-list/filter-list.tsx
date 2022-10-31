import { useState } from "react";
import { ArrowRightIcon, FilterIcon } from "../../../assets/icons";
import {
  MovieFilterType,
  TVShowFilterType,
} from "../../../features/filter/filter.slice";

interface FilterListProps {
  filterList: {
    name: string;
    value: TVShowFilterType | MovieFilterType;
    active: boolean;
  }[];
  onFilterClick: (value: any) => void;
}

export const FilterList = ({ filterList, onFilterClick }: FilterListProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const onToggleHandler = () => setOpen((prev) => !prev);

  return (
    <div className="flex w-full select-none items-center tablet:justify-center">
      <ul
        className={`flex ${
          open ? "h-[auto]" : "h-[30px]"
        } gap-x-5 gap-y-2 overflow-hidden tablet:flex-col`}
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
            onClick={() => onFilterClick(el.value)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
