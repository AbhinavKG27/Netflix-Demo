import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails, FALLBACK_POSTER } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, Clock, Calendar } from "lucide-react";

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: movie, isLoading, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 px-4 md:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-80 aspect-[2/3] bg-secondary animate-pulse rounded-lg" />
            <div className="flex-1 space-y-4">
              <div className="h-10 w-3/4 bg-secondary animate-pulse rounded" />
              <div className="h-4 w-1/2 bg-secondary animate-pulse rounded" />
              <div className="h-32 bg-secondary animate-pulse rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 flex flex-col items-center justify-center min-h-[60vh]">
          <p className="text-destructive text-lg mb-4">Failed to load movie details</p>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const poster = movie.Poster !== "N/A" ? movie.Poster : FALLBACK_POSTER;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src={poster} alt="" className="w-full h-full object-cover opacity-10 blur-2xl scale-110" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 pt-24 px-4 md:px-12 pb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={18} /> Back
        </Link>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 animate-fade-in">
          <div className="w-full md:w-80 flex-shrink-0">
            <img
              src={poster}
              alt={movie.Title}
              className="w-full rounded-lg shadow-2xl shadow-primary/10"
              onError={(e) => { e.currentTarget.src = FALLBACK_POSTER; }}
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-3">{movie.Title}</h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              {movie.imdbRating !== "N/A" && (
                <span className="flex items-center gap-1 text-primary font-semibold">
                  <Star size={16} fill="currentColor" /> {movie.imdbRating}
                </span>
              )}
              {movie.Year && <span className="flex items-center gap-1"><Calendar size={14} /> {movie.Year}</span>}
              {movie.Runtime !== "N/A" && <span className="flex items-center gap-1"><Clock size={14} /> {movie.Runtime}</span>}
              {movie.Rated !== "N/A" && <span className="px-2 py-0.5 border border-border rounded text-xs">{movie.Rated}</span>}
            </div>

            {movie.Genre && (
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.Genre.split(", ").map((g) => (
                  <span key={g} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">{g}</span>
                ))}
              </div>
            )}

            <p className="text-foreground/90 leading-relaxed mb-8">{movie.Plot}</p>

            <div className="space-y-3 text-sm">
              {movie.Director !== "N/A" && (
                <div><span className="text-muted-foreground">Director:</span> <span className="text-foreground ml-2">{movie.Director}</span></div>
              )}
              {movie.Actors !== "N/A" && (
                <div><span className="text-muted-foreground">Cast:</span> <span className="text-foreground ml-2">{movie.Actors}</span></div>
              )}
              {movie.Awards !== "N/A" && (
                <div><span className="text-muted-foreground">Awards:</span> <span className="text-foreground ml-2">{movie.Awards}</span></div>
              )}
              {movie.BoxOffice && movie.BoxOffice !== "N/A" && (
                <div><span className="text-muted-foreground">Box Office:</span> <span className="text-foreground ml-2">{movie.BoxOffice}</span></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetailsPage;
