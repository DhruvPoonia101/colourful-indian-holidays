import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * DRAFT CONTENT — road distances and drive times are reused from this
 * site's own Hiring a Car in Rajasthan guide (Jaipur–Jodhpur ~335 km,
 * 5.5–6 h; Jodhpur–Udaipur ~250 km, ~5 h; Jodhpur–Jaisalmer ~285 km,
 * 5–6 h; Jaipur–Pushkar ~145 km, 2.5–3 h; Jaipur–Ranthambore ~180 km,
 * ~4 h; Delhi–Jaipur ~280 km, 5–6 h) rather than re-estimated.
 * Deliberately NOT stated: Jaipur–Udaipur and Jaisalmer–Udaipur road
 * times (no verified figure on the site), entry fees, hotel names and
 * prices. Nights-per-city advice is presented as our suggestion, not a
 * fact. The 12-day route mirrors the real Grand Rajasthan Circuit package.
 */

const title = "Rajasthan Itinerary: How to Plan 7, 10 and 12 Days";
const description =
  "A practical Rajasthan itinerary guide — which cities to include at 7, 10 and 12 days, real drive times between them, how many nights each deserves, and what to leave out.";
const pagePath = "/travel-guide/rajasthan-itinerary-guide";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";
const datePublished = "2026-09-28";
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
  { name: "Rajasthan Itinerary Guide", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "How many days do you need in Rajasthan?",
    answer:
      "Seven days covers Jaipur, Jodhpur and Udaipur without rushing. Ten days lets you add Pushkar and either Jaisalmer or more time elsewhere. Twelve days is enough for the full state loop including Ranthambore, Jaisalmer and Pushkar. Below six days, stay with one or two cities rather than trying to cover the state.",
  },
  {
    question: "What is the best order to visit Rajasthan?",
    answer:
      "Most travellers start in Jaipur, since it is the closest major city to Delhi, then move west and south through Jodhpur and, if time allows, Jaisalmer, finishing in Udaipur where there is an airport for departure. This keeps the route moving in one direction. Jaisalmer is the exception, since it is a dead end on the map, so a trip that includes it either returns east by road or uses a flight.",
  },
  {
    question: "Should I include Jaisalmer or Udaipur if I only have ten days?",
    answer:
      "Choose one unless you are happy with a very long road day between them. Jaisalmer offers a living sandstone fort and the Thar Desert; Udaipur offers lakes and palaces and a softer pace. Many first-time visitors choose Udaipur, and return for Jaisalmer on a second trip. Our twelve-day circuit fits both.",
  },
  {
    question: "Is Rajasthan too hot to visit?",
    answer:
      "Summer is genuinely very hot, and most travellers avoid it. October to March is the comfortable window, with cool evenings in winter that call for a warm layer, especially in the desert. If you must travel outside that window, shorten sightseeing days and build in rest in the middle of the day.",
  },
  {
    question: "Can I do Rajasthan by train instead of hiring a car and driver?",
    answer:
      "Yes, trains connect most of the major cities and suit independent travellers, but a private driver lets you stop at forts, villages and viewpoints on the way and avoids station transfers with luggage. Many travellers use a driver for the main circuit and take a train for one long leg.",
  },
  {
    question: "Can this itinerary be combined with the Golden Triangle?",
    answer:
      "Yes. Delhi to Jaipur is about 280 km, so Agra and the Taj Mahal are easily added at the start, turning a Rajasthan trip into a longer North India route. Tell us your total days and we will fit both.",
  },
];

