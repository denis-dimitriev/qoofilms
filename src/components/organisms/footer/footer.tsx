import { Logo } from "../../atoms";
import { Navigation } from "../../molecules";

export const Footer = () => {
  return (
    <footer className="h-auto w-full bg-gray-900">
      <div className="container flex text-white">
        <Logo />
        <Navigation />
      </div>
    </footer>
  );
};
