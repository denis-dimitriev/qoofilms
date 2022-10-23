import { Logo } from "../../atoms";
import { SearchForm } from "../../molecules";
import { useScrollTranslateElement } from "../../../hooks/useScrollTranslateElement";

export const Header = () => {
  const { translate } = useScrollTranslateElement();

  return (
    <header
      className="h-[70px] w-full bg-gray-900 text-white"
      style={{
        transform: translate ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="container flex items-center justify-between gap-[10%]">
        <Logo />
        <SearchForm />
      </div>
    </header>
  );
};
