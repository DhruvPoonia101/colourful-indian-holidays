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
            happened at that spot for centuries, still happening tonight, performed by people
            for whom it is a genuine act of devotion rather than a show staged for visitors. For
            international travellers, that authenticity is the draw, but it also means visiting
            respectfully matters more here than almost anywhere else on a typical India
            itinerary — these are living religious sites, not heritage attractions repurposed
            for tourism. Below is a guide to India&apos;s most significant pilgrimage
            destinations, what a visit to each actually involves, and the practical etiquette
            worth knowing before you go, so you can experience these places as a respectful
            observer rather than an intruder on someone else&apos;s sacred moment.
          </ArticleP>

          <ArticleH2>Varanasi — The Ganges Ghats</ArticleH2>
          <ArticleP>
            Varanasi is the single most significant Hindu pilgrimage city in India, and among the
            oldest continuously inhabited cities in the world, built along the western bank of
            the Ganges. Hindus believe dying in Varanasi, or having one&apos;s ashes scattered in
            the Ganges here, brings moksha — liberation from the cycle of rebirth — which is why
            the city has drawn pilgrims for millennia and why its ghats (riverside steps) remain
            in continuous daily use for bathing, prayer, and cremation rites. The evening Ganga
            aarti — a fire ceremony performed by a row of priests at Dashashwamedh Ghat every
            night at sunset, with drums, chanting, and dozens of flames moving in unison against
            the darkening river — is the reason most visitors come, and it&apos;s genuinely one
            of the most striking things you can watch anywhere in India.
          </ArticleP>
          <ArticleP>
            Beyond the evening ceremony, a sunrise boat ride along the ghats shows a completely
            different side of the city — quieter, and full of people bathing, praying, and
            washing laundry as the sun comes up over the river, with the city&apos;s skyline of
            temples and old buildings silhouetted behind them. The Kashi Vishwanath Temple, one
            of the twelve Jyotirlinga shrines dedicated to Shiva and among the most significant
            Hindu temples anywhere, sits a short walk from the main ghats and was recently
            connected to the riverfront by the newly built Kashi Vishwanath Corridor, a wide
            pedestrian plaza that has made the walk between temple and ghats considerably more
            atmospheric than it once was. A short trip outside the city to Sarnath, where the
            Buddha delivered his first sermon after attaining enlightenment, adds a Buddhist
            counterpoint to Varanasi&apos;s intensely Hindu character, and is a common half-day
            add-on for travellers with an extra day to spare. See our full{" "}
            <Link href="/destinations/varanasi" className="text-maroon underline">
              Varanasi destination guide
            </Link>{" "}
            for more on the city beyond its pilgrimage sites.
          </ArticleP>

          <ArticleH2>Rishikesh &amp; Haridwar — Where the Ganges Begins</ArticleH2>
          <ArticleP>
            A few hours north of Delhi, Rishikesh and Haridwar sit where the Ganges leaves the
            Himalayan foothills and enters the plains — a geographically and spiritually
            significant transition point that has made this stretch of river sacred for as long
            as Hindu pilgrimage to the Ganges has existed. Haridwar&apos;s Har Ki Pauri ghat
            hosts its own nightly Ganga aarti, on a smaller and more intimate scale than
            Varanasi&apos;s, and is also the primary site of the Kumbh Mela when the festival
            rotates through the city once every twelve years, drawing tens of millions of
            pilgrims over its duration. Rishikesh, just upstream and framed by forested hills
            rather than Haridwar&apos;s flatter plains setting, has become India&apos;s
            best-known yoga and meditation centre, home to numerous ashrams — including the one
            made famous by the Beatles&apos; 1968 visit — and is worth building into a trip even
            if pilgrimage itself isn&apos;t your primary interest, since the town also offers
            river rafting, suspension-bridge crossings over the Ganges, and a genuinely relaxed
            pace after busier stops elsewhere on an itinerary.
          </ArticleP>

          <ArticleH2>Amritsar — The Golden Temple</ArticleH2>
          <ArticleP>
            The Golden Temple (Harmandir Sahib) is Sikhism&apos;s holiest site, and one of the
            most welcoming religious sites in India for visitors of any faith or background.
            Built in the late 16th century by the fourth Sikh Guru, Guru Ram Das, and later
            gilded with gold leaf in the early 19th century under Maharaja Ranjit Singh, the
            temple is open 24 hours, entry is free, and — in keeping with core Sikh principles of
            equality and hospitality — the temple runs the world&apos;s largest free community
            kitchen, the langar, which feeds upwards of 50,000 people a day regardless of
            religion, caste, or nationality. Visitors are genuinely invited to sit on the floor
            and eat alongside everyone else, an experience many international travellers describe
            as one of the most moving moments of their entire India trip.
          </ArticleP>
          <ArticleP>
            The temple itself, gold-plated and set within a large reflecting pool known as the
            Amrit Sarovar (Pool of Nectar), is at its most striking either early in the morning
            or after dark, when the crowds thin and the lighting changes — the gold facade lit
            up against the night sky is a genuinely different sight from its daytime appearance.
            A short distance away, the Wagah Border ceremony — a daily, highly choreographed
            flag-lowering display at the India–Pakistan border, performed with theatrical
            marching and crowd participation on both sides — is a popular late-afternoon add-on
            for travellers spending a full day in Amritsar, though it&apos;s a very different
            kind of experience from the temple itself, more spectacle than spirituality.
          </ArticleP>

          <ArticleH2>Pushkar — Rajasthan&apos;s Holy Lake</ArticleH2>
          <ArticleP>
            Pushkar is built around a sacred lake ringed by more than 50 ghats, and is home to
            one of the very few temples in India dedicated to Brahma, the creator god — a
            genuine rarity, since despite Brahma&apos;s prominence in Hindu cosmology, temples
            dedicated to him are exceptionally uncommon compared to those for Shiva or Vishnu.
            Hindu mythology holds that the lake formed where a lotus petal fell from
            Brahma&apos;s hand as he performed a yagna (fire ritual) here, which is why the town
            carries such deep religious significance despite its modest size. It&apos;s a
            smaller, more low-key pilgrimage stop than Varanasi or Amritsar, which makes it an
            easy add-on to a{" "}
            <Link href="/destinations/rajasthan" className="text-maroon underline">
              Rajasthan itinerary
            </Link>{" "}
            rather than a destination requiring a special
            trip of its own — most travellers visit as a natural stop between Jaipur and Jodhpur
            or Udaipur rather than a dedicated pilgrimage journey. If your timing lines up with
            the Pushkar Camel Fair, held each autumn, you&apos;ll see the town at its most
            colourful, with tens of thousands of camels, traders and pilgrims filling the
            surrounding desert for the event. Pushkar and Ajmer pair naturally with the forts and
            palaces covered in our{" "}
            <Link href="/travel-guide/monuments-in-rajasthan" className="text-maroon underline">
              Rajasthan monuments guide
            </Link>
            .
          </ArticleP>

          <ArticleH2>Ajmer — Ajmer Sharif Dargah</ArticleH2>
          <ArticleP>
            A short drive from Pushkar, Ajmer is home to the Dargah of Khwaja Moinuddin Chishti,
            one of the most important Sufi shrines in South Asia and a major pilgrimage site for
            Muslims across the region and beyond. The dargah marks the tomb of the 12th-century
            Sufi saint, and in Sufi tradition, a saint&apos;s death anniversary — known as an Urs
            — is marked with celebration rather than mourning, since it&apos;s understood as the
            saint&apos;s union with the divine. The annual Urs festival draws large crowds for
            six days of qawwali (devotional music) performances and prayer. Visitors of any
            background are welcome at the dargah year-round, not just during the Urs, and many
            travellers combine Ajmer with Pushkar as a single day trip from Jaipur, since the two
            towns sit only around 15 kilometres apart.
          </ArticleP>

          <ArticleH2>Bodh Gaya — Where the Buddha Attained Enlightenment</ArticleH2>
          <ArticleP>
            Bodh Gaya, in the state of Bihar, is the single most important pilgrimage site in
            Buddhism — it marks the exact spot where Siddhartha Gautama attained enlightenment
            beneath a Bodhi tree, becoming the Buddha. The Mahabodhi Temple, a UNESCO World
            Heritage Site dating in its current form to the 5th–6th century (with earlier
            structures on the same site dating back to Emperor Ashoka in the 3rd century BCE),
            stands beside a descendant of the original Bodhi tree, and draws Buddhist pilgrims
            from across Asia, particularly from Sri Lanka, Thailand, Myanmar, Japan, and Tibet.
            Unlike Varanasi or Amritsar, Bodh Gaya sits well off the standard North India
            circuit, which means it typically requires a dedicated add-on rather than a natural
            stop between other destinations — but for travellers with a specific interest in
            Buddhist heritage, it&apos;s considered essential rather than optional.
          </ArticleP>

          <ArticleH2>Tirupati — India&apos;s Most-Visited Pilgrimage Site</ArticleH2>
          <ArticleP>
            Tirupati, in Andhra Pradesh, is home to the Venkateswara Temple, dedicated to a form
            of Vishnu — and by sheer visitor numbers, it&apos;s the single most-visited religious
            site in India, drawing tens of millions of pilgrims annually, more than most of the
            country&apos;s more internationally famous sites combined. The temple sits atop the
            Tirumala hills, and the pilgrimage itself is part of the tradition — many devotees
            climb the hill on foot as an act of devotion rather than taking the road. It&apos;s
            considerably further south than the other destinations on this list and sits outside
            the typical North India and Rajasthan circuit most first-time international
            travellers build their trip around, but it&apos;s worth knowing about for anyone
            planning a longer South India itinerary or with a specific interest in seeing one of
            the world&apos;s busiest religious sites firsthand.
          </ArticleP>

          <ArticleH2>Visiting Respectfully — A Note for International Travellers</ArticleH2>
          <ArticleP>
            Each of these sites is, first and foremost, a place of active worship rather than a
            tourist attraction that happens to have religious significance, and the distinction
            matters in how you carry yourself while visiting. Speak quietly, avoid pointing
            cameras directly at people who are actively praying, and follow your guide&apos;s
            lead on when it&apos;s appropriate to take photographs versus when it&apos;s better
            to simply watch. Most people at these sites are genuinely welcoming to respectful
            visitors — the langar at the Golden Temple exists specifically because hospitality
            to strangers is a core value, not despite it — but that welcome depends on visitors
            understanding they&apos;re guests at someone else&apos;s sacred practice, not
            spectators at a performance staged for them.
          </ArticleP>

          <ArticleH2>Best Time to Visit These Sites</ArticleH2>
          <ArticleP>
            Timing varies by destination more than most first-time visitors expect. Varanasi and
            Rishikesh &amp; Haridwar are most comfortable October through March, when
            temperatures are milder and the Ganges is at a manageable level for boat rides and
            bathing ghats alike — summer months bring intense heat, and the monsoon can raise
            river levels significantly. Amritsar follows a similar pattern, with winter offering
            the most comfortable conditions for the queues and courtyard walking the Golden
            Temple visit involves. Pushkar is at its liveliest during the autumn Camel Fair,
            typically in October or November, while Ajmer&apos;s Urs festival timing shifts
            annually according to the Islamic lunar calendar, so it&apos;s worth checking exact
            dates if you specifically want to experience it. Bodh Gaya sees the largest crowds
            around the Dalai Lama&apos;s winter teachings, usually in December or January, and
            is considerably quieter outside that window. Tirupati draws heavy pilgrim traffic
            year-round regardless of season, so visitor volume there is less a matter of timing
            and more something to plan around directly, with early-morning visits generally the
            least crowded option.
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
            <li>Shoes come off before entering most temples and the Golden Temple complex, and are usually left at a designated counter rather than carried in</li>
            <li>
              Photography is restricted or banned inside many inner sanctums — always check
              before raising a camera, and never photograph cremation rites at Varanasi&apos;s
              ghats without explicit permission
            </li>
            <li>
              Evening aartis draw genuine crowds; arriving 30–45 minutes early secures a good
              spot, particularly at Varanasi and Haridwar during peak season
            </li>
            <li>
              A private guide who can explain the ritual you&apos;re watching makes a real
              difference to how much of it actually makes sense in the moment, rather than
              looking on without context
            </li>
            <li>
              At the Golden Temple, head coverings are required for everyone regardless of
              gender — scarves are provided free at the entrance if you don&apos;t have your own
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
            , while Bodh Gaya and Tirupati are better suited to travellers with a specific
            pilgrimage focus or a longer trip that extends beyond the standard North India
            circuit. If you&apos;d like these built into your own trip — whether that&apos;s one
            or two stops added to a wider itinerary, or a journey built specifically around
            India&apos;s pilgrimage traditions — our team can put together a route that fits
            your dates and your interests.
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
