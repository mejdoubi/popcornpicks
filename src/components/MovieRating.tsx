import { StarIcon } from "@heroicons/react/16/solid";

interface MovieRatingProps {
  rating: number;
  className?: string;
}

const MovieRating = ({ rating, className }: MovieRatingProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <StarIcon className="w-4 h-4 text-primary" />
      <span className="ml-1 text-sm font-semibold">{rating}</span>
    </div>
  );
};

export default MovieRating;
