import { useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { Projects } from '@/components/projects';
import { Vision } from '@/components/vision';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { OpenSource } from '@/components/open-source';
import { Skills } from '@/components/skills';
import { Footer } from '@/components/footer';
import { Terminal } from '@/components/terminal';
import { ThreeBackground } from '@/components/ThreeBackground';
import { useKonami } from '@/hooks/use-konami';
import { useTerminal } from '@/hooks/use-terminal';

export default function Home() {
  // Konami code easter egg hook for terminal activation
  const { activated: konamiActivated, reset: resetKonami } = useKonami();
  const terminal = useTerminal();

  // Open terminal when Konami code is detected
  useEffect(() => {
    if (konamiActivated) {
      terminal.open();
      resetKonami();
    }
  }, [konamiActivated, terminal, resetKonami]);

  return (
    <div className="min-h-screen text-foreground relative bg-transparent" style={{ overflowX: 'clip' }}>
      {/* Dynamic full-screen WebGL particle morphing background */}
      <ThreeBackground />

      <div className="relative z-10">
        {/* Fixed navigation bar */}
        <Navigation />

        {/* Main content sections */}
        <Hero />
        <Marquee />
        <Vision />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <OpenSource />
        <Footer />
        
        {/* Hidden terminal interface - activated by Konami code */}
        <Terminal
          isOpen={terminal.isOpen}
          history={terminal.history}
          onExecuteCommand={terminal.executeCommand}
          onClose={terminal.close}
        />
      </div>
    </div>
  );
}
