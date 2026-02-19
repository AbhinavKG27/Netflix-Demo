import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/data/movies";
import MovieCard from "./MovieCard";

interface MovieRowProps {
  title: string;
  movies: Movie[];
  showRank?: boolean;
}

const MovieRow = ({ title, movies, showRank = false }: MovieRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return;
    const scrollAmount = rowRef.current.clientWidth * 0.8;
    rowRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  return (
    <div className="mb-8 group/row">
      {/* Row title */}
      <div className="px-4 md:px-12 mb-3 flex items-center gap-3">
        <h2 className="text-foreground font-bold text-base md:text-xl hover:text-[hsl(var(--netflix-red))] cursor-pointer transition-colors">
          {title}
        </h2>
        <span className="text-[hsl(var(--netflix-red))] text-xs font-semibold opacity-0 group-hover/row:opacity-100 transition-opacity flex items-center gap-1">
          Explore All <ChevronRight className="w-3 h-3" />
        </span>
      </div>

      {/* Scrollable row */}
      <div className="relative">
        {/* Left arrow */}
        {showLeftArrow && (
          <button
            className="absolute left-0 top-0 bottom-0 z-20 w-12 flex items-center justify-center bg-gradient-to-r from-black/80 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity hover:from-black"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-8 h-8 text-foreground" />
          </button>
        )}

        {/* Right arrow */}
        {showRightArrow && (
          <button
            className="absolute right-0 top-0 bottom-0 z-20 w-12 flex items-center justify-center bg-gradient-to-l from-black/80 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity hover:from-black"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-8 h-8 text-foreground" />
          </button>
        )}

        {/* Cards */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className={`flex gap-2 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-12 pt-4 ${showRank ? "pl-10 md:pl-16" : ""}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie, idx) => (
            <MovieCard key={movie.id} movie={movie} index={idx} showRank={showRank} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
