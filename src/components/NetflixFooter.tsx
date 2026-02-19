const NetflixFooter = () => {
  const links = [
    ["Audio Description", "Help Center", "Gift Cards", "Media Centre"],
    ["Investor Relations", "Jobs", "Terms of Use", "Privacy"],
    ["Legal Notices", "Cookie Preferences", "Corporate Information", "Contact Us"],
    ["Speed Test", "Ad Choices"],
  ];

  return (
    <footer className="px-6 md:px-12 py-12 text-foreground/50 mt-8">
      {/* Social Links */}
      <div className="flex gap-6 mb-8">
        {["facebook", "instagram", "twitter", "youtube"].map((social) => (
          <a key={social} href="#" className="hover:text-foreground transition-colors capitalize text-sm">
            <span className="sr-only">{social}</span>
            <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/50 transition-colors text-xs font-bold">
              {social[0].toUpperCase()}
            </div>
          </a>
        ))}
      </div>

      {/* Link Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {links.flat().map((link) => (
          <a key={link} href="#" className="text-xs hover:text-foreground/80 transition-colors underline underline-offset-2">
            {link}
          </a>
        ))}
      </div>

      {/* Service Code */}
      <button className="border border-foreground/30 px-4 py-2 text-sm hover:border-foreground/50 transition-colors mb-6">
        Service Code
      </button>

      {/* Copyright */}
      <p className="text-xs text-foreground/30">© 1997–2024 Netflix, Inc.</p>
    </footer>
  );
};

export default NetflixFooter;
