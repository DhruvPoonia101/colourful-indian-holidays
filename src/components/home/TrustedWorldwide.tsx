import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { associations } from "@/content/home";

export function TrustedWorldwide() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:mt-12 sm:gap-8">
            {associations.map((mark) => (
              <div
                key={mark.src}
                className="relative h-20 w-20 shrink-0 transition-transform duration-200 hover:scale-105 sm:h-24 sm:w-24"
              >
                <Image
                  src={mark.src}
                  alt={mark.alt}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
