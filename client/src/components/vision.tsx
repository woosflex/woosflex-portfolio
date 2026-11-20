import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { portfolioData } from '@/data/portfolio';

export function Vision() {
  const { about } = portfolioData;

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative scroll-mt-16" style={{ overflowX: 'clip' }}>
      {/* Anchor alias for existing backward links */}
      <span id="vision" className="sr-only" aria-hidden="true" />

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          data-testid="about-title"
        >
          {about.title}
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 mt-10 sm:mt-14 md:mt-16 max-w-3xl mx-auto">
        <div className="space-y-5 text-[#D7E2EA]/85 text-base sm:text-lg md:text-xl font-light leading-relaxed text-center sm:text-left">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} data-testid={`about-paragraph-${index}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="pt-4">
          <a
            href={about.thesis.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm border-b border-[#D7E2EA]/40 hover:border-primary hover:text-primary transition-colors pb-1 font-mono group"
            data-testid="link-thesis"
          >
            <span>{about.thesis.label}</span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
