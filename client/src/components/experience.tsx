/**
 * Experience Section Component
 * Displays professional experience with enhanced visual design
 * Includes role details, organizations, dates, and responsibilities
 */

import { ChevronRight } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "Summer Bioinformatics Intern",
      organization: "Jawaharlal Nehru University, India",
      dates: "May 2025 - July 2025",
      duties: [
        "Creating data mining pipelines with NLP to extract genes associated with MS from PubMed Abstracts."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 scroll-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="experience-title">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="project-card rounded-xl p-8 border backdrop-blur-xl" data-testid={`experience-${index}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`experience-role-${index}`}>
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold text-lg" data-testid={`experience-org-${index}`}>
                    {exp.organization}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 text-foreground px-4 py-2 rounded-xl font-mono text-sm border border-primary/30" data-testid={`experience-dates-${index}`}>
                  {exp.dates}
                </div>
              </div>
              <ul className="text-muted-foreground space-y-4 text-lg">
                {exp.duties.map((duty, dutyIndex) => (
                  <li key={dutyIndex} className="flex items-start" data-testid={`experience-duty-${index}-${dutyIndex}`}>
                    <ChevronRight className="text-primary mt-1 mr-4 flex-shrink-0" />
                    <span className="leading-relaxed">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
