import { FiUsers, FiGlobe, FiShield, FiHeadphones } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { trustStats } from "@/content/home";

const STAT_ICONS = {
  users: FiUsers,
  globe: FiGlobe,
  shield: FiShield,
  headset: FiHeadphones,
} as const;

export function TrustStrip() {
  return (
    <section className="border-b border-sand bg-cream/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <SectionIntro eyebrow="Our Journey" heading="Numbers That Speak" align="center" />
            <p className="mt-4 text-base text-ink-soft">
              Trusted by thousands of travellers around the world.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-4">
            {trustStats.map((stat) => {
              const Icon = STAT_ICONS[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-sand bg-white px-5 py-8 text-center shadow-sm transition-transform duration-200 hover:scale-[1.03]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream">
                    <Icon aria-hidden="true" className="h-6 w-6 text-gold-dark" />
                  </div>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="mt-5 font-display text-3xl font-bold text-gold-dark sm:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-sm font-medium text-ink">{stat.label}</p>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
