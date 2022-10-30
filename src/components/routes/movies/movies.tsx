import { Route, Routes } from "react-router-dom";
import {
  MovieDetails,
  MoviesAll,
  MoviesNowPlaying,
  MoviesPopular,
  MoviesTopRated,
  MoviesUpcoming,
} from "../../pages";

export const Movies = () => {
  return (
    <Routes>
      <Route path="upcoming" element={<MoviesUpcoming />} />
      <Route path="top-rated" element={<MoviesTopRated />} />
      <Route path="popular" element={<MoviesPopular />} />
      <Route path="now-playing" element={<MoviesNowPlaying />} />
      <Route path="all" element={<MoviesAll />} />
      <Route path=":id" element={<MovieDetails />} />
    </Routes>
  );
};
