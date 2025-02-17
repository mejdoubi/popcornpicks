import { useState } from "react";

import MovieRating from "./MovieRating";
import MovieCard from "./MovieCard";

import { Movie } from "../types";
import { TMDB_IMAGE_URL } from "../constants";

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster = ({ movie }: MoviePosterProps) => {
  const [showPopover, setShowPopover] = useState(false);

  const openPopover = () => setShowPopover(true);
  const closePopover = () => setShowPopover(false);

  const { title, image_url: imageUrl, rating } = movie;

  return (
    <>
      <div className="relative rounded-lg cursor-pointer" onClick={openPopover}>
        <img
          src={`${TMDB_IMAGE_URL}${imageUrl}`}
          alt={title}
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 p-2">
          <MovieRating
            rating={rating}
            className="bg-secondary/75 rounded-full px-2 py-0.5"
          />
        </div>
      </div>
      {showPopover && <MovieCard movie={movie} onClose={closePopover} />}
    </>
  );
};

export default MoviePoster;
