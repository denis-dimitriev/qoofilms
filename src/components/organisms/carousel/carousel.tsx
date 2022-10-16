import { Card } from "../../molecules/card/card";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";
import { useState } from "react";
import { IUpcoming } from "../../../features/main-list/main-list.models";

interface CarouselProps {
  movies: IUpcoming[];
}

export const Carousel = ({ movies }: CarouselProps) => {
  const [pos, setPos] = useState<number>(0);

  const itemWidth = 100;

  const onNextClickHandler = () => {
    setPos((prev) => prev - itemWidth);
  };

  const onPrevClickHandler = () => {
    setPos((prev) => prev + itemWidth);
  };

  return (
    <div className="group relative max-h-[250px] w-full overflow-hidden">
      <ul className="flex h-full w-full">
        {movies.map((movie) => (
          <li
            className="transition:transform duration-300"
            key={movie.id}
            style={{ transform: `translateX(${pos}%)` }}
          >
            <Card title={movie.title} thumbnail={movie.backdrop_path} />
          </li>
        ))}
      </ul>
      <button
        className="absolute top-[40%] left-0 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-200 opacity-0 transition-all duration-700 hover:bg-gray-100 group-hover:opacity-100"
        onClick={onPrevClickHandler}
      >
        <ArrowLeftIcon className="w-[20px]" />
      </button>
      <button
        className="absolute top-[40%] right-0 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-200 opacity-0 transition-all duration-700 hover:bg-gray-100 group-hover:opacity-100"
        onClick={onNextClickHandler}
      >
        <ArrowRightIcon className="w-[20px]" />
      </button>
    </div>
  );
};
