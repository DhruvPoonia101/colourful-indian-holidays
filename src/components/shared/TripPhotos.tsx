import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import type { TripPhoto } from "@/content/trip-photos";

/**
 * A small gallery of real photos from our own trips (see content/trip-photos.ts),
 * each with a visible caption. Used on tour hubs and the About page as
 * first-hand evidence, alongside (not instead of) the destination photography.
 */
export function TripPhotos({
  eyebrow = "From Our Trips",
  heading,
  intro,
  photos,
  topDivider = true,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  photos: TripPhoto[];
  topDivider?: boolean;
}) {
  const cols =
    photos.length === 1
      ? "max-w-md"
      : photos.length === 2
        ? "sm:grid-cols-2 max-w-4xl"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow={eyebrow} heading={heading} />
          {intro && <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">{intro}</p>}
          <div className={`mt-8 grid gap-6 ${cols}`}>
            {photos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl border border-sand bg-white">
                <div className="relative aspect-[4/3] bg-sand/40">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    style={photo.focus ? { objectPosition: photo.focus } : undefined}
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm leading-snug text-ink-soft">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
