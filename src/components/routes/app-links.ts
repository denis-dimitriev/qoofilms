type LinksType = {
  name: string;
  path: string;
};

export const moviesLinks: LinksType[] = [
  {
    name: "Popular",
    path: "movies/popular",
  },
  {
    name: "Top Rated",
    path: "movies/top-rated",
  },
  {
    name: "Up Coming",
    path: "movies/upcoming",
  },
  {
    name: "Now Playing",
    path: "movies/now-playing",
  },
  {
    name: "All Movies",
    path: "movies/all",
  },
];

export const tvShowLinks: LinksType[] = [
  {
    name: "Popular",
    path: "tv-shows/popular",
  },
  {
    name: "On The Air",
    path: "tv-shows/on-the-air",
  },
  {
    name: "Top Rated",
    path: "tv-shows/top-rated",
  },
  {
    name: "All Tv Shows",
    path: "tv-shows/all",
  },
];
