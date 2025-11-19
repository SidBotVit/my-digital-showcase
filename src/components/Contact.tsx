import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sidhantmalik02@gmail.com",
      href: "mailto:sidhantmalik02@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9958441552",
      href: "tel:+919958441552",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "siddhantmalik02",
      href: "https://linkedin.com/in/siddhantmalik02",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "siddhantmalik",
      href: "https://github.com/siddhantmalik",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively seeking SDE roles and internships. Feel free to reach out if you'd like
              to discuss opportunities or just connect!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 text-center space-y-6 bg-gradient-to-br from-primary/5 to-accent/5 border-border/50">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Download My Resume</h3>
              <p className="text-muted-foreground">
                View my complete work history, projects, and qualifications
              </p>
            </div>
            <Button asChild size="lg" className="gap-2">
              <a href="/siddhant-malik-resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Resume (PDF)
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
