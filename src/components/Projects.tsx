import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Projects</h2>
            <p className="text-lg text-muted-foreground">
              Building real-world solutions with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 flex flex-col"
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
