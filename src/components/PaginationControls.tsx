import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import { useMovies } from "../hooks/useMovies";

const PaginationControls = () => {
  const { isNextPageDisabled, isPreviousPageDisabled, nextPage, previousPage } =
    useMovies();

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={previousPage}
        disabled={isPreviousPageDisabled}
        className={`px-4 py-2 bg-primary rounded ${
          isPreviousPageDisabled
            ? "bg-primary/50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextPage}
        disabled={isNextPageDisabled}
        className={`px-4 py-2 bg-primary rounded  ${
          isNextPageDisabled
            ? "bg-primary/50  cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default PaginationControls;
