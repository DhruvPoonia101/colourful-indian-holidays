import Image from "next/image";
import { FiUsers, FiGlobe, FiShield, FiHeadphones } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { BracketEyebrow } from "@/components/ui/BracketEyebrow";
import { associations, trustStats } from "@/content/home";

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
            <BracketEyebrow>Our Journey</BracketEyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Numbers That Speak
            </h2>
            <p className="mt-3 text-base text-ink-soft">
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

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80 grayscale sm:mt-14">
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
      </div>
    </section>
  );
}
