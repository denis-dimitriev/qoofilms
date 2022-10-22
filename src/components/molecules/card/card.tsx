import { altNoImage } from "../../../assets/img";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CardProps {
  thumbnail: string;
  title: string;
}

export const Card = ({ thumbnail, title }: CardProps) => {
  return (
    <div className="group relative h-[250px] w-[200px] overflow-hidden rounded p-1 shadow-lg transition-all">
      <Link to="">
        <figure className="h-full w-full">
          <LazyLoadImage
            className="h-full w-full object-cover object-center"
            src={thumbnail}
            effect="opacity"
            placeholderSrc={altNoImage}
            width="100%"
            height="100%"
          />
        </figure>
        <figcaption className="absolute right-0 top-0 left-0 flex h-full w-full flex-col items-center justify-end bg-black/50 opacity-0 duration-300 ease-in-out group-hover:opacity-100 pc-sm:bg-black/10 pc-sm:opacity-100">
          <h1 className="pb-5 text-center text-lg font-bold text-white">{title}</h1>
        </figcaption>
      </Link>
    </div>
  );
};
