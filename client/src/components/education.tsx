/**
 * Education Section Component
 * Displays academic background with coursework and thesis information
 */

import { FadeIn } from '@/components/fade-in';

export function Education() {
  const education = [
    {
      degree: "MSc Bioinformatics",
      university: "Jamia Millia Islamia, India",
      dates: "August 2024 - May 2026",
      thesis: null,
      coursework: "Advanced Algorithms in Computational Biology, C++, Data Structures, Machine Learning, NGS, Python, Structural Bioinformatics, R."
    },
    {
      degree: "BSc Microbiology",
      university: "Sharda University, India",
      dates: "September 2020 - May 2023",
      thesis: "Comparison of anti-HCV titre and p53 protein in HCV patients.",
      coursework: null
    }
  ];

  return (
    <section id="education" className="py-24 px-5 sm:px-8 md:px-10 scroll-section">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            data-testid="education-title"
          >
            Education
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className="rounded-[24px] border-2 border-[#D7E2EA]/20 p-6 sm:p-8 hover:border-[#D7E2EA]/50 transition-colors"
                data-testid={`education-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-[#D7E2EA] font-medium uppercase text-xl md:text-2xl" data-testid={`education-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium text-lg" data-testid={`education-university-${index}`}>
                      {edu.university}
                    </p>
                  </div>
                  <div
                    className="text-[#D7E2EA] px-4 py-2 rounded-full font-mono text-sm border border-[#D7E2EA]/30 uppercase tracking-wider whitespace-nowrap"
                    data-testid={`education-dates-${index}`}
                  >
                    {edu.dates}
                  </div>
                </div>
                <div className="space-y-4">
                  {edu.coursework && (
                    <div className="text-[#D7E2EA]/70 text-base md:text-lg" data-testid={`education-coursework-${index}`}>
                      <strong className="text-[#D7E2EA]">Relevant Coursework:</strong> {edu.coursework}
                    </div>
                  )}
                  {edu.thesis && (
                    <div className="text-[#D7E2EA]/70 text-base md:text-lg" data-testid={`education-thesis-${index}`}>
                      <strong className="text-[#D7E2EA]">Thesis:</strong> {edu.thesis}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
