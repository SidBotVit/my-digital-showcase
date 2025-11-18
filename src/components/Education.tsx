import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">Education</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6 md:p-8 space-y-4 hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    B.Tech in Electrical and Electronics Engineering
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Vellore Institute of Technology (VIT)
                  </p>
                  <p className="text-sm text-muted-foreground">2022 – Present</p>
                  <div className="pt-2">
                    <p className="text-sm font-medium text-foreground/80">
                      Relevant Coursework:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Data Structures, Object-Oriented Programming, Operating Systems, Database
                      Management Systems, Computer Networks, Microprocessors, Embedded Systems
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3 border-border/50">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold">Class XII</h4>
                </div>
                <p className="text-sm text-muted-foreground">Prabhu Dayal Public School, Delhi</p>
                <p className="text-2xl font-bold text-accent">81%</p>
              </Card>

              <Card className="p-6 space-y-3 border-border/50">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold">Class X</h4>
                </div>
                <p className="text-sm text-muted-foreground">Prabhu Dayal Public School, Delhi</p>
                <p className="text-2xl font-bold text-accent">86%</p>
              </Card>
            </div>
          </div>

          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-border/50">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Clubs & Leadership</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">
                    Robotics & Innovation Club, VIT
                  </h4>
                  <p className="text-sm text-muted-foreground">2022 – 2024</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-accent mt-1">▸</span>
                      <span>
                        Contributed to embedded and automation projects; led juniors in Java and DSA
                        basics
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Technical Volunteer — Techfest Events
                  </h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-accent mt-1">▸</span>
                      <span>
                        Assisted in organizing hackathons, project expos, and programming
                        competitions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
