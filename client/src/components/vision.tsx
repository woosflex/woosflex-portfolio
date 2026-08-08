import { FadeIn } from '@/components/fade-in';
import { AnimatedText } from '@/components/animated-text';
import { ContactButton } from '@/components/contact-button';

export function Vision() {
  return (
    <section id="vision" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          data-testid="vision-title"
        >
          About me
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 mt-10 sm:mt-14 md:mt-16">
        <AnimatedText
          text="I'm a computational biologist bridging molecular biology with high-performance systems. My work started with TracEon, a C++ in-memory cache for accelerating genomic data access, and has since grown into solving biology-based problems with agentic AI as a research intern at Ahuja Lab, IIIT-Delhi. I focus on low-level programming, systems architecture, and building autonomous, LLM-driven pipelines that reason over biological data."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <ContactButton />
          <a
            href="/Adnan_Raza_Thesis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] uppercase tracking-widest text-sm border-b border-[#D7E2EA]/40 hover:opacity-70 transition-opacity duration-200 pb-1"
            data-testid="link-thesis"
          >
            Read My Thesis
          </a>
        </div>
      </div>
    </section>
  );
}
