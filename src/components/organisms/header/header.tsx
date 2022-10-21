import { Logo } from "../../atoms/ui/logo/logo";
import { Search } from "../../molecules/search/search";
import { LinkButton } from "../../atoms/ui/link-button/link-button";
import { useScrollTranslate } from "../../../hooks/useScrollTranslate";

export const Header = () => {
  const { translate } = useScrollTranslate();

  return (
    <header
      className="h-[70px] w-full bg-gray-900 text-white"
      style={{
        transform: translate ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="container flex items-center justify-between gap-[10%]">
        <Logo />
        <Search />
        <div className="flex gap-5">
          <LinkButton linkTo="/auth/sign-in">Sign In</LinkButton>
          <LinkButton type="ghost" linkTo="/auth/sign-up">
            Sign Up
          </LinkButton>
        </div>
      </div>
    </header>
  );
};
