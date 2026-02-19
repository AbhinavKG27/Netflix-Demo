import { useState } from "react";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  index?: number;
  showRank?: boolean;
}

const MovieCard = ({ movie, index, showRank = false }: MovieCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 cursor-pointer group"
      style={{ width: "200px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Rank Number */}
      {showRank && index !== undefined && (
        <div
          className="absolute -left-6 bottom-0 z-10 text-7xl font-black leading-none select-none"
          style={{
            WebkitTextStroke: "2px hsl(var(--muted-foreground))",
            color: "transparent",
            fontFamily: "'Arial Black', Impact, sans-serif",
          }}
        >
          {index + 1}
        </div>
      )}

      {/* Card */}
      <div
        className={`relative overflow-hidden rounded transition-all duration-300 ${
          hovered
            ? "scale-125 z-30 shadow-2xl shadow-black/80"
            : "scale-100 z-10"
        }`}
        style={{ aspectRatio: "2/3" }}
      >
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Hover overlay */}
        {hovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent">
            {/* Video preview placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              {/* Action buttons */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors">
                    <Play className="w-4 h-4 fill-black text-black" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-foreground/50 flex items-center justify-center hover:border-foreground transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-foreground/50 flex items-center justify-center hover:border-foreground transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                </div>
                <button className="w-8 h-8 rounded-full border border-foreground/50 flex items-center justify-center hover:border-foreground transition-colors">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Match */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-500 text-xs font-bold">{movie.match}% Match</span>
                <span className="border border-foreground/40 px-1 text-[10px] text-foreground/70">{movie.rating}</span>
                <span className="text-foreground/70 text-xs">{movie.duration}</span>
              </div>

              {/* Genres */}
              <div className="flex items-center gap-1 flex-wrap">
                {movie.genres.slice(0, 2).map((g, i) => (
                  <span key={g} className="text-[10px] text-foreground/70">
                    {g}{i < Math.min(movie.genres.length, 2) - 1 && <span className="mx-1 text-foreground/30">•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Title below card (not visible on hover due to scale) */}
      {!hovered && (
        <p className="mt-1 text-xs text-foreground/60 truncate px-1">{movie.title}</p>
      )}
    </div>
  );
};

export default MovieCard;
