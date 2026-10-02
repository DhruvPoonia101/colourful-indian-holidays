import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * DRAFT CONTENT — infrastructure facts verified via search rather than
 * assumed or left stale:
 * - Gatimaan Express: deliberately does NOT state its old, widely-repeated
 *   160 km/h top speed as current fact. Its speed was cut to 130 km/h in
 *   June 2024 pending Kavach safety-system installation — confirmed via
 *   multiple 2024-2026 sources. Described here as "one of the fastest"
 *   rather than repeating a now-inaccurate specific figure.
 * - Delhi-Mumbai Expressway: ~1,386 km total, roughly 900+ km operational
 *   as of early-to-mid 2026 per government statements to Parliament, with
 *   the Gujarat-Maharashtra sections delayed into 2027-2028. Described as
 *   "largely operational, still finishing in stages" rather than claiming
 *   full completion, since sourcing conflicts on the exact finish date.
 * - Tatkal booking window (AC classes 10am, non-AC 11am, one day before
 *   travel) and IRCTC as the sole official booking channel are stable,
 *   long-standing facts not expected to have changed.
 * Frames private car and driver hire as the default recommendation for
 * international travellers without overstating flights/trains as
 * impractical — both are genuinely useful and covered honestly. Does not
 * duplicate the Rajasthan-specific vehicle-choice detail already covered
 * in the Hiring a Car in Rajasthan guide; links to it instead.
 */

const title = "Getting Around India: Flights, Trains & Roads Explained";
const description =
  "Domestic flights, Indian Railways' classes and booking system, and why private car and driver hire is the standard way international travellers get around — a practical, honest comparison.";
const pagePath = "/travel-guide/getting-around-india";
const heroImage = "/images/destinations/darjeeling-himalayan-railway.webp";
const datePublished = "2026-09-25";
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
  { name: "Getting Around India", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Is it safe for tourists to travel by train in India?",
    answer:
      "Yes — millions of domestic and international travellers use Indian Railways every day, and AC classes in particular are comfortable and well-suited to tourists. Book through IRCTC or a trusted agent, keep valuables close, and choose AC classes over unreserved general seating for a genuinely comfortable experience.",
  },
  {
    question: "Should I fly or take the train between Indian cities?",
    answer:
      "For distances over roughly 500km, or when your itinerary is time-constrained, flying is usually more practical. For shorter, scenic, or culturally significant routes — or when the experience itself is part of the appeal — the train can be the better choice. Most of our itineraries mix both, plus private road transfers, depending on the specific route.",
  },
  {
    question: "Can I book Indian trains from outside India?",
    answer:
      "Yes — the IRCTC website and app accept international payment cards, though foreign card transactions occasionally get flagged by IRCTC's fraud checks. If you run into trouble booking directly, a licensed travel agent can book on your behalf, which is what we do as part of any itinerary that includes rail travel.",
  },
  {
    question: "Do I need to rent a self-drive car in India?",
    answer:
      "We wouldn't recommend it. Chauffeur-driven private car hire is the standard model for both domestic and international tourists, is typically no more expensive than a genuine self-drive rental with adequate insurance, and removes the real challenge of adapting to unfamiliar roads and driving conventions.",
  },
  {
    question: "How far in advance should I book domestic flights or trains?",
    answer:
      "For flights, 4 to 8 weeks ahead generally gets the best fares on popular routes. For trains, especially AC classes on long-distance or festival-season routes, booking as soon as reservations open (up to 120 days ahead) is worth it — popular trains sell out well before departure.",
  },
  {
    question: "Are auto-rickshaws safe and worth using as a tourist?",
    answer:
      "Generally yes for short hops, provided you agree the fare before starting the ride or book through a ride-hailing app rather than negotiating on the street. On a guided trip with us, your private vehicle handles almost all transport, so a rickshaw ride tends to be a fun one-off experience rather than a necessity.",
  },
  {
    question: "Is the Delhi-Mumbai Expressway open yet?",
    answer:
      "Largely, yes — the Delhi-to-Vadodara section is substantially operational, cutting road travel time on that stretch noticeably. The remaining Gujarat-to-Mumbai sections are still being finished in stages, so full end-to-end travel times will keep improving over the next couple of years rather than being fixed today.",
  },
];

