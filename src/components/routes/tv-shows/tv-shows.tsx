import { Route, Routes } from "react-router-dom";
import {
  TvOnTheAir,
  TvPopular,
  TvShowDetails,
  TvShowsAll,
  TvTopRated,
} from "../../pages";

export const TVShows = () => {
  return (
    <Routes>
      <Route path="on-the-air" element={<TvOnTheAir />} />
      <Route path="top-rated" element={<TvTopRated />} />
      <Route path="popular" element={<TvPopular />} />
      <Route path="all" element={<TvShowsAll />} />
      <Route path=":id" element={<TvShowDetails />} />
    </Routes>
  );
};
