import { Card } from "@/components/ui/card";
import { Code2, Database, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "400+ Problems Solved",
      description: "Active competitive programmer on LeetCode and GeeksforGeeks",
    },
    {
      icon: Database,
      title: "Backend Specialist",
      description: "Expert in Java, Spring Boot, MySQL, and RESTful API development",
    },
    {
      icon: Cpu,
      title: "System Design",
      description: "Strong understanding of scalable architecture and design patterns",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light gradient-text">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build reliable backend systems, practice competitive programming, and enjoy solving
              complex problems. I have hands-on experience with Java, Spring Boot, MySQL, and basic
              front-end technologies. I take ownership and deliver production-quality code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-8 space-y-4 minimal-card bg-card/50 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pastel-blue to-pastel-pink flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
