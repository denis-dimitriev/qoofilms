import { Link } from "react-router-dom";

export const MainNavigation = () => {
  return (
    <nav className="flex items-center gap-x-5 tablet:hidden">
      <div className="group relative">
        <span className="cursor-pointer p-2 text-white transition-colors hover:text-gray-300">
          Movies
        </span>
        <ul className="absolute left-0 top-[100%] z-10 hidden  w-[200px] rounded-lg  bg-gray-900 text-sm shadow-2xl group-hover:block ">
          <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
            <Link to="/home/popular-movies">Popular</Link>
          </li>
          <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
            <Link to="/home/top-rated-movies">Top Rated</Link>
          </li>
          <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
            <Link to="/home/upcoming-movies">Up Coming</Link>
          </li>
          <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
            <Link to="/home/now-playing-movies">Now Playing</Link>
          </li>
        </ul>
      </div>
      <div className="group relative">
        <span className="cursor-pointer p-2 text-white transition-colors hover:text-gray-300">
          TV Shows
        </span>
        <ul className="absolute left-0 top-[100%] z-10 hidden w-[200px] rounded-lg bg-gray-800 text-sm shadow-2xl group-hover:block ">
          <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
            <Link to="/home/tv-popular">Popular</Link>
          </li>
          <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
            <Link to="/home/tv-top-rated">Top Rated</Link>
          </li>
          <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
            <Link to="/home/tv-on-the-air">On the air</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
