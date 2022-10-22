import { SearchIcon } from "../../../assets/icons";

export const SearchForm = () => {
  return (
    <form className="w-[50%]">
      <div className="relative w-full focus-within:shadow-gray-50">
        <input list="search" type="text" className="w-full rounded p-2 text-black" placeholder="SearchForm..." />
        <button
          className="group absolute top-0 right-0 flex h-full w-[50px] items-center justify-center bg-gray-300 text-center transition-all hover:bg-gray-600"
          type="submit"
        >
          <SearchIcon className="w-[20px] group-hover:fill-white" />
        </button>
        <datalist id="search">
          <option value="Чебурашка"></option>
          <option value="Крокодил Гена"></option>
          <option value="Шапокляк"></option>
        </datalist>
      </div>
    </form>
  );
};
