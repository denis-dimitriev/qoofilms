import React from "react";
import { defaultNoImage } from "../../../assets/img";
import { Link } from "react-router-dom";

interface CardProps {
  thumbnail: string;
  title: string;
}

export const Card = ({ thumbnail, title }: CardProps) => {
  return (
    <div className="group relative h-[250px] w-[190px] overflow-hidden rounded p-1 shadow-lg transition-all">
      <Link to="">
        <figure className="h-full w-full duration-300 ease-in-out hover:opacity-90">
          <img
            className="h-full w-full object-cover object-center"
            src={thumbnail}
            alt={defaultNoImage}
          />
        </figure>
        <figcaption className="absolute bottom-[10%] left-0 w-full text-center opacity-0 duration-300 ease-in-out group-hover:opacity-100 tablet:opacity-100">
          <h1 className="mb-2 text-lg font-bold text-white ">{title}</h1>
        </figcaption>
      </Link>
    </div>
  );
};
