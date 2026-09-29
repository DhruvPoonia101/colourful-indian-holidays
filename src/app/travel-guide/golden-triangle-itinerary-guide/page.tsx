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
 * DRAFT CONTENT — the day-by-day plan mirrors this site's real Golden
 * Triangle Classic package (6 days: Delhi, Delhi sightseeing, Agra,
 * Taj Mahal sunrise then Jaipur, Jaipur sightseeing, departure). Road
 * distances reuse figures already on the site: Delhi–Agra ~230 km
 * (3.5–4 h via the expressway), Agra–Jaipur ~240 km (~5 h), Delhi–Jaipur
 * ~280 km (5–6 h). The Friday Taj closure is taken from the official
 * Taj Mahal site (see the Taj Mahal Visiting Guide). Prices and hotel
 * names are deliberately not stated. The 4-day and 5-day plans are
 * described as compressions we can build on request; the site's 4-day
 * package has no live route, so it is not linked.
 */

const title = "Golden Triangle Itinerary: A 5 to 6 Day Plan for Delhi, Agra and Jaipur";
const description =
  "A day-by-day Golden Triangle itinerary — Delhi, Agra and Jaipur in 6 days, how to compress it to 4 or 5, real drive times, the Friday Taj closure, and how to extend it.";
const pagePath = "/travel-guide/golden-triangle-itinerary-guide";
const heroImage = "/images/destinations/agra-taj-mahal.webp";
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
  { name: "Golden Triangle Itinerary Guide", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "How many days do you need for the Golden Triangle?",
    answer:
      "Six days is the most comfortable length: two in Delhi, one in Agra and two in Jaipur, with a departure day. Five days works with a shorter Delhi stay, and four is possible but rushed, with more time in the car than at the sights. Fewer than four is not worth attempting.",
  },
  {
    question: "What is the best order to visit Delhi, Agra and Jaipur?",
    answer:
      "Delhi, then Agra, then Jaipur is the standard order, because most international flights land in Delhi and Jaipur is a natural place to continue into Rajasthan or fly out. The reverse also works. What matters more is making sure your Agra day is not a Friday, when the Taj Mahal is closed.",
  },
  {
    question: "How far apart are the three cities?",
    answer:
      "Delhi to Agra is roughly 230 km, about 3.5 to 4 hours by road on the expressway. Agra to Jaipur is roughly 240 km, around 5 hours. Jaipur back to Delhi is roughly 280 km, 5 to 6 hours. None of the legs is short, which is why the trip works best with a driver rather than relying on public transport.",
  },
  {
    question: "Is the Golden Triangle good for a first trip to India?",
    answer:
      "Yes, it is the most common first itinerary for good reason. The three cities cover Mughal, colonial and Rajput India, the routes are well travelled and the infrastructure is reliable. It is also easy to extend with Rajasthan, wildlife or Varanasi once you have seen the basics.",
  },
  {
    question: "When is the best time for the Golden Triangle?",
    answer:
      "October to March is the comfortable season, with clear days and cooler weather. Winter mornings can bring fog, particularly in December and January, which can hide the Taj Mahal at dawn. Summer is very hot, and most travellers avoid it.",
  },
  {
    question: "Can I add other places to the Golden Triangle?",
    answer:
      "Yes. The most common additions are Ranthambore for tigers, Udaipur for lakes and palaces, Varanasi for the Ganges, and Pushkar for a holy lake town. Each adds two or three days and is available as a fixed variant, or we can build a custom route.",
  },
];

