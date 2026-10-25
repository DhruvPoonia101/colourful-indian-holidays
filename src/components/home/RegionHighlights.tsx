import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { Button } from "@/components/ui/Button";
import { GetQuoteButton } from "@/components/shared/GetQuoteButton";
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <Reveal key={region.name} delay={index * 0.05}>
              <div className="group relative h-96 overflow-hidden rounded-2xl">
                <Image
                  src={region.image}
                  alt={region.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <Link href={region.href}>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                      {region.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-ivory">
                      {region.name}
                    </h3>
                    <p className="mt-2 text-sm text-ivory/80">{region.description}</p>
                  </Link>
                  <div className="mt-4 flex gap-2.5">
                    <Link
                      href={region.href}
                      className="flex-1 rounded-full border border-ivory/70 px-4 py-2.5 text-center text-sm font-semibold text-ivory transition-all duration-200 hover:scale-[1.02] hover:bg-ivory/10"
                    >
                      View Tour
                    </Link>
                    <GetQuoteButton
                      pageName={region.name}
                      triggerLabel="Enquire Now"
                      triggerClassName="flex-1 rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-ivory transition-all duration-200 hover:scale-[1.02] hover:bg-gold-dark"
                    />
                  </div>
                </div>
              </div>
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
