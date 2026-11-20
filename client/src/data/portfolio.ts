export interface PipelineStep {
  name: string;
  detail: string;
  type?: 'input' | 'process' | 'compute' | 'storage' | 'output';
}

export interface ProjectPipeline {
  type: 'flow' | 'waveform' | 'network';
  steps: PipelineStep[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  contribution: string;
  technologies: string[];
  technicalHighlights: string[];
  pipeline: ProjectPipeline;
  links: {
    github?: string;
    benchmark?: string;
    release?: string;
    live?: string;
  };
  benchmarkHighlight?: {
    opsPerSec: string;
    scaling: string;
    latency: string;
    environment: string;
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
      technologies: ["C++20", "SIMD (AVX2, NEON)", "LZ4", "CRC32C", "CMake", "Docker"],
      technicalHighlights: [
        "Arena-backed storage and zero-copy access through std::string_view.",
        "Concurrent read access using C++20 atomics and immutable cache snapshots.",
        "SIMD-accelerated FASTA/FASTQ parsing with AVX2, NEON and portable scalar fallback.",
        "LZ4-based compressed binary caching and memory-mapped cache loading.",
        "CRC32C integrity verification and workload-specific indexing modes.",
        "Optional POSIX TCP-based remote read service and Docker-based testbed."
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
        scaling: "9.61× read-scaling at 14 threads",
        latency: "0.128 µs median latency per operation",
        environment: "Host: Intel Core Ultra 5 125H (14 cores / 18 threads), Linux x86_64, GCC 16.2.1, Release C++20 build."
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
      technologies: ["Python", "Docker", "Nextflow", "PostgreSQL"],
      technicalHighlights: [
        "Containerised Docker microservice for isolated task execution.",
        "Local Nextflow DAG pipeline orchestrating multi-stage computational tasks.",
        "Relational schema design in PostgreSQL for structured biological data persistence.",
        "Reproducible end-to-end research workflow integration."
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
      technologies: ["Python", "Rust", "maturin", "Nextflow"],
      technicalHighlights: [
        "Zero-overhead Python bindings to high-performance Rust kernels via maturin.",
        "Optimised Hu-moment computation routines with deterministic numerical output.",
        "Deterministic stain normalisation algorithm implementation.",
        "Scalable per-tile feature extraction pipeline built in Nextflow.",
        "Checksum-verified demonstration workflows and model-artifact tracking."
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
      technologies: ["Python", "FastQC", "fastp", "Shell"],
      technicalHighlights: [
        "Automated quality control assessment of raw high-throughput sequencing reads.",
        "High-performance read filtering, poly-G/adapter trimming, and error correction with fastp.",
        "Consolidated QC reporting and reproducible command-line workflow structure."
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
      technologies: ["R", "ggplot2", "Shiny"],
      technicalHighlights: [
        "Sliding-window algorithm for nucleotide sequence composition calculation.",
        "Dynamic plotting of regional GC-skew and content variations using ggplot2.",
        "Reactive interactive UI built with R Shiny for exploratory sequence inspection."
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
      technologies: ["R", "DESeq2", "ARACNe", "Network Analysis"],
      technicalHighlights: [
        "Cross-dataset normalisation and differential expression screening via DESeq2.",
        "Mutual information network reconstruction utilising the ARACNe algorithm.",
        "Topological hub-gene discovery and bottleneck analysis."
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
