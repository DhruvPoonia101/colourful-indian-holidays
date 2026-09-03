import { FiCheck, FiX } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";

export function InclusionsExclusions({
  eyebrow,
  heading,
  inclusions,
  exclusions,
  topDivider = false,
}: {
  eyebrow: string;
  heading: string;
  inclusions: string[];
  exclusions: string[];
  topDivider?: boolean;
}) {
  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow={eyebrow} heading={heading} />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-sand bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">What&apos;s Included</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <FiCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-sand bg-cream/50 p-6">
              <h3 className="font-display text-base font-semibold text-ink">Not Included</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <FiX aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
