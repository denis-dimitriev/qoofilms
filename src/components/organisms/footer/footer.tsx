import { Logo } from "../../atoms";
import { tmdbLogo } from "../../../assets/img";

export const Footer = () => {
  return (
    <footer className="flex min-h-[100px] w-full items-center bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="container flex h-full w-full items-center justify-between gap-y-5 text-white phone:flex-col">
        <Logo />
        <p className="w-1/4 tablet:hidden">
          I thank so much developers who give me a access to this api
        </p>
        /* eslint-disable react/jsx-no-target-blank */
        <a
          href="https://www.themoviedb.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-[200px]" src={tmdbLogo} alt="TMDB" />
        </a>
      </div>
    </footer>
  );
};
