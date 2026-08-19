import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";

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
}: {
  eyebrow: string;
  heading: string;
  cities: CityCard[];
  topDivider?: boolean;
}) {
  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow={eyebrow} heading={heading} />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, index) => (
            <Reveal key={city.name} delay={index * 0.08}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
