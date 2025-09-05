/**
 * Footer Component
 * Contact section with social links and Konami code hint
 * Features gradient styling and enhanced visual hierarchy
 */

import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

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
    <footer className="py-24 px-6 border-t border-border/50 bg-gradient-to-t from-card/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text" data-testid="footer-title">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed" data-testid="footer-subtitle">
              Feel free to reach out. I am currently seeking a fully-funded PhD position.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:adnanraza3435@gmail.com" 
              className="btn-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg shadow-lg inline-flex items-center"
              data-testid="button-footer-contact"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-3 rounded-xl hover:bg-primary/10 backdrop-blur-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-${link.label.toLowerCase().replace(' ', '-')}`}
                >
                  <Icon className="h-7 w-7" />
                  <span className="sr-only">{link.label}</span>
                </a>
              );
            })}
          </div>
          
          <div className="text-muted-foreground font-mono opacity-60 space-y-2" data-testid="copyright">
            <div>© 2025 Adnan Raza • Built with passion for computational biology</div>
            <div className="text-xs opacity-50">
              💡 Try the Konami code: ↑↑↓↓←→←→BA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
