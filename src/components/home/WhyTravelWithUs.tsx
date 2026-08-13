import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/content/home";

export function WhyTravelWithUs() {
  return (
    <section className="bg-maroon py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
            Why Travel With Us
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Built for Travellers Who Expect the Details Handled
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="border-t border-gold/40 pt-5">
                <h3 className="font-display text-lg font-semibold text-gold-light">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/80">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
