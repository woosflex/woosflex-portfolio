export interface PipelineStep {
  name: string;
  detail: string;
  type?: 'input' | 'process' | 'compute' | 'storage' | 'output';
}

export interface ProjectPipeline {
  type: 'flow' | 'waveform' | 'network';
  steps: PipelineStep[];
}

export interface TechnicalHighlightItem {
  category: string;
  title: string;
  detail: string;
}

export interface TelemetrySpec {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  contributionPillars?: string[];
  technologies: string[];
  technicalHighlights: TechnicalHighlightItem[];
  pipeline: ProjectPipeline;
  links: {
    github?: string;
    benchmark?: string;
    release?: string;
    live?: string;
  };
  benchmarkHighlight?: {
    opsPerSec: string;
    opsValue?: string;
    scaling: string;
    scalingMultiplier?: number;
    latency: string;
    environment: string;
    singleThreadBaseline?: string;
    scalingEfficiency?: string;
    telemetrySpecs?: TelemetrySpec[];
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  organization: string;
  lab?: string;
  roles: Array<{
    title: string;
    period: string;
  }>;
  summary?: string;
  areas: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  honours?: string;
  details?: string;
}

export interface QualificationItem {
  title: string;
  field: string;
  year: string;
  status: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  year: string;
  venue: string;
  citationDetails?: string;
  doi: string;
  url: string;
}

export interface AboutPillar {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
}

export const portfolioData = {
  hero: {
    name: "Adnan Raza",
    headline: "Systems Software Engineer",
    subheadline: "Scientific Computing · HPC · Bioinformatics",
    intro: [
      "I build software at the intersection of systems engineering and scientific computing.",
      "My work spans high-performance C++ development, Rust integration, Python-based research workflows and computational biology. I enjoy understanding how software works beneath the surface — from memory management and concurrency to performance optimisation and data-intensive computation."
    ],
    descriptor: "Building efficient software for scientific and computational workloads.",
    proof: {
      name: "TracEon",
      version: "v2.3.0",
      tagline: "C++20 · 99.2M ops/s · zero-copy genomic cache",
      url: "https://github.com/woosflex/TracEon",
      benchmarkUrl: "https://github.com/woosflex/TracEon/blob/main/benchmarks/v2.3.0_benchmark_report.md"
    },
    buttons: [
      { label: "View Projects", href: "#projects", primary: true },
      { label: "GitHub Profile", href: "https://github.com/woosflex", external: true },
      { label: "Contact Me", href: "#footer", external: false }
    ]
  },

  about: {
    title: "About Me",
    headline: "Bridging molecular sciences with high-performance systems engineering.",
    paragraphs: [
      "I am a software engineer with an academic background in bioinformatics and microbiology, focused on systems software, scientific computing, and high-performance applications.",
      "During my research appointments at IIIT Delhi and JNU, I contributed to computational frameworks for biological research and drug discovery. My work involved Python-to-Rust integration, GPU-oriented workflows with WGPU, Docker-based microservices, Nextflow pipelines, and PostgreSQL database schema design.",
      "Outside collaborative research, I designed and developed TracEon, a C++20 genomic data caching library. Building it has provided hands-on experience in concurrent programming, memory-efficient data structures, SIMD vectorization, compression, integrity verification, and reproducible benchmarking.",
      "I primarily work in Linux environments and focus on the architectural and algorithmic decisions that make software reliable, scalable, and maintainable under intensive computational loads."
    ],
    pillars: [
      {
        title: "Foundations in Biology",
        subtitle: "MSc Bioinformatics · BSc Microbiology",
        badge: "Academic Roots",
        description: "MSc Bioinformatics (CGPA 9.51/10) and BSc Microbiology (First Class Honours). Deep foundational comprehension of nucleotide sequencing, macromolecular structures, and biological modeling."
      },
      {
        title: "Research Infrastructure",
        subtitle: "IIIT Delhi Ahuja Lab & JNU",
        badge: "Scientific Workflows",
        description: "Developed computational frameworks, Python-to-Rust kernels using maturin, WGPU-oriented workflows, Nextflow DAG orchestrations, and containerised microservices for biological discovery."
      },
      {
        title: "Systems Engineering",
        subtitle: "TracEon & Low-Level C++",
        badge: "Core Engineering",
        description: "Designed TracEon. Practical experience with zero-copy memory layouts, lock-free atomic snapshots, AVX2/NEON SIMD acceleration, LZ4 compression, and verified high-throughput benchmarking."
      }
    ] as AboutPillar[],
    thesis: {
      label: "Read My Thesis",
      url: "/Adnan_Raza_Thesis.pdf"
    }
  },

  skills: [
    {
      title: "Programming Languages",
      skills: ["C++", "Rust", "Python", "C", "Bash", "R"]
    },
    {
      title: "Systems & Low-Level Development",
      skills: [
        "C++20",
        "Concurrency & atomic operations",
        "SIMD optimisation (AVX2, NEON)",
        "Memory-efficient data structures",
        "Zero-copy data access",
        "TCP client/server development",
        "Performance benchmarking"
      ]
    },
    {
      title: "Linux & Computational Infrastructure",
      skills: [
        "Linux (primary development environment)",
        "SSH",
        "Shell scripting",
        "Docker",
        "PBS-based research computing exposure",
        "Basic networking & troubleshooting",
        "Basic virtual machine usage"
      ]
    },
    {
      title: "Scientific Computing & Workflows",
      skills: [
        "Nextflow",
        "PostgreSQL",
        "SciSpaCy",
        "DESeq2",
        "ARACNe",
        "FastQC",
        "fastp",
        "WGPU",
        "ggplot2",
        "R Shiny"
      ]
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "CMake", "maturin"]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "traceon",
      number: "01",
      title: "TracEon — High-Performance Genomic Data Caching Library",
      category: "Systems Programming / C++ / Performance Engineering",
      description:
        "TracEon is a C++20 genomic data caching library designed around efficient memory usage, concurrent access and high-throughput sequence data processing.",
      contribution:
        "I designed the architecture and implemented its core functionality, including zero-copy data access, lock-free concurrent reads, SIMD-accelerated parsing, compressed caching and integrity verification.",
      contributionPillars: [
        "Core C++20 Architecture",
        "Zero-Copy Memory Arena",
        "Lock-Free Snapshot Engine",
        "AVX2 & NEON SIMD Kernels",
        "LZ4 & CRC32C Storage"
      ],
      technologies: ["C++20", "SIMD (AVX2, NEON)", "LZ4", "CRC32C", "CMake", "Docker"],
      technicalHighlights: [
        {
          category: "Memory",
          title: "Zero-Copy Arena",
          detail: "Arena-backed storage and zero-copy string access through std::string_view slices avoiding heap allocations."
        },
        {
          category: "Concurrency",
          title: "Lock-Free Reads",
          detail: "C++20 atomics and immutable cache snapshots delivering 9.61× parallel speedup at 14 threads."
        },
        {
          category: "SIMD Kernels",
          title: "Hardware Vectorisation",
          detail: "Vectorised FASTA/FASTQ sequence parsers with AVX2 and NEON targets plus scalar fallback."
        },
        {
          category: "Compression",
          title: "LZ4 Binary Caching",
          detail: "LZ4-based binary block caching and memory-mapped cache loading for ultra-fast startup."
        },
        {
          category: "Integrity",
          title: "CRC32C Verification",
          detail: "Streaming hardware-accelerated integrity verification and workload-specific indexing modes."
        },
        {
          category: "Services",
          title: "Remote Read Testbed",
          detail: "Optional POSIX TCP-based remote read service with an isolated Docker-based reproducibility testbed."
        }
      ],
      pipeline: {
        type: 'flow',
        steps: [
          { name: "Input Sequences", detail: "FASTA / FASTQ format", type: "input" },
          { name: "SIMD Parser", detail: "AVX2 & NEON kernels", type: "compute" },
          { name: "Zero-Copy Arena", detail: "std::string_view slices", type: "process" },
          { name: "Lock-Free Reads", detail: "Atomics & snapshots (14T)", type: "compute" },
          { name: "Verified Cache", detail: "LZ4 & CRC32C storage", type: "storage" }
        ]
      },
      links: {
        github: "https://github.com/woosflex/TracEon",
        benchmark: "https://github.com/woosflex/TracEon/blob/main/benchmarks/v2.3.0_benchmark_report.md",
        release: "https://github.com/woosflex/TracEon/blob/main/RELEASE_v2.3.0.md"
      },
      benchmarkHighlight: {
        opsPerSec: "~99.22 million reads/ops/sec",
        opsValue: "99.22M",
        scaling: "9.61× read-scaling at 14 threads",
        scalingMultiplier: 9.61,
        latency: "0.128 µs median latency per operation",
        environment: "Host: Intel Core Ultra 5 125H (14 cores / 18 threads) · Linux x86_64 · GCC 16.2.1 (-O3 C++20 Release)",
        singleThreadBaseline: "10.32M ops/s",
        scalingEfficiency: "68.6%",
        telemetrySpecs: [
          { label: "Host CPU", value: "Intel Core Ultra 5 125H (14C / 18T · 4P + 8E + 2LPE)" },
          { label: "Platform", value: "Linux x86_64 (Kernel 6.12)" },
          { label: "Toolchain", value: "GCC 16.2.1 (-O3 -march=native C++20 Release)" },
          { label: "Workload", value: "Multi-threaded in-memory read suite (14 worker threads)" },
          { label: "Verification", value: "Deterministic microbenchmark harness" }
        ]
      }
    },
    {
      id: "evolf",
      number: "02",
      title: "EvOlf",
      category: "Research Software / Workflow Infrastructure",
      description:
        "A computational workflow infrastructure project developed at IIIT Delhi to support biological research and drug-discovery workflows.",
      contribution:
        "Developed a Docker-based microservice component, engineered a local Nextflow pipeline, contributed to PostgreSQL database schema design, and integrated computational modules into a robust research workflow.",
      contributionPillars: [
        "Docker Microservice Runner",
        "Nextflow Pipeline DAG",
        "PostgreSQL Relational Schema",
        "Reproducible Research Integration"
      ],
      technologies: ["Python", "Docker", "Nextflow", "PostgreSQL"],
      technicalHighlights: [
        {
          category: "Containerisation",
          title: "Isolated Docker Runner",
          detail: "Containerised microservice architecture ensuring sandboxed execution for biological tasks."
        },
        {
          category: "Workflow",
          title: "Nextflow DAG Orchestrator",
          detail: "Local multi-stage computational pipeline with resume capabilities and process isolation."
        },
        {
          category: "Data Modeling",
          title: "PostgreSQL Schema",
          detail: "Relational schema design structured for persistent biological entities and query efficiency."
        },
        {
          category: "Integration",
          title: "End-to-End Pipeline",
          detail: "Robust pipeline linking molecular screening modules into a unified research workflow."
        }
      ],
      pipeline: {
        type: 'flow',
        steps: [
          { name: "Relational DB", detail: "PostgreSQL biological entities", type: "storage" },
          { name: "Docker Service", detail: "Isolated task execution", type: "process" },
          { name: "Nextflow DAG", detail: "Multi-stage orchestration", type: "compute" },
          { name: "Research Pipeline", detail: "Screening integration", type: "output" }
        ]
      },
      links: {
        github: "https://github.com/the-ahuja-lab/evolf-pipeline"
      }
    },
    {
      id: "nucxplore",
      number: "03",
      title: "NucXplore",
      category: "Scientific Software / Python / Rust",
      description:
        "A collaborative effort to port and optimise computational components from Python to Rust for scalable microscopy and sequence data processing.",
      contribution:
        "Engineered Python-to-Rust integration using maturin, resolved numerical stability issues in Hu-moment computation, implemented deterministic stain normalisation, and optimised Nextflow per-tile feature extraction.",
      contributionPillars: [
        "maturin / PyO3 FFI Bridge",
        "Rust Numerical Kernels",
        "Deterministic Normalisation",
        "Nextflow Tiling Engine"
      ],
      technologies: ["Python", "Rust", "maturin", "Nextflow"],
      technicalHighlights: [
        {
          category: "FFI Bridge",
          title: "Zero-Overhead Bindings",
          detail: "Direct C-ABI Rust bindings via maturin and PyO3 exposing native performance to Python."
        },
        {
          category: "Numerics",
          title: "Hu-Moment Invariance",
          detail: "Stabilised geometric moment calculations guaranteeing cross-platform numerical reproducibility."
        },
        {
          category: "Image Processing",
          title: "Stain Normalisation",
          detail: "Deterministic biological stain normalisation preventing optical batch variability."
        },
        {
          category: "Orchestration",
          title: "Nextflow Tiling Pipeline",
          detail: "Scalable per-tile feature extraction workflow distributing microscopy tile analysis."
        },
        {
          category: "Provenance",
          title: "Artifact Tracking",
          detail: "Checksum-verified pipeline runs with full model-artifact and manifest tracking."
        }
      ],
      pipeline: {
        type: 'flow',
        steps: [
          { name: "Python API", detail: "Tile preprocessing layer", type: "input" },
          { name: "maturin / PyO3", detail: "Zero-overhead FFI bridge", type: "process" },
          { name: "Rust Kernels", detail: "Hu-moments & normalisation", type: "compute" },
          { name: "Nextflow Tiling", detail: "Per-tile feature extraction", type: "output" }
        ]
      },
      links: {
        github: "https://github.com/the-ahuja-lab/NucXplore"
      }
    },
    {
      id: "rnaseq",
      number: "04",
      title: "RNA-seq Preprocessing Pipeline",
      category: "Bioinformatics / Scientific Workflows",
      description:
        "A sequencing-read preprocessing workflow integrating FastQC and fastp for quality assessment and filtering of raw sequencing data.",
      contribution:
        "Designed and implemented a reproducible command-line workflow for automated quality assessment, read filtering, adapter trimming, and preprocessing summary generation. (Coursework exposure included Kallisto and Minimap2).",
      contributionPillars: [
        "Reproducible CLI Pipeline",
        "FastQC Quality Gates",
        "fastp Read Filtering",
        "Summary Reporting"
      ],
      technologies: ["Python", "FastQC", "fastp", "Shell"],
      technicalHighlights: [
        {
          category: "Quality Control",
          title: "Phred Score Inspection",
          detail: "Automated per-base quality scoring and adapter contamination detection with FastQC."
        },
        {
          category: "Filtering",
          title: "Poly-G & Error Correction",
          detail: "High-throughput read filtering, low-quality trimming, and poly-G tail removal via fastp."
        },
        {
          category: "Automation",
          title: "Consolidated QC Pipeline",
          detail: "Structured command-line workflow generating unified multi-sample summary reports."
        }
      ],
      pipeline: {
        type: 'flow',
        steps: [
          { name: "Raw FASTQ", detail: "High-throughput sequencing reads", type: "input" },
          { name: "FastQC Gate", detail: "Per-base Phred score inspection", type: "compute" },
          { name: "fastp Filter", detail: "Adapter trim & error correction", type: "process" },
          { name: "Clean Reads", detail: "Filtered FASTQ & QC report", type: "output" }
        ]
      },
      links: {
        github: "https://github.com/woosflex/rnaseq_analysis"
      }
    },
    {
      id: "gcvisualyst",
      number: "05",
      title: "GCVisualyst",
      category: "Data Visualisation / Bioinformatics",
      description:
        "An interactive visualisation application for exploring GC-content data across sliding genomic windows to support genomic data interpretation.",
      contribution:
        "Developed the R package and Shiny web application to compute sliding-window GC-content distributions and generate interactive visualisations.",
      contributionPillars: [
        "Sliding-Window Algorithm",
        "Interactive Shiny Dashboard",
        "Dynamic ggplot2 Visuals"
      ],
      technologies: ["R", "ggplot2", "Shiny"],
      technicalHighlights: [
        {
          category: "Algorithms",
          title: "Sliding-Window Ratio",
          detail: "Configurable sliding-window algorithm computing nucleotide sequence composition."
        },
        {
          category: "Visualisation",
          title: "Dynamic GC-Skew Curves",
          detail: "Real-time generation of regional GC-skew and nucleotide distribution plots with ggplot2."
        },
        {
          category: "Application",
          title: "Reactive Shiny UI",
          detail: "Reactive web application enabling parameter tuning and exploratory sequence inspection."
        }
      ],
      pipeline: {
        type: 'waveform',
        steps: [
          { name: "FASTA Sequence", detail: "Genomic window ingestion", type: "input" },
          { name: "Sliding Window", detail: "Configurable span & step size", type: "compute" },
          { name: "GC% Calculation", detail: "Regional nucleotide ratio", type: "process" },
          { name: "R Shiny App", detail: "Interactive reactive plotting", type: "output" }
        ]
      },
      links: {
        github: "https://github.com/woosflex/gcvisualyst"
      }
    },
    {
      id: "grn-analysis",
      number: "06",
      title: "Gene Regulatory Network Analysis",
      category: "Computational Biology / Data Analysis",
      description:
        "A computational analysis workflow involving public GEO datasets, expression normalisation, differential expression analysis, gene regulatory network reconstruction and topological analysis.",
      contribution:
        "Built the end-to-end analysis pipeline analysing Multiple Sclerosis expression data across 13 GEO datasets utilising mutual information and network topology.",
      contributionPillars: [
        "13 GEO Dataset Ingestion",
        "DESeq2 Normalisation",
        "ARACNe Mutual Information",
        "Network Hub Topology"
      ],
      technologies: ["R", "DESeq2", "ARACNe", "Network Analysis"],
      technicalHighlights: [
        {
          category: "Harmonisation",
          title: "13 GEO Cohort Ingestion",
          detail: "Cross-dataset aggregation and quantile normalisation across 13 public GEO accessions."
        },
        {
          category: "Differential",
          title: "DESeq2 Expression",
          detail: "Robust differential gene expression profiling identifying statistically significant transcripts."
        },
        {
          category: "Networks",
          title: "ARACNe Reconstruction",
          detail: "Information-theoretic network inference identifying directed transcriptional interactions."
        },
        {
          category: "Topology",
          title: "Regulatory Hub Analysis",
          detail: "Graph centrality and degree metrics isolating candidate hub drivers in neurodegeneration."
        }
      ],
      pipeline: {
        type: 'network',
        steps: [
          { name: "13 GEO Datasets", detail: "Expression microarrays", type: "input" },
          { name: "DESeq2 Screening", detail: "Differential expression", type: "compute" },
          { name: "ARACNe Algorithm", detail: "Mutual information network", type: "process" },
          { name: "Hub Topology", detail: "Transcription factor identification", type: "output" }
        ]
      },
      links: {
        github: "https://github.com/woosflex/grn_analysis",
        live: "https://woosflex.github.io/grn_analysis"
      }
    }
  ] as ProjectItem[],

