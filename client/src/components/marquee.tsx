import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '@/data/portfolio';

function tripled(items: string[]) {
  return [...items, ...items, ...items];
}

export function Marquee() {
  const { marquee } = portfolioData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const next = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(next);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} aria-hidden="true" className="bg-background pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden" style={{ overflowX: 'clip' }}>
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {tripled(marquee.row1).map((skill, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center px-6 h-[60px] sm:h-[70px] rounded-2xl border border-[#D7E2EA]/20 text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm font-medium font-mono"
              data-testid={`marquee-row1-${i}`}
            >
              {skill}
            </span>
          ))}
        </div>
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {tripled(marquee.row2).map((skill, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center px-6 h-[60px] sm:h-[70px] rounded-2xl border border-[#D7E2EA]/20 text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm font-medium font-mono"
              data-testid={`marquee-row2-${i}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
