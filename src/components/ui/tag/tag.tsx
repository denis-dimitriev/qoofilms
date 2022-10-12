import { HTMLProps, ReactNode } from "react";

interface TagProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <h1 className="text-2xl font-bold leading-8 text-gray-700">{children}</h1>
  );
};
