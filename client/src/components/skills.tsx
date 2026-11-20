import { FadeIn } from '@/components/fade-in';
import { portfolioData } from '@/data/portfolio';

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t border-[#D7E2EA]/15 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 scroll-mt-16">
      <h2
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[#D7E2EA]"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        data-testid="skills-title"
      >
        Technical Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
        {skills.map((category, i) => (
          <FadeIn key={category.title} delay={i * 0.1}>
            <div
              className="rounded-3xl border border-[#D7E2EA]/20 bg-card/40 p-6 sm:p-8 md:p-10 hover:border-primary/50 transition-colors"
              data-testid={`skill-category-${i}`}
            >
              <div className="mb-6 pb-4 border-b border-[#D7E2EA]/10">
                <h3 className="text-[#D7E2EA] font-semibold uppercase text-lg sm:text-xl md:text-2xl">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3" aria-label={`${category.title} items`}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 rounded-xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/60 text-[#D7E2EA]/90 font-mono text-xs sm:text-sm hover:border-primary/60 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
