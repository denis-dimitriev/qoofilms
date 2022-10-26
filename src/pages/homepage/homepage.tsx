import { ItemDetails } from "../item-details/item-details";

export const Homepage = () => {
  return (
    <div
      id="homepage"
      className="container relative flex flex-col gap-y-5 pt-[70px]"
    >
      {/*   <Routes>
         <Route index element={<MainList />} />
        <Route path="upcoming-movies" element={<MoviesUpcoming />} />
        <Route path="top-rated-movies" element={<MoviesTopRated />} />
        <Route path="popular-movies" element={<MoviesPopular />} />
        <Route path="now-playing-movies" element={<MoviesNowPlaying />} />
        <Route path="tv-on-the-air" element={<TvOnTheAir />} />
        <Route path="tv-top-rated" element={<TvTopRated />} />
        <Route path="tv-popular" element={<TvPopular />} />
        <Route path="search/:title" element={<SearchResult />} />
      </Routes>*/}
      <ItemDetails />
    </div>
  );
};
