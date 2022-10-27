import { Tag } from "../../atoms";
import { IPoster } from "../../../types/movie-images";

interface PosterListProps {
  posters: IPoster[];
}

export const PosterList = ({ posters }: PosterListProps) => {
  return (
    <div className="mt-5 flex h-auto w-full flex-col">
      <Tag>Posters</Tag>
      <ul className="flex gap-x-2 overflow-x-scroll pb-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900">
        {posters.map((backdrop) => (
          <li key={backdrop.file_path} className="h-[310px] min-w-[200px]">
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
