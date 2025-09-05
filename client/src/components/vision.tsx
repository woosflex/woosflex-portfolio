/**
 * Vision Section Component
 * Presents research vision and future directions in computational biology
 * Features glassmorphism design and structured future research areas
 */

export function Vision() {
  return (
    <section id="vision" className="py-24 px-6 section-alt scroll-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="vision-title">
            Research Vision
          </h2>
          <p className="text-muted-foreground text-xl">
            Bridging computational efficiency with biological complexity
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-card/40 rounded-2xl p-10 border border-border/50 space-y-8 backdrop-blur-xl">
            <p className="text-muted-foreground leading-relaxed text-xl" data-testid="vision-paragraph-1">
              My current work is centered on optimizing the fundamental layers of computational biology, focusing on how data is stored, accessed, and processed. My project, TracEon, serves as the first step in exploring this space, with a clear roadmap to investigate concurrency, domain-specific querying, and advanced data structures suitable for complex biological questions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-xl" data-testid="vision-paragraph-2">
              I believe that true progress in biological computing will come from a deep, synergistic understanding of both biological systems and computational architectures. My research goal is to apply principles of systems design to the ultimate biological hardware: neurons.
            </p>
            
            <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-xl p-8 mt-10 border border-border/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold gradient-text mb-8" data-testid="future-directions-title">
                Future Research Directions
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-card/30 rounded-xl border border-border/30">
                  <h4 className="font-bold text-primary text-xl">Neuromorphic Computing</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Exploring brain-inspired computational architectures for efficient biological data processing.
                  </p>
                </div>
                <div className="space-y-4 p-6 bg-card/30 rounded-xl border border-border/30">
                  <h4 className="font-bold text-accent text-xl">Biological Hardware Interfaces</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Developing computational models that bridge digital and biological systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
