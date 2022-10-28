import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { closeMobileMenu } from "../../../features/mobile-menu/mobile-menu.slice";
import { CloseButton, Logo } from "../../atoms";

export const TabletMenu = () => {
  const dispatch = useAppDispatch();

  const onCloseMobileMenuHandler = () => dispatch(closeMobileMenu());

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[199] flex h-screen w-full bg-gray-900/50">
      <div className="flex h-screen w-[280px] animate-fadeIn flex-col bg-gray-900 p-[10px] text-white">
        <div className="flex items-center justify-between">
          <Logo onClick={onCloseMobileMenuHandler} />
          <CloseButton onClick={onCloseMobileMenuHandler} />
        </div>
        <nav className="mt-[50px]">
          <div className="mb-5">
            Movies
            <ul className="text-sm">
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Popular</Link>
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
          <div className="mb-5">
            TV Shows
            <ul className="text-sm">
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
      </div>
    </div>
  );
};
