import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Backend Development Intern",
      company: "Code For Success",
      location: "Remote",
      period: "2025",
      responsibilities: [
        "Built scalable REST APIs using Java, Spring Boot with Controller–Service–Repository architecture.",
        "Implemented validation, exception handling, and modular backend components.",
        "Integrated MySQL using JPA/Hibernate and optimized API-level database interactions.",
        "Collaborated via Git and followed Agile workflows.",
      ],
    },
    {
      role: "VLSI Intern",
      company: "VIT Systems Lab",
      location: "Online",
      period: "2024",
      responsibilities: [
        "Implemented Verilog modules and functional testbenches for digital circuits.",
        "Assisted in documentation and verification simulations.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Building scalable systems and learning from real-world projects
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 space-y-4 hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                        <p className="text-lg text-muted-foreground">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {exp.period}
                      </Badge>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