export default function RajasthanItineraryGuidePage() {
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
          imageAlt="Amber Fort at sunset, Jaipur, Rajasthan"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Rajasthan Itinerary: How to Plan 7, 10 and 12 Days"
          subheadline="Which cities to include at each length, how far apart they really are, and where to spend your nights."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleBody>
          <ArticleP>
            Rajasthan is a big state, and the most common planning mistake is trying to see too
            much of it. The cities that make the trip famous are separated by long drives, so
            every city you add costs a travel day, and a trip that looks generous on a map can
            turn into a blur of hotel check-ins. This guide sets out what is realistic at 7, 10
            and 12 days, using the real distances between the major stops, so you can decide
            what to include and what to leave for another visit. For a broader overview of the
            state, see our{" "}
            <Link href="/destinations/rajasthan" className="text-maroon underline">
              Rajasthan destination guide
            </Link>
            .
          </ArticleP>

          <ArticleH2>The Cities, and What Each One Is For</ArticleH2>
          <ArticleP>
            Each major stop offers something different, which is worth knowing before you decide
            which to keep. <Link href="/destinations/jaipur" className="text-maroon underline">Jaipur</Link>{" "}
            is the capital and the natural starting point, with Amber Fort, the City Palace,
            the Hawa Mahal and the Jantar Mantar observatory, a UNESCO World Heritage Site.{" "}
            <Link href="/destinations/jodhpur" className="text-maroon underline">Jodhpur</Link>{" "}
            is the Blue City, dominated by the enormous Mehrangarh Fort above its old town.{" "}
            <Link href="/destinations/jaisalmer" className="text-maroon underline">Jaisalmer</Link>{" "}
            is a sandstone fort city on the edge of the Thar Desert, where people still live
            inside the fort walls, and where a camel safari and a night in the dunes are the
            main draw.{" "}
            <Link href="/destinations/udaipur" className="text-maroon underline">Udaipur</Link>{" "}
            is the lake city, known for the City Palace above Lake Pichola and a slower, more
            romantic pace than the rest of the state.{" "}
            <Link href="/destinations/pushkar" className="text-maroon underline">Pushkar</Link>{" "}
            is a small, holy lake town with a bazaar, a Brahma temple and, in November, one of
            the world&apos;s largest camel fairs. Ranthambore, a tiger reserve, is the wildlife
            add-on.
          </ArticleP>

          <ArticleH2>The Real Drive Times</ArticleH2>
          <ArticleP>
            These are the road distances that shape every Rajasthan itinerary. They come from
            our own driving experience on the route, and they are why we recommend keeping the
            number of cities modest.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Delhi to Jaipur:</span> about 280 km, 5 to 6 hours</li>
            <li><span className="font-semibold text-ink">Jaipur to Pushkar:</span> about 145 km, 2.5 to 3 hours</li>
            <li><span className="font-semibold text-ink">Jaipur to Ranthambore:</span> about 180 km, around 4 hours</li>
            <li><span className="font-semibold text-ink">Jaipur to Jodhpur:</span> about 335 km, 5.5 to 6 hours, usually the longest single leg</li>
            <li><span className="font-semibold text-ink">Jodhpur to Jaisalmer:</span> about 285 km, 5 to 6 hours</li>
            <li><span className="font-semibold text-ink">Jodhpur to Udaipur:</span> about 250 km, around 5 hours, often broken up with a stop at Ranakpur&apos;s Jain temples</li>
          </ArticleUL>
          <ArticleP>
            Jaipur to Udaipur is also a long day by road, and a short flight is a common
            alternative for travellers who would rather not spend a whole day driving. Our{" "}
            <Link href="/travel-guide/hiring-a-car-in-rajasthan" className="text-maroon underline">
              guide to hiring a car in Rajasthan
            </Link>{" "}
            explains how the driving side works in more detail.
          </ArticleP>

          <ArticleH2>A 7-Day Rajasthan Itinerary: Jaipur, Jodhpur and Udaipur</ArticleH2>
          <ArticleP>
            Seven days is the shortest length that lets you see three cities properly, and it is
            the one we suggest for a first visit. It keeps each hotel stay to two nights, so
            you unpack twice rather than four times.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Day 1:</span> Arrive in Jaipur and settle in.</li>
            <li><span className="font-semibold text-ink">Day 2:</span> Jaipur sightseeing: Amber Fort in the morning, then the City Palace, Jantar Mantar and Hawa Mahal.</li>
            <li><span className="font-semibold text-ink">Day 3:</span> Drive to Jodhpur (5.5 to 6 hours) and visit Mehrangarh Fort late in the day.</li>
            <li><span className="font-semibold text-ink">Day 4:</span> A full day in Jodhpur: the old blue-washed lanes, the markets and Jaswant Thada.</li>
            <li><span className="font-semibold text-ink">Day 5:</span> Drive to Udaipur (about 5 hours), stopping at Ranakpur&apos;s Jain temples on the way.</li>
            <li><span className="font-semibold text-ink">Day 6:</span> Udaipur: the City Palace and an evening boat on Lake Pichola.</li>
            <li><span className="font-semibold text-ink">Day 7:</span> Depart from Udaipur airport.</li>
          </ArticleUL>
          <ArticleP>
            This is close to our{" "}
            <Link href="/tours/rajasthan-highlights" className="text-maroon underline">
              Rajasthan Highlights
            </Link>{" "}
            route, and our{" "}
            <Link href="/tours/rajasthan-tours" className="text-maroon underline">
              Rajasthan Tours
            </Link>{" "}
            page shows the range of fixed itineraries we offer if you would rather start from
            one of those.
          </ArticleP>

          <ArticleH2>A 10-Day Rajasthan Itinerary: Two Ways to Do It</ArticleH2>
          <ArticleP>
            At ten days you can slow down and add depth, but you still have to make a choice.
            Jaisalmer and Udaipur sit at opposite ends of a very long road, so unless you accept
            a full day of driving between them, you will usually pick one. Jaisalmer is also a
            dead end on the map, which means you either return east by road or fly, so plan for
            that from the start. Here are both versions.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">Version A: the lakes.</span> This keeps the
            route moving in one direction and finishes with a flight from Udaipur.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Days 1 to 3:</span> Jaipur, with a full sightseeing day and a third day at a slower pace for the bazaars or a hands-on craft or cooking session.</li>
            <li><span className="font-semibold text-ink">Day 4:</span> Drive to Pushkar (2.5 to 3 hours) and spend the afternoon at the lake and bazaar.</li>
            <li><span className="font-semibold text-ink">Day 5:</span> On to Jodhpur, with time at Mehrangarh Fort late in the day.</li>
            <li><span className="font-semibold text-ink">Day 6:</span> A full day in Jodhpur.</li>
            <li><span className="font-semibold text-ink">Day 7:</span> Drive to Udaipur (about 5 hours), stopping at Ranakpur.</li>
            <li><span className="font-semibold text-ink">Days 8 to 9:</span> Udaipur: the City Palace, the lake, and a slow last day.</li>
            <li><span className="font-semibold text-ink">Day 10:</span> Depart from Udaipur airport.</li>
          </ArticleUL>
          <ArticleP>
            <span className="font-semibold text-ink">Version B: the desert.</span> This swaps
            Udaipur for Jaisalmer, and adds the return leg.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Days 1 to 2:</span> Jaipur.</li>
            <li><span className="font-semibold text-ink">Day 3:</span> Pushkar in the afternoon.</li>
            <li><span className="font-semibold text-ink">Days 4 to 5:</span> Jodhpur, with a full day for Mehrangarh and the old city.</li>
            <li><span className="font-semibold text-ink">Day 6:</span> Drive to Jaisalmer (5 to 6 hours).</li>
            <li><span className="font-semibold text-ink">Days 7 to 8:</span> Jaisalmer Fort and its havelis, then a camel safari and sunset over the dunes.</li>
            <li><span className="font-semibold text-ink">Day 9:</span> Return to Jodhpur (5 to 6 hours).</li>
            <li><span className="font-semibold text-ink">Day 10:</span> Depart from Jodhpur.</li>
          </ArticleUL>
          <ArticleP>
            Neither is better; the desert is more dramatic, and Udaipur is more relaxing. If you
            are torn, the lakes version is the easier trip, and the desert version is the more
            unusual one.
          </ArticleP>

          <ArticleH2>A 12-Day Rajasthan Itinerary: The Full Loop</ArticleH2>
          <ArticleP>
            Twelve days is enough to cover the whole state without feeling rushed, and it is the
            length of our{" "}
            <Link href="/tours/grand-rajasthan-circuit" className="text-maroon underline">
              Grand Rajasthan Circuit
            </Link>
            . It runs Jaipur, Ranthambore, Jodhpur, Jaisalmer, Udaipur and Pushkar, and finishes
            back in Jaipur. It is the only length that fits the tiger reserve, the desert and
            the lake city in one trip, and it puts the wildlife stop in the middle of the
            trip as a break from forts and palaces. If forts and palaces are your main interest,
            our{" "}
            <Link href="/experiences/palace-fort-tours" className="text-maroon underline">
              Palace and Fort Tours
            </Link>{" "}
            focus on them across four cities, and our{" "}
            <Link href="/travel-guide/monuments-in-rajasthan" className="text-maroon underline">
              monuments guide
            </Link>{" "}
            covers the major ones in detail.
          </ArticleP>

          <ArticleH2>Adding Ranthambore for Tigers</ArticleH2>
          <ArticleP>
            Ranthambore is about 180 km from Jaipur, roughly four hours, and is the usual way to
            add wildlife to a Rajasthan trip. It needs at least two nights if you want two
            safaris, since a single drive rarely does it justice, and it works best placed
            between Jaipur and the rest of the loop rather than tacked onto the end. Our{" "}
            <Link href="/tours/rajasthan-wildlife-safari" className="text-maroon underline">
              Rajasthan Wildlife Safari
            </Link>{" "}
            builds this into an eight-day route, and our{" "}
            <Link href="/tours/wildlife-tiger-safari-tours" className="text-maroon underline">
              wildlife and tiger safari guide
            </Link>{" "}
            compares Ranthambore with India&apos;s other reserves. No safari can guarantee a
            sighting, but the chances improve with two or more drives.
          </ArticleP>

          <ArticleH2>What a Typical Travel Day Looks Like</ArticleH2>
          <ArticleP>
            Understanding the rhythm of a drive day makes the distances easier to picture. A
            typical one starts after breakfast, covers the main leg in the morning with a
            break every couple of hours, stops for lunch at a roadside restaurant or a fort
            along the way, and arrives at the next city in the middle of the afternoon,
            leaving time to check in, rest and see one sight before dinner. On the longest
            legs, such as Jaipur to Jodhpur, it is better to treat the day as a travel day with
            one stop than to try to fit in full sightseeing on top. Splitting the drive with a
            visit on the way, such as Ranakpur between Jodhpur and Udaipur, makes the day
            feel like part of the trip rather than a gap in it.
          </ArticleP>

          <ArticleH2>Common Planning Mistakes</ArticleH2>
          <ArticleUL>
            <li>Trying to see six cities in a week. Every extra city costs a travel day.</li>
            <li>Booking one-night stops in consecutive cities. The packing and driving add up.</li>
            <li>Scheduling a full sightseeing day straight after a long drive.</li>
            <li>Putting Jaisalmer and Udaipur in the same short trip without allowing for the distance between them.</li>
            <li>Travelling in peak summer heat and then trying to keep to a winter-length sightseeing schedule.</li>
            <li>Leaving Pushkar accommodation late when travelling around the Camel Fair.</li>
          </ArticleUL>

          <ArticleH2>How Many Nights in Each City</ArticleH2>
          <ArticleP>
            This is our own suggestion rather than a rule, based on how the trips tend to feel.
            Give Jaipur two nights, since it has the most to see. Give Jodhpur one or two, and
            Udaipur two, since its appeal is partly about slowing down. Give Jaisalmer two if
            you want to do the desert properly, and one if you are only there for the fort.
            Pushkar rewards one night, no more. Ranthambore needs two nights if you want at
            least two safaris. The single most useful rule is to avoid one-night stops in
            consecutive cities, because the daily packing and long drives add up quickly.
          </ArticleP>

          <ArticleH2>Which Version Suits Which Traveller</ArticleH2>
          <ArticleP>
            The right length depends as much on who is travelling as on how many days you have.
            First-time visitors are usually best served by the seven-day route, which shows the
            three cities most people picture when they think of Rajasthan without demanding
            much driving. Repeat visitors often go straight to the desert or to Ranthambore,
            since they have already seen the main forts. Families tend to prefer fewer, longer
            stays, and our{" "}
            <Link href="/experiences/family-holidays" className="text-maroon underline">
              Family Holidays
            </Link>{" "}
            itinerary is built around that idea. Photographers should look at our{" "}
            <Link href="/experiences/photography-tours" className="text-maroon underline">
              Photography Tours
            </Link>
            , which time visits around the light, and travellers who want a higher level of
            comfort should see our{" "}
            <Link href="/experiences/luxury-india-tours" className="text-maroon underline">
              Luxury India Tours
            </Link>
            . For a hands-on look at Rajasthani craft and performance in and around Jaipur,
            see our{" "}
            <Link href="/experiences/cultural-tours" className="text-maroon underline">
              Cultural Tours
            </Link>
            .
          </ArticleP>

          <ArticleH2>Getting In and Out</ArticleH2>
          <ArticleP>
            Most international visitors arrive in Delhi and reach Rajasthan by road, which is
            why the Delhi to Jaipur leg of about 280 km is the natural first step. Jaipur,
            Jodhpur and Udaipur all have their own airports, which is what makes one-way
            routes practical: you can arrive at one end and depart from the other without
            driving back. That is the reason the seven and ten-day itineraries above finish in
            Udaipur or Jodhpur rather than looping back to where they started. If you would
            rather not begin with a five-hour drive straight after a long-haul flight, you can
            take a short domestic flight from Delhi instead, or spend the first night in Delhi
            and start fresh the next morning.
          </ArticleP>

          <ArticleH2>When to Go</ArticleH2>
          <ArticleP>
            October to March is the comfortable season across the state, with clear skies and
            pleasant days. Winter evenings in the desert can be surprisingly cold, so pack a
            warm layer. Summer is very hot and most travellers avoid it. If your dates allow, it
            is worth timing the trip around a festival: the Pushkar Camel Fair in the autumn
            is the best known, and our{" "}
            <Link href="/experiences/pushkar-fair" className="text-maroon underline">
              Pushkar Fair guide
            </Link>{" "}
            explains how to plan for it, since accommodation there fills up months ahead. Our{" "}
            <Link href="/best-time-to-visit-india" className="text-maroon underline">
              best-time-to-visit guide
            </Link>{" "}
            has the month-by-month picture.
          </ArticleP>

          <ArticleH2>What to Leave Out</ArticleH2>
          <ArticleP>
            The hardest part of planning Rajasthan is leaving things out. At seven days, skip
            Jaisalmer and Pushkar; they are worth a second trip, not a rushed add-on. At ten
            days, skip either the desert or the lake city rather than forcing both. Avoid
            one-night stops wherever you can, and avoid ending a long drive with a same-day
            sightseeing schedule. If your itinerary feels tight, the right fix is almost always
            to remove a city, not to shorten every stay.
          </ArticleP>

          <ArticleH2>Combining Rajasthan With the Rest of India</ArticleH2>
          <ArticleP>
            Rajasthan pairs naturally with the Taj Mahal and Delhi, since Delhi to Jaipur is
            only about 280 km, which is why many travellers add Agra at the start and treat the
            whole thing as a longer North India route. Getting between Rajasthan and the rest
            of India often means a domestic flight, and our{" "}
            <Link href="/travel-guide/getting-around-india" className="text-maroon underline">
              guide to getting around India
            </Link>{" "}
            explains how to decide between flights, trains and road transport for the long
            legs. If Rajasthan is the only region on your trip, our sister site,{" "}
            <a
              href="https://rajasthantravelagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline"
            >
              Rajasthan Travel Agency
            </a>
            , specialises in the state.
          </ArticleP>

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            A good Rajasthan trip is defined less by how many cities it includes than by how
            well the drives are paced around them. Seven days, three cities and two-night stays
            is the most reliable formula; ten days lets you add one more stop; twelve days
            covers the whole state. Tell us your dates, your interests and how much driving you
            are comfortable with, and we will build the itinerary around them rather than
            asking you to fit an existing one.
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
          headline="Ready to Plan Your Rajasthan Trip?"
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests — tell us how many days you have and we will reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Rajasthan itinerary with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
