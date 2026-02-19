import { useQuery } from "@tanstack/react-query";
import { searchMovies, FALLBACK_POSTER } from "@/lib/api";
import { Link } from "react-router-dom";
import { Play, Info } from "lucide-react";

const HeroBanner = () => {
  const { data } = useQuery({
    queryKey: ["hero-movies"],
    queryFn: () => searchMovies("inception"),
    staleTime: 1000 * 60 * 30,
  });

  const movie = data?.Search?.[0];
  if (!movie) return <div className="h-[70vh] bg-secondary" />;

  const poster = movie.Poster !== "N/A" ? movie.Poster : FALLBACK_POSTER;

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={poster} alt={movie.Title} className="w-full h-full object-cover opacity-40 blur-sm scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      <div className="relative h-full flex items-end pb-20 md:pb-28 px-4 md:px-12">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">{movie.Title}</h1>
          <p className="text-muted-foreground text-sm md:text-base mb-6">{movie.Year} • Movie</p>
          <div className="flex gap-3">
            <Link
              to={`/movie/${movie.imdbID}`}
              className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded font-semibold text-sm hover:bg-foreground/80 transition-colors"
            >
              <Play size={18} fill="currentColor" /> Play
            </Link>
            <Link
              to={`/movie/${movie.imdbID}`}
              className="flex items-center gap-2 bg-secondary/80 text-foreground px-6 py-2.5 rounded font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Info size={18} /> More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
