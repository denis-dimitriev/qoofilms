import { SearchIcon } from "../../../assets/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchMoviesQuery } from "../../../services/api/tmdbSearch";
import { Link } from "react-router-dom";

export const SearchForm = () => {
  const [term, setTerm] = useState<string>("");

  const { data } = useSearchMoviesQuery(
    { term, pageNumber: 1 },
    {
      skip: term.length < 3,
    }
  );

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTerm("");
  };

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTerm(value);
  };

  return (
    <form className="relative w-[50%]" onSubmit={onSubmit}>
      <div className="relative w-full focus-within:shadow-gray-50">
        <input
          list="search"
          type="text"
          value={term}
          className="w-full rounded p-2 text-black"
          placeholder="Search..."
          onChange={onInputChangeHandler}
        />
        <Link to={`/home/search/${term}`}>
          <button
            className="group absolute top-0 right-0 flex h-full w-[50px] items-center justify-center bg-gray-300 text-center transition-all hover:bg-gray-600"
            type="submit"
          >
            <SearchIcon className="w-[20px] group-hover:fill-white" />
          </button>
        </Link>
        <datalist id="search">
          {data?.results.map((res) => (
            <option key={res.id} value={res.title}>
              {res.title}
            </option>
          ))}
        </datalist>
      </div>
    </form>
  );
};
