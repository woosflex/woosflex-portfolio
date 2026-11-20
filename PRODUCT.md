# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The portfolio serves a broad technical audience, including systems engineering and scientific computing peers, open-source maintainers, researchers, prospective employers, graduate reviewers, and collaborators evaluating Adnan Raza's software engineering and research capabilities.

## Product Purpose

The portfolio establishes a durable, authoritative digital presence for Adnan Raza as a Systems Software Engineer working across scientific computing, HPC, and bioinformatics. Its primary measure of success is increased credibility for his engineering and research work, grounded in inspectable code, reproducible benchmarks, and peer-reviewed scientific contributions.

## Positioning

The portfolio presents a systems-oriented software engineer with an academic background in bioinformatics and microbiology who bridges low-level high-performance engineering (C++20, SIMD, lock-free concurrency, memory architectures) with scientific workflows (Rust integration, Nextflow pipelines, Docker, Python). Its credibility comes from inspectable implementations and documented benchmarks rather than generic personal-brand slogans.

## Operating Context

Visitors arrive from GitHub, LinkedIn, Google Scholar, search results, direct referrals, or technical applications. They need to rapidly assess Adnan's core engineering competencies, inspect featured projects (primarily TracEon v2.3.0), review professional research experience at IIIT Delhi and JNU, verify publications, and connect directly.

## Capabilities and Constraints

- Single-page responsive web portfolio built with React, TypeScript, Vite, Tailwind CSS, and an Express server.
- Interactive terminal interface providing synced command-line access to all portfolio data.
- Centralized, typed portfolio data architecture (`client/src/data/portfolio.ts`).
- Links to GitHub repositories, releases, verified benchmark reports, DOIs, and research documents.
- **Strict Accuracy Constraints**:
  - Linux is the primary development environment, but do not claim Linux system administration or server administration.
  - Do not claim OpenStack, Ceph, Kubernetes, Ansible, Terraform, cloud administration, or enterprise infrastructure experience.
  - Do not describe virtualisation or networking as advanced expertise (basic VM usage and practical troubleshooting only).
  - Exposure to PBS-based research computing environments, not production HPC cluster administration.
  - Do not claim wet-lab sequencing experience.
  - TracEon is an independently designed and developed C++20 project; its optional TCP service is POSIX-based with no encryption or authentication (do not describe as internet-safe distributed software).
  - TracEon benchmark metrics must always be contextualized with host hardware (Intel Core Ultra 5 125H, GCC 16.2.1, C++20 Release build).
  - NucXplore and EvOlf are collaborative projects; personal contributions must be clearly distinguished from the overall platform.
  - Kallisto and Minimap2 represent coursework exposure, not independently authored tools.
  - Preserve exact publication titles, author lists, and DOI links; do not claim first or corresponding authorship where not established.
  - Do not state or imply seeking a fully funded PhD position.

## Brand Commitments

- Name and professional identity: Adnan Raza.
- Title: Systems Software Engineer (Scientific Computing · HPC · Bioinformatics).
- Voice: Technically precise, restrained, evidence-led, and devoid of generic hype ("passionate coder", "tech enthusiast", "turning ideas into reality").
- Palette: Bioelectric cyan, neural violet, deep space black, and ion mist.

## Evidence on Hand

- TracEon v2.3.0 repository, benchmark report (`benchmarks/v2.3.0_benchmark_report.md`), and release notes (`RELEASE_v2.3.0.md`).
- NucXplore repository at `https://github.com/the-ahuja-lab/NucXplore` (with 20 commits by woosflex).
- EvOlf repository at `https://github.com/the-ahuja-lab/evolf-pipeline`.
- mm2-fast, rnaseq_analysis, GCVisualyst, and grn_analysis repositories on GitHub.
- 4 peer-reviewed publications and preprints with confirmed DOIs (bioRxiv, Nature Communications, Cell Reports, ENMM).
- Undergraduate thesis PDF at `client/public/Adnan_Raza_Thesis.pdf`.
- TracEon proposal at `client/public/assets/TracEon_proposal.pdf`.

## Product Principles

1. Lead with inspectable systems code and benchmark evidence.
2. Present exact contribution boundaries on collaborative projects.
3. Organize technical competencies by function rather than superficial logo walls.
4. Maintain factual consistency across portfolio UI, interactive terminal, and GitHub profile.
5. Provide clear, direct routes for peer inspection, reading papers, and professional contact.
