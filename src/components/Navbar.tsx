import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = ["features", "about", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-16">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-lg font-bold text-sm transition-transform duration-200 group-hover:scale-105">
            S
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground">
            saarth<span className="text-primary">X</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground capitalize transition-colors duration-200 rounded-lg hover:bg-secondary"
            >
              {id}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="default" size="default" onClick={() => scrollTo("contact")}>
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4 space-y-1 animate-fade-in">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground capitalize rounded-lg hover:bg-secondary transition-colors"
            >
              {id}
            </button>
          ))}
          <div className="pt-2">
            <Button className="w-full" onClick={() => scrollTo("contact")}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
