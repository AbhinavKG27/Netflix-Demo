import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import MovieCardSkeleton from "@/components/MovieCardSkeleton";
import { SearchX } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [page, setPage] = useState(1);

  useEffect(() => { setPage(1); }, [query]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });

  const totalResults = data?.totalResults ? parseInt(data.totalResults) : 0;
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 md:px-12 pb-12">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          {query ? `Results for "${query}"` : "Search Movies"}
        </h1>

        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.from({ length: 10 }).map((_, i) => <MovieCardSkeleton key={i} />)}
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-destructive mb-2">Something went wrong</p>
            <p className="text-muted-foreground text-sm">Please try again later</p>
          </div>
        )}

        {!isLoading && !error && data?.Search && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 animate-fade-in">
              {data.Search.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded text-sm font-medium disabled:opacity-40 hover:bg-accent transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded text-sm font-medium disabled:opacity-40 hover:bg-accent transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {!isLoading && !error && data?.Response === "False" && (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <SearchX size={48} className="text-muted-foreground mb-4" />
            <p className="text-foreground text-lg font-medium mb-1">No results found</p>
            <p className="text-muted-foreground text-sm">Try searching for something else</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
