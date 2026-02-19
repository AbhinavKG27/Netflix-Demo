import NetflixNavbar from "@/components/NetflixNavbar";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import NetflixFooter from "@/components/NetflixFooter";
import {
  trendingNow,
  topPicksForYou,
  continueWatching,
  newReleases,
  actionThriller,
  allMovies,
} from "@/data/movies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NetflixNavbar />
      <HeroBanner />

      {/* Content rows */}
      <div className="-mt-16 relative z-10">
        <MovieRow title="Trending Now" movies={trendingNow} />
        <MovieRow title="Top 10 in Your Country Today" movies={allMovies.slice(0, 6)} showRank />
        <MovieRow title="Continue Watching for You" movies={continueWatching} />
        <MovieRow title="New Releases" movies={newReleases} />
        <MovieRow title="Top Picks For You" movies={topPicksForYou} />
        <MovieRow title="Action & Thriller" movies={actionThriller} />
        <MovieRow title="Watch It Again" movies={[...allMovies].reverse().slice(0, 6)} />
      </div>

      <NetflixFooter />
    </div>
  );
};

export default Index;
