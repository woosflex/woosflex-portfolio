import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const { contact } = portfolioData;

  const socialLinks = [
    {
      href: `mailto:${contact.email}`,
      icon: Mail,
      label: "Email"
    },
    {
      href: contact.github,
      icon: Github,
      label: "GitHub"
    },
    {
      href: contact.linkedin,
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: contact.scholar,
      icon: GraduationCap,
      label: "Google Scholar"
    }
  ];

  return (
    <footer id="footer" className="py-24 px-5 sm:px-8 md:px-10 border-t border-[#D7E2EA]/15 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-10">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 8vw, 10rem)' }}
              data-testid="footer-title"
            >
              {contact.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <p className="text-[#D7E2EA]/85 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              {contact.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]/80 hover:border-primary hover:text-primary text-[#D7E2EA] font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                    data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </FadeIn>

          <div className="text-[#D7E2EA]/60 font-mono text-xs sm:text-sm space-y-2 pt-8 border-t border-[#D7E2EA]/10" data-testid="copyright">
            <div>© {new Date().getFullYear()} Adnan Raza • Systems Software Engineer</div>
            <div className="text-xs text-[#D7E2EA]/40">
              Type &apos;help&apos; in terminal (Konami code: ↑↑↓↓←→←→BA or press Esc)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
