import { useState, useEffect } from "react";
import { Search, Bell, ChevronDown, Menu, X } from "lucide-react";

const NetflixNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(var(--netflix-black))]"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Netflix Logo */}
          <a href="#" className="flex-shrink-0">
            <svg viewBox="0 0 111 30" className="h-6 md:h-8 fill-[hsl(var(--netflix-red))]">
              <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.942-10.558-4.01 9.505c-1.65-.29-3.304-.57-4.99-.75l6.88-15.444L94.04 0h5.16l3.629 9.672L106.44 0h5.24l-6.62 14.28zM90.09 0h-4.99v27.16c1.652.09 3.306.234 4.99.42V0zm-10.46 0H74.65v25.01c1.635.235 3.27.504 4.98.685V0zM59.37 0v23.73c1.634.172 3.268.38 4.898.583V0H59.37zm-15.3 0l.023 22.08c1.616.124 3.234.283 4.85.434V0h-4.873zM34.61 0H29.6v20.38c1.644.058 3.288.143 4.96.23V0zM19.38 0L14.3 0 14.3 19.57c1.66-.02 3.318-.023 4.98-.018L19.38 0zM4.98 0H0v18.94C1.658 18.888 3.316 18.863 4.98 18.87V0z" />
            </svg>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-4 text-sm text-foreground/80">
            <li><a href="#" className="hover:text-foreground transition-colors font-medium text-foreground">Home</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">TV Shows</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Movies</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">New & Popular</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">My List</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Browse by Languages</a></li>
          </ul>

          {/* Mobile Browse */}
          <button
            className="md:hidden flex items-center gap-1 text-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Browse <ChevronDown className={`w-4 h-4 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2">
            {searchOpen ? (
              <div className="flex items-center border border-foreground/60 bg-black/80 px-3 py-1 gap-2">
                <Search className="w-4 h-4 text-foreground/60" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Titles, people, genres"
                  className="bg-transparent outline-none text-sm w-40 md:w-56 text-foreground placeholder:text-foreground/40"
                />
                <X className="w-4 h-4 cursor-pointer text-foreground/60 hover:text-foreground" onClick={() => { setSearchOpen(false); setSearchQuery(""); }} />
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)}>
                <Search className="w-5 h-5 text-foreground hover:text-foreground/70 transition-colors" />
              </button>
            )}
          </div>

          <span className="hidden md:block text-sm text-foreground/80 hover:text-foreground cursor-pointer transition-colors">Kids</span>

          <button className="relative">
            <Bell className="w-5 h-5 text-foreground hover:text-foreground/70 transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[hsl(var(--netflix-red))] rounded-full" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-1 cursor-pointer group">
            <div className="w-8 h-8 rounded bg-[hsl(var(--netflix-red))] flex items-center justify-center text-xs font-bold">N</div>
            <ChevronDown className="w-4 h-4 text-foreground transition-transform group-hover:rotate-180 duration-200" />
            {/* Dropdown */}
            <div className="absolute top-14 right-4 md:right-12 hidden group-hover:block bg-black/95 border border-foreground/10 py-2 min-w-[200px] shadow-2xl z-50">
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 cursor-pointer">
                <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">U</div>
                <span className="text-sm">User 1</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 cursor-pointer">
                <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center text-xs font-bold">K</div>
                <span className="text-sm">Kids</span>
              </div>
              <div className="border-t border-foreground/10 my-1" />
              <div className="px-4 py-2 hover:bg-white/5 cursor-pointer text-sm text-foreground/70 hover:text-foreground">Manage Profiles</div>
              <div className="px-4 py-2 hover:bg-white/5 cursor-pointer text-sm text-foreground/70 hover:text-foreground">Account</div>
              <div className="px-4 py-2 hover:bg-white/5 cursor-pointer text-sm text-foreground/70 hover:text-foreground">Help Center</div>
              <div className="border-t border-foreground/10 my-1" />
              <div className="px-4 py-2 hover:bg-white/5 cursor-pointer text-sm text-foreground/70 hover:text-foreground">Sign out of Netflix</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-foreground/10 py-4">
          {["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-6 py-3 text-sm hover:bg-white/5 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NetflixNavbar;
