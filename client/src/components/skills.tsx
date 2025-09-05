/**
 * Skills Section Component
 * Displays technical skills categorized by domain with interactive hover effects
 */

export function Skills() {
  // Skill categories with their respective technologies
  const skillCategories = [
    {
      category: "Programming/Markup Languages",
      icon: "💻",
      skills: ["C" ,"C++", "Python", "R", "Bash", "JavaScript", "LaTeX", "typst"]
    },
    {
      category: "Bioinformatics Tools",
      icon: "🧬",
      skills: ["BLAST", "MUSCLE", "Kallisto", "FastQC", "FASTP", "MultiQC", "ETE3", "GATK", "iGraph", "BWA"]
    },
    {
      category: "Data Science & ML",
      icon: "📊",
      skills: ["Machine Learning", "Data Structures", "Algorithms", "Statistical Analysis", "Data Mining", "NLP"]
    },
    {
      category: "Technologies & Frameworks",
      icon: "🔧",
      skills: ["Nextflow", "Docker", "Git", "Linux", "WSL", "High-Performance Computing"]
    },
    {
      category: "Specialized Areas",
      icon: "🔬",
      skills: ["NGS Analysis", "Docking", "Systems Biology", "Computational Biology"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 scroll-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise spanning computational biology, software engineering, and data science.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="project-card rounded-xl p-8 border backdrop-blur-xl"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="text-center space-y-3">
                  <div className="text-4xl" data-testid={`skill-icon-${categoryIndex}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground" data-testid={`skill-category-title-${categoryIndex}`}>
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-secondary to-secondary/50 text-foreground px-3 py-2 rounded-lg text-sm font-medium border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      data-testid={`skill-${categoryIndex}-${skillIndex}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card/40 rounded-2xl p-8 border border-border/50 backdrop-blur-xl">
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-primary font-semibold">Always Learning:</span> Continuously expanding expertise in 
              emerging technologies like neuromorphic computing, advanced machine learning techniques, and next-generation 
              bioinformatics tools to stay at the forefront of computational biology research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}