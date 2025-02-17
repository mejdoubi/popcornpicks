import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import MoviePoster from "./MoviePoster";
import PaginationControls from "./PaginationControls";

import { useMovies } from "../hooks/useMovies";

const MoviesList = () => {
  const { errorMessage, isFetching, movies, totalMovies } = useMovies();

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <p className="text-xl font-semibold">Total Movies: {totalMovies}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-8">
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </div>
      <PaginationControls />
    </div>
  );
};

export default MoviesList;
