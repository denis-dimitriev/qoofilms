import { HTMLProps, ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps extends HTMLProps<HTMLLinkElement> {
  children: ReactNode;
  type?: "ghost" | "primary";
  linkTo: string;
}

export const LinkButton = ({ children, type, linkTo }: LinkButtonProps) => {
  return type === "primary" ? (
    <Link
      to={linkTo}
      className="w-[100px] cursor-pointer rounded-lg border-2 border-white bg-gray-100 px-5 py-2 text-black transition-all hover:bg-transparent hover:text-gray-200"
    >
      {children}
    </Link>
  ) : (
    <Link
      to={linkTo}
      className="w-[100px] cursor-pointer rounded-lg border-2 border-white px-5 py-2 text-gray-100 transition-all hover:bg-gray-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
