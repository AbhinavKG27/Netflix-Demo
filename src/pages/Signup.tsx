import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    });
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
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
      <header className="relative z-10 px-8 md:px-16 py-6 flex items-center justify-between">
        <a href="/">
          <svg viewBox="0 0 111 30" className="h-8 md:h-10 fill-[hsl(var(--netflix-red))]">
            <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.942-10.558-4.01 9.505c-1.65-.29-3.304-.57-4.99-.75l6.88-15.444L94.04 0h5.16l3.629 9.672L106.44 0h5.24l-6.62 14.28zM90.09 0h-4.99v27.16c1.652.09 3.306.234 4.99.42V0zm-10.46 0H74.65v25.01c1.635.235 3.27.504 4.98.685V0zM59.37 0v23.73c1.634.172 3.268.38 4.898.583V0H59.37zm-15.3 0l.023 22.08c1.616.124 3.234.283 4.85.434V0h-4.873zM34.61 0H29.6v20.38c1.644.058 3.288.143 4.96.23V0zM19.38 0L14.3 0 14.3 19.57c1.66-.02 3.318-.023 4.98-.018L19.38 0zM4.98 0H0v18.94C1.658 18.888 3.316 18.863 4.98 18.87V0z" />
          </svg>
        </a>
        <Link
          to="/login"
          className="bg-[hsl(var(--netflix-red))] hover:bg-[hsl(var(--netflix-red)/0.85)] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
        >
          Sign In
        </Link>
      </header>

      {/* Form */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4">
        {success ? (
          <div className="w-full max-w-md bg-black/75 rounded-md px-10 py-12 text-center">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-2xl font-bold text-white mb-3">Check your email</h2>
            <p className="text-[hsl(var(--muted-foreground))] text-sm mb-6">
              We've sent a confirmation link to <span className="text-white font-medium">{email}</span>. Click the link to activate your account.
            </p>
            <Link
              to="/login"
              className="inline-block bg-[hsl(var(--netflix-red))] hover:bg-[hsl(var(--netflix-red)/0.85)] text-white font-semibold py-3 px-8 rounded text-sm transition-colors"
            >
              Go to Sign In
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-md bg-black/75 rounded-md px-10 py-12">
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-[hsl(var(--muted-foreground))] text-sm mb-8">
              Join Netflix. Watch anywhere. Cancel anytime.
            </p>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[hsl(var(--netflix-dark))] border border-[hsl(var(--border))] text-white placeholder:text-[hsl(var(--muted-foreground))] rounded px-4 py-4 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[hsl(var(--netflix-dark))] border border-[hsl(var(--border))] text-white placeholder:text-[hsl(var(--muted-foreground))] rounded px-4 py-4 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                {loading ? "Creating account..." : "Get Started"}
              </button>
            </form>

            <div className="mt-8 text-[hsl(var(--muted-foreground))] text-sm">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-white hover:underline">
                  Sign in now
                </Link>
              </p>
              <p className="mt-4 text-xs">
                By signing up, you agree to our{" "}
                <a href="#" className="hover:underline">Terms of Use</a> and{" "}
                <a href="#" className="hover:underline">Privacy Statement</a>.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 py-8 px-8 md:px-16 text-[hsl(var(--muted-foreground))]">
        <p className="text-sm mb-4">Questions? Call 000-800-919-1694</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs max-w-3xl">
          {["FAQ", "Help Centre", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information"].map((item) => (
            <a key={item} href="#" className="hover:underline">{item}</a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Signup;
