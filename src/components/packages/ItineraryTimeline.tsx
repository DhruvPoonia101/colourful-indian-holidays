import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";

export type ItineraryDay = {
  title: string;
  description: string;
};

export function ItineraryTimeline({
  eyebrow,
  heading,
  intro,
  days,
  topDivider = false,
  actionSlot,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  days: ItineraryDay[];
  topDivider?: boolean;
  /** Optional element (e.g. a button) rendered to the right of the heading. */
  actionSlot?: React.ReactNode;
}) {
  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <SectionIntro eyebrow={eyebrow} heading={heading} />
            {actionSlot && <div className="shrink-0">{actionSlot}</div>}
          </div>
          {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft">{intro}</p>}
        </Reveal>

        <div className="mt-10 flex flex-col gap-0">
          {days.map((day, index) => (
            <Reveal key={day.title} delay={index * 0.05}>
              <div className="relative flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon text-sm font-semibold text-ivory">
                    {index + 1}
                  </span>
                  {index < days.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-sand" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-semibold text-ink">{day.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{day.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
