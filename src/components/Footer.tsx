const Footer = () => (
  <footer className="mt-16 py-10 px-4 md:px-12 border-t border-border">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
      <div className="space-y-2">
        <a href="#" className="block hover:text-foreground transition-colors">Audio Description</a>
        <a href="#" className="block hover:text-foreground transition-colors">Investor Relations</a>
        <a href="#" className="block hover:text-foreground transition-colors">Legal Notices</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:text-foreground transition-colors">Help Centre</a>
        <a href="#" className="block hover:text-foreground transition-colors">Jobs</a>
        <a href="#" className="block hover:text-foreground transition-colors">Cookie Preferences</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:text-foreground transition-colors">Gift Cards</a>
        <a href="#" className="block hover:text-foreground transition-colors">Terms of Use</a>
        <a href="#" className="block hover:text-foreground transition-colors">Corporate Information</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:text-foreground transition-colors">Media Centre</a>
        <a href="#" className="block hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="block hover:text-foreground transition-colors">Contact Us</a>
      </div>
    </div>
    <p className="text-center text-xs text-muted-foreground mt-8">© 2026 Netflix Demo. Powered by OMDb API.</p>
  </footer>
);

export default Footer;
