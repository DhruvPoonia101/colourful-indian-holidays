import { Reveal } from "@/components/ui/Reveal";

export type QuickFact = {
  label: string;
  value: string;
};

export function QuickFacts({ facts }: { facts: QuickFact[] }) {
  return (
    <section className="border-y border-sand bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  {fact.label}
                </p>
                <p className="mt-1.5 font-display text-lg font-semibold text-ink sm:text-xl">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
