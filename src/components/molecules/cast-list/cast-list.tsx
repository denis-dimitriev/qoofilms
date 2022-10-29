import { ICast } from "../../../types/credits";
import { Tag } from "../../atoms";
import { altNoImage } from "../../../assets/img";

interface CastListProps {
  cast: ICast[];
}

export const CastList = ({ cast }: CastListProps) => {
  const topActors: ICast[] = cast.slice(0, 9);

  return (
    <div className="flex h-[600px] min-w-[130px] flex-col items-start overflow-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-500 tablet-sm:w-full tablet-sm:items-center tablet:h-auto">
      <Tag>Top cast</Tag>
      <ul className="flex flex-col tablet-sm:flex-row tablet-sm:flex-wrap tablet-sm:justify-center">
        {topActors.map((actor) => (
          <li key={`${actor.id + actor.name}`} className="w-[100px] p-2">
            <div className="flex flex-col">
              <img
                className="h-full w-full"
                src={actor.profile_path ? actor.profile_path : altNoImage}
                alt={""}
              />
              <span className="text-sm font-bold">{actor.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
