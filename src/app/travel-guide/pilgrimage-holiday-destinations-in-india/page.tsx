import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Pilgrimage Holiday Destinations in India | Travel Guide";
const description =
  "From the ghats of Varanasi to the Golden Temple in Amritsar — India's most significant pilgrimage sites, and what a visit to each actually involves for an international traveller.";
const pagePath = "/travel-guide/pilgrimage-holiday-destinations-in-india";
const heroImage = "/images/destinations/varanasi.webp";
const datePublished = "2026-08-01";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pagePath}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: `${SITE_URL}${heroImage}`, width: 1200, height: 630 }],
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Travel Guide", path: "/travel-guide" },
  { name: "Pilgrimage Destinations", path: pagePath },
];

export default function PilgrimageGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              headline: title,
              description,
              path: pagePath,
              image: heroImage,
              datePublished,
            })
          ),
        }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Ganga aarti ceremony at the ghats of Varanasi"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Pilgrimage Holiday Destinations in India"
          subheadline="India is home to some of the world's oldest continuously practised pilgrimage traditions. Here's where they happen, and what to expect if you visit as a traveller rather than a pilgrim."
        />

        <ArticleBody>
          <ArticleP>
            India&apos;s pilgrimage sites aren&apos;t museum pieces — they&apos;re still in
            daily use, which is exactly what makes them remarkable to visit. You&apos;re not
            looking at a recreation of a ritual; you&apos;re watching the same ceremony that has
            happened at that spot for centuries, still happening tonight. For international
            travellers, that authenticity is the draw, but it also means visiting respectfully
            matters more here than almost anywhere else on a typical India itinerary.
          </ArticleP>

          <ArticleH2>Varanasi — The Ganges Ghats</ArticleH2>
          <ArticleP>
            Varanasi is the single most significant Hindu pilgrimage city in India, built along
            the western bank of the Ganges. The evening Ganga aarti — a fire ceremony performed
            by priests at Dashashwamedh Ghat every night at sunset — is the reason most visitors
            come, and it&apos;s genuinely one of the most striking things you can watch in India:
            drums, chanting, and dozens of flames moving in unison against the river.
          </ArticleP>
          <ArticleP>
            Beyond the evening ceremony, a sunrise boat ride along the ghats shows a completely
            different side of the city — quieter, and full of people bathing, praying, and
            washing laundry as the sun comes up. The Kashi Vishwanath Temple, one of the twelve
            Jyotirlinga shrines dedicated to Shiva, sits a short walk from the main ghats.
          </ArticleP>

          <ArticleH2>Rishikesh &amp; Haridwar — Where the Ganges Begins</ArticleH2>
          <ArticleP>
            A few hours north of Delhi, Rishikesh and Haridwar sit where the Ganges leaves the
            Himalayas and enters the plains. Haridwar&apos;s Har Ki Pauri ghat hosts its own
            nightly Ganga aarti, on a smaller and more intimate scale than Varanasi&apos;s.
            Rishikesh, just upstream, has become India&apos;s best-known yoga and meditation
            centre — worth building into a trip even if pilgrimage itself isn&apos;t your
            primary interest.
          </ArticleP>

          <ArticleH2>Amritsar — The Golden Temple</ArticleH2>
          <ArticleP>
            The Golden Temple (Harmandir Sahib) is Sikhism&apos;s holiest site, and one of the
            most welcoming religious sites in India for visitors of any faith. It&apos;s open
            24 hours, entry is free, and the temple runs the world&apos;s largest free community
            kitchen — the langar — which feeds upwards of 50,000 people a day, and visitors are
            genuinely invited to sit and eat alongside everyone else.
          </ArticleP>
          <ArticleP>
            The temple itself, gold-plated and set within a large reflecting pool, is at its
            most striking either early in the morning or after dark, when the crowds thin and
            the lighting changes.
          </ArticleP>

          <ArticleH2>Pushkar — Rajasthan&apos;s Holy Lake</ArticleH2>
          <ArticleP>
            Pushkar is built around a sacred lake ringed by more than 50 ghats, and is home to
            one of the very few temples in India dedicated to Brahma. It&apos;s a smaller, more
            low-key pilgrimage stop than Varanasi or Amritsar, which makes it an easy add-on to a
            Rajasthan itinerary rather than a destination requiring a special trip of its own —
            and if your timing lines up with the Pushkar Camel Fair, you&apos;ll see the town at
            its most colourful.
          </ArticleP>

          <ArticleH2>Ajmer — Ajmer Sharif Dargah</ArticleH2>
          <ArticleP>
            A short drive from Pushkar, Ajmer is home to the Dargah of Khwaja Moinuddin Chishti,
            one of the most important Sufi shrines in South Asia and a major pilgrimage site for
            Muslims across the region. Visitors of any background are welcome, and many
            travellers combine Ajmer with Pushkar as a single day trip from Jaipur.
          </ArticleP>

          <ArticleH2>Planning a Pilgrimage-Focused Trip</ArticleH2>
          <ArticleP>
            A few practical things worth knowing before you build these into an itinerary:
          </ArticleP>
          <ArticleUL>
            <li>
              Dress modestly at all of these sites — shoulders and knees covered is a safe
              baseline, and headscarves are required for women at some temples and gurdwaras
            </li>
            <li>Shoes come off before entering most temples and the Golden Temple complex</li>
            <li>
              Photography is restricted or banned inside many inner sanctums — always check
              before raising a camera
            </li>
            <li>
              Evening aartis draw genuine crowds; arriving 30–45 minutes early secures a good
              spot
            </li>
            <li>
              A private guide who can explain the ritual you&apos;re watching makes a real
              difference to how much of it actually makes sense in the moment
            </li>
          </ArticleUL>
          <ArticleP>
            Varanasi, Rishikesh &amp; Haridwar, Amritsar, and Pushkar can all be combined into a
            single wider India itinerary alongside{" "}
            <Link href="/destinations/rajasthan" className="text-maroon underline">
              Rajasthan
            </Link>{" "}
            and the{" "}
            <Link href="/packages/golden-triangle-tours" className="text-maroon underline">
              Golden Triangle
            </Link>
            . If you&apos;d like these built into your own trip, our team can put together a
            route that fits your dates.
          </ArticleP>
        </ArticleBody>

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India, Nepal & Bhutan Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip covering India's pilgrimage destinations with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
