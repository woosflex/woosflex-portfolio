/**
 * Open Source Section Component
 * Highlights open-source contributions outside of personal projects
 */

import { GitPullRequest, ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export function OpenSource() {
  const contributions = [
    {
      project: "evolf-pipeline (Ahuja Lab)",
      description: "Contributing to a published computational biology pipeline developed at Ahuja Lab, IIIT-Delhi.",
      link: "https://github.com/the-ahuja-lab/evolf-pipeline",
    },
    {
      project: "NucXplore",
      description: "An in-development tool for exploring nucleic acid sequence data. Unpublished — not yet public.",
      link: null,
    },
    {
      project: "TracEon",
      description: "Fixed macOS Intel and arm64 build breaks, including AVX2 function attribute ordering and SmartStrategy memory detection.",
      link: "https://github.com/woosflex/TracEon/pulls?q=is%3Apr+author%3Awoosflex",
    },
  ];

  return (
    <section id="open-source" className="py-24 px-5 sm:px-8 md:px-10 scroll-section">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            data-testid="open-source-title"
          >
            Open Source
          </h2>
          <p className="text-[#D7E2EA]/60 text-center uppercase tracking-widest text-sm mb-16 sm:mb-20">
            Contributions to systems, build infrastructure, and packaging
          </p>
        </FadeIn>

        <div className="space-y-6">
          {contributions.map((contribution, index) => {
            const content = (
              <>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-xl md:text-2xl flex items-center" data-testid={`open-source-project-${index}`}>
                    <GitPullRequest className="text-primary mr-3 h-6 w-6 flex-shrink-0" />
                    {contribution.project}
                  </h3>
                  {contribution.link && (
                    <ExternalLink className="text-primary h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  )}
                </div>
                <p className="text-[#D7E2EA]/70 leading-relaxed text-base md:text-lg" data-testid={`open-source-description-${index}`}>
                  {contribution.description}
                </p>
              </>
            );

            return (
              <FadeIn key={index} delay={index * 0.1}>
                {contribution.link ? (
                  <a
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[24px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 p-6 sm:p-8 block group transition-colors"
                    data-testid={`open-source-${index}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="rounded-[24px] border-2 border-[#D7E2EA]/20 p-6 sm:p-8" data-testid={`open-source-${index}`}>
                    {content}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
