import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

import { useDebounce } from "../hooks/useDebounce";
import { useMovies } from "../hooks/useMovies";

const SearchBar = () => {
  const { setQueryString } = useMovies();
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setQueryString(debouncedValue);
  }, [debouncedValue, setQueryString]);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value || "")}
        placeholder="Search for movies..."
        className="w-full pl-4 pr-10 py-2 bg-secondary rounded-lg"
      />
      <MagnifyingGlassIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5" />
    </div>
  );
};

export default SearchBar;
