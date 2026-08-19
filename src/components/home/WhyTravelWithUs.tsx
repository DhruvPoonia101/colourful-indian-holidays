import { Reveal } from "@/components/ui/Reveal";
import { BracketEyebrow } from "@/components/ui/BracketEyebrow";
import { differentiators } from "@/content/home";

export function WhyTravelWithUs() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <BracketEyebrow>Why Travel With Us</BracketEyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            Built for Travellers Who Expect the Details Handled
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="border-t border-gold/50 pt-5">
                <h3 className="font-display text-lg font-semibold text-maroon">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
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
