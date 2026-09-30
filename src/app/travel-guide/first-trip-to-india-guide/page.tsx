import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * DRAFT CONTENT — a deliberate hub/entry-point article, not a destination
 * list (that's already covered by the existing "20 Best Tourist Places"
 * article, so this one stays logistics- and mindset-focused instead).
 * Written to link to every other Planning-category guide already on the
 * site (e-Visa, Getting Around, Health, Currency, Solo Travel) rather
 * than duplicate their content, plus the Rajasthan and Golden Triangle
 * itinerary guides and the Taj Mahal guide for the "where to start"
 * section. No new factual claims are introduced beyond what those
 * existing, already-verified guides already establish — this article's
 * job is to synthesise and cross-link, not re-research.
 */

const title = "First Trip to India: What to Know Before You Go";
const description =
  "A practical starting point for a first trip to India — how long to plan for, the visa and health basics, what to expect on the ground, and where to actually start.";
const pagePath = "/travel-guide/first-trip-to-india-guide";
const heroImage = "/images/destinations/agra-taj-mahal.webp";
const datePublished = "2026-09-30";
const dateModified = datePublished;

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
  { name: "First Trip to India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "How many days should a first trip to India be?",
    answer:
      "Ten to twelve days is a comfortable length for a first visit, enough for the Golden Triangle plus one region beyond it, such as Rajasthan or Kerala, without every day being a travel day. A week is workable if you keep to Delhi, Agra and Jaipur alone.",
  },
  {
    question: "Is India difficult for a first-time visitor?",
    answer:
      "It asks more of you than a typical first trip abroad — the pace, the crowds and the persistence of touts and street vendors in tourist areas are real, and worth preparing for honestly. A private driver and pre-booked hotels for at least the first few days remove most of the difficulty while you find your footing.",
  },
  {
    question: "What should I sort out before I fly?",
    answer:
      "Your visa (see our e-Visa guide), a discussion with a doctor or travel clinic about vaccinations, a plan for cash and cards, and your first few nights of accommodation booked in advance so you land into a plan rather than a search.",
  },
  {
    question: "Where should a first-time visitor actually go?",
    answer:
      "The Golden Triangle — Delhi, Agra and Jaipur — is the standard, sensible starting point: well-travelled routes, reliable infrastructure, and the Taj Mahal. Rajasthan is a natural extension if you have more time.",
  },
  {
    question: "Is it better to book a private tour or travel independently on a first trip?",
    answer:
      "A private tour with a driver and pre-arranged hotels is the easier route for a first visit, removing the guesswork around transport, touts and where to stay. Independent travel is cheaper and more flexible but asks more of you, particularly in the first few days.",
  },
];

