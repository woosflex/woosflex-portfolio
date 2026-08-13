/**
 * Footer Component
 * Contact section with social links and Konami code hint
 */

import { Github, Linkedin, GraduationCap } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { ContactButton } from '@/components/contact-button';

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/woosflex",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/woosflex",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "https://scholar.google.com/citations?user=fuD1FzcAAAAJ&hl=en",
      icon: GraduationCap,
      label: "Google Scholar"
    }
  ];

  return (
    <footer className="py-24 px-5 sm:px-8 md:px-10 border-t border-[#D7E2EA]/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-12">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 10rem)' }}
              data-testid="footer-title"
            >
              Let&apos;s Connect
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <ContactButton />
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200 p-3 rounded-full border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </FadeIn>

          <div className="text-[#D7E2EA]/70 font-mono text-sm space-y-2" data-testid="copyright">
            <div>© 2026 Adnan Raza • Built with passion for computational biology</div>
            <div className="text-xs text-[#D7E2EA]/70">
              Try the Konami code: ↑↑↓↓←→←→BA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
