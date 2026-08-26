import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { associations } from "@/content/home";

export function TrustedWorldwide() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Trusted Worldwide"
            heading="Recognized & Trusted Worldwide"
            align="center"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-soft">
            Travellers from over 30 countries have explored India with us through
            customised holidays, luxury experiences and private guided journeys.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-nowrap items-center justify-start gap-5 overflow-x-auto px-1 pb-2 sm:mt-12 sm:justify-center sm:gap-6">
            {associations.map((mark) => (
              <a
                key={mark.src}
                href={mark.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={mark.alt}
                className="relative h-16 w-16 shrink-0 transition-transform duration-200 hover:scale-105 sm:h-24 sm:w-24"
              >
                <Image
                  src={mark.src}
                  alt={mark.alt}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
