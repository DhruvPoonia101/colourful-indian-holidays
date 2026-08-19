import Image from "next/image";
import { FiClock, FiGlobe, FiMapPin } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { BUSINESS } from "@/lib/seo/business";
import { associations } from "@/content/home";

export function CompanyInfoSection() {
  const address = BUSINESS.address;

  const infoBlocks = [
    {
      icon: FiMapPin,
      title: "Our Office",
      lines: [
        address.streetAddress,
        `${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`,
        "India",
      ],
    },
    {
      icon: FiClock,
      title: "Response Times",
      lines: ["WhatsApp: within 2 hours", "Email: within 12 hours"],
    },
    {
      icon: FiGlobe,
      title: "Languages Spoken",
      lines: [BUSINESS.languages.join(", ")],
    },
  ];

  return (
    <section className="border-t border-sand/70 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Our Details"
            heading="Office & Company Information"
            align="center"
            maxWidthClassName="max-w-xl"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
          {infoBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-sand bg-white p-6 text-center shadow-sm">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-cream text-maroon">
                  <block.icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {block.title}
                </h3>
                <div className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {block.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80 grayscale">
            {associations.map((mark) => (
              <Image
                key={mark.src}
                src={mark.src}
                alt={mark.alt}
                width={100}
                height={56}
                sizes="100px"
                className="h-9 w-auto object-contain"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
