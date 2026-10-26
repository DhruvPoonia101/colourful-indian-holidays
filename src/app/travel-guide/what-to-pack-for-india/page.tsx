import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleFAQ } from "@/components/travel-guide/ArticleFAQ";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Facts checked 25 Oct 2026 against Travel India Smart's packing guide
 * (modest dress, shoes, adapter types, power bank, medical kit, laundry,
 * seasonal clothing). India's mains is 230 V / 50 Hz (the source says
 * 220 V; 230 V is the official standard). General advice, not a guarantee. */

const title = "What to Pack for India: A Practical Packing List";
const description =
  "What to pack for India by season: clothing, temple-friendly dress, shoes, plug adapter, power bank and a small medical kit, with what to leave at home.";
const pagePath = "/travel-guide/what-to-pack-for-india";
const heroImage = "/images/destinations/jaipur-spice-market.webp";
const datePublished = "2026-10-25";
const dateModified = datePublished;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${pagePath}` },
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
  { name: "What to Pack for India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "What should I pack for a trip to India?",
    answer:
      "Light, breathable clothes that cover your shoulders and knees, a warm layer for winter mornings and evenings, comfortable slip-off shoes, sun protection, a universal plug adapter, a power bank and a small medical kit. Laundry is cheap and quick, so 5 to 7 days of clothes is enough.",
  },
  {
    question: "What clothes should women wear in India?",
    answer:
      "Loose cotton or linen tops and trousers or long skirts that cover shoulders and knees work well everywhere, and carry a light scarf for temples and mosques. Clean Western clothes are fine; you do not need to wear local dress, though a kurta or salwar-kameez is handy for temples.",
  },
  {
    question: "Do I need a plug adapter for India?",
    answer:
      "Yes, if your plugs are not the Indian type. India uses 230 V at 50 Hz with round-pin plugs, so US travellers need an adapter and should check that chargers are rated 100 to 240 V, which most phone and laptop chargers are. Hair dryers and other single-voltage appliances may not be.",
  },
  {
    question: "What should I pack for India in winter?",
    answer:
      "In the north, October to February mornings and evenings can be cold, and a warm jacket or fleece is useful, especially in Rajasthan and Delhi in December and January. Add thermal layers for hill stations or dawn on the Ganges in Varanasi.",
  },
  {
    question: "What should I pack for the monsoon?",
    answer:
      "A light rain jacket, quick-dry clothes and shoes that handle wet roads. Cotton stays damp for a long time in humid weather, and leather shoes are a poor choice in the rain.",
  },
  {
    question: "What medicines should I bring to India?",
    answer:
      "A basic kit: oral rehydration salts, an anti-diarrhoeal, paracetamol, plasters and eye drops, plus any prescriptions in original packaging with a doctor's note for controlled medicines. See our health guide and ask your doctor about what suits your trip.",
  },
  {
    question: "How many bags should I bring?",
    answer:
      "One suitcase and a daypack. A wheeled case copes with old-city lanes and hotel steps better than a soft duffel, and a small daypack handles sightseeing days. Pack light, because you will also buy souvenirs.",
  },
];

export default function GuidePage() {
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
            articleJsonLd({ headline: title, description, path: pagePath, image: heroImage, datePublished, dateModified })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <main>
        <PageHero
          image={heroImage}
          imageAlt="A spice market in Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="What to Pack for India"
          subheadline="A practical list by season, with what to wear at temples and what to leave at home."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about packing for my India trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              Pack light, breathable clothes that cover your shoulders and knees, a warm layer for winter mornings, comfortable slip-off shoes, a universal adapter and a power bank.
            </span>{" "}
            You need less than you think: laundry is cheap and fast, so 5 to 7 days of clothes is plenty. This guide covers clothing by season, temple-friendly dress, shoes, power and the small extras that are easy to forget.
          </ArticleP>
          <ArticleH2>Packing List at a Glance</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">India packing list</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Item</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Why</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Light cotton or linen clothes</th>
                  <td className="px-3 py-3 sm:px-5">Cool and quick to dry; cover shoulders and knees</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Warm layer</th>
                  <td className="px-3 py-3 sm:px-5">Cold mornings and evenings from October to February in the north</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Scarf or shawl</th>
                  <td className="px-3 py-3 sm:px-5">Head covering at gurdwaras and mosques; sun and dust protection</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Slip-off walking shoes and sandals</th>
                  <td className="px-3 py-3 sm:px-5">You remove shoes at every temple and many homes</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Universal adapter</th>
                  <td className="px-3 py-3 sm:px-5">India uses round-pin plugs at 230 V</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Power bank (10,000 mAh or more)</th>
                  <td className="px-3 py-3 sm:px-5">Phones run maps, tickets and payments</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Sunscreen, sunglasses, hat</th>
                  <td className="px-3 py-3 sm:px-5">Sun is strong even in winter</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-3 font-medium text-ink sm:px-5">Basic medical kit</th>
                  <td className="px-3 py-3 sm:px-5">Oral rehydration salts, anti-diarrhoeal, paracetamol, plasters</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleH2>Clothing by Season</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">October to February (north):</span> Light layers by day and a warm jacket or fleece for mornings and evenings. Late December and early January can be cold, and thermal layers help at dawn in Varanasi or in the hills.</li>
            <li><span className="font-semibold text-ink">March to May:</span> Loose cotton and linen, a wide-brimmed hat and plenty of sunscreen. Much of the plains is very hot.</li>
            <li><span className="font-semibold text-ink">June to September (monsoon):</span> A light rain jacket and quick-dry clothes. Cotton stays damp in humid weather and leather shoes suffer on wet streets.</li>
          </ArticleUL>
          <ArticleP>
            Not sure which season you are travelling in? See our <Link href="/best-time-to-visit-india" className="text-maroon underline">best time to visit India</Link> guide, which covers each month region by region.
          </ArticleP>
          <ArticleH2>What to Wear at Temples and in Everyday Life</ArticleH2>
          <ArticleP>
            Clean Western clothes that cover your shoulders and knees are fine in any setting, and you do not need local dress. For temples, carry knee-length bottoms, a shoulder-covering top and a scarf, since you may need to cover your head at gurdwaras and mosques. A kurta or salwar-kameez is handy but optional. More in our <Link href="/travel-guide/india-etiquette-for-tourists" className="text-maroon underline">etiquette guide</Link>.
          </ArticleP>
          <ArticleH2>Shoes</ArticleH2>
          <ArticleP>
            Bring walking shoes you have already broken in, plus a pair of sandals or flip-flops. You take shoes off at every temple and many homes, so slip-ons save time. Local brands such as Bata and Liberty are inexpensive if you need a replacement.
          </ArticleP>
          <ArticleH2>Power, Phone and Tech</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Adapter:</span> India uses 230 V at 50 Hz with round-pin plugs, so bring a universal adapter. Phone and laptop chargers are usually rated 100 to 240 V, so an adapter is enough, but check the label, especially for hair dryers.</li>
            <li><span className="font-semibold text-ink">Power bank:</span> A 10,000 mAh or larger bank is worth it, because you will lean on your phone for maps, tickets and payments.</li>
            <li><span className="font-semibold text-ink">Connectivity:</span> Sort your SIM or eSIM before you fly. See our <Link href="/travel-guide/sim-card-and-wifi-in-india" className="text-maroon underline">SIM card and WiFi guide</Link>.</li>
          </ArticleUL>
          <ArticleH2>Health and Small Extras</ArticleH2>
          <ArticleP>
            Pack a basic kit, with prescriptions in their original packaging and a doctor's note for controlled medicines, and ask your doctor what suits your trip. See our <Link href="/travel-guide/india-health-vaccination-guide" className="text-maroon underline">health guide</Link>. Handy extras: hand sanitiser, tissues, a refillable bottle for filtered water, and a small day bag with a zip.
          </ArticleP>
          <ArticleH2>What Not to Pack</ArticleH2>
          <ArticleP>
            Too many clothes, heavy dress shoes and expensive jewellery. Laundry is cheap, fast and reliable, so you can wear the same few outfits, and you will want space for souvenirs.
          </ArticleP>
          <ArticleP>
            Once you are packed, see our <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link> and <Link href="/travel-guide/tipping-in-india" className="text-maroon underline">tipping guide</Link>.
          </ArticleP>

          <ArticleFAQ faqs={faqs} />
        </ArticleBody>

        <AuthorBioCard
          authorName="Dhruv Poonia"
          authorInitials="DP"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          bioParagraphs={[
            "Dhruv Poonia is the Digital & Marketing Manager for Colourful Indian Holidays, working alongside a family travel business that has arranged tours across India, Nepal and Bhutan since 2007. He also oversees the company's sister sites, Rajasthan Travel Agency and Palace on Wheels Tour.",
            "He writes and maintains the destination guides, route information and travel advice published on this site, drawing on his day-to-day work planning itineraries for international travellers to keep every page accurate and current.",
          ]}
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Packed? Let's Finish the Plan."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question about packing for my India trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
