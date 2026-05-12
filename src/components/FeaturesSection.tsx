import { useEffect, useRef } from "react";
import { Bot, Brain, BarChart3, Plug, Globe, UserPlus } from "lucide-react";

const features = [
  { icon: Bot, title: "24/7 AI Support", desc: "Always-on chatbot that handles queries instantly, even while your team sleeps." },
  { icon: Brain, title: "Custom Training", desc: "Train on your docs, FAQs, and brand voice for responses that feel genuinely human." },
  { icon: UserPlus, title: "Lead Capture", desc: "Turn conversations into qualified leads with smart forms and intent detection." },
  { icon: BarChart3, title: "Analytics", desc: "Track resolution rates, sentiment trends, and customer satisfaction in real time." },
  { icon: Plug, title: "Integration", desc: "Connect with Slack, Zendesk, HubSpot, and 40+ tools your team already uses." },
  { icon: Globe, title: "Multi-platform", desc: "Deploy on your website, WhatsApp, Instagram, and more from a single dashboard." },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll(".section-reveal");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
            Everything you need to scale support
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">
            Powerful tools designed to automate, analyze, and improve every customer interaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="section-reveal group relative p-7 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <f.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