export default function GettingAroundIndiaGuidePage() {
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
          imageAlt="The Darjeeling Himalayan Railway's steam 'toy train', West Bengal"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Getting Around India: Flights, Trains & Roads"
          subheadline="India is roughly the size of Western Europe. Here's how domestic flights, Indian Railways and private road transport actually compare, and when each one makes sense."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about getting around India before booking my trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            India is a genuinely large country — Delhi to Mumbai is further than London to Rome,
            and Delhi to Chennai is further still — so how you move between destinations shapes an
            itinerary as much as the destinations themselves. Most trips combine all three modes
            covered here: a domestic flight for the longest single leg, a train where the route or
            the experience itself is worth it, and a private car with driver for everything
            in between and around each city. This guide covers how each actually works, what to
            realistically expect, and when one genuinely beats the others — written from the
            perspective of a company that plans this logistics puzzle for international travellers
            every day, not a generic transport comparison written without ever having to actually
            build the itinerary around it.
          </ArticleP>

          <ArticleH2>Domestic Flights</ArticleH2>
          <ArticleP>
            India has one of the world&apos;s fastest-growing domestic aviation markets, with a dense
            network connecting well over a hundred airports. IndiGo is the largest carrier by far,
            known for reliability and frequency rather than luxury; Air India (which absorbed
            Vistara in 2024) and the newer Akasa Air round out the main full-service and
            budget-hybrid options, with SpiceJet also operating a smaller network. For context on
            typical journey times: Delhi to Mumbai runs around 2 hours, Delhi to Jaipur is barely
            45 minutes in the air (though rarely worth it given airport transfer time on such a
            short hop), and Delhi to Chennai or Kochi runs closer to 3 hours.
          </ArticleP>
          <ArticleP>
            Flying makes the most sense for genuinely long legs — connecting North India with
            Kerala or the Northeast, for instance — or when an itinerary is tightly time-
            constrained and a day lost to road or rail travel would meaningfully cut into
            sightseeing time. Domestic fares are generally reasonable by international standards,
            though prices climb steeply during major festivals and the October-to-March peak
            season, so booking 4 to 8 weeks ahead is worth it on popular routes.
          </ArticleP>
          <ArticleP>
            A few practical points worth knowing: domestic check-in typically closes 45 minutes
            before departure (earlier at busier airports, so allow more buffer than that in
            practice), baggage allowances are noticeably tighter than many international carriers&apos;
            (often 15kg checked in economy, sometimes less on ultra-low-cost fares), and security
            queues at major hub airports like Delhi and Mumbai can run long during peak morning and
            evening travel windows. None of this is unusual by international standards, but it&apos;s
            worth building a comfortable buffer into a connecting itinerary rather than scheduling
            a tight same-day connection between a domestic and international flight.
          </ArticleP>

          <ArticleH2>Indian Railways: Classes, Booking & What to Expect</ArticleH2>
          <ArticleP>
            Indian Railways operates one of the largest rail networks in the world, and for many
            travellers, a train journey here is a genuine experience in its own right rather than
            simply a way to get from one place to another. The class you book matters more than
            almost any other single decision:
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">AC First Class (1A)</span> — the most private and comfortable, with lockable 2 or 4-berth cabins, at the highest fare</li>
            <li><span className="font-semibold text-ink">AC 2-Tier (2A)</span> — curtained berths in open bays of 4, a comfortable and popular choice for tourists</li>
            <li><span className="font-semibold text-ink">AC 3-Tier (3A)</span> — similar layout to 2A but more berths per bay and no curtains, still air-conditioned and reasonably comfortable</li>
            <li><span className="font-semibold text-ink">AC Chair Car (CC) / Executive Chair (EC)</span> — airline-style reclining seats, used on day trains rather than overnight journeys</li>
            <li><span className="font-semibold text-ink">Sleeper Class (SL)</span> — non-AC berths, the standard long-distance option for budget-conscious domestic travellers, workable for tourists but noticeably less comfortable in hot weather</li>
          </ArticleUL>
          <ArticleP>
            Bookings open 120 days before departure and are made through IRCTC, the official
            booking portal — third-party sites exist, but IRCTC (directly or through a licensed
            agent) is the authoritative source. A separate Tatkal quota releases a small allocation
            of last-minute seats one day before travel (10am for AC classes, 11am for non-AC), at
            a premium fare, for travellers who couldn&apos;t book ahead.
          </ArticleP>
          <ArticleP>
            On board, expect a genuinely social experience rather than a quiet transfer — vendors
            walk the aisles selling chai, snacks and full meals on longer routes, fellow passengers
            in open-bay classes strike up conversation more readily than on a plane, and the
            scenery on many long-distance routes is worth staying awake for regardless of the hour.
            Catering can also be pre-booked through IRCTC for many long-distance trains, worth
            doing ahead if you have dietary preferences rather than relying on what&apos;s available
            on board.
          </ArticleP>

          <ArticleH2>Overnight Trains vs. Day Trains</ArticleH2>
          <ArticleP>
            Longer routes are often run overnight specifically so the travel time doesn&apos;t eat into
            a travelling day — you board in the evening, sleep through the journey in a berth, and
            arrive the next morning ready to start sightseeing. This works well for genuinely long
            distances where flying would otherwise be the only fast option, and can be a more
            relaxed alternative to an early-morning flight. Shorter, scenic or business-hour routes
            typically run as day trains with seated chair-car service instead, where the experience
            and the views along the way are as much the point as the destination.
          </ArticleP>
          <ArticleP>
            On speed, semi-high-speed trains like Vande Bharat and the Delhi-Agra Gatimaan Express
            are genuinely quick by Indian Railways&apos; historical standards, covering the roughly
            190km between Delhi and Agra in under 2 hours — though it&apos;s worth knowing that recent
            safety-system upgrades (installing India&apos;s Kavach automatic train protection) have
            temporarily reduced some of these trains&apos; top speeds, so treat older &quot;fastest train in
            India&quot; claims with some caution rather than assuming the original headline figures
            still hold. Beyond point-to-point travel, India also runs genuine luxury tourist
            trains — including{" "}
            <a
              href="https://palaceonwheelstour.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline"
            >
              Palace on Wheels
            </a>
            , which turns the journey itself into a multi-day Rajasthan itinerary rather than a
            transfer between destinations.
          </ArticleP>

          <ArticleH2>Roads & Private Car Hire</ArticleH2>
          <ArticleP>
            India&apos;s highway network has improved substantially over the past decade, and that
            trend continues — the Delhi-Mumbai Expressway, at roughly 1,386km when finished, is
            already largely operational across its Delhi-to-Vadodara section, with the remaining
            Gujarat-to-Mumbai stretches still finishing in stages. Improvements like this matter
            directly for road-trip itineraries, since drive times keep coming down on routes that
            used to take noticeably longer.
          </ArticleP>
          <ArticleP>
            For nearly all international travellers, road transport in India means a private,
            chauffeur-driven vehicle rather than a self-drive rental — and this isn&apos;t a compromise,
            it&apos;s simply the standard, sensible way tourism works here. Driving conventions, mixed
            traffic, and unfamiliar roads make self-driving a genuinely harder proposition than in
            most Western countries, and chauffeur-driven hire is typically no more expensive than
            arranging a self-drive rental with insurance that actually covers a foreign licence
            holder. We&apos;ve written a full breakdown of how this works specifically for Rajasthan —
            vehicle types, realistic city-to-city drive times, and what a day on the road looks
            like — in our{" "}
            <Link href="/travel-guide/hiring-a-car-in-rajasthan" className="text-maroon underline">
              Hiring a Car in Rajasthan guide
            </Link>
            , and the same model applies across every region we operate in, not just Rajasthan.
          </ArticleP>

          <ArticleH2>Costs at a Glance</ArticleH2>
          <ArticleP>
            Exact prices shift with season, route and how far ahead you book, but the relative
            picture is fairly consistent. Domestic flights are usually the most expensive per
            kilometre but the fastest for long distances. AC train classes sit in the middle —
            noticeably cheaper than flying on the same route, with 2A and 3A offering a genuinely
            comfortable experience for the price. A private car with driver is priced by the day
            or the route rather than per kilometre in isolation, and while it isn&apos;t the cheapest
            option for a single long transfer, it&apos;s the only one that includes sightseeing
            flexibility, door-to-door convenience, and a guide who can stop wherever something
            catches your interest — value that a fixed train or flight schedule simply can&apos;t
            offer.
          </ArticleP>

          <ArticleMidCTA
            text="Prefer not to plan the mode-mix yourself?"
            href="/tours"
            linkLabel="See our tour packages — transport is built in"
          />

          <ArticleH2>Which Should You Choose? A Practical Framework</ArticleH2>
          <ArticleP>
            Rather than picking one mode for an entire trip, most well-planned itineraries mix all
            three deliberately. Fly for the longest single leg — especially connecting distant
            regions like Rajasthan and Kerala, or the mainland and the Andaman Islands — where the
            time saved clearly outweighs the airport-transfer overhead. Take a train where the
            route itself has appeal, the distance suits an overnight journey, or a specific train
            (like the Palace on Wheels, or a scenic hill line) is part of what you want to
            experience rather than just a way to travel. And use a private car with driver for
            everything else — city-to-city legs within a region, all local transfers and
            sightseeing days, and any route where flexibility and door-to-door convenience matter
            more than raw speed.
          </ArticleP>
          <ArticleP>
            A classic Golden Triangle route illustrates this well. Delhi to Agra (roughly 230km) is
            comfortably a road journey — the Yamuna Expressway makes it around 3.5 to 4 hours by
            private car, genuinely competitive with flying once you account for airport time on
            such a short hop, and gives you the flexibility to stop along the way. Agra to Jaipur
            (around 240km) works the same way. A longer leg further into Rajasthan, or on to a
            distant region entirely, is where flying or an overnight train starts to make more
            sense than another full day on the road.
          </ArticleP>

          <ArticleMidCTA
            text="This is exactly the route on our standard package."
            href="/tours/golden-triangle-tour-classic"
            linkLabel="View the Classic Golden Triangle Tour"
          />

          <ArticleH2>Airport Transfers & Arriving After a Long Flight</ArticleH2>
          <ArticleP>
            However you&apos;re travelling within India, most international trips begin and end with a
            long-haul flight, and that first transfer matters more than it might seem after 14 or
            more hours in the air. We include private airport pickup on every itinerary specifically
            for this reason — your driver waits at arrivals with your name, so there&apos;s no need to
            negotiate a taxi rank or figure out a prepaid counter while jet-lagged. The same applies
            in reverse for your departure, timed around your actual flight rather than a generic
            estimate.
          </ArticleP>

          <ArticleH2>Getting Around Within a City</ArticleH2>
          <ArticleP>
            Once you&apos;re in a given city, short local trips have their own set of options beyond
            your main private vehicle. Auto-rickshaws (three-wheeled, open-sided vehicles) are the
            classic short-hop option in most Indian cities and can be genuinely fun for a
            short, well-negotiated ride, though fares should always be agreed before starting, or
            requested through a ride-hailing app where available, rather than settled on arrival.
            Delhi, Mumbai, Bengaluru, Kolkata and a growing number of other cities also have modern
            metro systems, which can be a fast, air-conditioned way to cross a congested city
            during the day, even for a short tourist detour. That said, on a guided itinerary with
            us, this rarely comes up in practice — your private vehicle and driver handle city
            transport as part of the day&apos;s plan, and switching to a rickshaw or the metro is
            usually more of a novelty experience than a practical necessity. Pre-paid taxi counters
            at major airports are also a reasonably safe fallback if you ever do need a one-off
            ride outside a planned itinerary — look for the official counter inside the terminal
            rather than accepting an offer from someone approaching you in the arrivals hall.
          </ArticleP>

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            None of these three options is inherently the &quot;right&quot; way to get around India — each
            genuinely suits different legs of a trip, and the best itineraries use the right tool
            for each specific journey rather than forcing everything into one mode. When you plan
            a trip with us, transport isn&apos;t an afterthought worked out once you land — it&apos;s built
            into the itinerary from the start, with flights, trains and private road transfers
            chosen route by route based on what actually makes sense.
          </ArticleP>
          <ArticleP>
            If you&apos;re still deciding how to structure a specific route — whether a leg is better
            flown, taken by train, or driven — that&apos;s exactly the kind of question worth asking us
            directly rather than guessing from a generic guide. Tell us your destinations and how
            much time you have, and we&apos;ll build the transport plan around them as part of a full
            itinerary, not as a separate booking you have to sort out yourself.
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
          headline="Let Us Plan the Logistics."
          headlineItalic="You Just Show Up."
          subtext="Every itinerary is built privately around your dates and interests, with transport worked out from the start — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question about getting around India before booking my trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
