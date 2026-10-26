import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const TOOLS = [
  {
    href: "/tools/trip-cost-calculator",
    title: "Trip Cost Calculator",
    text: "Choose your nights in India, Nepal or Bhutan and see a starting price per person, in your own currency.",
    cta: "Price your trip",
  },
  {
    href: "/tools/when-to-go-planner",
    title: "When to Go Planner",
    text: "Pick a destination and see the best months, with typical weather for each.",
    cta: "Find your month",
  },
] as const;

/** Two free planning tools, shown on the homepage between the tour packages
 * and the car rental section. */
export function ToolsStrip() {
  return (
    <section className="border-t border-sand/70 bg-cream/40 py-12 sm:py-16" aria-labelledby="free-tools-heading">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Free Planning Tools</p>
        <h2 id="free-tools-heading" className="mt-2 text-center font-display text-3xl font-semibold text-ink sm:text-4xl">
          Plan Before You Enquire
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-2xl border border-sand bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-maroon"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{tool.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">{tool.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon">
                {tool.cta}
                <FiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
