import { useAppSelector } from "../hooks/redux";
import { Fragment, useEffect } from "react";
import { TvShowDetails } from "./pages";
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
      {/* <Routes>
        <Route element={<Layout />}>
          <Route path="/*" element={<Homepage />}>
            <Route index element={<MainList />} />
            <Route path="movies/*" element={<Movies />} />
            <Route path="tv-shows" element={<TVShows />} />
            <Route path="tv-shows/*" element={<TVShows />} />
            <Route path="search/:title" element={<Search />} />
          </Route>
        </Route>
      </Routes>*/}
      <TvShowDetails />
    </Fragment>
  );
};
