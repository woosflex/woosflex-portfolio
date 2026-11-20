import { ArrowDown, ArrowUpRight, Github, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="hero-shell min-h-[100svh] flex flex-col justify-between relative" style={{ overflowX: 'clip' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      {/* Hero Name Monument */}
      <div className="overflow-hidden mt-20 sm:mt-24 md:mt-28 px-5 sm:px-6">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
          style={{ fontSize: 'clamp(3rem, 9.5vw, 10rem)' }}
          data-testid="hero-name"
        >
          {hero.name}
        </h1>
      </div>

      {/* Hero Core Statements */}
      <div className="hero-core relative z-10 flex flex-col justify-center items-center flex-1 px-5 sm:px-6 py-6 text-center max-w-4xl mx-auto">
        <div className="space-y-3">
          <h2
            className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-xl sm:text-2xl md:text-3xl"
            data-testid="hero-headline"
          >
            {hero.headline}
          </h2>
          <p
            className="font-mono text-primary text-xs sm:text-sm md:text-base tracking-widest uppercase font-medium"
            data-testid="hero-subheadline"
          >
            {hero.subheadline}
          </p>
        </div>

        <div className="mt-6 space-y-3 max-w-2xl text-[#D7E2EA]/85 text-sm sm:text-base md:text-lg font-light leading-relaxed text-balance">
          {hero.intro.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <p className="mt-4 font-mono text-xs sm:text-sm text-muted-foreground">
          {hero.descriptor}
        </p>

        {/* Featured Proof Badge */}
        <div className="mt-8">
          <a
            href={hero.proof.benchmarkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-proof group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/40 bg-card/60 backdrop-blur-md hover:border-primary transition-all duration-300"
            aria-label="Inspect TracEon v2.3.0 benchmark report"
            data-testid="hero-proof-badge"
          >
            <span className="hero-proof-signal w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold text-primary">{hero.proof.name} {hero.proof.version}</span>
            <span className="hidden sm:inline font-mono text-xs text-[#D7E2EA]/70">· {hero.proof.tagline}</span>
            <span className="font-mono text-xs text-primary/80 group-hover:text-primary flex items-center gap-1">
              Benchmark <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      {/* Hero Action Buttons */}
      <div className="hero-actions flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 md:pb-10 px-5 sm:px-6 md:px-10 relative z-10">
        <a
          href="#projects"
          className="work-link work-link-primary group inline-flex min-h-11 items-center gap-3 uppercase tracking-widest text-xs sm:text-sm px-5 py-2.5 rounded-full border border-[#D7E2EA]/30 hover:border-primary hover:text-primary transition-colors text-[#D7E2EA]"
          data-testid="hero-btn-projects"
        >
          View Projects
          <ArrowDown aria-hidden="true" className="work-link-arrow h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={hero.buttons[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 uppercase tracking-widest text-xs sm:text-sm px-5 py-2.5 rounded-full border border-[#D7E2EA]/30 hover:border-primary hover:text-primary transition-colors text-[#D7E2EA]"
            data-testid="hero-btn-github"
          >
            <Github className="h-4 w-4" />
            GitHub Profile
          </a>

          <a
            href={hero.buttons[2].href}
            className="hero-contact inline-flex min-h-11 items-center gap-2 uppercase tracking-widest text-xs sm:text-sm px-5 py-2.5 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-colors"
            data-testid="hero-btn-contact"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
