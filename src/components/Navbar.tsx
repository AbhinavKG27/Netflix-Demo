import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <Link to="/" className="text-primary font-extrabold text-2xl md:text-3xl tracking-tighter">
          NETFLIX
        </Link>

        <div className="flex items-center gap-3">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center bg-background/80 border border-border rounded animate-fade-in">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Titles, people, genres"
                className="bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none w-40 md:w-64"
                autoFocus
              />
              <button type="button" onClick={() => { setSearchOpen(false); setQuery(""); }} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <X size={18} />
              </button>
            </form>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="text-foreground hover:text-primary transition-colors">
              <Search size={22} />
            </button>
          )}

          {user ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <User size={16} className="text-primary-foreground" />
              </div>
              <button onClick={handleSignOut} className="text-muted-foreground hover:text-foreground transition-colors" title="Sign out">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-primary text-primary-foreground px-4 py-1.5 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
