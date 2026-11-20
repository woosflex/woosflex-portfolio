import { ChevronRight } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { portfolioData } from '@/data/portfolio';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-5 sm:px-8 md:px-10 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            data-testid="experience-title"
          >
            Professional Experience
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <FadeIn key={exp.organization} delay={index * 0.1}>
              <div
                className="rounded-[28px] border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]/80 p-6 sm:p-8 md:p-10 hover:border-primary/50 transition-colors"
                data-testid={`experience-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4 pb-4 border-b border-[#D7E2EA]/10">
                  <div>
                    <h3
                      className="text-[#D7E2EA] font-semibold uppercase text-xl md:text-2xl"
                      data-testid={`experience-org-${index}`}
                    >
                      {exp.organization} {exp.lab && <span className="text-primary font-mono text-lg font-normal">({exp.lab})</span>}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.roles.map((r, rIdx) => (
                        <span
                          key={rIdx}
                          className="font-mono text-xs text-[#D7E2EA]/80 px-3 py-1 rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]"
                        >
                          <strong className="text-primary">{r.title}:</strong> {r.period}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {exp.summary && (
                  <p className="text-sm sm:text-base text-[#D7E2EA]/90 mb-5 font-light">
                    {exp.summary}
                  </p>
                )}

                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#D7E2EA]/50 uppercase tracking-widest block mb-1">
                    Areas of Work & Contributions
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.areas.map((area, areaIdx) => (
                      <div
                        key={areaIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl border border-[#D7E2EA]/10 bg-white/[0.015] hover:border-primary/40 transition-colors"
                        data-testid={`experience-area-${index}-${areaIdx}`}
                      >
                        <ChevronRight className="text-primary mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-[#D7E2EA]/85 leading-relaxed font-light">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
