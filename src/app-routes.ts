type LinksType = {
  name: string;
  path: string;
};

export const moviesLinks: LinksType[] = [
  {
    name: "Popular",
    path: "movies-popular",
  },
  {
    name: "Top Rated",
    path: "movies-top-rated",
  },
  {
    name: "Up Coming",
    path: "movies-upcoming",
  },
  {
    name: "Now Playing",
    path: "now-playing",
  },
];

export const tvShowLinks: LinksType[] = [
  {
    name: "Popular",
    path: "tv-popular",
  },
  {
    name: "On The Air",
    path: "tv-on-the-air",
  },
  {
    name: "Now Playing",
    path: "now-playing",
  },
];
