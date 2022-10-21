import { HTMLProps, ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps extends HTMLProps<HTMLLinkElement> {
  children: ReactNode;
  type?: "ghost" | "primary";
  linkTo: string;
}

export const LinkButton = ({ children, type = "primary", linkTo }: LinkButtonProps) => {
  if (type === "ghost") {
    return (
      <Link
        to={linkTo}
        className="mr-2 mb-2 max-h-[40px]  w-[100px] rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={linkTo}
      className="mr-2 mb-2 max-h-[40px] w-[100px] rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
    >
      {children}
    </Link>
  );
};
