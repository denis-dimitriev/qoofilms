import { Route, Routes } from "react-router-dom";
import MainList from "../main-list/main-list";
import UpcomingMovies from "../upcoming-movies/upcoming-movies";

const Homepage = () => {
  return (
    <div id="homepage" className="container flex flex-col gap-y-5 pt-[70px]">
      <Routes>
        <Route index element={<MainList />} />
        <Route path="upcoming-movies" element={<UpcomingMovies />} />
      </Routes>
    </div>
  );
};

export default Homepage;
