import { ArrowRightIcon, FilterIcon } from "../../../assets/icons";
import { useState } from "react";

const filterList = [
  { name: "Popularity", value: "popularity.desc" },
  { name: "Release Date", value: "popularity.asc" },
  { name: "Primary release date", value: "primary_release_date.desc" },
  { name: "Revenue", value: "revenue.desc" },
  { name: "Vote", value: "vote_average.desc" },
] as { name: string; value: string }[];

interface FilterProps {
  setFilter: (value: string) => void;
}

export const Filter = ({ setFilter }: FilterProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const onToggleHandler = () => setOpen((prev) => !prev);

  const onFilterClickHandler = (filterValue: string) => setFilter(filterValue);

  return (
    <div className="flex w-full items-center tablet:justify-center">
      <ul
        className={`flex ${
          open ? "h-[auto]" : "h-[30px]"
        } animate-fadeIn gap-x-5 gap-y-2 overflow-hidden tablet:flex-col`}
      >
        <div
          className="flex cursor-pointer items-center justify-around rounded-md text-lg font-bold transition-all tablet:bg-blue-100"
          onClick={onToggleHandler}
        >
          <span className="inline-flex items-center">
            <FilterIcon className="w-[25px]" />
            Filters
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
            className="cursor-pointer rounded-lg bg-gray-200 py-1 px-4 text-center text-sm hover:bg-gray-700 hover:text-white tablet:px-2"
            onClick={() => onFilterClickHandler(el.value)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
