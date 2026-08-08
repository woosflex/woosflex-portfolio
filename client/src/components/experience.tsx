/**
 * Experience Section Component
 * Displays professional experience with enhanced visual design
 * Includes role details, organizations, dates, and responsibilities
 */

import { ChevronRight, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export function Experience() {
  const experiences = [
    {
      role: "Research Intern",
      organization: "Ahuja Lab, IIIT-Delhi",
      dates: "September 2025 - Present",
      duties: [
        "Solving biology-based problems using Agentic AI, applying autonomous LLM-driven pipelines to computational biology research questions.",
        "Building low-level, high-performance systems to accelerate genomic data processing at scale."
      ]
    },
    {
      role: "Summer Bioinformatics Intern",
      organization: "Jawaharlal Nehru University, India",
      dates: "May 2025 - July 2025",
      duties: [
        "Creating data mining pipelines with NLP to extract genes associated with MS from PubMed Abstracts."
      ]
    }
  ];

  const publications = [
    {
      title: "Cell Reports Publication",
      link: "https://www.cell.com/cell-reports/fulltext/S2211-1247(26)00081-1",
    }
  ];

  return (
    <section id="experience" className="py-24 px-5 sm:px-8 md:px-10 scroll-section">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            data-testid="experience-title"
          >
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className="rounded-[24px] border-2 border-[#D7E2EA]/20 p-6 sm:p-8 hover:border-[#D7E2EA]/50 transition-colors"
                data-testid={`experience-${index}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-[#D7E2EA] font-medium uppercase text-xl md:text-2xl" data-testid={`experience-role-${index}`}>
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium text-lg" data-testid={`experience-org-${index}`}>
                      {exp.organization}
                    </p>
                  </div>
                  <div
                    className="text-[#D7E2EA] px-4 py-2 rounded-full font-mono text-sm border border-[#D7E2EA]/30 uppercase tracking-wider whitespace-nowrap"
                    data-testid={`experience-dates-${index}`}
                  >
                    {exp.dates}
                  </div>
                </div>
                <ul className="text-[#D7E2EA]/70 space-y-4 text-base md:text-lg">
                  {exp.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex} className="flex items-start" data-testid={`experience-duty-${index}-${dutyIndex}`}>
                      <ChevronRight className="text-primary mt-1 mr-4 flex-shrink-0" />
                      <span className="leading-relaxed">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <h3 className="text-[#D7E2EA] uppercase tracking-widest text-sm font-medium mb-6 text-center" data-testid="publications-title">
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <a
                  key={index}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 px-6 py-4 flex items-center justify-between group transition-colors"
                  data-testid={`publication-${index}`}
                >
                  <span className="text-[#D7E2EA] text-base md:text-lg font-medium">{pub.title}</span>
                  <ExternalLink className="text-primary h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
