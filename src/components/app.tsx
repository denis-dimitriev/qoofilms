import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { useAppSelector } from "../hooks/redux";
import { Fragment, useEffect } from "react";
import {
  Homepage,
  MainList,
  MoviesNowPlaying,
  MoviesPopular,
  MoviesTopRated,
  MoviesUpcoming,
  SearchResult,
  TvOnTheAir,
  TvPopular,
  TvTopRated,
} from "./pages";
import { MobileMenu } from "./molecules";

export const App = () => {
  const { MobileMenuOpen } = useAppSelector((state) => state.mobileMenu);
  const { galleryOpen } = useAppSelector((state) => state.gallery);

  useEffect(() => {
    if (MobileMenuOpen || galleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [MobileMenuOpen, galleryOpen]);

  return (
    <Fragment>
      {MobileMenuOpen && <MobileMenu />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Homepage />}>
            <Route index element={<MainList />} />
            <Route path="movies-upcoming" element={<MoviesUpcoming />} />
            <Route path="movies-top-rated" element={<MoviesTopRated />} />
            <Route path="movies-popular" element={<MoviesPopular />} />
            <Route path="movies-now-playing" element={<MoviesNowPlaying />} />
            <Route path="tv-on-the-air" element={<TvOnTheAir />} />
            <Route path="tv-top-rated" element={<TvTopRated />} />
            <Route path="tv-popular" element={<TvPopular />} />
            <Route path="search/:title" element={<SearchResult />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};
