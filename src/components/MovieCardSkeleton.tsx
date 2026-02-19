const MovieCardSkeleton = () => (
  <div className="flex-shrink-0 w-[140px] md:w-[180px] lg:w-[200px] rounded-md overflow-hidden">
    <div className="aspect-[2/3] bg-secondary animate-pulse rounded-md" />
  </div>
);

export const MovieRowSkeleton = () => (
  <div className="px-4 md:px-12 mb-8">
    <div className="h-6 w-40 bg-secondary animate-pulse rounded mb-4" />
    <div className="flex gap-3 overflow-hidden">
      {Array.from({ length: 7 }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export default MovieCardSkeleton;
