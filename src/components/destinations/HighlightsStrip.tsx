import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";

export type Highlight = {
  title: string;
  description: string;
};

export function HighlightsStrip({
  eyebrow,
  heading,
  highlights,
  topDivider = false,
}: {
  eyebrow: string;
  heading: string;
  highlights: Highlight[];
  topDivider?: boolean;
}) {
  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow={eyebrow} heading={heading} />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-sand bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-display text-lg font-semibold text-maroon transition-transform duration-300 group-hover:translate-x-0.5">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
