import { Link } from "react-router-dom";
import { Movie, FALLBACK_POSTER } from "@/lib/api";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const poster = movie.Poster !== "N/A" ? movie.Poster : FALLBACK_POSTER;

  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="group relative flex-shrink-0 w-[140px] md:w-[180px] lg:w-[200px] rounded-md overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="aspect-[2/3] bg-secondary">
        <img
          src={poster}
          alt={movie.Title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = FALLBACK_POSTER; }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm font-semibold text-foreground leading-tight line-clamp-2">{movie.Title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
