import { useState } from 'react';
import { ArrowRight, Database, Cpu, HardDrive, Sparkles, Binary, Activity, Network } from 'lucide-react';
import { ProjectPipeline, PipelineStep } from '@/data/portfolio';

function StepIcon({ type }: { type?: PipelineStep['type'] }) {
  switch (type) {
    case 'input':
      return <Binary className="h-3.5 w-3.5 text-primary" />;
    case 'compute':
      return <Cpu className="h-3.5 w-3.5 text-primary" />;
    case 'storage':
      return <Database className="h-3.5 w-3.5 text-accent" />;
    case 'process':
      return <Activity className="h-3.5 w-3.5 text-primary" />;
    case 'output':
      return <Sparkles className="h-3.5 w-3.5 text-emerald-400" />;
    default:
      return <Binary className="h-3.5 w-3.5 text-primary" />;
  }
}

function WaveformVisualizer({ steps }: { steps: PipelineStep[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  // Normalized points representing sliding-window GC% along a genomic locus
  const points = [
    { x: 30, y: 70, label: "Locus 0.1M", gc: "42%" },
    { x: 100, y: 35, label: "CpG Island A", gc: "68%" },
    { x: 180, y: 80, label: "Intron 2", gc: "38%" },
    { x: 260, y: 25, label: "Promoter Hub", gc: "74%" },
    { x: 340, y: 55, label: "Exon 4", gc: "53%" },
    { x: 420, y: 30, label: "CpG Island B", gc: "71%" },
    { x: 500, y: 65, label: "Terminal 3' UTR", gc: "46%" }
  ];

  return (
    <div className="my-5 p-4 sm:p-5 rounded-2xl border border-primary/20 bg-[#0C0C0C]/80 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D7E2EA]/10 pb-3">
        <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold">
          <Activity className="h-3.5 w-3.5" />
          <span>Interactive Sliding-Window GC% Waveform</span>
        </div>
        <span className="font-mono text-xs text-[#D7E2EA]/60">Window: 500bp · Step: 50bp</span>
      </div>

      {/* SVG Waveform Graphic */}
      <div className="relative w-full overflow-hidden">
        <svg viewBox="0 0 530 110" className="w-full h-24 sm:h-28 overflow-visible" aria-label="Sliding window GC percentage curve">
          <defs>
            <linearGradient id="gcGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(199, 89%, 52%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(199, 89%, 52%)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="20" y1="20" x2="510" y2="20" stroke="rgba(215,226,234,0.08)" strokeDasharray="3 3" />
          <line x1="20" y1="55" x2="510" y2="55" stroke="rgba(215,226,234,0.08)" strokeDasharray="3 3" />
          <line x1="20" y1="90" x2="510" y2="90" stroke="rgba(215,226,234,0.08)" strokeDasharray="3 3" />

          {/* Area fill */}
          <polygon
            points={`30,100 ${points.map((p) => `${p.x},${p.y}`).join(' ')} 500,100`}
            fill="url(#gcGradient)"
          />

          {/* Dynamic line */}
          <polyline
            fill="none"
            stroke="hsl(199, 89%, 52%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points.map((p) => `${p.x},${p.y}`).join(' ')}
          />

          {/* Interactive locus markers */}
          {points.map((p, idx) => (
            <g
              key={idx}
              className="cursor-pointer transition-transform duration-200"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={hoveredIdx === idx ? 6 : 3.5}
                className="fill-background stroke-primary stroke-2 transition-all"
              />
              {hoveredIdx === idx && (
                <text
                  x={p.x}
                  y={p.y - 10}
                  textAnchor="middle"
                  fill="#D7E2EA"
                  className="font-mono text-xs font-bold"
                >
                  {p.gc} ({p.label})
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Stepper Pipeline strip below graphic */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#D7E2EA]/10">
        {steps.map((step, idx) => (
          <div key={idx} className="space-y-0.5">
            <span className="font-mono text-xs text-primary uppercase tracking-wider block font-semibold">
              {idx + 1}. {step.name}
            </span>
            <span className="font-mono text-xs text-[#D7E2EA]/60 block leading-tight">
              {step.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NetworkVisualizer({ steps }: { steps: PipelineStep[] }) {
  const [selectedHub, setSelectedHub] = useState<string>("STAT3");

  const hubs = [
    { name: "STAT3", role: "Primary Hub", miScore: "0.84", targets: 48, x: 260, y: 55, color: "hsl(199, 89%, 52%)" },
    { name: "IRF1", role: "Immune Signaling", miScore: "0.78", targets: 34, x: 120, y: 35, color: "hsl(282, 85%, 65%)" },
    { name: "MYC", role: "Growth Regulator", miScore: "0.72", targets: 29, x: 150, y: 85, color: "hsl(215, 20.2%, 70%)" },
    { name: "RELA", role: "NF-κB Subunit", miScore: "0.75", targets: 38, x: 390, y: 30, color: "hsl(199, 89%, 52%)" },
    { name: "JAK2", role: "Kinase Transducer", miScore: "0.69", targets: 22, x: 380, y: 85, color: "hsl(282, 85%, 65%)" }
  ];

  const activeHubData = hubs.find((h) => h.name === selectedHub) || hubs[0];

  return (
    <div className="my-5 p-4 sm:p-5 rounded-2xl border border-primary/20 bg-[#0C0C0C]/80 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D7E2EA]/10 pb-3">
        <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold">
          <Network className="h-3.5 w-3.5" />
          <span>ARACNe Mutual Information Network Topology</span>
        </div>
        <span className="font-mono text-xs text-primary font-medium">
          Hub: <strong className="text-white">{activeHubData.name}</strong> (MI: {activeHubData.miScore} · {activeHubData.targets} targets)
        </span>
      </div>

      {/* SVG Network Schematic */}
      <div className="relative w-full">
        <svg viewBox="0 0 520 120" className="w-full h-24 sm:h-28 overflow-visible" aria-label="Gene regulatory network topology">
          {/* Edges from central hub to surrounding nodes */}
          {hubs.slice(1).map((hub, idx) => (
            <line
              key={idx}
              x1={hubs[0].x}
              y1={hubs[0].y}
              x2={hub.x}
              y2={hub.y}
              stroke="rgba(215, 226, 234, 0.2)"
              strokeWidth={selectedHub === hub.name || selectedHub === hubs[0].name ? 2 : 1}
              strokeDasharray={selectedHub === hub.name ? undefined : "3 3"}
            />
          ))}
          {/* Secondary inter-hub edges */}
          <line x1={hubs[1].x} y1={hubs[1].y} x2={hubs[2].x} y2={hubs[2].y} stroke="rgba(215, 226, 234, 0.12)" />
          <line x1={hubs[3].x} y1={hubs[3].y} x2={hubs[4].x} y2={hubs[4].y} stroke="rgba(215, 226, 234, 0.12)" />

          {/* Node circles */}
          {hubs.map((hub) => {
            const isSelected = selectedHub === hub.name;
            return (
              <g
                key={hub.name}
                className="cursor-pointer"
                onClick={() => setSelectedHub(hub.name)}
              >
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isSelected ? 14 : 10}
                  fill="#0C0C0C"
                  stroke={hub.color}
                  strokeWidth={isSelected ? 3 : 2}
                  className="transition-all"
                />
                <text
                  x={hub.x}
                  y={hub.y + 3.5}
                  textAnchor="middle"
                  fill="#D7E2EA"
                  className="font-mono text-xs font-bold select-none pointer-events-none"
                >
                  {hub.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Pipeline steps overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#D7E2EA]/10">
        {steps.map((step, idx) => (
          <div key={idx} className="space-y-0.5">
            <span className="font-mono text-xs text-primary uppercase tracking-wider block font-semibold">
              {idx + 1}. {step.name}
            </span>
            <span className="font-mono text-xs text-[#D7E2EA]/60 block leading-tight">
              {step.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectPipelineView({ pipeline }: { pipeline: ProjectPipeline }) {
  if (pipeline.type === 'waveform') {
    return <WaveformVisualizer steps={pipeline.steps} />;
  }

  if (pipeline.type === 'network') {
    return <NetworkVisualizer steps={pipeline.steps} />;
  }

  // Default linear & multi-stage pipeline flow
  return (
    <div className="my-5 p-4 sm:p-5 rounded-2xl border border-primary/20 bg-[#0C0C0C]/80 space-y-3.5">
      <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold border-b border-[#D7E2EA]/10 pb-2.5">
        <Activity className="h-3.5 w-3.5" />
        <span>Execution & Architecture Pipeline</span>
      </div>

      {/* Responsive Connected Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {pipeline.steps.map((step, idx) => {
          const isLast = idx === pipeline.steps.length - 1;

          return (
            <div key={idx} className="relative flex flex-col justify-between p-3 rounded-xl border border-[#D7E2EA]/15 bg-white/[0.015] hover:border-primary/50 transition-colors group">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                  <StepIcon type={step.type} />
                  <span>0{idx + 1}</span>
                </div>
                {!isLast && (
                  <ArrowRight className="hidden lg:block h-3.5 w-3.5 text-[#D7E2EA]/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                )}
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#D7E2EA] font-mono leading-tight mb-1">
                  {step.name}
                </h4>
                <p className="text-xs text-[#D7E2EA]/60 font-mono leading-normal">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
