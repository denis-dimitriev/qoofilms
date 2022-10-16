import { avatarBanner, defaultNoImage } from "../../../assets/img";
import { Route, Routes } from "react-router-dom";
import MainList from "../../../features/main-list/main-list";

const Homepage = () => {
  return (
    <div id="homepage" className="container flex flex-col gap-y-5 pt-[70px]">
      <section className="relative h-[300px] w-full phone:text-center">
        <figure className="h-full w-full bg-gradient-to-r from-black">
          <img
            className="h-full w-full object-cover object-top opacity-50"
            src={avatarBanner}
            alt={defaultNoImage}
          />
        </figure>
        <figcaption className="absolute top-[20%] left-0 w-1/2 p-2 text-gray-100 phone:w-full">
          <h1 className="mb-3 text-4xl font-bold ">Welcome!</h1>
          <h2 className="text-2xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </figcaption>
      </section>
      <Routes>
        <Route index element={<MainList />} />
      </Routes>
    </div>
  );
};

export default Homepage;