export default function GoldenTriangleItineraryGuidePage() {
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
          headline="Golden Triangle Itinerary: A 5 to 6 Day Plan"
          subheadline="Delhi, Agra and Jaipur day by day, with real drive times and the one scheduling rule that catches people out."
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
            The Golden Triangle, made up of Delhi, Agra and Jaipur, is the most popular first
            itinerary in India, and it is easy to see why. In about a week it covers the Mughal
            capital, the Taj Mahal and the Pink City of Rajasthan, and the routes between them
            are well travelled and reliable. What separates a good Golden Triangle from a tiring
            one is mostly planning: how many days, which order, and where the long drives fall.
            This guide sets out a day-by-day plan and explains the choices behind it. For the
            full range of fixed routes we run, see our{" "}
            <Link href="/tours/golden-triangle-tour" className="text-maroon underline">
              Golden Triangle tour packages
            </Link>
            .
          </ArticleP>

          <ArticleH2>The Three Cities in a Nutshell</ArticleH2>
          <ArticleP>
            <Link href="/destinations/delhi" className="text-maroon underline">Delhi</Link>{" "}
            is where most international flights land, and it layers Mughal monuments over
            colonial avenues: Humayun&apos;s Tomb, Old Delhi&apos;s mosque and bazaars, and the wide
            boulevards of New Delhi.{" "}
            <Link href="/destinations/agra" className="text-maroon underline">Agra</Link>{" "}
            exists on the map largely because of the Taj Mahal, though Agra Fort, the
            red-sandstone Mughal stronghold beside the river, deserves a visit of its own.{" "}
            <Link href="/destinations/jaipur" className="text-maroon underline">Jaipur</Link>{" "}
            is the Pink City, named for the terracotta wash applied to its old buildings in 1876
            for a visiting British prince, and it is where the trip turns from Mughal India to
            the forts and palaces of Rajasthan.
          </ArticleP>

          <ArticleH2>How Far Apart Are They?</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Delhi to Agra:</span> roughly 230 km, 3.5 to 4 hours by road on the expressway</li>
            <li><span className="font-semibold text-ink">Agra to Jaipur:</span> roughly 240 km, around 5 hours</li>
            <li><span className="font-semibold text-ink">Jaipur to Delhi:</span> roughly 280 km, 5 to 6 hours</li>
          </ArticleUL>
          <ArticleP>
            None of these is a short hop, and that shapes everything. Each transfer eats a large
            part of a day, so the itinerary has to leave room around it. Our{" "}
            <Link href="/travel-guide/getting-around-india" className="text-maroon underline">
              guide to getting around India
            </Link>{" "}
            compares driving with trains and flights if you want to weigh the options.
          </ArticleP>

          <ArticleH2>The 6-Day Golden Triangle, Day by Day</ArticleH2>
          <ArticleP>
            Six days is the length we recommend, and it is the basis of our{" "}
            <Link href="/tours/golden-triangle-tour-classic" className="text-maroon underline">
              Golden Triangle Classic
            </Link>
            . It gives Delhi a proper day, keeps Agra to one night, and gives Jaipur the time it
            needs.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Day 1, Delhi:</span> arrive, meet your driver at the airport, and settle in. Keep the evening light.</li>
            <li><span className="font-semibold text-ink">Day 2, Delhi sightseeing:</span> a full day across Old and New Delhi, including Humayun&apos;s Tomb, the Jama Masjid area and the colonial boulevards around India Gate.</li>
            <li><span className="font-semibold text-ink">Day 3, Delhi to Agra:</span> a drive of three and a half to four hours, then Agra Fort in the afternoon and a first look at the Taj Mahal as the light softens.</li>
            <li><span className="font-semibold text-ink">Day 4, Agra to Jaipur:</span> the Taj Mahal at opening for sunrise, then on to Jaipur, roughly five hours away.</li>
            <li><span className="font-semibold text-ink">Day 5, Jaipur:</span> Amber Fort early, then the City Palace, Jantar Mantar observatory and Hawa Mahal, with time in the bazaars.</li>
            <li><span className="font-semibold text-ink">Day 6, departure:</span> transfer to Jaipur airport, or back to Delhi for an onward flight.</li>
          </ArticleUL>
          <ArticleP>
            For the Taj Mahal specifically, our{" "}
            <Link href="/travel-guide/taj-mahal-visiting-guide" className="text-maroon underline">
              Taj Mahal visiting guide
            </Link>{" "}
            covers tickets, timings and the best light.
          </ArticleP>

          <ArticleH2>The Friday Rule</ArticleH2>
          <ArticleP>
            The Taj Mahal is closed to general visitors every Friday, and it is the single most
            common scheduling error on this route. Work backwards from your Agra day and make
            sure it does not land on a Friday. In the standard plan above, Agra sightseeing
            happens on days three and four, so if your arrival date would put the Taj on a
            Friday, shift the whole trip a day either way, or reverse the direction so Agra
            falls at a different point.
          </ArticleP>

          <ArticleH2>How to Structure Your Delhi Day</ArticleH2>
          <ArticleP>
            Delhi rewards a plan, because it is huge and traffic is heavy. A sensible day pairs
            the older parts of the city, Humayun&apos;s Tomb and the Old Delhi mosque and bazaar
            district, with the broader colonial avenues around India Gate. Humayun&apos;s Tomb is a
            UNESCO World Heritage Site and the red-sandstone forerunner of the Taj Mahal, so it
            makes a good primer for what comes next. Old Delhi is at its best in the morning,
            before the heat and the crowds, while the tree-lined avenues of New Delhi are
            pleasant later. Qutub Minar, another UNESCO site, is an easy addition if you have
            the energy. Do not try to see everything: pick a few sights and give them time.
          </ArticleP>

          <ArticleH2>How to Structure Your Agra Day</ArticleH2>
          <ArticleP>
            Agra is best treated as a short stay built around two visits. On the way in, Agra
            Fort makes an easy first stop, because it gives you the story of the Mughal court
            that built the Taj Mahal and lets you see the monument from a distance, along the
            river. The Taj Mahal itself is best at one end of the day, ideally at opening the
            next morning, with the rest of the morning free before the drive to Jaipur. That
            arrangement keeps the long transfer to the afternoon, after you have had the best
            of the light and the coolest hours.
          </ArticleP>

          <ArticleH2>How to Structure Your Jaipur Days</ArticleH2>
          <ArticleP>
            Jaipur is the richest stop, so give it the most time. Start at Amber Fort early, when
            the crowds are lightest, and go up to the entrance by jeep or, if you prefer, on
            foot. The City Palace, partly still home to the former royal family, comes next,
            then the Jantar Mantar observatory, a UNESCO World Heritage Site of enormous
            stone instruments used for astronomy, and the Hawa Mahal with its honeycomb facade.
            Leave the late afternoon for the bazaars of the old walled city, which are at their
            liveliest as the light turns warm.
          </ArticleP>

          <ArticleH2>Shopping Stops and Commissions</ArticleH2>
          <ArticleP>
            Agra is known for marble inlay and Jaipur for textiles, jewellery and gems, and both
            are worth exploring, but this is where visitors are most likely to be steered into
            shops by drivers or guides who earn a commission. There is nothing wrong with buying
            something you like, but decide in advance whether you want a shopping stop at all,
            and say no politely to stops you did not ask for. Our{" "}
            <Link href="/travel-guide/solo-travel-india-guide" className="text-maroon underline">
              solo travel guide
            </Link>{" "}
            explains the common patterns in more detail.
          </ArticleP>

          <ArticleH2>What to Pack</ArticleH2>
          <ArticleP>
            Comfortable walking shoes matter more than anything else, since every stop involves
            long stretches on foot and you may need to slip them off at religious sites and inside
            the Taj Mahal. Light, modest clothing suits the whole route, with a warm layer for
            winter mornings, which can be cold and foggy. Bring sun protection, a refillable
            water bottle, and a small bag, since large bags can slow you down at security.
            Bring a photocopy of your passport and visa as well.
          </ArticleP>

          <ArticleH2>Leaving Room in the Plan</ArticleH2>
          <ArticleP>
            The best Golden Triangle itineraries are not the fullest ones. Leave gaps: a free
            afternoon in Jaipur, an unhurried breakfast in Agra, a slow first evening in Delhi.
            Those gaps are where the trip stops feeling like a schedule and starts feeling like
            travel, and they give you slack when something runs late, as things do on Indian
            roads. If you are torn between adding a sight and keeping a gap, keep the gap.
          </ArticleP>

          <ArticleH2>What Drives the Cost</ArticleH2>
          <ArticleP>
            We do not publish a single price here, because the same six days can cost very
            different amounts depending on choices you control. The biggest factors are the hotel
            tier, whether you travel privately or in a group, the number of people sharing the
            vehicle, and how many extras such as safaris or special experiences you add. A private
            car and driver costs the same whether one person or four share it, so the cost per
            head falls as the group grows. A room with a Taj Mahal view in Agra is a genuine
            upgrade for one night, and a sensible place to spend if you are going to spend
            anywhere.
          </ArticleP>

          <ArticleH2>How Far Ahead to Book</ArticleH2>
          <ArticleP>
            October to March is the busy season, and the better hotels in Agra and Jaipur fill up
            first. Two to three months ahead is a comfortable window, and earlier is wise if you
            want a specific hotel, a Taj view room, or travel around Diwali or the Christmas and
            New Year period. Booking early also gives you time to sort out your visa without
            pressure.
          </ArticleP>

          <ArticleH2>Cutting It to 5 Days</ArticleH2>
          <ArticleP>
            If you only have five days, the cleanest cut is Delhi. Reduce it to one night, with
            sightseeing compressed into the morning after arrival, and keep Agra and Jaipur as
            they are. This is workable if you arrive early in the day and are not badly
            jet-lagged, and it protects the two stops most people care about most. Avoid
            cutting Jaipur, since it holds the most sightseeing of the three.
          </ArticleP>

          <ArticleH2>Cutting It to 4 Days</ArticleH2>
          <ArticleP>
            Four days is possible and we can build it, but it is a compromise. You will spend
            more time in the car than at the sights, with two long transfers in four days, and
            Delhi is reduced to an arrival and a short tour. It works for people whose priority
            is simply to have seen the Taj Mahal and Jaipur, and who accept a tight pace. If you
            can find a fifth or sixth day, take it.
          </ArticleP>

          <ArticleH2>Should You Reverse the Direction?</ArticleH2>
          <ArticleP>
            Delhi, Agra, Jaipur is the standard order because most flights land in Delhi and
            Jaipur is a natural starting point for onward travel into Rajasthan. Doing it in
            reverse works equally well and is the better choice if you are continuing from
            Rajasthan into Delhi, or if the Friday closure forces a different order. Either way,
            the driving is the same; the difference is where you start and finish.
          </ArticleP>

          <ArticleH2>Adding Days: Where to Extend</ArticleH2>
          <ArticleP>
            The Golden Triangle is a core that extends naturally, and each of the additions
            below is available as a fixed route. Adding{" "}
            <Link href="/tours/golden-triangle-tour-ranthambore" className="text-maroon underline">
              Ranthambore
            </Link>{" "}
            brings in a tiger reserve. Adding{" "}
            <Link href="/tours/golden-triangle-tour-udaipur" className="text-maroon underline">
              Udaipur
            </Link>{" "}
            gives you lakes and palaces at a slower pace. Adding{" "}
            <Link href="/tours/golden-triangle-tour-varanasi" className="text-maroon underline">
              Varanasi
            </Link>{" "}
            takes the trip toward the Ganges, and adding{" "}
            <Link href="/tours/golden-triangle-tour-ajmer-pushkar" className="text-maroon underline">
              Ajmer and Pushkar
            </Link>{" "}
            adds Rajasthan&apos;s religious side. If you would rather see the whole of Rajasthan,
            our{" "}
            <Link href="/travel-guide/rajasthan-itinerary-guide" className="text-maroon underline">
              Rajasthan itinerary guide
            </Link>{" "}
            explains how to plan it.
          </ArticleP>

          <ArticleH2>When to Go</ArticleH2>
          <ArticleP>
            October to March is the comfortable window, with clear days and cool evenings. Winter
            mornings can be foggy, especially in December and January, which can hide the
            Taj Mahal at dawn, so keep a backup plan for the Agra morning. Summer is very hot
            and most travellers avoid it. Our{" "}
            <Link href="/best-time-to-visit-india" className="text-maroon underline">
              best-time-to-visit guide
            </Link>{" "}
            has the month-by-month picture.
          </ArticleP>

          <ArticleH2>Getting the Details Right</ArticleH2>
          <ArticleUL>
            <li>Sort your visa early. Our <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">e-Visa guide</Link> explains the process, including the newer arrival card.</li>
            <li>Arrange airport pickup so you are not negotiating a taxi after a long flight.</li>
            <li>Book the Agra hotel with the Taj in mind. A room with a view is a real upgrade for one night.</li>
            <li>Keep the first day light. Jet lag and Delhi&apos;s intensity are easier after a proper sleep.</li>
            <li>Leave the middle of the Taj day free. The best light is at the ends of the day.</li>
          </ArticleUL>

          <ArticleH2>Which Version Suits You</ArticleH2>
          <ArticleP>
            Families often prefer a slower version with fewer transfers, and our{" "}
            <Link href="/experiences/family-holidays" className="text-maroon underline">
              Family Holidays
            </Link>{" "}
            itinerary is built that way. If you are interested in the monuments themselves, our{" "}
            <Link href="/experiences/unesco-heritage-sites" className="text-maroon underline">
              UNESCO Heritage Sites
            </Link>{" "}
            route goes deeper, and our{" "}
            <Link href="/experiences/palace-fort-tours" className="text-maroon underline">
              Palace and Fort Tours
            </Link>{" "}
            focus on Rajasthan&apos;s forts. Travellers coming from the United States, the United
            Kingdom or Australia will find country-specific planning notes in our{" "}
            <Link href="/india-tours-from-usa" className="text-maroon underline">USA</Link>,{" "}
            <Link href="/india-tours-from-uk" className="text-maroon underline">UK</Link> and{" "}
            <Link href="/india-tours-from-australia" className="text-maroon underline">Australia</Link>{" "}
            guides.
          </ArticleP>

          <ArticleH2>Common Mistakes</ArticleH2>
          <ArticleUL>
            <li>Landing the Taj Mahal day on a Friday.</li>
            <li>Squeezing the trip into four days and spending most of it on the road.</li>
            <li>Cutting Jaipur to save time, when it holds the most to see.</li>
            <li>Planning a full sightseeing day straight after a long transfer.</li>
            <li>Travelling in peak summer and keeping a winter-length schedule.</li>
            <li>Leaving it too late to book hotels in the October to March season.</li>
          </ArticleUL>

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            The Golden Triangle works best at six days, with two nights in Delhi, one in Agra
            and two in Jaipur, and with the Friday rule checked before you fix your dates.
            Shorter is possible if you accept a tighter pace; longer is easy with an extension.
            Tell us your dates and how many days you have, and we will build the route around
            them, with the Taj Mahal on the best possible day.
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
          headline="Ready to Plan Your Golden Triangle?"
          headlineItalic="Tell Us Your Dates."
          subtext="Tell us how many days you have and we will build the route, with the Taj Mahal on the best available day — reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Golden Triangle itinerary with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
