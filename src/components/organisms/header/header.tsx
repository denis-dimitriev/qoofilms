import { HamburgerButton, Logo } from "../../atoms";
import { MainMenu, SearchForm } from "../../molecules";
import { useAppSelector } from "../../../hooks/redux";

export const Header = () => {
  const { headerHidden } = useAppSelector((state) => state.headerHidden);

  return (
    <header
      className="z-[99] flex h-[70px] w-full items-center bg-gray-900 text-white"
      style={{
        transform: headerHidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="container relative flex h-[40px] items-center justify-between">
        <Logo className="tablet:hidden" />
        <HamburgerButton />
        <MainMenu />
        <SearchForm />
      </div>
    </header>
  );
};
