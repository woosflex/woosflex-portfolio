import { FadeIn } from '@/components/fade-in';
import { ContactButton } from '@/components/contact-button';

export function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-between relative" style={{ overflowX: 'clip' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-24 sm:mt-28 md:mt-32 px-6">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)' }}
          data-testid="hero-name"
        >
          Adnan Raza
        </h1>
      </FadeIn>

      <div className="relative z-10 flex justify-center items-center flex-1">
        <FadeIn delay={0.35} y={20} className="text-center px-6">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-md mx-auto" style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.25rem)' }}>
            Solving biology-based problems with agentic AI, low-level systems engineering, and high-performance computing.
          </p>
          <p className="font-mono text-sm text-muted-foreground mt-4" data-testid="hero-role">
            Research Intern, Ahuja Lab -- IIIT-Delhi
          </p>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 relative z-10">
        <FadeIn delay={0.5} y={20}>
          <a href="#projects" className="text-[#D7E2EA] uppercase tracking-widest text-sm hover:opacity-70 transition-opacity duration-200">
            View Work
          </a>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
