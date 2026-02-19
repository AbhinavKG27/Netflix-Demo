import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, Lock, User, Loader2 } from "lucide-react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signUp(email, password, displayName);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-6 left-6 z-20">
        <Link to="/" className="text-primary font-extrabold text-3xl tracking-tighter">NETFLIX</Link>
      </div>

      <div className="relative z-10 w-full max-w-md bg-card/80 backdrop-blur-sm rounded-lg p-12 shadow-2xl animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-8">Sign Up</h1>

        {success ? (
          <div className="text-center py-6">
            <div className="text-primary text-5xl mb-4">✓</div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Check your email</h2>
            <p className="text-muted-foreground text-sm mb-6">
              We've sent a confirmation link to <span className="text-foreground">{email}</span>
            </p>
            <Link to="/login" className="text-primary hover:underline font-medium text-sm">
              Back to Sign In
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm rounded p-3 mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-muted-foreground" size={18} />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Display name"
                  required
                  className="w-full bg-secondary text-foreground placeholder:text-muted-foreground rounded px-10 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
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
                  placeholder="Password (min 6 characters)"
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
                Sign Up
              </button>
            </form>

            <p className="text-muted-foreground text-sm mt-8">
              Already have an account?{" "}
              <Link to="/login" className="text-foreground hover:underline font-medium">Sign in</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
