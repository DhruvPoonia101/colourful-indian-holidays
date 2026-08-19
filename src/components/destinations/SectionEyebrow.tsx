type SectionEyebrowProps = {
  children: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionEyebrow({
  children,
  align = "left",
  tone = "light",
}: SectionEyebrowProps) {
  const toneClasses =
    tone === "dark"
      ? "border-gold/50 bg-ivory/10 text-gold-light"
      : "border-gold/40 bg-cream text-gold-dark";

  return (
    <div className={align === "center" ? "flex justify-center" : "flex justify-start"}>
      <span
        className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${toneClasses}`}
      >
        {children}
      </span>
    </div>
  );
}
