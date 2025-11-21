import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RFID-Based Solar Highway Toll and Access System",
      tags: ["IoT", "Embedded", "Arduino", "Solar Power"],
      description:
        "Engineered an RFID-based automated tolling and access system using Arduino with solar-powered DC–DC converter for power-efficient operation.",
      highlights: [
        "Designed and implemented RFID authentication system",
        "Integrated solar power management for sustainable operation",
        "Published 2 research papers demonstrating system performance",
      ],
      github: "https://github.com/SidBotVit/RFID-based-Toll-Gate-System",
      paper: "https://www.researchgate.net/publication/394006425_Prototype_Model_of_Seamless_Highway_Toll_Collection_Using_RFID_and_IoT_Technology",
    },
    {
      title: "Odesa Movie Booking System",
      tags: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
      description:
        "Full-stack movie booking platform with microservices architecture, featuring user authentication, show management, and seat booking functionality.",
      highlights: [
        "Built RESTful APIs with JWT authentication and authorization",
        "Designed layered architecture for users, movies, shows, and bookings",
        "Developed responsive React frontend integrated with backend APIs",
      ],
      github: "https://github.com/SidBotVit/BOOK-MY-SHOW",
    },
    {
      title: "Backend API Service",
      tags: ["Java", "Spring Boot", "MongoDB", "REST API"],
      description:
        "Practice project demonstrating clean architecture principles with comprehensive CRUD operations and proper exception handling.",
      highlights: [
        "Implemented CRUD APIs with validation and error handling",
        "Used MongoDB for flexible data storage",
        "Documented and tested APIs using Postman",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light gradient-text">Projects</h2>
            <p className="text-lg text-muted-foreground">
              Building real-world solutions with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 minimal-card flex flex-col"
              >
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {(project.github || project.paper) && (
                  <div className="flex gap-2 pt-2 border-t border-border/50">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 gap-2"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.paper && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 gap-2"
                      >
                        <a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-4 h-4" />
                          Paper
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
