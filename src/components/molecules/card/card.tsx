import { altNoImage } from "../../../assets/img";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CardProps {
  thumbnail: string;
  title: string;
}

export const Card = ({ thumbnail, title }: CardProps) => {
  return (
    <div className="group relative h-[300px] w-[220px] cursor-pointer  rounded  transition-all tablet-sm:h-[225px] tablet-sm:w-[150px]">
      <figure className="h-full w-full">
        <LazyLoadImage
          className="h-full w-full object-cover object-center"
          src={thumbnail}
          effect="black-and-white"
          placeholderSrc={altNoImage}
          width="100%"
          height="100%"
        />
      </figure>
      <figcaption className="absolute right-0 top-0 left-0  flex h-full w-full flex-col items-center justify-end bg-black/80 p-1 opacity-0 duration-100 ease-in-out group-hover:opacity-100 tablet:hidden">
        <h1 className="pb-5 text-center text-lg font-bold text-white">
          {title}
        </h1>
      </figcaption>
    </div>
  );
};
