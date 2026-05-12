import { useEffect, useRef } from "react";
import { CheckCircle2, Lightbulb, Rocket, Heart } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Born from a real problem", desc: "We saw teams drowning in repetitive support queries — so we built something to fix it." },
  { icon: Rocket, title: "Moving fast, building right", desc: "We're a young startup shipping features weekly, obsessed with quality and speed." },
  { icon: Heart, title: "Customer-first, always", desc: "Every feature we build starts with one question — does this make our users' lives easier?" },
];

const points = [
  "Built for real business problems, not demos",
  "Enterprise-grade security from day one",
  "Dedicated support as you grow",
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
            We believe support should feel effortless
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto text-lg leading-relaxed">
            saarthX is a young startup on a mission — building AI chatbot systems that solve real business problems, from handling customer queries to automating workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="section-reveal p-6 rounded-2xl bg-card border border-border text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <v.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-reveal max-w-md mx-auto" style={{ transitionDelay: "200ms" }}>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
