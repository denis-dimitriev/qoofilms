import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      className="select-none text-3xl font-semibold tracking-[2px] transition-all ease-in-out"
      to="/"
    >
      QooFilms
    </Link>
  );
};
