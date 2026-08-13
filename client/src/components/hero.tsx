import { ArrowDown, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="hero-shell min-h-[100svh] flex flex-col justify-between relative" style={{ overflowX: 'clip' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="overflow-hidden mt-20 sm:mt-24 md:mt-28 px-5 sm:px-6">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
          style={{ fontSize: 'clamp(3rem, 9vw, 10rem)' }}
          data-testid="hero-name"
        >
          Adnan Raza
        </h1>
      </div>

      <div className="hero-core relative z-10 flex flex-col justify-center items-center flex-1 px-5 sm:px-6">
        <div className="hero-statement text-center">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-xl mx-auto text-balance" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.25rem)' }}>
            Solving biology-based problems with agentic AI, low-level systems engineering, and high-performance computing.
          </p>
          <p className="font-mono text-sm text-muted-foreground mt-4" data-testid="hero-role">
            Research Intern, Ahuja Lab -- IIIT-Delhi
          </p>
        </div>

        <a
          href="https://github.com/woosflex/TracEon"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-proof group"
          aria-label="Inspect TracEon on GitHub"
        >
          <span className="hero-proof-signal" aria-hidden="true" />
          <span className="hero-proof-name">TracEon</span>
          <span className="hero-proof-detail">v1.3.0 · C++20 · zero-copy genomic cache</span>
          <span className="hero-proof-action">Inspect repository <ArrowUpRight aria-hidden="true" /></span>
        </a>
      </div>

      <div className="hero-actions flex items-center justify-between gap-4 pb-5 sm:pb-8 md:pb-10 px-5 sm:px-6 md:px-10 relative z-10">
        <a href="#projects" className="work-link work-link-primary group inline-flex min-h-11 items-center gap-3 uppercase tracking-widest text-xs sm:text-sm">
          View selected work
          <ArrowDown aria-hidden="true" className="work-link-arrow h-4 w-4" />
        </a>
        <a href="mailto:adnanraza3435@gmail.com" className="hero-contact inline-flex min-h-11 items-center uppercase tracking-widest text-xs sm:text-sm">
          Contact
        </a>
      </div>
    </section>
  );
}
