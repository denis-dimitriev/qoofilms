import { Link } from "react-router-dom";
import { HTMLProps } from "react";

interface LogoProps extends HTMLProps<HTMLLinkElement> {}

export const Logo = ({ onClick, className }: LogoProps) => {
  return (
    <Link
      className={`${className} select-none text-3xl font-semibold tracking-[2px] transition-all ease-in-out`}
      to="/"
      onClick={() => onClick}
    >
      QooFilms
    </Link>
  );
};
