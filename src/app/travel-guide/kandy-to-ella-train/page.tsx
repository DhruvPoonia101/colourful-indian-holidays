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
 * Status checked 23 Nov 2026. No official Sri Lanka Railways notice could be
 * fetched, so the status comes from secondary sources that cite the Railway
 * Department and news reports:
 * - byc.lk status page (checked 23 Nov 2026): Nanu Oya-Ella-Badulla open
 *   since 20 June 2026; Kandy-Nanu Oya and Colombo-Gampola closed; 2027
 *   Budget timeline of Q1 2027 (Kandy) and mid-2027 (Badulla) via Ada Derana.
 * - srilankatrip.com.lk: Cyclone Ditwah late Nov 2025; reopening targets
 *   have slipped; right-hand side Nanu Oya to Ella; fares not published.
 * - Seat61 (updated 10 Jun 2026): 30-day booking window, official portal.
 * - The Common Wanderer (Nov 2026): reserved tickets linked to passport
 *   number since Aug 2025 (single source, so hedged).
 * Times and fares are deliberately not published: they changed repeatedly
 * after the cyclone. Re-check this page monthly until the line reopens.
 */

const title = "Kandy to Ella Train Guide (2026): What's Running, Seats & Tips";
const description =
  "Is the Kandy to Ella train running? Since Cyclone Ditwah trains start at Nanu Oya. What's open, how to book reserved seats, which class and side to choose, and when Kandy reopens.";
const pagePath = "/travel-guide/kandy-to-ella-train";
const heroImage = "/images/destinations/kandy-ella-train-tea-hills.webp";
const datePublished = "2026-11-23";
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
  { name: "Kandy to Ella Train", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Is the Kandy to Ella train running in 2026?",
    answer:
      "Not from Kandy. Since Cyclone Ditwah in late November 2025, the line between Kandy and Nanu Oya has been closed for repairs. Trains between Nanu Oya and Badulla, via Ella, restarted on 20 June 2026, so you can still ride the most scenic section by starting at Nanu Oya.",
  },
  {
    question: "When will the Kandy to Ella train reopen?",
    answer:
      "There is no confirmed date. The government's 2027 Budget timeline, as reported by Ada Derana, targets early 2027 for trains back to Kandy and mid-2027 for full services to Badulla. Earlier targets have slipped, so wait for an official timetable before booking the Kandy section.",
  },
  {
    question: "How long is the train from Nanu Oya to Ella?",
    answer:
      "About 3 hours, depending on the train and delays. It passes Pattipola, the highest station in Sri Lanka, then Ohiya, Haputale and Bandarawela before reaching Ella.",
  },
  {
    question: "How do I book the train to Ella?",
    answer:
      "Reserved seats usually go on sale about 30 days before travel on the Sri Lanka Railways seat-reservation website and at stations with reservation counters. Seats from Nanu Oya sell out quickly in peak season. If you travel with us, we book them for you as soon as they open.",
  },
  {
    question: "Which side of the train is best to Ella?",
    answer:
      "The right-hand side, facing forward, is usually recommended from Nanu Oya to Ella, but the line curves constantly and the best view switches sides. Second-class reserved carriages have windows that open, which is better for photos.",
  },
  {
    question: "Which class should I book?",
    answer:
      "Second-class reserved is the best balance: a guaranteed seat and windows that open. First-class air-conditioned carriages are more comfortable but have sealed windows. Third class and unreserved second class are cheapest but can be very crowded in peak season.",
  },
  {
    question: "What if I can't get a train ticket?",
    answer:
      "Drive. Nuwara Eliya to Ella is about 2.5 hours by road through the same tea country. When you travel with us, your driver is always on the road with your luggage anyway, so a cancelled or sold-out train just means continuing by car.",
  },
];

