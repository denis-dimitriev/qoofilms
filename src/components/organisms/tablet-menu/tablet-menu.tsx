import { Logo } from "../../atoms";
import { CloseIcon } from "../../../assets/icons";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { closeMobileMenu } from "../../../features/mobile-menu/mobile-menu.slice";

export const TabletMenu = () => {
  const dispatch = useAppDispatch();

  const onCloseMobileMenuHandler = () => dispatch(closeMobileMenu());

  return (
    <div
      className="absolute top-0 left-0 bottom-0 z-[999] h-full w-full overflow-hidden bg-black/30"
      onClick={onCloseMobileMenuHandler}
    >
      <div className="mt-2 flex min-h-screen w-[280px] animate-fadeIn flex-col bg-gray-900 p-[10px] text-white">
        <div className="flex items-center justify-between">
          <Logo onClick={onCloseMobileMenuHandler} />
          <button onClick={onCloseMobileMenuHandler}>
            <CloseIcon className="h-[20px] w-[20px] fill-white" />
          </button>
        </div>
        <nav className="mt-[50px]">
          <div className="mb-5">
            Movies
            <ul className="text-sm">
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Popular</Link>
              </li>
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Top Rated</Link>
              </li>
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Up Coming</Link>
              </li>
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Now Playing</Link>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            TV Shows
            <ul className="text-sm">
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Popular</Link>
              </li>
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Top Rated</Link>
              </li>
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Up Coming</Link>
              </li>
              <li className="w-full cursor-pointer px-4 py-2 transition-colors hover:bg-gray-600">
                <Link to="#">Now Playing</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
