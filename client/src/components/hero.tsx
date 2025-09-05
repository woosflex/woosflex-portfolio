/**
 * Hero Section Component
 * Landing section with animated name, headline, and call-to-action buttons
 * Features gradient text effects, floating decorative elements, and glassmorphism design
 */

import { Mail, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-24 px-6 scroll-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-30"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold gradient-text tracking-tight animate-fadeInUp" data-testid="hero-name">
              Adnan Raza
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-fadeInScale"></div>
            <div className="flex justify-center items-center space-x-2 opacity-60">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-1 h-8 bg-gradient-to-t from-transparent to-primary rounded-full"></div>
              <span className="text-sm font-mono text-muted-foreground">Computational Biologist</span>
              <div className="w-1 h-8 bg-gradient-to-t from-transparent to-accent rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed animate-fadeInUp backdrop-blur-sm bg-card/20 p-8 rounded-2xl border border-border/50" data-testid="hero-headline">
            Accelerating Biological Discovery with High-Performance Computational Tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInScale">
            <a 
              href="#projects" 
              className="btn-primary text-primary-foreground px-10 py-4 rounded-xl font-medium text-lg shadow-lg"
              data-testid="button-view-work"
            >
              View My Work
            </a>
            <a 
              href="mailto:adnanraza3435@gmail.com" 
              className="border-2 border-primary/30 text-foreground px-10 py-4 rounded-xl font-medium text-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 inline-flex items-center backdrop-blur-sm"
              data-testid="button-contact"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
