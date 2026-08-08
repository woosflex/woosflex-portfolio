interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export function LiveProjectButton({ href, label = "Live Project", className = "" }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors ${className}`}
      data-testid="button-live-project"
    >
      {label}
    </a>
  );
}
