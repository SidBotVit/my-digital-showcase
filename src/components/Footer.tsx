import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            © {currentYear} Siddhant Malik. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/siddhantmalik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/siddhantmalik02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sidhantmalik02@gmail.com"
              className="hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
