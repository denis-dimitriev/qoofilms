import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <h1 className="flex items-center gap-2 text-2xl font-bold leading-8 text-gray-700 tablet:text-xl">{children}</h1>
  );
};
