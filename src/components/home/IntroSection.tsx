import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { introCopy } from "@/content/home";

export function IntroSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow={introCopy.eyebrow} heading={introCopy.heading} align="center" />
          <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-ink-soft">
            {introCopy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
