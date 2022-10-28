import { Link } from "react-router-dom";
import { moviesLinks, tvShowLinks } from "../../../app-routes";

export const MainMenu = () => {
  return (
    <nav className="flex h-full items-center gap-x-5 tablet:hidden">
      <div className="group relative flex h-full items-center">
        <span className="cursor-pointer p-2 text-white transition-colors hover:text-gray-300">
          Movies
        </span>
        <ul className="absolute left-0 top-[100%] z-10 hidden  w-[200px] rounded-lg  bg-gray-800 text-sm shadow-2xl group-hover:block ">
          {moviesLinks.map((link) => (
            <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
              <Link key={link.path + link.name} to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="group relative flex h-full items-center">
        <span className="cursor-pointer p-2 text-white transition-colors hover:text-gray-300">
          TV Shows
        </span>
        <ul className="absolute left-0 top-[100%] z-10 hidden w-[200px] rounded-lg bg-gray-800 text-sm shadow-2xl group-hover:block">
          {tvShowLinks.map((link) => (
            <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
              <Link key={link.path + link.name} to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