const cell = "px-3 py-3 sm:px-5";
const rowHead = "px-3 py-3 font-medium text-ink sm:px-5";

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
          imageAlt="The hill-country train crossing a viaduct through tea country near Ella"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Kandy to Ella Train Guide (2026)"
          subheadline="What's actually running after Cyclone Ditwah, how to book seats, which class and side to choose, and when Kandy reopens."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like help planning a Sri Lanka trip with the Ella train." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              As of November 2026, you can&apos;t take the train from Kandy to Ella. Cyclone Ditwah
              closed the Kandy to Nanu Oya section in late 2025, but trains from Nanu Oya to Ella have run
              since 20 June 2026 — and that is the most scenic part of the line, about 3 hours through
              tea estates.
            </span>{" "}
            The simple fix is to drive from Kandy to Nanu Oya (about 3 hours, with a tea-factory stop) or
            stay a night in Nuwara Eliya, 15 minutes from the station, and take the train from there.
          </ArticleP>

          <ArticleH2>What&apos;s Running on the Hill-Country Line?</ArticleH2>
          <div className="my-2 overflow-x-auto rounded-2xl border border-sand bg-white">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <caption className="sr-only">Status of the Colombo–Kandy–Ella–Badulla railway, November 2026</caption>
              <thead>
                <tr className="border-b border-sand text-ink">
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Section</th>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-5">Status (23 Nov 2026)</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>Colombo to Kandy</th>
                  <td className={cell}>Closed; no trains reach Kandy</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>Kandy to Nanu Oya</th>
                  <td className={cell}>Closed for cyclone repairs</td>
                </tr>
                <tr className="border-b border-sand/60">
                  <th scope="row" className={rowHead}>Nanu Oya to Ella</th>
                  <td className={cell}>Running since 20 June 2026 (about 3 hours)</td>
                </tr>
                <tr>
                  <th scope="row" className={rowHead}>Ella to Badulla</th>
                  <td className={cell}>Running, via the Nine Arch Bridge and Demodara</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ArticleP>
            The government&apos;s 2027 Budget timeline, reported by Ada Derana, targets early 2027 for
            trains back to Kandy and mid-2027 for full services to Badulla. Those targets have slipped
            before, so treat them as estimates. This status is summarised from the{" "}
            <a href="https://byc.lk/colombo-kandy-ella-train-status-2026" className="text-maroon underline" target="_blank" rel="noopener noreferrer">BYC.lk line-status tracker</a>{" "}and{" "}
            <a href="https://www.srilankatrip.com.lk/blog/kandy-to-ella-train-2026-2027-line-closure-guide" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Sri Lanka Trip&apos;s closure guide</a>; always confirm on the{" "}
            <a href="https://www.railway.gov.lk" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Sri Lanka Railways website</a>{" "}before you travel. We update this page as the line reopens.
          </ArticleP>

          <ArticleH2>How to Do the Train Ride Now</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">From Kandy:</span> drive about 3 hours up through tea estates past Ramboda Falls to Nanu Oya, stopping at a tea factory, and take an afternoon train to Ella.</li>
            <li><span className="font-semibold text-ink">From Nuwara Eliya:</span> Nanu Oya station is about 15 minutes away, so a night in Nuwara Eliya makes the morning train easy.</li>
            <li><span className="font-semibold text-ink">With Horton Plains:</span> walk to World&apos;s End at dawn and join the train at Ohiya, the station closest to the park.</li>
            <li><span className="font-semibold text-ink">Your luggage:</span> with a private driver, your bags go by road and the car meets you at Ella station.</li>
          </ArticleUL>

          <ArticleMidCTA
            text="Want the train built into your trip, with seats booked for you?"
            href="/tours/sri-lanka-tours"
            linkLabel="See our 8-day Sri Lanka tour"
          />

          <ArticleH2>What You&apos;ll See From Nanu Oya to Ella</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Tea estates:</span> the train winds through some of Sri Lanka&apos;s best-known tea country, with pickers on the slopes.</li>
            <li><span className="font-semibold text-ink">Pattipola:</span> the highest railway station in Sri Lanka, at around 1,900 metres.</li>
            <li><span className="font-semibold text-ink">Ohiya and Idalgashinna:</span> cloud forest, tunnels and long views over the lowlands on clear days.</li>
            <li><span className="font-semibold text-ink">Haputale and Bandarawela:</span> hill towns perched on ridges, before the line drops towards Ella.</li>
            <li><span className="font-semibold text-ink">Beyond Ella:</span> the line continues over the Nine Arch Bridge and around the Demodara loop to Badulla; most visitors see the bridge on foot from Ella instead.</li>
          </ArticleUL>

          <ArticleH2>Which Class and Which Side?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Second-class reserved:</span> our pick. A guaranteed seat, and the windows open for photos.</li>
            <li><span className="font-semibold text-ink">First-class air-conditioned:</span> more comfortable, but the windows are sealed.</li>
            <li><span className="font-semibold text-ink">Third class and unreserved second:</span> cheapest and full of atmosphere, but seats are first come, first served and carriages can be packed in peak season.</li>
            <li><span className="font-semibold text-ink">Side:</span> the right-hand side facing forward is the usual tip from Nanu Oya to Ella, but the line curves so much that both sides get great views.</li>
          </ArticleUL>

          <ArticleH2>How to Book Seats</ArticleH2>
          <ArticleP>
            Reserved seats usually go on sale about 30 days before travel, on the Sri Lanka Railways
            seat-reservation website and at stations with reservation counters. Reserved tickets are
            reported to be linked to your passport number and checked on board, so book with the name and
            passport you&apos;ll travel on. Seats from Nanu Oya sell out fast between December and April.
            We don&apos;t publish times or fares here: both have changed several times since the cyclone,
            so check them when you book. When you travel with us, we book the seats for you and keep the
            car as a back-up if a train is cancelled.
          </ArticleP>

          <ArticleH2>Tips for the Journey</ArticleH2>
          <ArticleUL>
            <li>Arrive at Nanu Oya early; trains often run late, but boarding can be busy.</li>
            <li>Bring water, snacks and a light jacket — it&apos;s cool in the hills, especially near Pattipola.</li>
            <li>Leaning out of the open doors is popular for photos but genuinely dangerous; hold on, and stay inside near tunnels and bridges.</li>
            <li>Keep your passport with you if your ticket is linked to it.</li>
          </ArticleUL>
          <ArticleP>
            Planning the rest of the trip? See our{" "}
            <Link href="/travel-guide/sri-lanka-itinerary" className="text-maroon underline">7, 10 and 14-day Sri Lanka itineraries</Link>, the{" "}
            <Link href="/destinations/ella" className="text-maroon underline">Ella</Link>,{" "}
            <Link href="/destinations/nuwara-eliya" className="text-maroon underline">Nuwara Eliya</Link> and{" "}
            <Link href="/destinations/kandy" className="text-maroon underline">Kandy</Link> guides, and our{" "}
            <Link href="/travel-guide/sri-lanka-visa-and-best-time-to-visit" className="text-maroon underline">Sri Lanka visa and best-time guide</Link>.
          </ArticleP>

          <ArticleFAQ faqs={faqs} />
        </ArticleBody>

        <AuthorBioCard
          authorName="Dhruv Poonia"
          authorInitials="DP"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          bioParagraphs={[
            "Dhruv Poonia is the Digital & Marketing Manager for Colourful Indian Holidays, working alongside a family travel business, founded in 2007, that arranges private tours across India, Nepal, Bhutan and Sri Lanka. He also oversees the company's sister sites, Rajasthan Travel Agency and Palace on Wheels Tour.",
            "He writes and maintains the destination guides, route information and travel advice published on this site, drawing on his day-to-day work planning itineraries for international travellers to keep every page accurate and current.",
          ]}
        />

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Ride the Hill Train Without the Hassle."
          headlineItalic="We Book the Seats."
          subtext="Tell us your dates and we'll build the train into a private Sri Lanka itinerary, with your driver and luggage waiting at Ella."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Sri Lanka trip with the Ella train."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
