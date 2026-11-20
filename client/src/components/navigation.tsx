import { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import { useTerminal } from '@/hooks/use-terminal';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const terminal = useTerminal();

  // Track which section is currently in view for active nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], footer[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation menu items matching portfolio specification
  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#publications', label: 'Publications' },
    { href: '#education', label: 'Education' },
    { href: '#footer', label: 'Contact' }
  ];

  return (
    <nav aria-label="Primary navigation" className="site-nav fixed top-0 left-0 right-0 z-50 bg-[#0C0C0C]/80 backdrop-blur-md border-b border-[#D7E2EA]/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 py-3.5 md:py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="brand-mark text-base sm:text-lg font-bold font-mono tracking-tight text-[#D7E2EA] hover:text-primary transition-colors"
            aria-label="Adnan Raza, back to top"
            data-testid="logo"
          >
            &lt;adnan.raza /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const targetId = item.href.slice(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-item uppercase tracking-wider font-mono text-xs transition-colors hover:text-primary ${
                    isActive ? 'text-primary font-semibold' : 'text-[#D7E2EA]/75'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Terminal Quick-Trigger */}
            <button
              onClick={() => terminal.open()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/40 bg-card/60 hover:border-primary text-xs font-mono text-[#D7E2EA] hover:text-primary transition-all duration-200"
              aria-label="Launch interactive terminal"
              data-testid="nav-terminal-trigger"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>&gt;_ terminal</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center text-foreground rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/70 transition-colors hover:border-primary/60 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="mobile-nav md:hidden mt-3 p-2 rounded-2xl bg-[#0C0C0C]/95 border border-[#D7E2EA]/20">
            {navItems.map((item) => {
              const targetId = item.href.slice(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block min-h-12 py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-xl transition-colors ${
                    isActive ? 'text-primary bg-primary/10 font-bold' : 'text-[#D7E2EA] hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'location' : undefined}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Mobile Terminal Quick-Trigger */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                terminal.open();
              }}
              className="w-full mt-2 flex items-center justify-between min-h-12 py-3 px-4 text-xs font-mono uppercase tracking-wider rounded-xl border border-primary/40 bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors"
              data-testid="mobile-nav-terminal-trigger"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span>&gt;_ Launch Terminal</span>
              </span>
              <span className="text-xs text-primary/70">[Esc]</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
