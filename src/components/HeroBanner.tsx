import { useState } from "react";
import { Play, Info, VolumeX, Volume2 } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative w-full h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Stranger Things"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--netflix-black))] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--netflix-black))] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 max-w-2xl">
        {/* Netflix Series Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="text-[hsl(var(--netflix-red))] text-xs font-bold tracking-[0.3em] uppercase">N Series</div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4 leading-tight tracking-wide drop-shadow-2xl" style={{ fontFamily: "'Arial Black', sans-serif", textShadow: "2px 2px 20px rgba(0,0,0,0.8)" }}>
          STRANGER THINGS
        </h1>

        {/* Info badges */}
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="text-green-500 font-bold text-base">97% Match</span>
          <span className="border border-foreground/50 px-1 py-0.5 text-xs text-foreground/70">TV-MA</span>
          <span className="text-foreground/70">4 Seasons</span>
          <span className="border border-foreground/50 px-1 py-0.5 text-xs text-foreground/70">HD</span>
        </div>

        {/* Description */}
        <p className="text-foreground/90 text-sm md:text-base mb-6 leading-relaxed max-w-lg line-clamp-3">
          When a boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["Suspenseful", "Sci-Fi", "Horror"].map((tag) => (
            <span key={tag} className="text-foreground/70 text-xs">
              {tag} <span className="text-foreground/30">•</span>
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded font-bold text-base hover:bg-foreground/80 transition-all active:scale-95">
            <Play className="w-5 h-5 fill-current" />
            Play
          </button>
          <button className="flex items-center gap-2 bg-foreground/30 text-foreground px-6 py-2.5 rounded font-bold text-base hover:bg-foreground/20 transition-all backdrop-blur-sm active:scale-95">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>

      {/* Mute Button */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-24 right-6 md:right-12 z-10 w-10 h-10 rounded-full border border-foreground/50 flex items-center justify-center hover:border-foreground transition-colors bg-black/30 backdrop-blur-sm"
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Age Rating badge */}
      <div className="absolute bottom-24 right-20 md:right-28 z-10 flex items-center gap-2">
        <div className="border-l-4 border-foreground/60 pl-2 py-1">
          <span className="text-sm font-medium text-foreground/80">TV-MA</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
