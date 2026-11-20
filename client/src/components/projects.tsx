import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ExternalLink,
  Github,
  FileText,
  Activity,
  Zap,
  Cpu,
  Terminal,
  Binary,
  ShieldCheck,
  Layers,
  Sparkles
} from 'lucide-react';
import { portfolioData, ProjectItem } from '@/data/portfolio';
import { ProjectPipelineView } from '@/components/project-pipeline';

interface ScalingPoint {
  threads: number;
  ops: string;
  speedup: string;
  latency: string;
  x: number;
  y: number;
}

const TRACEON_SCALING_POINTS: ScalingPoint[] = [
  { threads: 1, ops: "10.32M", speedup: "1.00×", latency: "0.192 µs", x: 45, y: 112 },
  { threads: 2, ops: "19.85M", speedup: "1.92×", latency: "0.178 µs", x: 110, y: 104 },
  { threads: 4, ops: "38.40M", speedup: "3.72×", latency: "0.165 µs", x: 205, y: 88 },
  { threads: 8, ops: "71.20M", speedup: "6.90×", latency: "0.145 µs", x: 335, y: 60 },
  { threads: 12, ops: "88.90M", speedup: "8.61×", latency: "0.134 µs", x: 435, y: 44 },
  { threads: 14, ops: "99.22M", speedup: "9.61×", latency: "0.128 µs", x: 505, y: 34 }
];

