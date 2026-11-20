interface ContactButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function ContactButton({
  href = "mailto:adnanraza3435@gmail.com",
  label = "Contact Me",
  className = "",
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base bg-accent hover:bg-accent/90 shadow-[0_0_20px_hsl(282,85%,65%/0.3)] hover:shadow-[0_0_25px_hsl(282,85%,65%/0.5)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
      data-testid="button-contact"
    >
      {label}
    </a>
  );
}
