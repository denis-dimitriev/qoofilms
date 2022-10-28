import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkBadgeProps {
  children: ReactNode;
  link: string;
}

export const LinkBadge = ({ children, link }: LinkBadgeProps) => {
  return (
    <Link
      className="flex max-h-[20px] items-center rounded-3xl bg-emerald-900 px-2 text-[10px] font-light text-white transition-colors hover:bg-gray-600"
      to={link}
    >
      {children}
    </Link>
  );
};
