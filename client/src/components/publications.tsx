import { ExternalLink, BookOpen } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { portfolioData } from '@/data/portfolio';

export function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-24 px-5 sm:px-8 md:px-10 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6 text-[#D7E2EA]"
            style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}
            data-testid="publications-title"
          >
            Publications
          </h2>
          <p className="text-center font-mono text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 mb-16 sm:mb-20 max-w-xl mx-auto">
            Peer-reviewed papers & preprints across computational biology, structural phenomics & deep learning
          </p>
        </FadeIn>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <FadeIn key={pub.id} delay={index * 0.1}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[24px] border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]/80 hover:border-primary/60 p-6 sm:p-8 transition-all duration-300"
                data-testid={`publication-card-${pub.id}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                        {pub.venue} {pub.citationDetails ? `· ${pub.citationDetails}` : ''} ({pub.year})
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase font-bold tracking-wider">
                        {pub.venue === 'bioRxiv' ? 'Preprint' : 'Peer-Reviewed Journal'}
                      </span>
                    </div>

                    <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl leading-snug group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                      {pub.authors}
                    </p>

                    <div className="font-mono text-xs text-primary/80 group-hover:text-primary flex items-center gap-1.5 pt-1">
                      <span>DOI: {pub.doi}</span>
                      <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
