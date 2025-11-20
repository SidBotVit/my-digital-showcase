import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skull } from "lucide-react";

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
      <div className="relative max-w-3xl mx-auto p-8 space-y-10 text-center animate-fade-in">
        <div className="flex justify-center mb-8">
          <Skull className="w-32 h-32 text-blood animate-pulse flicker" strokeWidth={1.5} />
        </div>

        <h1 
          className="text-6xl md:text-8xl font-bold nosifer-font text-blood blood-drip"
          data-text="ACCESS RESTRICTED"
        >
          ACCESS RESTRICTED
        </h1>

        <div className="space-y-6 text-foreground/70 max-w-2xl mx-auto">
          <div className="bg-card/30 border border-blood/20 rounded-lg p-8 space-y-4 red-glow backdrop-blur-sm">
            <p className="text-lg leading-relaxed font-light tracking-wide">
              Beyond this threshold lies code forged in darkness. Systems that operate in shadows. 
              Logic that questions its own existence.
            </p>
            <p className="text-xl text-blood/90 font-medium tracking-wider">
              The patterns you'll witness cannot be unseen.
            </p>
            <p className="text-lg leading-relaxed font-light tracking-wide">
              Each function optimized. Every algorithm refined. Nothing escapes the void.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground/50 font-mono">
            <span className="flicker">◆</span>
            <span>NEURAL INTERFACE DETECTED</span>
            <span className="flicker">◆</span>
          </div>
        </div>

        <Button
          onClick={handleAccept}
          size="lg"
          className={`bg-blood/80 hover:bg-blood text-primary-foreground font-bold text-xl px-16 py-7 red-glow border border-blood/40 ${
            glitching ? 'glitch' : ''
          }`}
          data-text="ENTER THE VOID"
        >
          ENTER THE VOID
        </Button>

        <p className="text-xs text-muted-foreground/40 mt-6 font-mono tracking-widest">
          &gt; PROCEEDING REQUIRES ACKNOWLEDGMENT OF CONSEQUENCES
        </p>
      </div>
    </div>
  );
};

export default Warning;
