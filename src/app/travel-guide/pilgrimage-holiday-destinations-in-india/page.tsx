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
            for tourism. India&apos;s religious landscape is genuinely diverse, spanning Hindu,
            Sikh, Buddhist and Muslim traditions that have coexisted and, in many cases,
            physically overlapped for centuries — Ajmer&apos;s Sufi shrine and Pushkar&apos;s
            Hindu temples sit fifteen kilometres apart, and the Golden Temple&apos;s hospitality
            extends to visitors of every background without exception. Below is a guide to
            India&apos;s most significant pilgrimage destinations, what a visit to each actually
            involves, and the practical etiquette worth knowing before you go, so you can
            experience these places as a respectful observer rather than an intruder on someone
            else&apos;s sacred moment.
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
            add-on for travellers with an extra day to spare. International visitors researching
            India&apos;s spiritual heritage often arrive in Varanasi expecting only the famous
            ghats, and leave surprised by how much the city itself — its narrow lanes, its
            centuries-old silk-weaving tradition, and its role as a centre of Sanskrit learning —
            adds beyond the pilgrimage sites alone. See our full{" "}
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
            pace after busier stops elsewhere on an itinerary. International visitors specifically
            drawn to India&apos;s wellness and yoga traditions often extend their stay here beyond
            a simple day trip, since several ashrams and yoga centres in Rishikesh offer
            short courses and retreats that welcome foreign visitors without requiring any prior
            experience.
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

          <ArticleH2>Shirdi — The Sai Baba Temple</ArticleH2>
          <ArticleP>
            Shirdi, a small town in Maharashtra, draws millions of pilgrims each year to the
            Samadhi Mandir, the shrine built over the resting place of Sai Baba of Shirdi, a
            19th-century saint venerated by Hindus and Muslims alike for teaching that all paths
            lead to the same divine truth. Unlike many of India&apos;s older pilgrimage traditions,
            devotion to Sai Baba is a comparatively recent phenomenon that has grown enormously
            over the past century, and Shirdi today functions almost entirely around pilgrim
            infrastructure — accommodation, prasad (blessed food) counters, and a well-organised
            queue system for darshan (viewing the shrine) that can still involve a significant
            wait during peak periods and festivals. It&apos;s a further-flung addition for most
            international itineraries, sitting a few hours from Mumbai or Pune, but travellers
            building a Maharashtra-focused trip, or with a specific personal connection to Sai
            Baba&apos;s teachings, often make the detour deliberately rather than as an
            afterthought.
          </ArticleP>

          <ArticleH2>Vaishno Devi — The Mountain Shrine in Jammu</ArticleH2>
          <ArticleP>
            Vaishno Devi, in the Trikuta Hills near Jammu, is one of the most-visited Hindu
            pilgrimage sites in India, drawing several million pilgrims a year to a cave shrine
            dedicated to the goddess Vaishno Devi, an incarnation of the divine feminine. Unlike
            most sites on this list, reaching the shrine is itself part of the pilgrimage — a
            roughly 12-kilometre trek uphill from the base at Katra, undertaken on foot, by pony,
            palanquin, or helicopter for those short on time or mobility. The physical effort
            involved is, for many devotees, part of the spiritual significance of the visit
            rather than an inconvenience to be minimised. For international travellers, Vaishno
            Devi is a genuinely different kind of pilgrimage experience from the ghats of Varanasi
            or the Golden Temple — more physically demanding, set in cooler mountain terrain
            rather than a riverside or desert town, and best suited to travellers who specifically
            want that combination of trek and shrine rather than those looking for an easy add-on
            to an existing circuit.
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
            is considerably quieter outside that window. Tirupati and Shirdi draw heavy pilgrim
            traffic year-round regardless of season, so visitor volume there is less a matter of
            timing and more something to plan around directly, with early-morning visits generally
            the least crowded option. Vaishno Devi is best avoided during the height of summer
            heat and the monsoon months, when the uphill trek becomes considerably more
            demanding — the cooler months from September through March suit the physical trek
            far better.
          </ArticleP>

          <ArticleH2>How Pilgrimage Sites Fit Into a Wider India Itinerary</ArticleH2>
          <ArticleP>
            Very few international travellers build an entire trip solely around pilgrimage
            destinations — more commonly, one or two of these sites become a meaningful thread
            woven through a wider India itinerary that also covers forts, wildlife, and cities.
            Varanasi pairs naturally with a Golden Triangle extension, since it&apos;s a
            comparatively short flight from Delhi or Agra and adds a spiritual and cultural
            dimension that the Taj Mahal and Jaipur&apos;s palaces, as remarkable as they are,
            don&apos;t on their own provide. Pushkar and Ajmer, as noted, slot directly into a
            Rajasthan circuit as a natural stop between Jaipur and the state&apos;s western
            cities, adding very little extra travel time for a genuinely different kind of
            experience from forts and palaces. Rishikesh and Haridwar work well as a northern
            extension for travellers who want to pair Delhi and the Golden Triangle with the
            Himalayan foothills, particularly if yoga, meditation, or river rafting also interest
            you beyond the pilgrimage sites themselves. Amritsar, being close to the
            India–Pakistan border in Punjab, is most often combined with a northern circuit that
            also includes Delhi and sometimes Dharamshala, rather than tacked onto a Rajasthan-only
            trip. Bodh Gaya, Tirupati, Shirdi and Vaishno Devi each sit further from the standard
            first-timer circuit and are better suited to travellers on a longer trip, a repeat
            visit to India, or those with a specific personal or spiritual reason to prioritise
            that particular site over convenience.
          </ArticleP>
          <ArticleP>
            When we build an itinerary that includes pilgrimage destinations, the sequencing
            matters as much as the site list itself — visiting Varanasi&apos;s ghats at dawn
            after arriving late the previous night rarely does the experience justice, so we
            build in enough time around each stop for it to land properly rather than squeezing
            it between other commitments. The same goes for physically demanding sites like
            Vaishno Devi, where arriving with a day already behind you changes how much you get
            out of the trek itself.
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
            <li>
              Alcohol, meat, tobacco and non-vegetarian food are prohibited within many temple
              precincts, including the Golden Temple complex and the town of Pushkar itself —
              check local norms before you arrive rather than assuming standard rules apply
            </li>
            <li>
              At Vaishno Devi, pony, palanquin and helicopter options exist for travellers unable
              to manage the full trek on foot — worth arranging in advance during peak pilgrimage
              season, when demand for these options rises sharply
            </li>
            <li>
              Security screening is standard at most major pilgrimage sites, including the Golden
              Temple and Vaishno Devi — build a little extra time into your schedule around
              entry, particularly during festivals or peak season
            </li>
          </ArticleUL>
          <ArticleP>
            Getting to each of these sites varies considerably in ease. Varanasi, Amritsar and
            Rishikesh &amp; Haridwar all have their own airports or sit within a comfortable
            drive of one, making them straightforward to fold into a wider itinerary. Pushkar and
            Ajmer are easily reached by road from Jaipur, typically as a same-day or overnight
            addition to a Rajasthan circuit. Bodh Gaya, Tirupati, Shirdi and Vaishno Devi require
            more deliberate planning — additional flights, longer road transfers, or in Vaishno
            Devi&apos;s case, the trek itself — which is exactly why we recommend deciding early
            in the planning process whether one of these sites is a priority for your trip, so
            the rest of the itinerary can be built around it rather than squeezed in as an
            afterthought.
          </ArticleP>

          <ArticleP>
            One final note worth keeping in mind across every site on this list: India&apos;s
            pilgrimage destinations draw pilgrims first and tourists second, which is precisely
            the opposite of how most famous monuments and attractions function. That ordering is
            what makes these places feel genuinely alive rather than preserved for visitors, and
            it&apos;s also why patience, quiet observation, and a willingness to let a local guide
            set the pace tend to produce a far more rewarding visit than trying to see everything
            on your own schedule.
          </ArticleP>

          <ArticleH2>Frequently Asked Questions</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              Do non-Hindu or non-religious travellers visit these sites too?
            </span>{" "}
            Yes, regularly. Most of these sites — the Golden Temple especially — actively welcome
            visitors of every background, and the ceremonies themselves are striking to witness
            regardless of your own beliefs. Respectful curiosity is generally met with genuine
            warmth.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              Is it appropriate to photograph ceremonies like the Ganga aarti?
            </span>{" "}
            Generally yes for public ceremonies like the evening aarti at Varanasi or Haridwar,
            though always be mindful of people actively praying nearby. Cremation rites at
            Varanasi&apos;s ghats are a firm exception — never photograph these without explicit
            permission.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              How many pilgrimage sites should we realistically add to a two-week India trip?
            </span>{" "}
            One or two integrated naturally into your route — Pushkar and Ajmer alongside
            Rajasthan, or Varanasi alongside a Golden Triangle extension — tends to work far
            better than trying to cover several sites spread across the country, which usually
            means sacrificing depth elsewhere in the itinerary.
          </ArticleP>
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
