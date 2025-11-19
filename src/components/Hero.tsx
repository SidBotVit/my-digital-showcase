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
      className="min-h-screen flex items-center justify-center hero-gradient text-white pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm <span className="text-highlight">Siddhant Malik</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium">
              Software Developer — Backend & DSA Enthusiast
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Detail-oriented developer with strong foundations in Data Structures & Algorithms,
            Object-Oriented Design, and backend engineering using Java and Spring Boot. Seeking SDE
            roles and internships.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-white/70">
            <a
              href="mailto:sidhantmalik02@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              sidhantmalik02@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="tel:+919958441552"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-9958441552
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="gap-2 bg-white text-primary hover:bg-white/90"
            >
              Get In Touch
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-white text-white hover:bg-white hover:text-primary"
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
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/siddhantmalik02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("#about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
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
