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
 * DRAFT CONTENT — visitor facts verified via search on 28 Sep 2026 against
 * the official Taj Mahal site (tajmahal.gov.in ticketing and visiting-hours
 * pages), cross-checked with several 2026 travel guides:
 * - Closed every Friday.
 * - Ticket windows open one hour before sunrise, close 45 minutes before
 *   sunset; the monument opens about 30 minutes before sunrise and closes
 *   about 30 minutes before sunset (times move with the seasons).
 * - Foreign visitors (outside SAARC/BIMSTEC): Rs 1,100 entry plus an
 *   optional Rs 200 for the main mausoleum chamber; online tickets are
 *   discounted Rs 50 per foreign ticket; children under 15 free.
 * - Official booking sites: tajmahal.gov.in, asiagracircle.in and the ASI
 *   payment portal. Water bottle, shoe covers, map and battery-bus/golf
 *   cart are free with the foreigner ticket. Drones prohibited; carry ID.
 * - The southern gate is exit-only at present; ticket counters at the
 *   Eastern and Western gates.
 * - Night viewing runs on a handful of nights around the full moon and
 *   must be booked at least a day ahead; this changes, so it is described
 *   in general terms and the reader is told to confirm.
 * Prices and rules change: the article states figures "as of our latest
 * check" and sends readers to the official sites to confirm. Deliberately
 * NOT stated: ticket validity period (sources conflict), any Ramadan
 * closure (unreliable source), exact prohibited-items list.
 */

const title = "Taj Mahal Visiting Guide: Tickets, Timings, Sunrise & Tips";
const description =
  "A practical Taj Mahal guide — ticket prices for foreign visitors, opening hours and the Friday closure, sunrise versus sunset, which gate to use, and mistakes to avoid.";
const pagePath = "/travel-guide/taj-mahal-visiting-guide";
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
  { name: "Taj Mahal Visiting Guide", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "What day is the Taj Mahal closed?",
    answer:
      "The Taj Mahal is closed to general visitors every Friday. It is open the other six days of the week, from around sunrise to sunset. Plan your Agra day around this, because arriving on a Friday is the most common way visitors miss it.",
  },
  {
    question: "How much does a Taj Mahal ticket cost for foreigners?",
    answer:
      "As of our latest check, foreign visitors from outside the SAARC and BIMSTEC countries pay 1,100 rupees for entry, plus an optional 200 rupees to enter the main mausoleum chamber. Buying online carries a small discount, and children under 15 enter free. Prices change, so confirm on the official site before you go.",
  },
  {
    question: "Is sunrise or sunset better at the Taj Mahal?",
    answer:
      "Sunrise is usually calmer and gives softer light, and many visitors prefer it. Sunset gives warm colour and is a good alternative if you are not a morning person. Winter fog, especially in December and January, can hide the monument at dawn, so sunrise is a gamble at that time of year.",
  },
  {
    question: "How long should I spend at the Taj Mahal?",
    answer:
      "Allow two to three hours for the complex, including the gardens, the platform and the mausoleum. Add time for security queues at the gate, and more if you want photographs at different points in the morning light.",
  },
  {
    question: "Can I visit the Taj Mahal at night?",
    answer:
      "Night viewing is offered only on a small number of nights around the full moon, in limited groups, and must be booked in advance. The schedule changes, so check the official site and book as early as you can rather than counting on it.",
  },
  {
    question: "Should I book a guide?",
    answer:
      "A guide adds a lot, because the story behind the monument, its inlay work and its symmetry is easy to miss without one. On our itineraries a private guide is included. If you are travelling independently, book a licensed guide in advance rather than accepting offers from people at the gate.",
  },
];

