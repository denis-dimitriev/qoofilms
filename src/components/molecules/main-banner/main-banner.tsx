import { altNoImage, avatarBanner } from "../../../assets/img";

export const MainBanner = () => {
  return (
    <section className="relative h-[300px] w-full phone:text-center">
      <figure className="h-full w-full bg-gradient-to-r from-black to-blue-900">
        <img
          className="h-full w-full object-cover object-top opacity-60"
          src={avatarBanner}
          alt={altNoImage}
        />
      </figure>
      <figcaption className="absolute top-[20%] left-0 w-1/2 p-2 text-gray-100 phone:w-full">
        <h1 className="mb-3 text-4xl font-bold ">Welcome!</h1>
        <h2 className="text-2xl">
          Millions of movies and TV shows discover. Explore now.
        </h2>
      </figcaption>
    </section>
  );
};
