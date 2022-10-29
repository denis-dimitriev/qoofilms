import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Tag } from "../../atoms";
import { IPoster } from "../../../types/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { altNoImage } from "../../../assets/img";

interface PosterListProps {
  posters: IPoster[];
}

export const PosterList = ({ posters }: PosterListProps) => {
  const ref = useRef<HTMLUListElement>() as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  return (
    <div className="mt-5 flex h-auto w-full flex-col">
      <Tag>Posters</Tag>
      <ul
        id="poster"
        className="mt-1 flex gap-x-2 overflow-x-scroll pb-3 transition-all duration-300 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900"
        {...events}
        ref={ref}
      >
        {posters.map((backdrop) => (
          <li
            key={backdrop.file_path}
            className="h-[310px] min-w-[200px] cursor-grab"
          >
            <LazyLoadImage
              className="h-full w-full object-cover object-center"
              src={backdrop.file_path}
              effect="opacity"
              placeholderSrc={altNoImage}
              width="100%"
              height="100%"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