export default function TajMahalVisitingGuidePage() {
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
          headline="Taj Mahal Visiting Guide"
          subheadline="Tickets, timings, the Friday closure, sunrise versus sunset, and the small decisions that make the visit go well."
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
            The Taj Mahal is the reason many people plan a trip to India, and it is easy to get
            a few small things wrong: arriving on a Friday when it is closed, queuing at the
            wrong gate, or choosing a time of day that leaves you in a crowd. This guide covers
            what you need to plan the visit well. It is based on the official Taj Mahal
            information at the time of writing, but prices and rules change, so check the
            official sites before you go.
          </ArticleP>

          <ArticleH2>The Essentials at a Glance</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Closed:</span> every Friday, to general visitors.</li>
            <li><span className="font-semibold text-ink">Open:</span> the other six days, from around sunrise to around sunset, so the hours shift through the year.</li>
            <li><span className="font-semibold text-ink">Foreign visitor ticket:</span> 1,100 rupees for the complex, plus an optional 200 rupees for the main mausoleum chamber, as of our latest check.</li>
            <li><span className="font-semibold text-ink">Children:</span> free under 15.</li>
            <li><span className="font-semibold text-ink">Time to allow:</span> two to three hours.</li>
            <li><span className="font-semibold text-ink">Bring:</span> your passport or another photo ID, and only what you need.</li>
          </ArticleUL>

          <ArticleH2>Opening Hours and the Friday Closure</ArticleH2>
          <ArticleP>
            The monument opens about half an hour before sunrise and closes about half an hour
            before sunset, so the exact times change with the seasons. The ticket counters open
            earlier, one hour before sunrise, and close 45 minutes before sunset. Because
            security screening happens before you go in, arrive well ahead of the time you want
            to be inside.
          </ArticleP>
          <ArticleP>
            The Friday closure is the single most important thing to plan around. The Taj Mahal
            is closed to general visitors every Friday, when the mosque within the complex is
            used for prayers. If you are building a trip around Agra, put your Taj visit on any
            other day and make Friday a travel day or a day for other sights. On our{" "}
            <Link href="/tours/golden-triangle-tour" className="text-maroon underline">
              Golden Triangle
            </Link>{" "}
            routes we schedule the Agra stop around this before anything else.
          </ArticleP>

          <ArticleH2>Tickets, Fees and Booking Online</ArticleH2>
          <ArticleP>
            Ticket prices depend on nationality. Foreign visitors from outside the SAARC and
            BIMSTEC countries pay 1,100 rupees, which is roughly sixteen US dollars once the
            optional 200-rupee mausoleum ticket is added. The mausoleum ticket lets you go
            inside the main chamber that holds the cenotaphs of Mumtaz Mahal and Shah Jahan, and
            it is a separate add-on rather than part of the base price. Children under 15 enter
            free.
          </ArticleP>
          <ArticleP>
            You can buy tickets at the gates, but booking online through the official Taj Mahal
            website or the Archaeological Survey of India&apos;s ticketing portal is quicker and
            carries a small discount for foreign visitors. Stick to the official channels;
            third-party sellers often charge considerably more and sell nothing you cannot get
            directly. The foreigner ticket also includes a bottle of water, shoe covers and a
            map, and battery-bus and golf-cart rides within the approach area are free with it.
            If you book a tour with us, tickets are handled for you, so you skip this step.
          </ArticleP>

          <ArticleH2>Which Gate to Use</ArticleH2>
          <ArticleP>
            There are ticket counters at the Eastern and Western gates, and the queues for
            foreign and domestic visitors are separate, with signs to direct you. The southern
            gate is currently exit-only. The Western Gate, near the city side, is the one most
            organised tours use, while the Eastern Gate is convenient if you are staying in
            the Taj Ganj area close to the monument. Your driver or guide will know which is
            quicker on the day, since queue lengths vary.
          </ArticleP>

          <ArticleH2>Sunrise, Daytime or Sunset</ArticleH2>
          <ArticleP>
            Sunrise is the most popular choice and for good reason. The light is soft, the air
            is cool in the cooler months, and the monument shifts through pale colours as the sun
            comes up. It is also usually quieter than midday, though popular mornings still
            draw crowds at the gate. The catch is that fog can settle over Agra in the winter,
            particularly in December and January, and can hide the monument at dawn, so sunrise
            is a gamble in those months.
          </ArticleP>
          <ArticleP>
            Sunset is a good alternative if you prefer not to start early, with warm colour on the
            marble and the crowd starting to thin. Midday is the least pleasant for light and
            heat, and the harshest for photographs. A sensible plan is to visit at one end of
            the day and spend the middle of it elsewhere. Our{" "}
            <Link href="/experiences/photography-tours" className="text-maroon underline">
              Photography Tours
            </Link>{" "}
            build whole days around this principle.
          </ArticleP>

          <ArticleH2>Night Viewing</ArticleH2>
          <ArticleP>
            The Taj Mahal can be seen by moonlight, but only on a handful of nights around the
            full moon, in small, timed groups, and with tickets that must be bought in advance.
            It is a limited experience rather than a regular option, and the schedule changes, so
            if it matters to you, check the official site as early as you can and plan your
            dates around it rather than hoping to add it on the spot.
          </ArticleP>

          <ArticleH2>What to Bring and What to Leave Behind</ArticleH2>
          <ArticleP>
            Security at the gate is thorough, and the simplest rule is to bring only what you
            need. Carry your passport or another form of photo ID, a phone or camera, water and
            a small bag. Drones are strictly prohibited. Large bags and various other items are
            commonly restricted, so it is worth checking the current list on the official site
            and leaving anything unnecessary at your hotel. Dress comfortably and modestly,
            wear shoes that are easy to slip off if you go inside the mausoleum, and expect a
            walk of some length from the gate to the main platform.
          </ArticleP>

          <ArticleH2>Mehtab Bagh: The View From Across the River</ArticleH2>
          <ArticleP>
            Many visitors add a second viewpoint on the opposite bank of the Yamuna, in the
            gardens known as Mehtab Bagh. From there you see the Taj Mahal across the water
            rather than from inside its own grounds, which gives a different composition and
            a useful option late in the day. It works well as a supplement to a visit rather
            than a replacement for one.
          </ArticleP>

          <ArticleH2>The Story Worth Knowing Before You Go</ArticleH2>
          <ArticleP>
            The Taj Mahal was built by the Mughal emperor Shah Jahan as a tomb for his wife,
            Mumtaz Mahal. The main mausoleum was completed around 1648 and the wider complex of
            gardens, mosque and guest houses around 1653. Knowing a little of this makes the
            visit richer, because the symmetry, the calligraphy and the marble inlay all carry
            meaning that is easy to miss on a first walk-through. A guide is the easiest way to
            get that, which is why a private guide is part of our itineraries.
          </ArticleP>

          <ArticleH2>Beyond the Taj: Making the Most of Agra</ArticleH2>
          <ArticleP>
            Most visitors give Agra one night, and that is enough for the Taj Mahal and Agra
            Fort, the Mughal fortress that stands on the same river. If you want to see the
            monument from your room, choose a hotel with a Taj view; our{" "}
            <Link href="/experiences/luxury-india-tours" className="text-maroon underline">
              Luxury India Tours
            </Link>{" "}
            include one deliberately. For couples, our{" "}
            <Link href="/experiences/taj-mahal-honeymoon" className="text-maroon underline">
              Taj Mahal Honeymoon
            </Link>{" "}
            builds a trip around it, and our{" "}
            <Link href="/destinations/agra" className="text-maroon underline">
              Agra destination guide
            </Link>{" "}
            covers the city itself. Our{" "}
            <Link href="/tours/taj-mahal-tours" className="text-maroon underline">
              Taj Mahal Tours
            </Link>{" "}
            page shows the fixed itineraries we run.
          </ArticleP>

          <ArticleH2>What You Are Looking At Inside the Complex</ArticleH2>
          <ArticleP>
            It helps to know the layout before you arrive. You enter through a monumental red
            sandstone gateway, and the first view of the mausoleum framed in its arch is
            the moment most people remember. Beyond it lie formal gardens laid out in the
            Mughal four-part style, divided by water channels and a long reflecting pool that
            doubles the monument on a still morning. The white marble mausoleum stands on a raised
            platform with a minaret at each corner, and to either side sit two red sandstone
            buildings, a mosque and a matching structure that balances it. The symmetry is
            deliberate, and once you notice it, it is hard to stop seeing.
          </ArticleP>

          <ArticleH2>A Sample Sunrise Morning</ArticleH2>
          <ArticleP>
            A typical sunrise visit begins well before dawn, with a short transfer from your
            hotel to the gate. You queue for security, walk through the entrance gateway as the
            light starts to build, and spend the first half hour in the gardens and along the
            reflecting pool while the marble changes colour. You then climb to the platform
            and, if you have bought the extra ticket, go inside the mausoleum, where the stairs
            are narrow and the chamber is dim. Most people are back at their hotel for
            breakfast by mid-morning, with the rest of the day free for Agra Fort or a long
            rest, which is the main advantage of doing it early.
          </ArticleP>

          <ArticleH2>Avoiding the Crowds</ArticleH2>
          <ArticleP>
            No time of day is empty, but some are better than others. Arriving at opening is the
            most reliable way to have a calmer visit, and late afternoon is the next best. Because
            the monument is closed on Fridays, the days either side of it tend to be busier, so
            if you have a choice, a mid-week visit is generally easier. Buying your ticket online
            saves you the counter queue, and going in a small group with a guide who knows the
            route through the gate helps too. Even at its busiest, the monument is large enough
            that the crowd thins out once you move past the main platform and into the gardens.
          </ArticleP>

          <ArticleH2>Photography Tips</ArticleH2>
          <ArticleP>
            The most famous composition is the straight-on view down the reflecting pool, and it
            is worth taking early, before the crowd fills the foreground. After that, move around:
            the gateway framing, the side views from the mosque side, and close-ups of the inlay
            work all give very different pictures. Wide lenses suit the gateway shots, while a
            longer lens picks out detail on the minarets. Soft early light is far easier to work
            with than the flat glare of midday, and a still morning gives the best reflections.
            Drones are prohibited, and it is worth checking the current rules on other camera
            equipment before you go.
          </ArticleP>

          <ArticleH2>Comfort, Heat and Health</ArticleH2>
          <ArticleP>
            You will spend a couple of hours on your feet with little shade in the open sections,
            so wear comfortable shoes, bring water and use sun protection, especially outside
            the cooler months. The walk from the gate to the platform is longer than it looks,
            and the mausoleum stairs are narrow, which may be a consideration if anyone in your
            group has mobility difficulties. If you are unsure how the heat or a long day will
            affect you, our{" "}
            <Link href="/travel-guide/india-health-vaccination-guide" className="text-maroon underline">
              health and vaccination guide
            </Link>{" "}
            covers sensible precautions.
          </ArticleP>

          <ArticleH2>Getting to Agra</ArticleH2>
          <ArticleP>
            Agra is roughly 230 km from Delhi, about three and a half to four hours by road along
            the expressway, and about 240 km from Jaipur, around five hours. Most travellers go by
            private car, which lets you time the arrival for the light, and some take a fast train
            from Delhi and stay overnight. Our{" "}
            <Link href="/travel-guide/getting-around-india" className="text-maroon underline">
              guide to getting around India
            </Link>{" "}
            compares the options in more detail.
          </ArticleP>

          <ArticleH2>If You Only Have a Few Hours in Agra</ArticleH2>
          <ArticleP>
            Some itineraries pass through Agra on a single day, driving in from Delhi and out to
            Jaipur by evening. It is possible, but it makes for a long day, and the Taj Mahal is
            usually the only thing you will see properly. If time is short, prioritise the
            monument at the best light you can manage, add Agra Fort only if energy allows, and
            leave shopping stops for another trip. If you can spare a night, the visit becomes
            far more relaxed, because you can see the monument at sunset one day and sunrise
            the next, without rushing either.
          </ArticleP>

          <ArticleH2>Common Mistakes</ArticleH2>
          <ArticleUL>
            <li>Arriving on a Friday, when the Taj Mahal is closed.</li>
            <li>Leaving the visit to midday, in the heat and the crowds.</li>
            <li>Booking a sunrise visit in December or January without a backup plan for fog.</li>
            <li>Buying tickets from an unofficial seller and paying far more than the official price.</li>
            <li>Bringing a large bag or a drone and being turned away or delayed at security.</li>
            <li>Rushing in under an hour. Allow two to three.</li>
          </ArticleUL>

          <ArticleH2>Planning Your Trip Around It</ArticleH2>
          <ArticleP>
            Most travellers see the Taj Mahal as part of the classic Delhi, Agra and Jaipur
            circuit, and it is usually the first big sight of the trip. If you are visiting
            from overseas, our{" "}
            <Link href="/travel-guide/india-e-visa-guide" className="text-maroon underline">
              e-Visa guide
            </Link>{" "}
            explains the paperwork, and our{" "}
            <Link href="/travel-guide/rajasthan-itinerary-guide" className="text-maroon underline">
              Rajasthan itinerary guide
            </Link>{" "}
            shows how to extend the trip beyond Agra. Whatever route you choose, tell us your
            dates and we will schedule the Taj Mahal visit for the best available day and time.
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
          headline="Ready to See the Taj Mahal?"
          headlineItalic="Tell Us Your Dates."
          subtext="We will schedule your visit around the Friday closure and the best light, with tickets and a private guide arranged — reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like help planning a Taj Mahal visit with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
