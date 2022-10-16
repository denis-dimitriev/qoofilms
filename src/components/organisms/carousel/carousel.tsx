import { Card } from "../../molecules/card/card";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";
import { useEffect, useState } from "react";
import { IUpcoming } from "../../../features/main-list/main-list.models";

interface CarouselProps {
  movies: IUpcoming[];
}

export const Carousel = ({ movies }: CarouselProps) => {
  const [pos, setPos] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(0);

  useEffect(() => {
    const carouselWindow = document.querySelector("#carousel-list");
    const carouselItem = document.querySelector("#carousel-list-item");
    if (carouselWindow && carouselItem) {
      setCarouselWidth(carouselWindow.clientWidth);
      setItemWidth(carouselItem.clientWidth);
    }
  }, [pos]);

  const totalWidth = itemWidth * (movies.length - 1);

  const onNextClickHandler = () => {
    const itemPerWindow = Math.floor(carouselWidth / itemWidth);
    const limitPos = totalWidth - carouselWidth;
    console.log(limitPos + " " + pos);
    setPos((prev) => {
      if (pos > limitPos) {
        return 0;
      }
      return prev - itemWidth;
    });
  };

  const onPrevClickHandler = () => {
    setPos((prev) => prev + itemWidth);
  };

  return (
    <div className="relative max-h-[250px] w-full overflow-hidden">
      <ul
        id="carousel-list"
        className="transition:transform flex h-full w-full duration-300"
        style={{ transform: `translateX(${pos}px)` }}
      >
        {movies.map((movie) => (
          <li id="carousel-list-item" key={movie.id}>
            <Card title={movie.title} thumbnail={movie.backdrop_path} />
          </li>
        ))}
      </ul>
      <button
        className="absolute top-[40%] left-0 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-200  transition-all duration-700 hover:bg-gray-100 "
        onClick={onPrevClickHandler}
      >
        <ArrowLeftIcon className="w-[20px]" />
      </button>
      <button
        className="absolute top-[40%] right-0 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-200  transition-all duration-700 hover:bg-gray-100"
        onClick={onNextClickHandler}
      >
        <ArrowRightIcon className="w-[20px]" />
      </button>
    </div>
  );
};
