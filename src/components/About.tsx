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
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(0_60%_8%/0.3),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text horror-font">
              About Me
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              I build reliable backend systems, practice competitive programming, and enjoy solving
              complex problems. I have hands-on experience with <span className="text-primary font-semibold">Java</span>, <span className="text-primary font-semibold">Spring Boot</span>, <span className="text-primary font-semibold">MySQL</span>, and basic
              front-end technologies. I take ownership and deliver production-quality code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/80 backdrop-blur-sm red-glow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
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
