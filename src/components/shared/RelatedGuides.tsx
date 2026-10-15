import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import type { GuideLink } from "@/content/related-guides";

/**
 * Plain, crawlable text links (real <a href>) to the travel guides, with
 * descriptive anchor text. Server component, no client JS.
 */
export function RelatedGuides({
  guides,
  eyebrow = "Plan Ahead",
  heading = "Helpful Travel Guides",
}: {
  guides: GuideLink[];
  eyebrow?: string;
  heading?: string;
}) {
  if (guides.length === 0) return null;
  return (
    <section className="bg-ivory py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow={eyebrow}
            heading={heading}
            align="center"
            headingSizeClassName="text-2xl sm:text-3xl"
          />
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="group flex h-full flex-col rounded-2xl border border-gold/30 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
              >
                <span className="font-display text-lg font-semibold text-ink group-hover:text-maroon">
                  {g.label}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-ink-soft">{g.blurb}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-maroon">
                  Read the guide
                  <FiArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
