import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Tag } from "../../atoms";
import { IPoster } from "../../../types/images";

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
        className="flex gap-x-2 overflow-x-scroll pb-2 transition-all duration-300 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900"
        {...events}
        ref={ref}
      >
        {posters.map((backdrop) => (
          <li
            key={backdrop.file_path}
            className="h-[310px] min-w-[200px] cursor-grab"
          >
            <img
              className="h-[300px] w-full object-contain"
              src={backdrop.file_path}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
