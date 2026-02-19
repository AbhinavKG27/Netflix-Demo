import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e5c-4fca-ad36-a5f7a3029a8f/web/IN-en-20250210-TRIFECTA-perspective_f6019624-ba1f-4960-854d-56fbce9f9aa6_large.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Header */}
      <header className="relative z-10 px-8 md:px-16 py-6">
        <a href="/">
          <svg viewBox="0 0 111 30" className="h-8 md:h-10 fill-[hsl(var(--netflix-red))]">
            <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.942-10.558-4.01 9.505c-1.65-.29-3.304-.57-4.99-.75l6.88-15.444L94.04 0h5.16l3.629 9.672L106.44 0h5.24l-6.62 14.28zM90.09 0h-4.99v27.16c1.652.09 3.306.234 4.99.42V0zm-10.46 0H74.65v25.01c1.635.235 3.27.504 4.98.685V0zM59.37 0v23.73c1.634.172 3.268.38 4.898.583V0H59.37zm-15.3 0l.023 22.08c1.616.124 3.234.283 4.85.434V0h-4.873zM34.61 0H29.6v20.38c1.644.058 3.288.143 4.96.23V0zM19.38 0L14.3 0 14.3 19.57c1.66-.02 3.318-.023 4.98-.018L19.38 0zM4.98 0H0v18.94C1.658 18.888 3.316 18.863 4.98 18.87V0z" />
          </svg>
        </a>
      </header>

      {/* Form */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-black/75 rounded-md px-10 py-12">
          <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[hsl(var(--netflix-dark))] border border-[hsl(var(--border))] text-white placeholder:text-[hsl(var(--muted-foreground))] rounded px-4 py-4 text-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[hsl(var(--netflix-dark))] border border-[hsl(var(--border))] text-white placeholder:text-[hsl(var(--muted-foreground))] rounded px-4 py-4 text-sm focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {error && (
              <p className="text-[hsl(var(--destructive))] text-sm bg-[hsl(var(--destructive)/0.1)] px-3 py-2 rounded">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[hsl(var(--netflix-red))] hover:bg-[hsl(var(--netflix-red)/0.85)] text-white font-semibold py-4 rounded text-sm transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="flex items-center justify-between text-sm text-[hsl(var(--muted-foreground))]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[hsl(var(--netflix-red))]" />
                Remember me
              </label>
              <a href="#" className="hover:underline">Need help?</a>
            </div>
          </form>

          <div className="mt-10 text-[hsl(var(--muted-foreground))] text-sm">
            <p>
              New to Netflix?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Sign up now
              </Link>
            </p>
            <p className="mt-4 text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
              <a href="#" className="text-blue-400 hover:underline">Learn more.</a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 py-8 px-8 md:px-16 text-[hsl(var(--muted-foreground))]">
        <p className="text-sm mb-4">Questions? Call 000-800-919-1694</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs max-w-3xl">
          {["FAQ", "Help Centre", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information"].map((item) => (
            <a key={item} href="#" className="hover:underline">{item}</a>
          ))}
        </div>
        <div className="mt-4">
          <select className="bg-transparent border border-[hsl(var(--border))] text-sm px-3 py-1 rounded">
            <option>English</option>
            <option>हिंदी</option>
          </select>
        </div>
      </footer>
    </div>
  );
};

export default Login;