export default function FirstTripToIndiaGuidePage() {
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
              dateModified,
            })
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
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="First Trip to India: What to Know Before You Go"
          subheadline="Not a list of places to see — a practical starting point for everything else a first visit actually involves."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'm planning my first trip to India and would like some help." />

        <ArticleBody>
          <ArticleP>
            Most guides to a first trip to India are lists of monuments. This one isn&apos;t. If
            you want to know what to see, our{" "}
            <Link href="/travel-guide/20-best-tourist-places-to-visit-in-india" className="text-maroon underline">
              20 Best Tourist Places in India
            </Link>{" "}
            covers that ground well. What that kind of list doesn&apos;t cover is everything
            around it: how long to plan for, what to sort out beforehand, what the trip actually
            feels like day to day, and where a first-timer should sensibly start. That&apos;s
            what this guide is for.
          </ArticleP>

          <ArticleH2>How Long to Plan For</ArticleH2>
          <ArticleP>
            Ten to twelve days is the comfortable range for a first visit — enough time for the
            classic Delhi-Agra-Jaipur circuit plus one region beyond it, without every day
            becoming a travel day. A week works if you keep to the Golden Triangle alone. Fewer
            than five or six days rarely does India justice; the distances between places worth
            seeing are genuinely large, and a rushed first trip tends to leave people wanting to
            come back rather than feeling satisfied. Our{" "}
            <Link href="/travel-guide/golden-triangle-itinerary-guide" className="text-maroon underline">
              Golden Triangle itinerary guide
            </Link>{" "}
            and{" "}
            <Link href="/travel-guide/rajasthan-itinerary-guide" className="text-maroon underline">
              Rajasthan itinerary guide
            </Link>{" "}
            both set out real day-by-day plans at different lengths if you want to see how the
            days actually break down.
          </ArticleP>

          <ArticleH2>What to Sort Out Before You Fly</ArticleH2>
          <ArticleUL>
            <li>
              <strong>Your visa.</strong> Most nationalities need an e-Visa arranged in advance;
              our{" "}
              <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">
                e-Visa guide
              </Link>{" "}
              covers the types, fees and the newer e-Arrival Card by nationality.
            </li>
            <li>
              <strong>Health preparation.</strong> A conversation with your own doctor or a travel
              clinic several weeks ahead is worth having; our{" "}
              <Link href="/travel-guide/india-health-vaccination-guide" className="text-maroon underline">
                health and vaccination guide
              </Link>{" "}
              sets out what&apos;s generally discussed.
            </li>
            <li>
              <strong>Money.</strong> A mix of cards and cash, and knowing what to expect at ATMs
              and with UPI; our{" "}
              <Link href="/travel-guide/india-currency-payments-guide" className="text-maroon underline">
                currency and payments guide
              </Link>{" "}
              covers this in detail.
            </li>
            <li>
              <strong>Your first few nights.</strong> Book at least the first few nights and your
              airport pickup in advance, so you land into a plan rather than a search after a long
              flight.
            </li>
          </ArticleUL>

          <ArticleH2>What the Trip Actually Feels Like</ArticleH2>
          <ArticleP>
            India is more intense on the ground than most first-time visitors expect, and it&apos;s
            worth hearing that plainly rather than only reading about the monuments. Cities are
            loud, crowded and visually dense. Touts, unofficial guides and shopkeepers steering you
            toward a commission-paying stop are a real, constant presence in tourist areas — not
            dangerous, but tiring, and worth expecting rather than being caught off guard by. A
            calm, brief &quot;no thank you&quot; handles almost all of it. The heaviest version of
            this hits hardest in the first day or two, before you&apos;ve found your rhythm, which
            is exactly why a pre-arranged pickup and a light first day matter more here than on
            most first trips abroad.
          </ArticleP>

          <ArticleH2>Getting Around: Decide This Early</ArticleH2>
          <ArticleP>
            How you move between cities shapes the whole trip, and it&apos;s worth deciding before
            you arrive rather than improvising. A private car and driver is the easiest option for
            a first visit — no station transfers, no negotiating fares, and the ability to stop
            along the way. Trains suit travellers who want to do more independently. Our{" "}
            <Link href="/travel-guide/getting-around-india" className="text-maroon underline">
              guide to getting around India
            </Link>{" "}
            compares flights, trains and road transport properly.
          </ArticleP>

          <ArticleH2>Private Tour, Independent Travel, or Somewhere Between</ArticleH2>
          <ArticleP>
            A fully private tour — driver, guide and hotels arranged for you — removes most of the
            friction from a first trip and is the easier route while you&apos;re still finding
            your footing. Fully independent travel is cheaper and more flexible, and suits
            confident travellers with time to research. Many first-timers land somewhere in
            between: a private arrangement for the first few days and the main circuit, with more
            independence added once they&apos;ve got a feel for the country. If you&apos;re
            travelling alone specifically, our{" "}
            <Link href="/travel-guide/solo-travel-india-guide" className="text-maroon underline">
              solo travel guide
            </Link>{" "}
            goes deeper into that decision.
          </ArticleP>

          <ArticleH2>What a Guide and Driver Actually Do For You</ArticleH2>
          <ArticleP>
            If this is your first time using a private guide and driver, it is worth knowing what
            that arrangement actually covers, since it is not the same as a group tour. Your
            driver handles every transfer between cities and sights, deals directly with parking
            and traffic, and is available on your schedule rather than a fixed timetable. A local
            guide at each stop explains the history and context of what you are seeing and can
            answer the kind of questions a plaque never covers. Together, they also act as a
            practical buffer against the touts and unofficial guides mentioned above, since a
            group with its own guide is a far less appealing target. This is the single biggest
            reason a private arrangement tends to feel so much easier for a first visit than
            travelling entirely independently from day one.
          </ArticleP>

          <ArticleH2>Money: A Realistic First-Trip Budget Shape</ArticleH2>
          <ArticleP>
            Rather than a single figure, it helps to know where the money in a first trip
            actually goes. Private transport and a guide form a fixed daily cost regardless of
            how many people are travelling together, which is why a shared trip is
            considerably cheaper per person than a solo one. Hotels vary enormously by tier, and
            a first-time visitor often finds mid-range heritage or well-reviewed hotels give the
            best sense of a place without stretching the budget the way a five-star stay would.
            Meals, entry fees and shopping are the genuinely variable part of the trip, and easy
            to keep modest if that matters to you. Our{" "}
            <Link href="/travel-guide/india-currency-payments-guide" className="text-maroon underline">
              currency and payments guide
            </Link>{" "}
            covers the practical side of carrying and spending money once you are there.
          </ArticleP>

          <ArticleH2>When to Go</ArticleH2>
          <ArticleP>
            October to March is the comfortable season across most of the country — cooler
            temperatures, clearer skies, and the window most first-time visitors choose. Our{" "}
            <Link href="/best-time-to-visit-india" className="text-maroon underline">
              best-time-to-visit guide
            </Link>{" "}
            breaks this down by month if your dates are flexible.
          </ArticleP>

          <ArticleH2>What to Pack</ArticleH2>
          <ArticleP>
            Comfortable, well broken-in walking shoes matter more than almost anything else on
            this list, since every sightseeing day involves genuine time on your feet and you
            will need to slip them off at religious sites and inside some monuments. Light,
            modest clothing works across most of the country and is expected at temples and
            mosques regardless of the weather. A warm layer is worth packing even in the
            supposedly warm winter months, since desert evenings in Rajasthan and mornings
            anywhere at altitude can be genuinely cold. Sun protection, a reusable water bottle,
            and a photocopy of your passport and visa rounded out in a small daypack cover most
            of what a first trip actually needs.
          </ArticleP>

          <ArticleH2>Food: More Reassuring Than People Expect</ArticleH2>
          <ArticleP>
            Food worry is one of the more overstated concerns first-time visitors bring with
            them. Hotel restaurants and any place recommended by your guide or driver are a safe
            starting point, and most travellers find their stomach settles into the food within
            the first few days regardless. Bottled or filtered water is worth sticking to
            throughout, and it is sensible to pace yourself with street food specifically in the
            first day or two rather than diving in immediately, but it is not something to build
            the whole trip around avoiding. Vegetarian food, in particular, is a genuine strength
            of Indian cooking rather than a limited fallback option, and it is available
            everywhere.
          </ArticleP>

          <ArticleH2>Common First-Trip Mistakes</ArticleH2>
          <ArticleUL>
            <li>Trying to see too many cities in too few days, rather than fewer places at a real pace.</li>
            <li>Booking a full sightseeing day immediately after a long-haul flight.</li>
            <li>Arriving without a pre-arranged airport pickup and negotiating a taxi while jet-lagged.</li>
            <li>Skipping the visa or health preparation until the last minute.</li>
            <li>Assuming a single Golden Triangle trip needs to cover everything — it doesn&apos;t; most repeat visitors come back for Rajasthan, Kerala or the Himalaya on a second trip.</li>
          </ArticleUL>

          <ArticleH2>Where to Actually Start</ArticleH2>
          <ArticleP>
            For nearly every first-time visitor, the answer is the classic circuit: Delhi, Agra
            and the Taj Mahal, and Jaipur. It&apos;s well-travelled for a reason — reliable
            infrastructure, manageable distances, and a genuine cross-section of Mughal and
            Rajput India in one trip. Our{" "}
            <Link href="/travel-guide/taj-mahal-visiting-guide" className="text-maroon underline">
              Taj Mahal visiting guide
            </Link>{" "}
            is worth reading regardless of how the rest of your itinerary shapes up, since getting
            that one visit right — the right day, the right time of day — matters more than almost
            any other single decision on a first trip.
          </ArticleP>

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            A good first trip to India comes down to a handful of decisions made well in advance:
            enough days to avoid rushing, the visa and health basics sorted early, a plan for
            getting around decided before you land, and realistic expectations about the pace of
            the place. Get those right and the rest of the trip tends to take care of itself. Tell
            us your dates and how much you&apos;d like arranged, and we&apos;ll build the
            itinerary around them.
          </ArticleP>
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
          headline="Ready to Plan Your First Trip?"
          headlineItalic="Tell Us Your Dates."
          subtext="Tell us how many days you have and what you'd like arranged, and we'll draft a real itinerary within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'm planning my first trip to India and would like some help."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
