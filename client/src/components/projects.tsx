/**
 * Projects Section Component
 * Displays featured TracEon project and supporting projects with interactive visualizations
 * Each project includes accurate technical descriptions and visual representations
 */

import { ExternalLink, Github, ChevronRight } from 'lucide-react';

export function Projects() {
  // Project data with accurate descriptions and current status
  const supportingProjects = [
    {
      title: "AutophiGen",
      description: "A foundational project in phylogenetic automation that processed FASTA files in batch... This early work provided key insights that now inform my approach to building more robust and scalable pipelines.",
      link: "https://github.com/woosflex/autophigen",
      visualization: "phylogenetic-tree"
    },
    {
      title: "GCVisualyst",
      description: "A visualization tool for analyzing GC content in genomic sequences.",
      link: "https://github.com/woosflex/gcvisualyst",
      visualization: "sequence-plot"
    },
    {
      title: "RNA-Seq Analysis Pipeline",
      description: "Currently a half-completed bash implementation being transitioned to a scalable and robust Nextflow pipeline for differential gene expression analysis.",
      link: "https://github.com/woosflex/rnaseq_analysis",
      visualization: "pipeline-flow"
    },
    {
      title: "GRN Analysis",
      description: "A comprehensive gene regulatory network analysis investigating Multiple Sclerosis using 13 GEO datasets, employing mutual information calculation and ARACNe algorithm for network inference.",
      link: "https://woosflex.github.io/grn_analysis",
      visualization: "network-graph"
    }
  ];

  // Render different project visualizations based on project type
  const renderVisualization = (type: string) => {
    switch (type) {
      case "phylogenetic-tree":
        return (
          <div className="bg-secondary rounded p-4">
            <div className="text-xs text-muted-foreground mb-2">AutophiGen Workflow (Deprecated)</div>
            <div className="font-mono text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-primary">FASTA</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-accent">BLAST</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary">MUSCLE</span>
              </div>
              <div className="flex items-center justify-end">
                <span className="text-muted-foreground">↓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary">ETE3 Tree</span>
                <span className="text-muted-foreground">←</span>
                <span className="text-accent">Phylogeny</span>
              </div>
              <div className="text-center text-muted-foreground text-xs">Batch Processing</div>
            </div>
          </div>
        );
      
      case "sequence-plot":
        return (
          <div className="bg-secondary rounded p-4">
            <div className="text-xs text-muted-foreground mb-2">GC Content Sliding Window Analysis</div>
            <div className="h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                {/* Bar graph */}
                {[35, 45, 60, 50, 65, 40, 55, 70, 45, 50].map((height, i) => (
                  <rect 
                    key={i} 
                    x={i * 18 + 10} 
                    y={60 - (height * 0.7)} 
                    width="14" 
                    height={height * 0.7} 
                    fill="currentColor" 
                    className="text-primary/60"
                  />
                ))}
                {/* Line graph overlay */}
                <polyline
                  points="17,42 35,32 53,18 71,25 89,14 107,32 125,22 143,11 161,32 179,25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent"
                />
                {/* Data points */}
                {[17, 35, 53, 71, 89, 107, 125, 143, 161, 179].map((x, i) => (
                  <circle key={i} cx={x} cy={[42, 32, 18, 25, 14, 32, 22, 11, 32, 25][i]} r="2" fill="currentColor" className="text-accent"/>
                ))}
              </svg>
              <div className="absolute bottom-0 left-2 text-xs text-muted-foreground">Window</div>
              <div className="absolute bottom-0 right-2 text-xs text-muted-foreground">%GC</div>
            </div>
          </div>
        );
      
      case "pipeline-flow":
        return (
          <div className="bg-secondary rounded p-4">
            <div className="text-xs text-muted-foreground mb-2">RNA-Seq Nextflow Pipeline</div>
            <div className="font-mono text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-primary">FastQC</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-accent">FASTP</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary">FastQC</span>
              </div>
              <div className="flex items-center justify-end">
                <span className="text-muted-foreground">↓</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent">Kallisto Align</span>
                <span className="text-muted-foreground">←</span>
                <span className="text-primary">Build Index</span>
              </div>
              <div className="text-left text-muted-foreground text-xs">(Optional)</div>
              <div className="flex items-center justify-start">
                <span className="text-muted-foreground">↓</span>
              </div>
              <div className="flex items-center justify-start">
                <span className="text-accent">MultiQC</span>
              </div>
            </div>
          </div>
        );
      
      case "network-graph":
        return (
          <div className="bg-secondary rounded p-4">
            <div className="text-xs text-muted-foreground mb-2">MS Gene Regulatory Network</div>
            <div className="h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                {/* Central hub nodes */}
                <circle cx="100" cy="30" r="6" fill="currentColor" className="text-primary"/>
                <circle cx="60" cy="20" r="4" fill="currentColor" className="text-accent"/>
                <circle cx="140" cy="20" r="4" fill="currentColor" className="text-accent"/>
                <circle cx="80" cy="45" r="4" fill="currentColor" className="text-accent"/>
                <circle cx="120" cy="45" r="4" fill="currentColor" className="text-accent"/>
                
                {/* Peripheral nodes */}
                <circle cx="30" cy="15" r="3" fill="currentColor" className="text-muted-foreground"/>
                <circle cx="170" cy="15" r="3" fill="currentColor" className="text-muted-foreground"/>
                <circle cx="40" cy="40" r="3" fill="currentColor" className="text-muted-foreground"/>
                <circle cx="160" cy="40" r="3" fill="currentColor" className="text-muted-foreground"/>
                <circle cx="100" cy="10" r="3" fill="currentColor" className="text-muted-foreground"/>
                <circle cx="100" cy="50" r="3" fill="currentColor" className="text-muted-foreground"/>
                
                {/* Interconnections */}
                <line x1="100" y1="30" x2="60" y2="20" stroke="currentColor" strokeWidth="1" className="text-border"/>
                <line x1="100" y1="30" x2="140" y2="20" stroke="currentColor" strokeWidth="1" className="text-border"/>
                <line x1="100" y1="30" x2="80" y2="45" stroke="currentColor" strokeWidth="1" className="text-border"/>
                <line x1="100" y1="30" x2="120" y2="45" stroke="currentColor" strokeWidth="1" className="text-border"/>
                <line x1="60" y1="20" x2="30" y2="15" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                <line x1="140" y1="20" x2="170" y2="15" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                <line x1="80" y1="45" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                <line x1="120" y1="45" x2="160" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                <line x1="100" y1="30" x2="100" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                <line x1="100" y1="30" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                <line x1="60" y1="20" x2="140" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
                <line x1="80" y1="45" x2="120" y2="45" stroke="currentColor" strokeWidth="0.5" className="text-border"/>
              </svg>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 scroll-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="projects-title">
            Selected Works
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Research projects spanning computational biology, high-performance computing, and bioinformatics tools.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Hero Project */}
        <div className="mb-20">
          <div className="hero-project rounded-2xl p-10 border-2 project-card" data-testid="hero-project">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-block bg-gradient-to-r from-accent/30 to-primary/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/20">
                    ⭐ Featured Project
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3" data-testid="hero-project-title">
                    TracEon: An In-Memory Cache for Accelerating Genomic Data Access
                  </h3>
                  <p className="text-primary font-semibold text-lg">Research & Development Phase</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg" data-testid="hero-project-description">
                  A high-performance key-value store built from scratch in modern C++ to tackle the CPU-intensive cost of parsing massive genomic files. This project addresses the performance bottleneck in modern bioinformatics with a 'parse once, access many' model. This project represents my core research interest in systems-level optimization for bioinformatics. The proposal below outlines the architectural design and performance goals.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["C++", "High-Performance Computing", "Systems Design", "Bioinformatics"].map((tag) => (
                    <span key={tag} className="bg-gradient-to-r from-secondary to-secondary/50 text-foreground px-4 py-2 rounded-xl text-sm font-medium border border-border/50 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="/assets/TracEon_proposal.pdf" 
                  className="inline-flex items-center text-primary hover:text-accent font-semibold text-lg transition-all duration-300 hover:translate-x-2"
                  data-testid="link-traceon-proposal"
                >
                  View Proposal
                  <ExternalLink className="ml-3 h-5 w-5" />
                </a>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <div className="space-y-4">
                  <div className="text-center text-sm text-muted-foreground mb-4">TracEon Architecture: High-Performance Key-Value Store</div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    {/* Input Layer */}
                    <div className="space-y-2">
                      <div className="bg-primary/20 border border-primary/40 rounded p-2 text-center">
                        <div className="text-primary font-mono text-xs">FASTA Files</div>
                      </div>
                      <div className="bg-primary/20 border border-primary/40 rounded p-2 text-center">
                        <div className="text-primary font-mono text-xs">VCF Files</div>
                      </div>
                      <div className="bg-primary/20 border border-primary/40 rounded p-2 text-center">
                        <div className="text-primary font-mono text-xs">GFF Files</div>
                      </div>
                    </div>
                    
                    {/* Processing Layer */}
                    <div className="space-y-2">
                      <div className="bg-accent/20 border border-accent/40 rounded p-3 text-center">
                        <div className="text-accent font-mono text-xs font-bold">TracEon Engine</div>
                        <div className="text-accent font-mono text-xs mt-1">C++ Parser</div>
                      </div>
                      <div className="flex justify-center">
                        <ChevronRight className="text-muted-foreground transform rotate-90 text-sm" />
                      </div>
                      <div className="bg-card border border-border rounded p-2 text-center">
                        <div className="text-foreground font-mono text-xs">Hash Table</div>
                        <div className="text-muted-foreground text-xs">O(1) Access</div>
                      </div>
                    </div>
                    
                    {/* Output Layer */}
                    <div className="space-y-2">
                      <div className="bg-secondary border border-border rounded p-2 text-center">
                        <div className="text-foreground font-mono text-xs">Query API</div>
                      </div>
                      <div className="bg-secondary border border-border rounded p-2 text-center">
                        <div className="text-foreground font-mono text-xs">Range Search</div>
                      </div>
                      <div className="bg-secondary border border-border rounded p-2 text-center">
                        <div className="text-foreground font-mono text-xs">Batch Access</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="bg-card border border-border rounded p-3 mt-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-primary font-mono text-sm font-bold">Parse Once</div>
                        <div className="text-muted-foreground text-xs">Initial overhead</div>
                      </div>
                      <div>
                        <div className="text-accent font-mono text-sm font-bold">Access Many</div>
                        <div className="text-muted-foreground text-xs">O(1) retrieval</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {supportingProjects.map((project, index) => (
            <div key={index} className="project-card rounded-xl p-8 border" data-testid={`project-${index}`}>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground" data-testid={`project-title-${index}`}>
                  {project.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                <div className="visualization">
                  {renderVisualization(project.visualization)}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-primary hover:text-accent font-semibold transition-all duration-300 hover:translate-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-project-${index}`}
                >
                  <Github className="mr-3 h-5 w-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
