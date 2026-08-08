import { FadeIn } from '@/components/fade-in';

export function Skills() {
  const expertise = [
    {
      number: "01",
      name: "Agentic AI for Biology",
      description: "Designing autonomous, LLM-driven agent systems that reason over, query, and act on complex biological datasets to accelerate research.",
    },
    {
      number: "02",
      name: "Systems & Architecture",
      description: "Low-level programming in Rust and C++, cache design, multi-threading, and high-performance computing infrastructure.",
    },
    {
      number: "03",
      name: "Computational Biology",
      description: "Sequence analysis, phylogenetics, and RNA-seq pipelines built with BLAST, MUSCLE, Kallisto, FastQC, FASTP, MultiQC, and GATK.",
    },
    {
      number: "04",
      name: "Data Science & Analysis",
      description: "Machine learning, statistical inference, algorithms and data structures, and network analysis using iGraph.",
    },
    {
      number: "05",
      name: "Neuromorphic & Emerging Tech",
      description: "Brain-inspired computing, neural networks, and biological hardware interfaces bridging digital and organic systems.",
    },
  ];

  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        data-testid="skills-title"
      >
        Expertise
      </h2>

      <div className="max-w-5xl mx-auto">
        {expertise.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: i < expertise.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined }}
              data-testid={`skill-category-${i}`}
            >
              <span className="text-[#0C0C0C] font-black leading-none flex-shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {item.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:pt-4">
                <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {item.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
