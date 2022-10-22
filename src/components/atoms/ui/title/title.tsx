import { HTMLProps, ReactNode } from "react";

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1 className={`${className} mb-2 mt-5 text-center text-4xl font-extrabold text-gray-900`}>
      <span className="bg-gradient-to-r from-black/60 to-sky-500 bg-clip-text text-transparent">{children}</span>
    </h1>
  );
};
