import { FilmIcon } from "@heroicons/react/24/outline";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex">
        <FilmIcon className="h-8 w-8 mr-4" />
        <h1 className="text-2xl font-bold">Popcorn Picks</h1>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
