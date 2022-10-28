import { ICrew } from "../../../types/movie-credits";

interface CrewListProps {
  crewList: ICrew[];
}

export const CrewList = ({ crewList }: CrewListProps) => {
  const topCrew: ICrew[] = crewList.slice(0, 10);

  return (
    <div className="flex flex-col tablet-sm:items-center">
      <h3 className="mt-3 font-bold">Crew</h3>
      <ul className="flex w-full flex-wrap tablet-sm:justify-center">
        {topCrew.map((job) => (
          <li
            key={`${job.id} + ${job.department}`}
            className="p-1 text-sm font-bold"
          >
            {job.department}:&nbsp;
            <span className="text-sm font-medium">{job.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
