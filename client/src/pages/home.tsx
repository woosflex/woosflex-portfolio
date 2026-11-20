import { useEffect, lazy, Suspense } from 'react';
import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { Vision } from '@/components/vision';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Publications } from '@/components/publications';
import { Education } from '@/components/education';
import { Footer } from '@/components/footer';
import { Terminal } from '@/components/terminal';
import { useKonami } from '@/hooks/use-konami';
import { useTerminal } from '@/hooks/use-terminal';

const ThreeBackground = lazy(() =>
  import('@/components/ThreeBackground').then((m) => ({ default: m.ThreeBackground }))
);

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

  // Isolate background content from screen readers & tab order when terminal modal is open
  useEffect(() => {
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      if (terminal.isOpen) {
        mainEl.setAttribute('inert', '');
      } else {
        mainEl.removeAttribute('inert');
      }
    }
  }, [terminal.isOpen]);

  return (
    <main className="min-h-screen text-foreground relative bg-transparent" style={{ overflowX: 'clip' }}>
      {/* Dynamic full-screen WebGL particle morphing background lazily loaded */}
      <Suspense fallback={<div className="fixed inset-0 w-full h-full pointer-events-none -z-20 bg-[#090a0f]" />}>
        <ThreeBackground />
      </Suspense>

      <div id="main-content" className="relative z-10" aria-hidden={terminal.isOpen}>
        {/* Fixed navigation bar */}
        <Navigation />

        {/* Main content sections matching Section 4 hierarchy */}
        <Hero />
        <Marquee />
        <Vision />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <Education />
        <Footer />
        
        {/* Hidden terminal interface - activated by Konami code or Esc */}
        <Terminal
          isOpen={terminal.isOpen}
          history={terminal.history}
          onExecuteCommand={terminal.executeCommand}
          onClose={terminal.close}
        />
      </div>
    </main>
  );
}