  experience: [
    {
      organization: "IIIT Delhi",
      lab: "Ahuja Lab",
      roles: [
        { title: "Student Intern", period: "December 2025 – May 2026" },
        { title: "Intern", period: "June 2026 – July 2026" }
      ],
      summary: "Worked on computational frameworks for biological research and drug discovery.",
      areas: [
        "Python-to-Rust integration and performance-oriented computational components.",
        "GPU-oriented workflows involving WGPU.",
        "Docker-based microservices for reproducible tool deployment.",
        "Nextflow workflow development and execution.",
        "PostgreSQL database schema design for biological entities.",
        "Computational workloads in Linux-based research environments.",
        "Exposure to PBS-based computational workflows.",
        "Collaborative scientific software development in research teams."
      ]
    },
    {
      organization: "Jawaharlal Nehru University",
      roles: [
        { title: "Research Intern", period: "May 2025 – July 2025" }
      ],
      summary: "Developed a Python-based biomedical literature text-mining pipeline.",
      areas: [
        "Biomedical named-entity recognition using SciSpaCy.",
        "Extraction of gene, protein and disease mentions from PubMed abstracts.",
        "Entity co-occurrence analysis and statistical association scoring.",
        "Rule-based gene–disease association network construction."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "MSc Bioinformatics",
      institution: "Jamia Millia Islamia",
      period: "August 2024 – May 2026",
      grade: "CGPA: 9.51/10",
      details: "Coursework: Advanced Algorithms in Computational Biology, C++, Data Structures, Machine Learning, NGS, Python, Structural Bioinformatics, R."
    },
    {
      degree: "BSc (Honours) Microbiology",
      institution: "Sharda University",
      period: "Completed May 2023",
      grade: "CGPA: 8.75/10",
      honours: "First Division with Honours",
      details: "Undergraduate thesis on anti-HCV titre and p53 protein in HCV patients."
    }
  ] as EducationItem[],

  qualification: {
    title: "UGC-NET — Computer Science",
    year: "2026",
    status: "Qualified"
  } as QualificationItem,

  publications: [
    {
      id: "nuclear-morphology",
      title: "Scalable Computational Phenomics of Nuclear Morphology",
      authors: "Duari S, Shome R, Raza A et al.",
      year: "2026",
      venue: "bioRxiv",
      doi: "10.64898/2026.09.17.752335",
      url: "https://doi.org/10.64898/2026.09.17.752335"
    },
    {
      id: "molecular-representations",
      title: "Scalable molecular representations enabled by multimodal fusion and sequence distillation",
      authors: "Kumar S, Solanki S, Gupta M et al.",
      year: "2026",
      venue: "Nature Communications",
      doi: "10.1038/s41467-026-77700-z",
      url: "https://doi.org/10.1038/s41467-026-77700-z"
    },
    {
      id: "gpcrome-agonist",
      title: "Evolutionary-guided advanced deep-learning architecture powers mammalian GPCRome agonist predictions",
      authors: "Mittal A, Gupta M, Mohanty SK et al.",
      year: "2026",
      venue: "Cell Reports",
      citationDetails: "45(3), 117003",
      doi: "10.1016/j.celrep.2026.117003",
      url: "https://doi.org/10.1016/j.celrep.2026.117003"
    },
    {
      id: "nanoparticles-review",
      title: "Exploring the potential of metallic and metal oxide nanoparticles for reinforced disease management in agricultural systems: A comprehensive review",
      authors: "Raza A, Khandelwal K, Pandit S et al.",
      year: "2024",
      venue: "Environmental Nanotechnology, Monitoring & Management",
      citationDetails: "22, 100998",
      doi: "10.1016/j.enmm.2024.100998",
      url: "https://doi.org/10.1016/j.enmm.2024.100998"
    }
  ] as PublicationItem[],

  contact: {
    title: "Let's Connect",
    intro: "I'm interested in opportunities involving systems software, scientific computing, HPC and research software engineering.",
    email: "adnanraza3435@gmail.com",
    github: "https://github.com/woosflex",
    linkedin: "https://linkedin.com/in/woosflex",
    scholar: "https://scholar.google.com/citations?user=fuD1FzcAAAAJ&hl=en"
  }
};
