import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue/20 via-pastel-pink/20 to-pastel-mint/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
              <span className="gradient-text font-semibold">Siddhant Malik</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Backend Developer | Java Specialist
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Engineering scalable systems with Spring Boot, practicing competitive programming, 
              and solving real-world problems through clean, maintainable code.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 text-base px-8 py-6 rounded-full"
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="gap-2 text-base px-8 py-6 rounded-full"
            >
              <a href="/siddhant-malik-resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/siddhantmalik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/siddhantmalik02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sidhantmalik02@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary animate-bounce transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
