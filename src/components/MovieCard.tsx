import { XMarkIcon } from "@heroicons/react/16/solid";
import MovieRating from "./MovieRating";

import { Movie } from "../types";
import { TMDB_IMAGE_URL } from "../constants";

interface MovieCardProps {
  movie: Movie;
  onClose: () => void;
}

const MovieCard = ({ movie, onClose }: MovieCardProps) => {
  const { title, description, image_url: imageUrl, rating } = movie;

  return (
    <div
      className="fixed inset-0 bg-background/75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-secondary flex w-3/5 rounded-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${TMDB_IMAGE_URL}${imageUrl}`}
          alt={title}
          className="w-1/3 object-cover rounded-tl-lg rounded-bl-lg "
        />
        <div className="p-4 flex-grow">
          <h2 className="text-xl font-semibold text-primary mb-1">{title}</h2>
          <p className="text-text-secondary mb-4">{description}</p>
          <MovieRating rating={rating} />
        </div>
        <button
          className="absolute top-4 right-4 text-primary cursor-pointer"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
