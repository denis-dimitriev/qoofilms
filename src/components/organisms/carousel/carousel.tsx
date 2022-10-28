import { Card } from "../../molecules";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";
import { useEffect, useState } from "react";
import { IMovie, ITVShow } from "../../../types/app.types";
import { Link } from "react-router-dom";

interface CarouselProps {
  list: IMovie[] | ITVShow[];
  linkPath?: string;
}

export const Carousel = ({ list, linkPath }: CarouselProps) => {
  const [pos, setPos] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const itemWidth = 220;

  useEffect(() => {
    const carouselWindow = document.querySelector("#carousel-list");
    if (carouselWindow) {
      setCarouselWidth(carouselWindow.clientWidth);
    }
  }, [pos]);

  const totalWidth = itemWidth * list.length;

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
    <div className="relative h-[300px] w-full overflow-hidden">
      <ul
        id="carousel-list"
        className="transition:transform flex h-full w-full duration-300"
        style={{ transform: `translateX(${pos}px)` }}
      >
        {list.map((movie) => (
          <li id="carousel-list-item" key={movie.id}>
            <Link to={`${linkPath}/${movie.id}`}>
              <Card
                title={"title" in movie ? movie.title : movie.name}
                thumbnail={
                  movie.poster_path ? movie.poster_path : movie.backdrop_path
                }
              />
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="group absolute top-[45%] left-0 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-900/70  transition-all duration-200 hover:bg-gray-300"
        onClick={onPrevClickHandler}
      >
        <ArrowLeftIcon className="w-[16px] fill-white group-hover:fill-black" />
      </button>
      <button
        className="group absolute  top-[45%] right-0 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-900/70  transition-all duration-200 hover:bg-gray-300"
        onClick={onNextClickHandler}
      >
        <ArrowRightIcon className="w-[16px] fill-white group-hover:fill-black" />
      </button>
    </div>
  );
};
