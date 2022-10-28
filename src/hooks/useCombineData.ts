import { useEffect, useState } from "react";
import { MovieTypes } from "../types/general.types";

export const useCombineData = (data: MovieTypes | undefined): MovieTypes => {
  const [movieList, setMovieList] = useState<MovieTypes>([]);

  useEffect(() => {
    if (data) {
      setMovieList((prevState: any[]) => [...prevState, ...data]);
    }
  }, [data]);

  return movieList;
};
