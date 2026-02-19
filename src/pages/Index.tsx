import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/lib/api";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroBanner />
    <div className="-mt-16 relative z-10">
      {CATEGORIES.map((cat) => (
        <MovieRow key={cat.query} title={cat.title} query={cat.query} />
      ))}
    </div>
    <Footer />
  </div>
);

export default Index;
