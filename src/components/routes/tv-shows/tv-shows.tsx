import { Route, Routes } from "react-router-dom";
import { TvOnTheAir, TvPopular, TvTopRated } from "../../pages";

export const TVShows = () => {
  return (
    <Routes>
      <Route path="on-the-air" element={<TvOnTheAir />} />
      <Route path="top-rated" element={<TvTopRated />} />
      <Route path="popular" element={<TvPopular />} />
    </Routes>
  );
};
