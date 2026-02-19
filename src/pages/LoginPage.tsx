import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, Lock, Loader2 } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-6 left-6 z-20">
        <Link to="/" className="text-primary font-extrabold text-3xl tracking-tighter">NETFLIX</Link>
      </div>

      <div className="relative z-10 w-full max-w-md bg-card/80 backdrop-blur-sm rounded-lg p-12 shadow-2xl animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-8">Sign In</h1>

        {error && (
          <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm rounded p-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground rounded px-10 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              minLength={6}
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground rounded px-10 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3.5 rounded font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            Sign In
          </button>
        </form>

        <p className="text-muted-foreground text-sm mt-8">
          New to Netflix?{" "}
          <Link to="/signup" className="text-foreground hover:underline font-medium">Sign up now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
