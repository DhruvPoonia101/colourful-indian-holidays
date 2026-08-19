type BracketEyebrowProps = {
  children: React.ReactNode;
  /** "light" for use on dark backgrounds (e.g. maroon), "dark" for use on light backgrounds. */
  tone?: "light" | "dark";
  className?: string;
};

export function BracketEyebrow({ children, tone = "dark", className = "" }: BracketEyebrowProps) {
  const textColor = tone === "light" ? "text-gold-light" : "text-gold-dark";
  const borderColor = tone === "light" ? "border-gold-light/70" : "border-gold-dark/60";

  return (
    <span className={`relative inline-block px-4 py-1.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t ${borderColor}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t ${borderColor}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l ${borderColor}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r ${borderColor}`}
      />
      <span className={`text-sm font-semibold uppercase tracking-[0.2em] ${textColor}`}>
        {children}
      </span>
    </span>
  );
}
