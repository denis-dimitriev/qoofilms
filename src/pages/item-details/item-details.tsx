import { useLazyGetMovieDetailsQuery } from "../../services/api/tmdbMovies";
import { useEffect } from "react";

const ItemDetails = () => {
  const [fetchMovie, { data }] = useLazyGetMovieDetailsQuery();

  console.log(data);

  useEffect(() => {
    fetchMovie(101);
  }, []);

  return <div></div>;
};

export default ItemDetails;
