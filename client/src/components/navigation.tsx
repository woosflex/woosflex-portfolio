/**
 * Navigation Component
 * Fixed navigation bar with scroll-based active section detection
 * Features responsive mobile menu and tech-oriented styling
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track which section is currently in view for active nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      // Find the section that's currently in view
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation menu items
  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#vision', label: 'Vision' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#open-source', label: 'Open Source' },
    { href: '#skills', label: 'Skills' }
  ];

  return (
    <nav aria-label="Primary navigation" className="site-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10 py-3.5 md:py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="brand-mark text-base sm:text-lg font-bold font-mono" aria-label="Adnan Raza, back to top" data-testid="logo">
            &lt;adnan.raza /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:justify-between md:flex-1 md:ml-16 lg:ml-24">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-item text-[#D7E2EA] uppercase tracking-wider font-medium text-xs lg:text-sm ${
                  activeSection === item.href.slice(1) ? 'is-active' : ''
                }`}
                aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="mobile-nav md:hidden mt-3 p-2 rounded-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block min-h-12 py-3 px-4 text-sm uppercase tracking-wider text-foreground rounded-xl transition-colors hover:text-primary hover:bg-primary/10 ${
                  activeSection === item.href.slice(1) ? 'text-primary bg-primary/10' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
