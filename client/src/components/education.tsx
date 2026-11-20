import { Award, GraduationCap } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { portfolioData } from '@/data/portfolio';

export function Education() {
  const { education, qualification } = portfolioData;

  return (
    <section id="education" className="py-24 px-5 sm:px-8 md:px-10 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            data-testid="education-title"
          >
            Education & Qualifications
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <FadeIn key={edu.degree} delay={index * 0.1}>
              <div
                className="rounded-[28px] border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]/80 p-6 sm:p-8 md:p-10 hover:border-primary/50 transition-colors"
                data-testid={`education-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3
                        className="text-[#D7E2EA] font-semibold uppercase text-xl md:text-2xl"
                        data-testid={`education-degree-${index}`}
                      >
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-primary font-medium text-base md:text-lg" data-testid={`education-institution-${index}`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span
                      className="text-[#D7E2EA] px-4 py-1.5 rounded-full font-mono text-xs sm:text-sm border border-[#D7E2EA]/30 uppercase tracking-wider whitespace-nowrap"
                      data-testid={`education-period-${index}`}
                    >
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-primary font-semibold">
                      {edu.grade} {edu.honours && `· ${edu.honours}`}
                    </span>
                  </div>
                </div>

                {edu.details && (
                  <p className="text-[#D7E2EA]/75 text-sm sm:text-base font-light leading-relaxed pt-2 border-t border-[#D7E2EA]/10">
                    {edu.details}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}

          {/* Qualification Card */}
          <FadeIn delay={0.25}>
            <div className="rounded-[28px] border-2 border-primary/30 bg-primary/5 p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl uppercase">
                    {qualification.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#D7E2EA]/70">
                    Year: {qualification.year}
                  </p>
                </div>
              </div>
              <span className="inline-flex self-start sm:self-auto items-center px-4 py-1.5 rounded-full border border-primary bg-primary text-black font-mono text-xs uppercase font-bold tracking-wider">
                {qualification.status}
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
