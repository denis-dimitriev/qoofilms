import { Card } from "../../molecules";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";
import { useEffect, useState } from "react";
import { IMovie, ITVShow } from "../../../types/app.types";

interface CarouselProps {
  movies: IMovie[] | ITVShow[];
}

export const Carousel = ({ movies }: CarouselProps) => {
  const [pos, setPos] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const itemWidth = 220;

  useEffect(() => {
    const carouselWindow = document.querySelector("#carousel-list");
    if (carouselWindow) {
      setCarouselWidth(carouselWindow.clientWidth);
    }
  }, [pos]);

  const totalWidth = itemWidth * movies.length;

  const onNextClickHandler = () => {
    const limitPos = -Math.abs(totalWidth - carouselWidth - itemWidth);
    setPos((prev) => {
      if (pos <= limitPos) {
        return 0;
      }
      return prev - itemWidth;
    });
  };

  const onPrevClickHandler = () => {
    const limitPos = totalWidth - carouselWidth;
    setPos((prev) => {
      if (pos >= 0) {
        return -limitPos;
      }
      return prev + itemWidth;
    });
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
            <Card
              title={"title" in movie ? movie.title : movie.name}
              thumbnail={movie.backdrop_path ? movie.backdrop_path : movie.poster_path}
            />
          </li>
        ))}
      </ul>
      <button
        className="absolute top-[40%] left-0 z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-300  transition-all duration-300 hover:bg-white"
        onClick={onPrevClickHandler}
      >
        <ArrowLeftIcon className="w-[16px]" />
      </button>
      <button
        className="absolute top-[40%] right-0 z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-300  transition-all duration-300 hover:bg-white"
        onClick={onNextClickHandler}
      >
        <ArrowRightIcon className="w-[16px]" />
      </button>
    </div>
  );
};
