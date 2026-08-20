import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro eyebrow="Traveller Stories" heading="What Our Guests Say" />
          <p className="mt-4 text-sm text-ink-soft/70">
            Real reviews from Tripadvisor, verified by us word-for-word.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name + index} delay={index * 0.1}>
              <figure
                className={`relative h-full rounded-2xl border p-6 ${
                  testimonial.isPlaceholder
                    ? "border-dashed border-gold-dark/50 bg-cream/40"
                    : "border-sand bg-cream/40"
                }`}
              >
                {testimonial.isPlaceholder && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink">
                    Placeholder
                  </span>
                )}
                <blockquote className="font-display text-base italic leading-relaxed text-ink">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-maroon">
                  {testimonial.name}
                  <span className="ml-1 font-normal text-ink-soft">
                    · {testimonial.origin}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
