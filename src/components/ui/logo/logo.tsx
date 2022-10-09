import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      className="select-none text-3xl font-semibold tracking-[2px] text-inherit transition-all ease-in-out hover:text-gray-500"
      to="/"
    >
      QooFilms
    </Link>
  );
};
