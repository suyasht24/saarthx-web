
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

declare global {
  interface Window {
    openSaarthiChat: () => void;
  }
}
const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 md:py-36 px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--hero-gradient-from)) 0%, hsl(var(--hero-gradient-via)) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-[15%] w-56 h-56 rounded-full bg-primary/4 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[100px] animate-pulse-slow pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 opacity-0 animate-fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping-slow" />
          AI-Powered Business Automation
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground text-balance opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Automate support.
          <br />
          <span className="text-primary animate-shimmer bg-gradient-to-r from-primary via-primary/70 to-primary bg-[length:200%_100%] bg-clip-text">Delight customers.</span>
        </h1>

        <p
          className="text-muted-foreground mt-6 max-w-lg mx-auto text-lg leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          saarthX builds intelligent chatbots tailored to your workflow — so your team can focus on what matters.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "350ms" }}
        >
          <Button variant="hero" size="xl" onClick={() => scrollTo("contact")}>
            Get Started
            <ArrowRight size={18} />
          </Button>
          <Button variant="hero-outline" size="xl" onClick={() => window.openSaarthiChat()}>
            <Play size={16} />
            Try our Demo chatbot
          </Button>
        </div>

        {/* Tagline */}
        <p
          className="mt-14 text-sm text-muted-foreground italic opacity-0 animate-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          Smarter conversations. Happier customers. Less effort.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
