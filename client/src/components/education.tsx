/**
 * Education Section Component
 * Displays academic background with coursework and thesis information
 * Features modern card design with gradient accents
 */

export function Education() {
  const education = [
    {
      degree: "MSc Bioinformatics",
      university: "Jamia Millia Islamia, India",
      dates: "August 2024 - Present",
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
    <section id="education" className="py-24 px-6 section-alt scroll-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="education-title">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="project-card rounded-xl p-8 border backdrop-blur-xl" data-testid={`education-${index}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`education-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold text-lg" data-testid={`education-university-${index}`}>
                    {edu.university}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 text-foreground px-4 py-2 rounded-xl font-mono text-sm border border-primary/30" data-testid={`education-dates-${index}`}>
                  {edu.dates}
                </div>
              </div>
              <div className="space-y-4">
                {edu.coursework && (
                  <div className="text-muted-foreground text-lg bg-card/30 p-4 rounded-xl border border-border/30" data-testid={`education-coursework-${index}`}>
                    <strong className="text-foreground">Relevant Coursework:</strong> {edu.coursework}
                  </div>
                )}
                {edu.thesis && (
                  <div className="text-muted-foreground text-lg bg-card/30 p-4 rounded-xl border border-border/30" data-testid={`education-thesis-${index}`}>
                    <strong className="text-foreground">Thesis:</strong> {edu.thesis}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
