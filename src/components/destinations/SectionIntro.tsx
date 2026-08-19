import { SectionEyebrow } from "@/components/destinations/SectionEyebrow";

type SectionIntroProps = {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  maxWidthClassName?: string;
  headingSizeClassName?: string;
};

export function SectionIntro({
  eyebrow,
  heading,
  align = "left",
  tone = "light",
  maxWidthClassName = "max-w-2xl",
  headingSizeClassName = "text-3xl sm:text-4xl",
}: SectionIntroProps) {
  const isCenter = align === "center";

  return (
    <div className={`${maxWidthClassName} ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      <SectionEyebrow align={align} tone={tone}>
        {eyebrow}
      </SectionEyebrow>
      <h2
        className={`mt-4 font-display font-semibold ${headingSizeClassName} ${
          tone === "dark" ? "text-ivory" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      <div className={`mt-4 h-px w-14 rounded-full bg-gold ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
}
