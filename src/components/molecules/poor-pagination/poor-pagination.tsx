import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";

interface PoorPaginationProps {
  onNextPage: () => void;
  onPrevPage: () => void;
  currentPage: number;
  totalPages: number;
}

export const PoorPagination = ({
  onNextPage,
  onPrevPage,
  totalPages,
  currentPage,
}: PoorPaginationProps) => {
  return (
    <div className="flex w-full items-center gap-x-2 phone:justify-center">
      <button
        className="inline-flex items-center gap-x-1 rounded border bg-gray-900 py-2 px-3 text-sm font-thin text-white hover:bg-gray-800 hover:text-gray-200"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon className="w-[10px] fill-white" />
        <span className="tablet:hidden">Previous</span>
      </button>

      <span className="mr-1 ml-1 font-bold">
        {currentPage} of {totalPages}
      </span>

      <button
        className="inline-flex items-center gap-x-1 rounded border bg-gray-900 py-2 px-3 text-sm font-thin text-white hover:bg-gray-800 hover:text-gray-200"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        <span className="tablet:hidden">Next</span>
        <ArrowRightIcon className="w-[10px] fill-white" />
      </button>
    </div>
  );
};