function BenchmarkTelemetryDashboard({
  benchmark
}: {
  benchmark: NonNullable<ProjectItem['benchmarkHighlight']>;
}) {
  const [hoveredPoint, setHoveredPoint] = useState<ScalingPoint | null>(null);

  return (
    <div className="my-6 p-4 sm:p-6 rounded-2xl border border-primary/30 bg-[#0C0C0C]/90 space-y-5">
      {/* Header telemetry strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-primary/20">
        <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold">
          <Zap className="h-3.5 w-3.5" />
          <span>Verified Benchmark Telemetry (v2.3.0 Release)</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-mono text-xs text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Deterministic Microbenchmark
        </div>
      </div>

      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="p-3.5 rounded-xl border border-primary/20 bg-primary/5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1">
              Peak Read Throughput
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-primary tabular-nums">
              {benchmark.opsValue || '99.22M'}
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-primary/15 flex items-center justify-between text-xs font-mono">
            <span className="text-[#D7E2EA]/70">Reads / queries / sec</span>
            <span className="text-primary font-medium">14 threads</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-primary/20 bg-primary/5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1">
              Parallel Scaling Speedup
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-primary tabular-nums">
              {benchmark.scalingMultiplier ? `${benchmark.scalingMultiplier}×` : '9.61×'}
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-primary/15 flex items-center justify-between text-xs font-mono">
            <span className="text-[#D7E2EA]/70">vs. 1-thread baseline</span>
            <span className="text-primary font-medium">{benchmark.scalingEfficiency || '68.6%'} efficiency</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl border border-primary/20 bg-primary/5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#D7E2EA]/60 block mb-1">
              Median Access Latency
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-primary tabular-nums">
              0.128 µs
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-primary/15 flex items-center justify-between text-xs font-mono">
            <span className="text-[#D7E2EA]/70">p50 latency per op</span>
            <span className="text-emerald-400 font-medium">Sub-microsecond</span>
          </div>
        </div>
      </div>

      {/* Visual Concurrency Scaling Line Plot & Progress Gauges */}
      <div className="p-4 sm:p-5 rounded-xl border border-[#D7E2EA]/15 bg-[#0C0C0C]/80 space-y-4">
        <div className="flex flex-wrap items-center justify-between text-xs font-mono gap-1 border-b border-[#D7E2EA]/10 pb-2.5">
          <div className="flex items-center gap-2 text-primary uppercase tracking-wider font-semibold">
            <Activity className="h-3.5 w-3.5 text-primary" />
            <span>Multi-Thread Concurrency Scaling Line Plot</span>
          </div>
          <div className="text-[#D7E2EA]/70">
            {hoveredPoint ? (
              <span className="text-primary font-bold">
                {hoveredPoint.threads}T: {hoveredPoint.ops} ops/s · {hoveredPoint.speedup} speedup ({hoveredPoint.latency})
              </span>
            ) : (
              <span>1T Baseline (10.32M) → 14T Saturated (99.22M ops/s)</span>
            )}
          </div>
        </div>

        {/* SVG Multi-Thread Scaling Line Chart */}
        <div className="relative w-full overflow-hidden">
          <svg
            viewBox="0 0 540 145"
            className="w-full h-32 sm:h-36 overflow-visible"
            aria-label="TracEon multi-thread read scaling line plot"
          >
            <defs>
              <linearGradient id="traceonScalingGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            <line x1="40" y1="35" x2="520" y2="35" stroke="rgba(215,226,234,0.08)" strokeDasharray="3 3" />
            <text x="32" y="38" textAnchor="end" fill="rgba(215,226,234,0.4)" className="font-mono text-[9px]">100M</text>

            <line x1="40" y1="75" x2="520" y2="75" stroke="rgba(215,226,234,0.08)" strokeDasharray="3 3" />
            <text x="32" y="78" textAnchor="end" fill="rgba(215,226,234,0.4)" className="font-mono text-[9px]">50M</text>

            <line x1="40" y1="115" x2="520" y2="115" stroke="rgba(215,226,234,0.08)" strokeDasharray="3 3" />
            <text x="32" y="118" textAnchor="end" fill="rgba(215,226,234,0.4)" className="font-mono text-[9px]">10M</text>

            {/* Linear scaling ideal reference line */}
            <line
              x1="45"
              y1="112"
              x2="505"
              y2="15"
              stroke="rgba(215, 226, 234, 0.18)"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />

            {/* Gradient area fill under curve */}
            <polygon
              points={`45,125 ${TRACEON_SCALING_POINTS.map((p) => `${p.x},${p.y}`).join(' ')} 505,125`}
              fill="url(#traceonScalingGradient)"
            />

            {/* High-visibility electric blue / cyan scaling line */}
            <polyline
              fill="none"
              stroke="#00b4d8"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={TRACEON_SCALING_POINTS.map((p) => `${p.x},${p.y}`).join(' ')}
              style={{ filter: 'drop-shadow(0 0 8px rgba(0, 180, 216, 0.8))' }}
            />

            {/* Interactive thread data points */}
            {TRACEON_SCALING_POINTS.map((p, idx) => {
              const isHovered = hoveredPoint?.threads === p.threads;
              return (
                <g
                  key={idx}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(p)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isHovered ? 6 : 4}
                    fill="#0C0C0C"
                    stroke="#00b4d8"
                    strokeWidth={isHovered ? 3 : 2}
                    style={{ filter: 'drop-shadow(0 0 6px rgba(0, 180, 216, 0.9))' }}
                  />
                  <text
                    x={p.x}
                    y={136}
                    textAnchor="middle"
                    fill={isHovered ? "#00b4d8" : "rgba(215,226,234,0.6)"}
                    className="font-mono text-[10px] font-semibold"
                  >
                    {p.threads}T
                  </text>
                  {isHovered && (
                    <g>
                      <rect
                        x={p.x - 38}
                        y={p.y - 24}
                        width="76"
                        height="18"
                        rx="4"
                        fill="#0C0C0C"
                        stroke="#00b4d8"
                        strokeWidth="1"
                      />
                      <text
                        x={p.x}
                        y={p.y - 12}
                        textAnchor="middle"
                        fill="#D7E2EA"
                        className="font-mono text-[9px] font-bold"
                      >
                        {p.ops} ops/s
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Dual Progress / Concurrency Saturated Gauges */}
        <div className="pt-2 border-t border-[#D7E2EA]/10 space-y-2.5">
          {/* 1-Thread Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono text-[#D7E2EA]/70">
              <span>Single Thread (Baseline)</span>
              <span>10.32M ops/s (1.00×)</span>
            </div>
            <div className="h-2 rounded-full bg-[#1A1A1A] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: '10.4%', background: 'rgba(215, 226, 234, 0.65)' }}
              />
            </div>
          </div>

          {/* 14-Threads Progress Bar with Explicit Vivid Cyan-Blue Gradient */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono text-[#D7E2EA]">
              <span className="text-primary font-semibold">14 Saturated Threads (Concurrent Snapshot Engine)</span>
              <span className="text-primary font-semibold tabular-nums">99.22M ops/s (9.61× speedup)</span>
            </div>
            <div className="h-2.5 rounded-full bg-[#1A1A1A] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: '96.1%',
                  background: 'linear-gradient(90deg, #0077b6 0%, #00b4d8 50%, #48cae4 100%)',
                  boxShadow: '0 0 16px rgba(0, 180, 216, 0.7)'
                }}
              />
            </div>
          </div>
        </div>

        <p className="text-xs font-mono text-[#D7E2EA]/60 pt-1">
          Near-linear parallel scaling across Intel hybrid topology (4 P-cores + 8 E-cores + 2 LPE-cores) with lock-free atomic snapshots and zero reader contention.
        </p>
      </div>

      {/* Hardware Telemetry Spec Chips */}
      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#D7E2EA]/60 block">
          Hardware & Execution Environment Telemetry
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {benchmark.telemetrySpecs ? (
            benchmark.telemetrySpecs.map((spec, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-lg border border-[#D7E2EA]/15 bg-[#0C0C0C]/60 flex items-center gap-2 font-mono text-xs text-[#D7E2EA]/85"
              >
                {idx === 0 && <Cpu className="h-3.5 w-3.5 text-primary shrink-0" />}
                {idx === 1 && <Terminal className="h-3.5 w-3.5 text-primary shrink-0" />}
                {idx === 2 && <Binary className="h-3.5 w-3.5 text-primary shrink-0" />}
                {idx === 3 && <Activity className="h-3.5 w-3.5 text-primary shrink-0" />}
                {idx === 4 && <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />}
                <span className="text-[#D7E2EA]/50">{spec.label}:</span>
                <span className="truncate">{spec.value}</span>
              </div>
            ))
          ) : (
            <div className="px-3 py-1.5 rounded-lg border border-[#D7E2EA]/15 bg-[#0C0C0C]/60 font-mono text-xs text-[#D7E2EA]/85">
              {benchmark.environment}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
      className="scroll-mt-24 min-h-[600px] mb-8 lg:mb-12 relative"
    >
      <motion.div
        style={{ scale }}
        className={`rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 ${
          isTracEon
            ? 'border-primary/60 bg-[#0C0C0C]/95 shadow-[0_20px_50px_rgba(0,180,216,0.15)]'
            : 'border-[#D7E2EA]/20 bg-[#0C0C0C]/90'
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

          {/* Highlight for TracEon Architecture & Benchmark Dashboard */}
          {isTracEon && project.benchmarkHighlight && (
            <BenchmarkTelemetryDashboard benchmark={project.benchmarkHighlight} />
          )}

          {/* Architecture & Execution Pipeline Visualizer */}
          {project.pipeline && (
            <ProjectPipelineView pipeline={project.pipeline} />
          )}

          {/* Contribution Statement with Ownership Badges */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>My Contribution & Technical Ownership</span>
            </div>

            {project.contributionPillars && project.contributionPillars.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3" aria-label="Key technical areas">
                {project.contributionPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-medium"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            )}

            <div className="pl-4 border-l-2 border-primary/50">
              <p className="text-sm sm:text-base text-[#D7E2EA]/85 leading-relaxed font-light">
                {project.contribution}
              </p>
            </div>
          </div>

          {/* Technical Highlights Structured Feature Cards */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-[#D7E2EA]/70 font-mono text-xs uppercase tracking-widest font-semibold mb-3">
              <Layers className="h-3.5 w-3.5 text-primary" />
              <span>Technical Highlights & Architecture Invariants</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.technicalHighlights.map((highlight, idx) => {
                const item =
                  typeof highlight === 'string'
                    ? { category: 'Feature', title: `Highlight ${idx + 1}`, detail: highlight }
                    : highlight;
                return (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 hover:border-primary/40 hover:bg-[#0C0C0C] transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                          {item.category}
                        </span>
                        <span className="text-[#D7E2EA]/30 font-mono text-xs">#{idx + 1}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-[#D7E2EA] group-hover:text-primary transition-colors mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#D7E2EA]/70 leading-relaxed font-light">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
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

      <div className="max-w-5xl mx-auto flex flex-col gap-6 relative">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
