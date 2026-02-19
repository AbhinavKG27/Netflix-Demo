import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovies, Movie } from "@/lib/api";
import MovieCard from "./MovieCard";
import { MovieRowSkeleton } from "./MovieCardSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MovieRowProps {
  title: string;
  query: string;
}

const MovieRow = ({ title, query }: MovieRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", query],
    queryFn: () => searchMovies(query),
    staleTime: 1000 * 60 * 10,
  });

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  if (isLoading) return <MovieRowSkeleton />;
  if (error || !data?.Search?.length) return null;

  return (
    <div className="mb-8 group/row">
      <h2 className="text-lg md:text-xl font-bold text-foreground px-4 md:px-12 mb-3">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 w-10 md:w-12 bg-background/60 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronLeft className="text-foreground" size={28} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide px-4 md:px-12 py-2"
        >
          {data.Search.map((movie: Movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 w-10 md:w-12 bg-background/60 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <ChevronRight className="text-foreground" size={28} />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
