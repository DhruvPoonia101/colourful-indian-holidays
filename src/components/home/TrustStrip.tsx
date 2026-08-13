import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { associations, trustStats } from "@/content/home";

export function TrustStrip() {
  return (
    <section className="border-b border-sand bg-cream/60 py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-maroon sm:text-4xl">
                  {stat.value}
                  {stat.isPlaceholder && (
                    <span className="ml-1 align-super text-xs font-sans font-normal text-ink-soft/60">
                      *
                    </span>
                  )}
                </dd>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80 grayscale">
            {associations.map((mark) => (
              <Image
                key={mark.src}
                src={mark.src}
                alt={mark.alt}
                width={96}
                height={56}
                sizes="96px"
                className="h-10 w-auto object-contain sm:h-12"
              />
            ))}
          </div>
        </Reveal>

        {trustStats.some((stat) => stat.isPlaceholder) && (
          <p className="mt-6 text-center text-xs text-ink-soft/60">
            * Placeholder figure — replace with a confirmed number before launch.
          </p>
        )}
      </div>
    </section>
  );
}
