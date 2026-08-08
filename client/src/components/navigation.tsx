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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-md border-b border-border/30 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold gradient-text font-mono" data-testid="logo">
            &lt;adnan.raza /&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:justify-between md:flex-1 md:ml-16 lg:ml-24">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[#D7E2EA] uppercase tracking-wider font-medium text-sm lg:text-base hover:opacity-70 transition-opacity duration-200 ${
                  activeSection === item.href.slice(1) ? 'opacity-100 text-primary' : ''
                }`}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 bg-card/50 rounded-lg backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
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
