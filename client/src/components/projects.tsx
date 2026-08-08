import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '@/components/live-project-button';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel?: string;
}

const projectsData: ProjectData[] = [
  {
    number: "01",
    category: "Systems / Bioinformatics",
    name: "TracEon",
    description:
      "A high-performance in-memory cache written in C++ (now expanding into Rust) that implements a 'parse once, access many' model, speeding up genomic data pipelines by loading files like FASTA into a persistent, compressed cache.",
    tags: ["C++", "Rust", "HPC", "Systems Design"],
    link: "https://github.com/woosflex/TracEon",
  },
  {
    number: "02",
    category: "Computational Biology",
    name: "GRN Analysis",
    description:
      "A gene regulatory network reconstruction pipeline investigating Multiple Sclerosis using 13 GEO datasets, employing mutual information calculation and the ARACNe algorithm for network inference.",
    tags: ["DESeq2", "ARACNe", "Network Analysis"],
    link: "https://woosflex.github.io/grn_analysis",
  },
  {
    number: "03",
    category: "Bioinformatics Pipeline",
    name: "RNA-Seq Analysis",
    description:
      "A modular and reproducible RNA-seq analysis pipeline for quantification, quality control, and downstream analysis using FASTP, FastQC, Kallisto, and R.",
    tags: ["Nextflow", "Kallisto", "FastQC"],
    link: "https://github.com/woosflex/rnaseq_analysis",
  },
  {
    number: "04",
    category: "Proprietary Software",
    name: "iQR DNA",
    description:
      "A quantum-secure genomic compression suite developed by me under InfraQR: a cross-platform desktop app achieving up to 95% lossless compression on FASTQ/SAM/BAM/FASTA data, secured with post-quantum Kyber-768 and AES-256-GCM encryption. Built in Rust with Tauri.",
    tags: ["Rust", "Tauri", "Post-Quantum Crypto", "Proprietary"],
    link: "https://infraqr.com",
    linkLabel: "Visit InfraQR",
  },
];

function ProjectCard({ project, index, total }: { project: ProjectData; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[#D7E2EA] font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.number}
            </span>
            <div>
              <div className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mb-1">{project.category}</div>
              <h3 className="text-[#D7E2EA] font-medium uppercase" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.link} label={project.linkLabel ?? "View on GitHub"} />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <p className="text-[#D7E2EA]/80 leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[#D7E2EA] border border-[#D7E2EA]/30 px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        data-testid="projects-title"
      >
        Project
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} total={projectsData.length} />
        ))}
      </div>
    </section>
  );
}
