import { Logo } from "../../atoms";
import { MainMenu } from "../../molecules";

export const Footer = () => {
  return (
    <footer className="h-auto w-full bg-gray-900">
      <div className="container flex text-white">
        <Logo />
        <MainMenu />
      </div>
    </footer>
  );
};
