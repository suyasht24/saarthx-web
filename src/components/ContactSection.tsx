import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {

  const ref = useRef<HTMLElement>(null);

  const [submitted, setSubmitted] = useState(false);

  // 🔥 FORM STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            e.target.classList.add("visible")
        );
      },
      { threshold: 0.2 }
    );

    ref.current
      ?.querySelectorAll(".section-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  // 🚀 SEND EMAIL
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      await emailjs.send(
        "service_x5ol69s",
        "template_h2r7gib", 
        {
          name: name,
          email: email,
          message: message,
        },
        "n5apemYMkUXZo4FpQ" 
      );

      setSubmitted(true);

      // 🧹 CLEAR FORM
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (error) {

      alert("Failed to send message");

      console.error(error);

    }

  };

  return (

    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 px-6"
    >

      <div className="max-w-lg mx-auto section-reveal">

        {/* HEADER */}
        <div className="text-center mb-10">

          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Let's talk
          </h2>

          <p className="text-muted-foreground mt-3">
            Have a question or ready to get started?
            Drop us a message.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* NAME */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200"
            placeholder="Your Name"
            required
          />

          {/* EMAIL */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200"
            placeholder="Email"
            type="email"
            required
          />

          {/* MESSAGE */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-200 resize-none"
            placeholder="Your message..."
            rows={5}
            required
          />

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={submitted}
          >

            {submitted ? (
              "Message Sent Successfully ✓"
            ) : (
              <>
                Send Message
                <Send size={16} />
              </>
            )}

          </Button>

        </form>

      </div>

    </section>

  );

};

export default ContactSection;