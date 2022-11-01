import { useState } from "react";

export const useScrollNextPage = () => {
  const [page, setPage] = useState<number>(1);

  const scrollNextPage = () => setPage((prev) => prev + 1);

  const scrollPrevPage = () => setPage((prev) => prev - 1);

  return {
    page,
    scrollNextPage,
    scrollPrevPage,
  };
};
