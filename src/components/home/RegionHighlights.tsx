import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { Button } from "@/components/ui/Button";
import { regions } from "@/content/home";

export function RegionHighlights() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Explore By Region"
            heading="India, One Extraordinary Region at a Time"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, index) => (
            <Reveal key={region.name} delay={index * 0.1}>
              <Link
                href={region.href}
                className="group relative block h-80 overflow-hidden rounded-2xl"
              >
                <Image
                  src={region.image}
                  alt={region.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-ivory">
                    {region.name}
                  </h3>
                  <p className="mt-1 text-sm text-ivory/80">{region.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button href="/destinations" variant="gold">
              Explore All Regions
              <FiArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
