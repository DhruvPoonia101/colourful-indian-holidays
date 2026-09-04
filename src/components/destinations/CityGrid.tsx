import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { whatsappUrl } from "@/lib/whatsapp";

export type CityCard = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export function CityGrid({
  eyebrow,
  heading,
  cities,
  topDivider = false,
  showActions = false,
  columns = 3,
}: {
  eyebrow: string;
  heading: string;
  cities: CityCard[];
  topDivider?: boolean;
  /** Adds "View Tour" / "Enquire Now" buttons below each card — for bookable
   * tour/experience/package listings. Leave false for attraction lists,
   * related-destination links, and other non-bookable grids. */
  showActions?: boolean;
  /** Number of columns at the `lg` breakpoint (2 columns at `sm`, 1 below that,
   * unchanged). Defaults to 3 — the standard grid used across the site. */
  columns?: 3 | 4;
}) {
  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow={eyebrow} heading={heading} />
        </Reveal>

        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${
            columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {cities.map((city, index) => {
            if (!showActions) {
              return (
                <Reveal key={city.name} delay={index * 0.05}>
                  <Link
                    href={city.href}
                    className="group relative block h-96 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Image
                      src={city.image}
                      alt={city.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                        {city.tagline}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-ivory">
                        {city.name}
                      </h3>
                      <p className="mt-2 text-sm text-ivory/80">{city.description}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            }

            return (
              <Reveal key={city.name} delay={index * 0.05}>
                <div className="group relative h-96 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                  <Image
                    src={city.image}
                    alt={city.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <Link href={city.href}>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                        {city.tagline}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-ivory">
                        {city.name}
                      </h3>
                      <p className="mt-2 text-sm text-ivory/80">{city.description}</p>
                    </Link>
                    <div className="mt-4 flex gap-3">
                      <Link
                        href={city.href}
                        className="flex-1 rounded-full border border-ivory/70 px-4 py-2.5 text-center text-sm font-semibold text-ivory transition-all duration-200 hover:scale-[1.02] hover:bg-ivory/10"
                      >
                        View Tour
                      </Link>
                      <a
                        href={whatsappUrl(`Hi! I'd like to enquire about the ${city.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-ivory transition-all duration-200 hover:scale-[1.02] hover:bg-gold-dark"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
