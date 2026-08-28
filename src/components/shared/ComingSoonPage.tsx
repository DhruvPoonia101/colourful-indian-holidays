import { PageHero } from "@/components/layout/PageHero";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import type { BreadcrumbItem } from "@/lib/seo/breadcrumb-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

type ComingSoonPageProps = {
  pageLabel: string;
  categoryLabel: string;
  hubPath: string;
  hubLabel: string;
};

export function ComingSoonPage({
  pageLabel,
  categoryLabel,
  hubPath,
  hubLabel,
}: ComingSoonPageProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    { name: categoryLabel, path: hubPath },
    { name: pageLabel, path: "" },
  ];

  const whatsappMessage = `Hi! I'm interested in ${pageLabel} — could you tell me more, even though I saw the page is still being finished?`;

  return (
    <main>
      <PageHero
        image="/images/destinations/amber-fort-jaipur.webp"
        imageAlt="Colourful Indian Holidays"
        breadcrumbs={breadcrumbs}
        eyebrow={categoryLabel}
        headline={`${pageLabel} — This Page Is Being Finished`}
        subheadline={`We're still building out the full ${pageLabel.toLowerCase()} guide. In the meantime, our team can already help you plan this — just reach out directly.`}
        whatsappMessage={whatsappMessage}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center sm:px-8">
          <Reveal>
            <p className="text-base leading-relaxed text-ink-soft">
              This page hasn&apos;t been published yet, but everything about {pageLabel} is
              already something we regularly plan for our travellers. Message us directly and
              we&apos;ll reply with real details and a tailored quote — usually within 24 hours —
              or browse what&apos;s already live in {categoryLabel.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={hubPath}>{hubLabel}</Button>
              <Button href="/contact" variant="outlineDark">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneyCTA
        backgroundImage="/images/destinations/amber-fort-jaipur.webp"
        eyebrow="Start Your Journey"
        headline="Your India, Nepal & Bhutan Journey Awaits."
        headlineItalic="Where Will You Begin?"
        subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
        primaryLabel="Plan My Journey"
        primaryHref="/contact"
        whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
        trustBadges={DEFAULT_TRUST_BADGES}
      />
    </main>
  );
}
