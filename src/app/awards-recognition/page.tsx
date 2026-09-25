import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { Reveal } from "@/components/ui/Reveal";
import { FaGoogle, FaTripadvisor } from "react-icons/fa";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";
import { associations } from "@/content/home";

const title = "Awards & Recognition";
const description =
  "Colourful Indian Holidays is an IATO-registered agency recognised by Rajasthan Tourism and the Ministry of Tourism, Government of India, with a 4.9★ rating on both Tripadvisor and Google.";
const pagePath = "/awards-recognition";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Awards & Recognition", path: pagePath },
];

const accreditations = [
  {
    src: "/awards/iato.webp",
    alt: "IATO — Indian Association of Tour Operators member",
    title: "IATO Member",
    description:
      "The Indian Association of Tour Operators is India's principal trade body for the tourism industry. Membership requires meeting IATO's own standards for operating history and business conduct, and gives travellers a way to verify an agency is an accountable, real operating business rather than an anonymous website.",
    href: "https://iato.in/member-get?id=eyJpdiI6IlM1bVJjMHM5NkhZTmQ1Z1gxUkNjUWc9PSIsInZhbHVlIjoiTTJTUFJ6TGRkOXN5OExHRkRWMEVidz09IiwibWFjIjoiMWFhYzI5Y2RlMDI1NTZmZWQwZjgxOGM4YTg4ZTQ3ZjIzYTJkYTQ1MTE5MzgyZjliMWNkNjBiMzAzOWI4MzE2NCIsInRhZyI6IiJ9",
  },
  {
    src: "/awards/ministry-tourism.webp",
    alt: "Approved by the Ministry of Tourism, Government of India",
    title: "Ministry of Tourism, Government of India",
    description:
      "A formal government recognition of the agency, listed on the Ministry's own registered-operator directory (NIDHI). This is a regulatory approval, separate from a customer review or trade-body membership.",
    href: "https://nidhi.tourism.gov.in/home/directory?categoryCode=02&subcategory=&type=registered&cityName=COLOURFUL+INDIAN+HOLIDAYS+%28Unit%29&cityCode=ERJ000157_U&stateName=",
  },
  {
    src: "/awards/rajasthan-tourism.webp",
    alt: "Recognised by Rajasthan Tourism — Certificate of Recognition",
    title: "Rajasthan Tourism",
    description:
      "A state-level recognition from the Rajasthan Tourism department, relevant given how much of our itinerary work is built around the state's forts, palaces and desert circuits.",
    href: "/documents/rajasthan-tourism-certificate.pdf",
  },
];

const travellersChoiceYears = associations.filter((a) => a.alt.includes("Travellers' Choice"));

export default function AwardsRecognitionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />

      <main>
        <PageHero
          image="/images/destinations/amber-fort-jaipur.webp"
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Awards & Recognition"
          headline="Accreditations, Ratings & Recognition"
          subheadline="Industry accreditation, government recognition, and traveller ratings — verifiable, not just claimed."
        />

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Industry & Government Recognition"
                heading="Who Has Formally Recognised Us"
              />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {accreditations.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-sand bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-16 w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="200px"
                        className="object-contain object-left"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-maroon">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-sand/70 bg-cream/40 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro eyebrow="Traveller Ratings" heading="What Guests Actually Rate Us" />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <a
                  href={BUSINESS.sameAs.find((url) => url.includes("tripadvisor"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col items-center rounded-2xl border border-sand bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaTripadvisor aria-hidden="true" className="h-10 w-10 text-[#34E0A1]" />
                  <p className="mt-4 font-display text-4xl font-bold text-gold-dark">
                    {BUSINESS.aggregateRating.ratingValue}★
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    on Tripadvisor, from {BUSINESS.aggregateRating.reviewCount}+ reviews
                  </p>
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                <a
                  href={BUSINESS.googleRating.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col items-center rounded-2xl border border-sand bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaGoogle aria-hidden="true" className="h-10 w-10 text-[#4285F4]" />
                  <p className="mt-4 font-display text-4xl font-bold text-gold-dark">
                    {BUSINESS.googleRating.ratingValue}★
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    on Google, from {BUSINESS.googleRating.reviewCount}+ reviews
                  </p>
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <p className="mt-6 text-center text-sm text-ink-soft/80">
                <a href="/testimonials" className="font-semibold text-maroon underline decoration-maroon/30 underline-offset-4 hover:decoration-maroon">
                  Read individual traveller reviews →
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <Reveal>
              <SectionIntro
                eyebrow="Tripadvisor Travellers' Choice"
                heading="Recognised Across the Years"
              />
              <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed text-ink-soft">
                Tripadvisor&apos;s Travellers&apos; Choice award goes to a small percentage of businesses
                worldwide each year, based on the quality and volume of reviews earned over the
                preceding twelve months. We&apos;ve been named a recipient in six separate years:
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {travellersChoiceYears.map((year) => (
                  <a
                    key={year.src}
                    href={year.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={year.alt}
                    className="relative h-20 w-20 shrink-0 transition-transform duration-200 hover:scale-105 sm:h-24 sm:w-24"
                  >
                    <Image
                      src={year.src}
                      alt={year.alt}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <JourneyCTA
          backgroundImage="/images/destinations/amber-fort-jaipur.webp"
          eyebrow="Start Your Journey"
          headline="An Accredited Agency, Ready When You Are."
          headlineItalic="Tell Us Your Dates."
          subtext="Send us your dates and interests and we'll draft a real itinerary around them within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage={`Hi! I'd like to know more about planning a trip with ${SITE_NAME}.`}
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
