import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Monuments in Rajasthan: A Complete Guide | Travel Guide";
const description =
  "Amber Fort, Mehrangarh, Jaisalmer Fort and more — the forts and palaces that define Rajasthan, and what makes each one genuinely worth the visit.";
const pagePath = "/travel-guide/monuments-in-rajasthan";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";
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
  { name: "Monuments in Rajasthan", path: pagePath },
];

export default function MonumentsGuidePage() {
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
          imageAlt="Amber Fort at sunset, Jaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Monuments in Rajasthan: A Complete Guide"
          subheadline="Rajasthan has more surviving forts and palaces than anywhere else in India. Here are the ones actually worth building a trip around."
        />

        <ArticleBody>
          <ArticleP>
            Rajasthan&apos;s monuments aren&apos;t spread thin across the state — they cluster
            in a handful of cities, which is exactly why a Rajasthan itinerary works so well as
            a circuit rather than a series of separate day trips bolted together. Almost every
            major fort or palace here was built by one of Rajasthan&apos;s Rajput ruling clans
            between the 8th and 18th centuries, often specifically to withstand siege — which is
            why so many of them still stand today, largely intact, in a way that&apos;s
            genuinely unusual for structures this old. For an international traveller planning a
            first trip through India, that density of well-preserved, still-standing history is
            one of the strongest reasons{" "}
            <Link href="/destinations/rajasthan" className="text-maroon underline">
              Rajasthan
            </Link>{" "}
            tends to anchor the whole itinerary rather
            than being treated as a side trip. Below is what to expect at each of the major
            sites, roughly in the order most first-time visitors see them, along with practical
            notes on timing, entry, and what a private guide actually adds at each stop.
          </ArticleP>

          <ArticleH2>Amber Fort, Jaipur</ArticleH2>
          <ArticleP>
            Amber Fort is usually the first major monument on a Rajasthan itinerary, and it sets
            the bar high — a hilltop fort-palace overlooking Maota Lake, built from pale yellow
            and pink sandstone and white marble, with courtyards, mirror work, and fortified
            walls that climb the ridgeline behind it like a smaller version of the Great Wall.
            Construction began in 1592 under Raja Man Singh I and continued for generations
            under successive rulers, which is why the fort feels less like a single building and
            more like a layered complex — Diwan-e-Aam (the public audience hall), Diwan-e-Khas
            (the private hall, with its famous mirrored Sheesh Mahal), and the Sukh Niwas
            pleasure palace all sit within the same walls but were built decades apart. Arrive
            early in the morning, both to beat the heat and the crowds, and to see the fort in
            the kind of soft light it was built to be seen in — the sandstone genuinely changes
            colour through the day. Many visitors also take a short jeep ride up to the entrance
            rather than climbing the ramp on foot, which is worth doing if you want to save your
            energy for the walk inside, since the fort itself is considerably larger than it
            first appears from below.
          </ArticleP>

          <ArticleH2>City Palace &amp; Hawa Mahal, Jaipur</ArticleH2>
          <ArticleP>
            Back in the city itself, the City Palace is still partly a working royal residence —
            Jaipur&apos;s former royal family retains private apartments here — with several
            museum wings open to visitors, including the Sabha Niwas hall and an armoury
            displaying Rajput weaponry going back centuries. The palace blends Rajasthani and
            Mughal architectural styles in a way that&apos;s distinct from the more purely
            Rajput forts elsewhere in the state, a reflection of the alliance Jaipur&apos;s
            rulers maintained with the Mughal empire rather than open conflict with it. A short
            walk away, Hawa Mahal — the &quot;Palace of Winds&quot; — is famous for its honeycomb
            facade of 953 small windows, built in 1799 so that royal women could watch street
            life and processions below without being seen themselves, in keeping with the
            purdah customs of the era. It&apos;s a five-storey structure but startlingly
            shallow from behind — many first-time visitors are surprised to learn it&apos;s
            barely one room deep in places. It&apos;s best photographed from across the street
            in the early morning, when the light hits the pink sandstone directly and the street
            below is still quiet.
          </ArticleP>

          <ArticleH2>Mehrangarh Fort, Jodhpur</ArticleH2>
          <ArticleP>
            Mehrangarh sits on a sheer rock outcrop roughly 400 feet above Jodhpur&apos;s old
            blue city, and is widely considered one of the best-preserved forts in India —
            Rudyard Kipling once described it as &quot;the work of giants&quot;, and standing at
            the base looking up, it&apos;s not hard to see why. Founded in 1459 by Rao Jodha,
            the fort&apos;s outer walls run up to 36 metres high in places and were never
            successfully breached in battle. Inside, the museum galleries — covering armour,
            palanquins, royal portraits, and an elaborate collection of howdahs (elephant seats)
            — are genuinely well curated rather than an afterthought, with an audio guide
            included in the entry fee that&apos;s considerably more detailed than most Indian
            monument audio guides. The views over the blue-washed rooftops below are reason
            enough to visit on their own; the blue colour, historically linked to the Brahmin
            caste but now used more widely across the old city, is at its most striking from the
            fort&apos;s upper ramparts in the late afternoon.
          </ArticleP>

          <ArticleH2>Jaisalmer Fort</ArticleH2>
          <ArticleP>
            Jaisalmer Fort is one of the very few &quot;living forts&quot; left in the world —
            around a quarter of the old city&apos;s population still lives within its walls, in
            havelis that are centuries old, running shops, guesthouses and restaurants built into
            the same golden sandstone the fort itself is carved from. That makes it a genuinely
            different kind of visit from Rajasthan&apos;s other forts: you&apos;re walking
            through an inhabited neighbourhood, not a preserved monument behind ropes and glass
            cases. Built in 1156, the fort sits deep in the Thar Desert, and its golden-yellow
            sandstone gives it a completely different visual character from the pink and red
            forts of Jaipur and Jodhpur — it glows almost amber at sunset, which is where the
            city&apos;s nickname, the &quot;Golden City&quot;, comes from. Because the fort is
            genuinely lived-in, its long-term structural stability has become a real conservation
            concern in recent decades, and UNESCO has flagged it as at-risk — worth knowing if
            you&apos;re curious why some areas may be under restoration during your visit.
          </ArticleP>

          <ArticleH2>City Palace &amp; Lake Palace, Udaipur</ArticleH2>
          <ArticleP>
            Udaipur&apos;s City Palace is the largest palace complex in Rajasthan, built up over
            nearly 400 years by successive Mewar rulers starting in 1553, with balconies, cupolas
            and towers looking directly out over Lake Pichola. Because it was expanded by so many
            different rulers over such a long period, the architecture inside shifts noticeably
            as you move through it — different wings reflect different eras of taste, from
            heavier Rajput stonework to more delicate later additions. The Lake Palace itself —
            the white marble palace that appears to float on the lake, built in 1746 as a summer
            retreat — is now a luxury hotel, but it&apos;s worth seeing from the water even if
            you&apos;re not staying there; several boat tours depart from near the City Palace
            jetty and pass close by at sunset, when the white marble takes on a warm golden tone
            against the darkening lake. Udaipur is often described as the most romantic city in
            Rajasthan, and the view back toward the City Palace from the water is a large part of
            why that reputation holds up.
          </ArticleP>

          <ArticleH2>Chittorgarh Fort</ArticleH2>
          <ArticleP>
            Chittorgarh is the largest fort in India by area — its walls enclose roughly 700
            acres, including several palaces, temples and towers within a single fortified
            complex — and it carries some of Rajasthan&apos;s most significant history. It was
            the capital of Mewar for centuries and the site of three major sieges, most notably
            against Alauddin Khalji in 1303 and later against the Mughal emperor Akbar in 1567–68,
            both of which ended in jauhar, the ritual mass self-immolation of the fort&apos;s
            women rather than surrender — a history that&apos;s still central to how the site is
            understood and presented today. The Vijay Stambh (Tower of Victory), a nine-storey
            tower built in the 15th century to commemorate a military victory, is the fort&apos;s
            most recognisable structure and can be climbed for sweeping views over the
            surrounding plains. Chittorgarh sees far fewer international visitors than Jaipur or
            Udaipur, which makes it one of the better places in Rajasthan to see a major monument
            without the crowds — though it does mean less English-language signage on-site, so a
            guide adds even more value here than at the more visited forts.
          </ArticleP>

          <ArticleH2>Jantar Mantar, Jaipur</ArticleH2>
          <ArticleP>
            A UNESCO World Heritage Site in its own right, Jantar Mantar is a collection of
            nineteen astronomical instruments built in stone and marble between 1727 and 1734
            under Maharaja Jai Singh II, an avid astronomer as well as Jaipur&apos;s founder.
            The instruments are still functional and, remarkably, still accurate — the largest,
            the Samrat Yantra sundial, can tell local time to within about two seconds. It&apos;s
            an easy add-on to a City Palace and Hawa Mahal morning in Jaipur, sitting directly
            between the two, and a guide is genuinely useful here — without an explanation, the
            site can look like an abstract sculpture garden rather than what it actually is: one
            of the most sophisticated pieces of pre-telescope astronomical engineering anywhere
            in the world.
          </ArticleP>

          <ArticleH2>Nahargarh Fort, Jaipur</ArticleH2>
          <ArticleP>
            Less visited than Amber Fort but arguably offering the best single view over Jaipur,
            Nahargarh sits on the same Aravalli ridgeline as Amber and Jaigarh forts, connected
            to them by a fortification wall. Built in 1734 as a defensive outpost, it&apos;s best
            known today for its sunset views over the Pink City spread out below, and for
            Madhavendra Bhawan, a palace within the fort built with nine near-identical
            apartments — one for each of the Maharaja&apos;s queens, so no favouritism could be
            perceived between them. It&apos;s a good late-afternoon add-on after a morning at
            Amber Fort, and considerably quieter than the more famous sites in the city.
          </ArticleP>

          <ArticleH2>Kumbhalgarh Fort</ArticleH2>
          <ArticleP>
            Kumbhalgarh is best known for one specific fact that surprises most first-time
            visitors: its perimeter wall runs for roughly 36 kilometres, making it the second
            longest continuous wall in the world after the Great Wall of China. Built in the
            15th century by Rana Kumbha, the fort was considered virtually impregnable and was
            breached only once in its history, and even then only through a shortage of drinking
            water rather than direct military defeat. It sits further off the standard tourist
            circuit than Jaipur, Jodhpur or Udaipur, roughly midway between the two latter
            cities, which makes it a natural stop on a longer Rajasthan itinerary rather than a
            dedicated day trip from any single base.
          </ArticleP>

          <ArticleH2>Junagarh Fort, Bikaner</ArticleH2>
          <ArticleP>
            Unlike most of Rajasthan&apos;s forts, Junagarh wasn&apos;t built on a hilltop —
            it sits at ground level, protected instead by a wide moat and thick outer walls, a
            deliberate departure from the hilltop-fortress tradition seen at Amber, Mehrangarh
            and Jaisalmer. Built between 1589 and 1594 by Raja Rai Singh, it has never been
            conquered, and its interior palaces — including the ornate Anup Mahal and Chandra
            Mahal — are notable for their extensive use of gold leaf and mirror work, some of
            the most elaborate in Rajasthan. Bikaner sits in the state&apos;s northwest, further
            off the classic Jaipur–Jodhpur–Udaipur triangle, and is more commonly paired with the
            Pushkar Camel Fair season or a dedicated desert-focused itinerary.
          </ArticleP>

          <ArticleH2>How Much Time to Allow, and When to Go</ArticleH2>
          <ArticleP>
            Most of these monuments reward at least half a day each rather than a rushed hour —
            Amber Fort, Mehrangarh and Chittorgarh in particular have enough scale that a hurried
            visit means missing entire wings. If you&apos;re building a{" "}
            <Link href="/packages/rajasthan-tours" className="text-maroon underline">
              Rajasthan itinerary
            </Link>{" "}
            around these sites specifically, count on roughly 8 to 10 days to cover Jaipur,
            Jodhpur, Udaipur and Jaisalmer comfortably without back-to-back travel days, or closer
            to 12 to 14 days if you want to add Chittorgarh, Kumbhalgarh and Bikaner into the same
            trip. October through March is by far the most comfortable season to visit — daytime
            temperatures sit in a manageable range and the desert light is at its clearest —
            while April through June brings extreme heat that makes midday fort visits genuinely
            uncomfortable, and the July–September monsoon, while cooler, can bring humidity and
            occasional access disruptions at some sites.
          </ArticleP>

          <ArticleH2>Visiting Rajasthan&apos;s Monuments — Practical Notes</ArticleH2>
          <ArticleUL>
            <li>
              Most major forts open early (around 8–9am) and are significantly more comfortable
              to visit before midday heat sets in, especially April through June
            </li>
            <li>
              A private guide at each fort makes a real difference — the history behind these
              sites is dense, and a good guide turns a walk through empty rooms into something
              much more vivid, especially at less-visited sites like Chittorgarh where
              English-language signage is minimal
            </li>
            <li>Comfortable, closed shoes are worth it — fort floors and stairs are uneven stone, often worn smooth by centuries of foot traffic</li>
            <li>
              Entry fees are typically higher for foreign visitors than for Indian nationals;
              this is standard practice across India&apos;s monuments, not specific to any one
              site, and is usually clearly posted at the ticket counter
            </li>
            <li>
              Many forts charge a separate camera fee for photography — check before entering if
              you plan to bring a proper camera rather than just a phone
            </li>
            <li>
              Some inner palace areas (particularly at Amber and City Palace, Udaipur) require a
              separate, additional ticket for access — a guide will typically flag these in
              advance so you can decide before you&apos;re at the gate
            </li>
          </ArticleUL>
          <ArticleP>
            All of these sites are covered across our{" "}
            <Link href="/destinations/rajasthan" className="text-maroon underline">
              Rajasthan destination guide
            </Link>{" "}
            and our{" "}
            <Link href="/packages/rajasthan-tours" className="text-maroon underline">
              Rajasthan tour packages
            </Link>
            . Whether you want the essential Jaipur–Jodhpur–Udaipur circuit or a longer route
            that adds Jaisalmer, Chittorgarh, Kumbhalgarh or Bikaner, tell us how many days you
            have and we&apos;ll build a route around the monuments that matter most to you,
            with a private guide at every stop. If you&apos;d also like to add Rajasthan&apos;s
            pilgrimage sites — Pushkar and Ajmer among them — see our guide to{" "}
            <Link href="/travel-guide/pilgrimage-holiday-destinations-in-india" className="text-maroon underline">
              India&apos;s pilgrimage destinations
            </Link>
            .
          </ArticleP>
        </ArticleBody>

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your Rajasthan Journey Awaits."
          headlineItalic="When Will You Go?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a Rajasthan trip focused on the forts and palaces with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
