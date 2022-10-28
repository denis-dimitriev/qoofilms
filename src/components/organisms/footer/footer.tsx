import { Logo } from "../../atoms";

export const Footer = () => {
  return (
    <footer className="h-[100px] w-full bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="container flex h-full w-full items-center text-white">
        <Logo />
      </div>
    </footer>
  );
};
