import { SearchIcon } from "../../../assets/icons";
import { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import { useSearchMoviesQuery } from "../../../services/api/tmdbSearch";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addSearchValue } from "../../../features/search/search.slice";

export const SearchForm = () => {
  const { searchValue } = useAppSelector((state) => state.movieSearch);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = useSearchMoviesQuery(searchValue, {
    skip: searchValue.length < 1,
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/${searchValue}`);
  };

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(addSearchValue(value));
  };

  const onKeyPressHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchValue}`);
    }
  };

  return (
    <form className="relative w-[50%] tablet:w-[90%]" onSubmit={onSubmit}>
      <div className="relative w-full focus-within:shadow-gray-50">
        <input
          list="search"
          type="text"
          value={searchValue}
          className="w-full rounded px-4 py-2 text-black"
          placeholder="Search movie..."
          autoComplete="off"
          onChange={onInputChangeHandler}
          onKeyDown={onKeyPressHandler}
        />
        <button
          className="group absolute top-0 right-0 flex h-full w-[50px] items-center justify-center bg-gray-300 text-center transition-all hover:bg-gray-600"
          type="submit"
          disabled={searchValue.length < 1}
        >
          <SearchIcon className="w-[20px] group-hover:fill-white" />
        </button>
        <datalist id="search">
          {data?.map((res) => (
            <option key={res.id} value={res.title}>
              {res.title}
            </option>
          ))}
        </datalist>
      </div>
    </form>
  );
};
