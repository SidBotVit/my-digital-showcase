import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Core CS",
      skills: ["DSA (400+ Problems)", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Languages",
      skills: ["Java (Primary)", "Python", "JavaScript"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Servlets", "JDBC", "JPA/Hibernate", "REST APIs"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js (Basics)"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Linux", "Postman", "VS Code", "IntelliJ IDEA"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              Proficient in modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className={category.color}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-border/50">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Additional Qualifications</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                <div className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-foreground/80">
                    Strong understanding of Data Structures & Algorithms
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-foreground/80">
                    Proficient in Java backend development with Spring Boot
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-foreground/80">
                    Familiar with full-stack fundamentals using React
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-foreground/80">
                    Quick learner, effective communicator, team collaborator
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
