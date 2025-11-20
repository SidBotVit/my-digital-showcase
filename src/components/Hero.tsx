import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient text-white pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(0_45%_8%/0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 0% / 0.1) 2px, hsl(0 0% 0% / 0.1) 4px)'
      }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold horror-font glitch flicker" data-text="Hi, I'm Siddhant Malik">
              Hi, I'm <span className="text-blood gradient-text blood-drip">Siddhant Malik</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 font-medium">
              Software Developer — <span className="text-blood/90">Backend</span> & <span className="text-blood/90">DSA</span> Enthusiast
            </p>
          </div>

          <div className="bg-card/30 border border-blood/20 rounded-lg p-6 red-glow backdrop-blur-sm">
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Detail-oriented developer with strong foundations in <span className="text-blood/90 font-semibold">Data Structures & Algorithms</span>,
              Object-Oriented Design, and backend engineering using <span className="text-blood/90 font-semibold">Java</span> and <span className="text-blood/90 font-semibold">Spring Boot</span>. 
              Seeking SDE roles and internships.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-foreground/70">
            <a
              href="mailto:sidhantmalik02@gmail.com"
              className="flex items-center gap-2 hover:text-blood transition-colors"
            >
              <Mail className="w-4 h-4" />
              sidhantmalik02@gmail.com
            </a>
            <span className="hidden sm:inline text-blood/50">•</span>
            <a
              href="tel:+919958441552"
              className="flex items-center gap-2 hover:text-blood transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-9958441552
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="gap-2 bg-blood/80 hover:bg-blood text-primary-foreground red-glow font-semibold border border-blood/40"
            >
              Get In Touch
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-blood/50 text-blood hover:bg-blood/20 hover:text-blood red-glow font-semibold bg-card/30"
            >
              <a href="/siddhant-malik-resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/siddhantmalik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-blood transition-colors red-glow p-2 rounded-lg bg-card/20"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/siddhantmalik02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors red-glow p-2 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("#about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-primary/80 transition-colors animate-bounce"
            aria-label="Scroll to content"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
