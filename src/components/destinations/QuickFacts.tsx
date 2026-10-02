import { Reveal } from "@/components/ui/Reveal";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";

export type QuickFact = {
  label: string;
  value: string;
};

export function QuickFacts({
  facts,
  quoteButtonPageName,
  quoteButtonVariant = "tour",
  priceDisclaimer,
}: {
  facts: QuickFact[];
  /** When provided, shows a "Get a Free Quote" button on the right side of the facts row. */
  quoteButtonPageName?: string;
  /** "tour" (default) asks for travel month + traveller count. "carRental" asks for route + date instead — use on vehicle pages. */
  quoteButtonVariant?: "tour" | "carRental";
  /**
   * Small caption shown below the facts row — used on tour package pages
   * to qualify the "Starting From" price as indicative rather than final.
   * Omit on pages with no price fact (destination pages, etc.).
   */
  priceDisclaimer?: string;
}) {
  return (
    <section className="border-y border-sand bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="text-center sm:text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-ink sm:text-xl">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {quoteButtonPageName && (
              <div className="flex justify-center lg:shrink-0 lg:justify-end">
                <GetQuoteButton pageName={quoteButtonPageName} variant={quoteButtonVariant} />
              </div>
            )}
          </div>
          {priceDisclaimer && (
            <p className="mt-6 text-center text-xs italic text-ink-soft/70 sm:text-left">
              {priceDisclaimer}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
