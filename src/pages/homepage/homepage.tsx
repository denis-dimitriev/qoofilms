import { Route, Routes } from "react-router-dom";
import MoviesUpcoming from "../movies-upcoming/movies-upcoming";
import MoviesTopRated from "../movies-top-rated/movies-top-rated";
import MoviesPopular from "../movies-popular/movies-popular";
import MoviesNowPlaying from "../movies-now-playing/movies-now-playing";
import TvOnTheAir from "../tv-on-the-air/tv-on-the-air";
import TvTopRated from "../tv-top-rated/tv-top-rated";
import TvPopular from "../tv-popular/tv-popular";
import SearchResult from "../search-result/search-result";

const Homepage = () => {
  return (
    <div id="homepage" className="container flex flex-col gap-y-5 pt-[70px]">
      <Routes>
        {/*<Route index element={<MainList />} />*/}
        <Route path="upcoming-movies" element={<MoviesUpcoming />} />
        <Route path="top-rated-movies" element={<MoviesTopRated />} />
        <Route path="popular-movies" element={<MoviesPopular />} />
        <Route path="now-playing-movies" element={<MoviesNowPlaying />} />
        <Route path="tv-on-the-air" element={<TvOnTheAir />} />
        <Route path="tv-top-rated" element={<TvTopRated />} />
        <Route path="tv-popular" element={<TvPopular />} />
        <Route path="search/:title" element={<SearchResult />} />
      </Routes>
    </div>
  );
};

export default Homepage;
