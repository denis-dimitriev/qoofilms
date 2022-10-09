import { Logo } from "../../ui/logo/logo";
import { Search } from "../../molecules/search";
import { LinkButton } from "../../ui/link-button/link-button";

export const Header = () => {
  return (
    <header className="h-[70px] w-full text-white">
      <div className="container flex items-center justify-between gap-[10%]">
        <Logo />
        <Search />
        <div className="flex gap-5">
          <LinkButton linkTo="/authentication/sign-in">Sign In</LinkButton>
          <LinkButton type="primary" linkTo="/authentication/sign-up">
            Sign Up
          </LinkButton>
        </div>
      </div>
    </header>
  );
};
