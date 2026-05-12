const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center rounded-md font-bold text-xs">
          S
        </div>
        <span className="font-semibold text-foreground">
          saarth<span className="text-primary">X</span>
        </span>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 saarthX. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
