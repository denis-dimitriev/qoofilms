import { useState } from "react";

export const useScrollNextPage = () => {
  const [page, setPage] = useState<number>(1);

  function scrollNextPage() {
    setPage((prev) => prev + 1);
  }

  return {
    page,
    scrollNextPage,
  };
};
