import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { closeMobileMenu } from "../../../features/mobile-menu/mobile-menu.slice";
import { CloseButton, Logo } from "../../atoms";
import { moviesLinks, tvShowLinks } from "../../../app-routes";

export const MobileMenu = () => {
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
              {moviesLinks.map((link) => (
                <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                  <Link
                    key={link.path + link.name}
                    to={link.path}
                    onClick={onCloseMobileMenuHandler}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-5">
            TV Shows
            <ul className="text-sm">
              {tvShowLinks.map((link) => (
                <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                  <Link
                    key={link.path + link.name}
                    to={link.path}
                    onClick={onCloseMobileMenuHandler}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
