import { ArrowUpRight, Dna, GitBranch, Terminal } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { portfolioData, AboutPillar } from '@/data/portfolio';

function PillarIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Dna className="h-4 w-4 text-primary" />;
    case 1:
      return <GitBranch className="h-4 w-4 text-accent" />;
    case 2:
      return <Terminal className="h-4 w-4 text-primary" />;
    default:
      return <Terminal className="h-4 w-4 text-primary" />;
  }
}

export function Vision() {
  const { about } = portfolioData;

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32 relative scroll-mt-16" style={{ overflowX: 'clip' }}>
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
        <p className="text-center font-mono text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 mt-4 max-w-xl mx-auto">
          {about.headline}
        </p>
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-12 mt-12 sm:mt-16 max-w-5xl mx-auto w-full">
        {/* Lead Narrative Statement */}
        <div className="max-w-3xl text-center space-y-4 text-[#D7E2EA]/90 text-base sm:text-lg md:text-xl font-light leading-relaxed">
          <p>{about.paragraphs[0]}</p>
        </div>

        {/* 3-Pillar Visual Trajectory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full">
          {about.pillars.map((pillar: AboutPillar, idx: number) => (
            <FadeIn key={pillar.title} delay={idx * 0.1} y={20}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/80 hover:border-primary/50 transition-all duration-300 group">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2 border-b border-[#D7E2EA]/10 pb-3">
                    <div className="flex items-center gap-2">
                      <PillarIcon index={idx} />
                      <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                        {pillar.badge}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#D7E2EA]/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#D7E2EA] uppercase tracking-wide group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="font-mono text-xs text-[#D7E2EA]/65 mt-0.5 mb-2">
                      {pillar.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Supporting Context & Thesis Link */}
        <div className="max-w-3xl text-center space-y-5 text-[#D7E2EA]/85 text-sm sm:text-base font-light leading-relaxed">
          <p>{about.paragraphs[3]}</p>

          <div className="pt-2">
            <a
              href={about.thesis.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm border-b border-[#D7E2EA]/40 hover:border-primary hover:text-primary transition-colors pb-1 font-mono group"
              data-testid="link-thesis"
            >
              <span>{about.thesis.label}</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
