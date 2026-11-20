import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, FileText, Activity, Cpu, Database, Zap } from 'lucide-react';
import { portfolioData, ProjectItem } from '@/data/portfolio';

function ProjectCard({ project, index, total }: { project: ProjectItem; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const targetScale = 1 - (total - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const isTracEon = project.id === 'traceon';

  return (
    <div
      id={`project-${project.number}`}
      ref={ref}
      className="scroll-mt-24 min-h-[600px] mb-8 lg:mb-12"
    >
      <motion.div
        style={{ scale }}
        className={`rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 ${
          isTracEon ? 'border-primary/60 bg-[#0C0C0C]/95 shadow-[0_20px_50px_rgba(0,180,216,0.15)]' : 'border-[#D7E2EA]/20 bg-[#0C0C0C]/90'
        } p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-colors`}
      >
        <div>
          {/* Header row: Number, Category, Title, Action Links */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className={`font-black leading-none ${isTracEon ? 'text-primary' : 'text-[#D7E2EA]'}`}
                style={{ fontSize: 'clamp(3rem, 10vw, 10rem)' }}
              >
                {project.number}
              </span>
              <div>
                <div className="text-primary font-mono uppercase tracking-widest text-xs sm:text-sm mb-1">
                  {project.category}
                </div>
                <h3
                  className="text-[#D7E2EA] font-semibold uppercase leading-tight"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
                  data-testid={`project-title-${project.id}`}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D7E2EA]/30 text-xs sm:text-sm font-mono text-[#D7E2EA] hover:border-primary hover:text-primary transition-colors"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
              {project.links.benchmark && (
                <a
                  href={project.links.benchmark}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 text-xs sm:text-sm font-mono text-primary hover:bg-primary/20 transition-colors"
                >
                  <Activity className="h-3.5 w-3.5" />
                  Benchmark Report
                </a>
              )}
              {project.links.release && (
                <a
                  href={project.links.release}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D7E2EA]/30 text-xs sm:text-sm font-mono text-[#D7E2EA] hover:border-primary hover:text-primary transition-colors"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Release Notes
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 text-xs sm:text-sm font-mono text-accent hover:bg-accent/20 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Docs
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p
            className="text-[#D7E2EA]/90 leading-relaxed max-w-4xl text-sm sm:text-base md:text-lg font-light mb-6"
            data-testid={`project-desc-${project.id}`}
          >
            {project.description}
          </p>

          {/* Highlight for TracEon Architecture & Benchmark */}
          {isTracEon && project.benchmarkHighlight && (
            <div className="mb-6 p-5 sm:p-6 rounded-2xl border border-primary/40 bg-primary/5 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold">
                <Zap className="h-4 w-4" />
                Verified Benchmark Performance (v2.3.0 Release)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl border border-primary/20 bg-[#0C0C0C]/80">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-primary">
                    99.22M
                  </div>
                  <div className="text-xs text-[#D7E2EA]/70 font-mono mt-1">Reads / Ops per second</div>
                </div>
                <div className="p-3.5 rounded-xl border border-primary/20 bg-[#0C0C0C]/80">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-primary">
                    9.61×
                  </div>
                  <div className="text-xs text-[#D7E2EA]/70 font-mono mt-1">Read-scaling at 14 threads</div>
                </div>
                <div className="p-3.5 rounded-xl border border-primary/20 bg-[#0C0C0C]/80">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-primary">
                    0.128 µs
                  </div>
                  <div className="text-xs text-[#D7E2EA]/70 font-mono mt-1">Median latency per op</div>
                </div>
              </div>
              <p className="font-mono text-xs text-[#D7E2EA]/60 leading-normal border-t border-primary/15 pt-3">
                {project.benchmarkHighlight.environment} Clearly labeled as results from a particular benchmark environment, not universal performance guarantees.
              </p>
            </div>
          )}

          {/* Contribution Statement */}
          <div className="mb-6 p-4 sm:p-5 rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.02]">
            <span className="font-mono text-xs text-primary uppercase tracking-wider block mb-1.5 font-semibold">
              My Contribution
            </span>
            <p className="text-sm sm:text-base text-[#D7E2EA]/85 leading-relaxed font-light">
              {project.contribution}
            </p>
          </div>

          {/* Technical Highlights list */}
          <div className="mb-6">
            <span className="font-mono text-xs text-[#D7E2EA]/60 uppercase tracking-widest block mb-2.5">
              Technical Highlights
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-[#D7E2EA]/80 font-light">
              {project.technicalHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies Tags Footer */}
        <div className="pt-4 border-t border-[#D7E2EA]/10 flex flex-wrap items-center gap-2" aria-label="Technologies">
          <span className="text-xs font-mono text-[#D7E2EA]/50 uppercase tracking-wider mr-2">Tech:</span>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg border border-[#D7E2EA]/15 bg-[#0C0C0C]/80 text-[#D7E2EA]/80 font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t border-[#D7E2EA]/15 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 scroll-mt-16"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6 text-[#D7E2EA]"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        data-testid="projects-title"
      >
        Featured Projects
      </h2>
      <p className="text-center font-mono text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 mb-14 sm:mb-20 max-w-xl mx-auto">
        Inspectable systems engineering, scientific computing frameworks & research pipelines
      </p>

      {/* Project Navigation Quick-index */}
      <nav aria-label="Project index" className="max-w-5xl mx-auto mb-12 flex flex-wrap justify-center gap-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#project-${project.number}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D7E2EA]/20 bg-card/40 hover:border-primary text-xs font-mono text-[#D7E2EA]/80 hover:text-primary transition-colors"
          >
            <span className="text-primary font-bold">{project.number}</span>
            <span>{project.title.split('—')[0].trim()}</span>
          </a>
        ))}
      </nav>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
