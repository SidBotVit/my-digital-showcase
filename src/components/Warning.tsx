import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Skull } from "lucide-react";

const Warning = ({ onAccept }: { onAccept: () => void }) => {
  const [glitching, setGlitching] = useState(false);

  const handleAccept = () => {
    setGlitching(true);
    setTimeout(() => {
      onAccept();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative max-w-2xl mx-auto p-8 space-y-8 text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <Skull className="w-24 h-24 text-primary animate-pulse" />
        </div>

        <h1 
          className="text-5xl md:text-7xl font-bold nosifer-font text-primary blood-drip"
          data-text="⚠ WARNING ⚠"
        >
          ⚠ WARNING ⚠
        </h1>

        <div className="space-y-4 text-foreground/90">
          <p className="text-xl md:text-2xl font-semibold flex items-center justify-center gap-2">
            <AlertTriangle className="w-6 h-6 text-warning animate-pulse" />
            PROCEED AT YOUR OWN RISK
            <AlertTriangle className="w-6 h-6 text-warning animate-pulse" />
          </p>
          
          <div className="bg-card border-2 border-primary/30 rounded-lg p-6 space-y-3 red-glow">
            <p className="text-lg">
              You are about to enter the digital realm of a developer whose code is as dark as their sense of humor.
            </p>
            <p className="text-lg text-primary font-semibold">
              Backend systems that never sleep. Algorithms that consume your soul.
            </p>
            <p className="text-lg">
              This portfolio may contain: excessive optimization, ruthless debugging, and an unhealthy obsession with clean code.
            </p>
          </div>

          <p className="text-sm text-muted-foreground italic">
            * No developers were harmed in the making of this portfolio (physically)
          </p>
        </div>

        <Button
          onClick={handleAccept}
          size="lg"
          className={`bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6 red-glow ${
            glitching ? 'glitch' : ''
          }`}
          data-text="I ACCEPT THE RISK"
        >
          I ACCEPT THE RISK
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          Click to enter... if you dare
        </p>
      </div>
    </div>
  );
};

export default Warning;
