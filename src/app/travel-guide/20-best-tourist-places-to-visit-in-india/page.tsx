import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleBody, ArticleH2, ArticleP } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "20 Best Tourist Places to Visit in India | Travel Guide";
const description =
  "A first-timer's shortlist of India's unmissable destinations, from the Taj Mahal to the backwaters of Kerala — where to go, and why each place earns its spot.";
const pagePath = "/travel-guide/20-best-tourist-places-to-visit-in-india";
const heroImage = "/images/destinations/agra-taj-mahal.webp";
const datePublished = "2026-09-02";

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
  { name: "20 Best Tourist Places to Visit in India", path: pagePath },
];

export default function TwentyBestPlacesGuidePage() {
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
          imageAlt="Taj Mahal at sunrise, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="20 Best Tourist Places to Visit in India"
          subheadline="A first-timer's shortlist of India's unmissable destinations — where to go, and why each place earns its spot on the list."
        />

        <ArticleBody>
          <ArticleP>
            India is large enough, and varied enough, that no single trip covers all of it — and
            that&apos;s precisely what makes a first visit so difficult to plan and so rewarding
            once you commit to a route. A desert fort in Rajasthan, a Himalayan lake in Kashmir,
            and a backwater houseboat in Kerala can feel like three different countries, not
            three stops on the same itinerary, and in a sense they are: India&apos;s regions
            differ in language, cuisine, architecture and climate more than most European
            countries differ from their neighbours. A Punjabi thali in Amritsar bears little
            resemblance to a Kerala fish curry; Rajasthani desert forts share almost nothing
            architecturally with Kerala&apos;s Dutch and Portuguese-influenced coastal
            churches; and travelling from the snowbound passes of Ladakh to the tropical
            humidity of the Andaman Islands covers a wider climate range than most people
            experience crossing an entire continent.
          </ArticleP>
          <ArticleP>
            This list pulls together 20 places that, between them, capture that range — not
            because every trip needs all 20, but because each one represents a genuinely
            distinct reason to visit, and picking a handful from across this list tends to
            produce a far more memorable itinerary than clustering everything in one region.
            We&apos;ve grouped them roughly by geography, since that&apos;s how you&apos;ll
            actually end up routing a trip, not by any ranking of importance — a fort in
            Jaisalmer and a backwater in Kerala aren&apos;t really comparable experiences, so
            ranking one above the other would say more about personal taste than about either
            place&apos;s genuine merit. What follows is less a countdown and more a working map
            of where India rewards a visit most, organised the way an actual itinerary would
            move through the country.
          </ArticleP>

          <ArticleH2>North India&apos;s Essential Stops</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/agra" className="text-maroon underline">
                1. The Taj Mahal, Agra
              </Link>
            </span>{" "}
            — Built by Emperor Shah Jahan for his wife Mumtaz Mahal and completed around 1653
            after roughly two decades of construction, the Taj Mahal is that rare landmark that
            looks even better in person than in every photo you&apos;ve already seen of it —
            perfectly symmetrical white marble that shifts colour with the light, from soft pink
            at sunrise to brilliant white at midday to warm gold at sunset. Agra Fort and the
            abandoned Mughal capital of Fatehpur Sikri sit nearby, both UNESCO-recognised in
            their own right, and reward a full day rather than a rushed photo stop before
            continuing on to Rajasthan.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/delhi" className="text-maroon underline">
                2. Delhi
              </Link>
            </span>{" "}
            — India&apos;s capital is really several cities layered on top of one another:
            Mughal-era Old Delhi around the Red Fort and Jama Masjid, colonial New Delhi&apos;s
            wide avenues and government buildings, and a fast-moving modern capital surrounding
            both. Chandni Chowk&apos;s dense lanes of spice traders and street food stalls sit a
            short drive from Humayun&apos;s Tomb, the architectural forerunner to the Taj Mahal,
            and the Qutub Minar, the tallest brick minaret in the world. Most international
            itineraries begin or end here, and it rewards two or three days on its own rather
            than a same-day connection.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/amritsar" className="text-maroon underline">
                3. The Golden Temple, Amritsar
              </Link>
            </span>{" "}
            — Harmandir Sahib, Sikhism&apos;s holiest shrine, sits at the centre of a sacred pool
            called the Amrit Sarovar and stays open around the clock, its free community kitchen
            serving tens of thousands of meals daily to anyone who comes, regardless of faith or
            background. The atmosphere itself — continuous prayer, pilgrims circling the water
            through the night — is what most visitors remember, more than any single view. A
            short walk away, Jallianwala Bagh and the daily Wagah Border ceremony add real
            historical weight and genuine spectacle to an Amritsar stop.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/leh-ladakh" className="text-maroon underline">
                4. Leh &amp; Ladakh
              </Link>
            </span>{" "}
            — A high-altitude desert in India&apos;s far north, closer in landscape and Buddhist
            culture to the Tibetan plateau than to the rest of the country. Pangong Lake&apos;s
            shifting turquoise water, Nubra Valley&apos;s cold-desert sand dunes and
            double-humped Bactrian camels, and Khardung La — one of the highest motorable passes
            in the world — are genuinely unlike anywhere else on this list. Altitude means the
            region needs proper acclimatisation time built into any itinerary, but travellers who
            give it that time consistently name Ladakh the most memorable leg of their entire
            trip.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/srinagar-kashmir" className="text-maroon underline">
                5. Srinagar &amp; Kashmir
              </Link>
            </span>{" "}
            — Houseboats on Dal Lake, Mughal-era terraced gardens, and alpine meadows at Gulmarg
            give Kashmir a character often described as India&apos;s most beautiful region —
            green and mountainous where much of the rest of the country is not. A night aboard
            one of Srinagar&apos;s ornately carved houseboats is one of the more memorable
            overnight experiences available anywhere in India, and Gulmarg&apos;s pine forests
            function as a ski destination in winter and a green retreat the rest of the year.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/rishikesh-haridwar" className="text-maroon underline">
                6. Rishikesh &amp; Haridwar
              </Link>
            </span>{" "}
            — The birthplace of modern yoga tourism, with white-water rafting on the Ganges
            alongside riverside ashrams — including the one made famous by the Beatles&apos;
            1968 visit — and a nightly Ganga Aarti fire ceremony at Haridwar&apos;s Har Ki Pauri
            ghat, the point where the Ganges is believed to have first touched earth. Both towns
            are officially vegetarian and alcohol-free, reflecting their status as centres of
            pilgrimage.
          </ArticleP>

          <ArticleH2>Rajasthan&apos;s Desert Cities</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/rajasthan/jaipur" className="text-maroon underline">
                7. Jaipur
              </Link>
            </span>{" "}
            — The Pink City opens most Rajasthan itineraries, its Amber Fort and City Palace
            among the most photographed sights in the state. The fort&apos;s elephant approach
            and mirrored Sheesh Mahal, alongside the astronomical instruments of Jantar Mantar
            and the ornate façade of Hawa Mahal, give Jaipur enough depth for two full days
            before continuing on to the rest of Rajasthan.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/rajasthan/udaipur" className="text-maroon underline">
                8. Udaipur
              </Link>
            </span>{" "}
            — Built around Lake Pichola with a palace that appears to float on it, Udaipur is
            Rajasthan&apos;s softest, most romantic city — a deliberate change of register from
            the desert forts elsewhere in the state. Boat rides at sunset, the City Palace&apos;s
            sprawling courtyards, and a genuinely different, lake-centred rhythm make it a
            favourite stop for honeymooners and first-time visitors alike.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/rajasthan/jaisalmer" className="text-maroon underline">
                9. Jaisalmer
              </Link>
            </span>{" "}
            — Deep in the Thar Desert, Jaisalmer Fort is a &quot;living fort&quot; — people still
            actually reside inside its honey-coloured sandstone walls, a genuine rarity among the
            world&apos;s major forts, with homes, shops and temples woven through its narrow
            lanes. Camel safaris into the surrounding dunes at sunset are a natural extension of
            a Jaisalmer stop.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/rajasthan/pushkar" className="text-maroon underline">
                10. Pushkar
              </Link>
            </span>{" "}
            — A small, low-key holy town built around a sacred lake, home to one of India&apos;s
            few temples dedicated to Brahma the Creator and, each autumn, one of the world&apos;s
            largest camel fairs, drawing tens of thousands of traders and pilgrims. Outside fair
            season, it&apos;s simply a relaxed change of pace from Rajasthan&apos;s busier
            cities.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/rajasthan/ranthambore" className="text-maroon underline">
                11. Ranthambore National Park
              </Link>
            </span>{" "}
            — One of India&apos;s most reliable places to see a wild Bengal tiger, thanks to its
            dry, open deciduous terrain, with the added novelty of safaris passing through the
            ruins of a 10th-century fort inside the park itself. Its proximity to Jaipur — just a
            few hours by road — makes it an easy addition to any Rajasthan circuit rather than a
            separate trip.
          </ArticleP>

          <ArticleH2>South India&apos;s Different India</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/kerala" className="text-maroon underline">
                12. Kerala Backwaters
              </Link>
            </span>{" "}
            — A night aboard a traditional kettuvallam houseboat, drifting through Alleppey&apos;s
            palm-lined canals as village life continues along the banks, is one of the most
            distinctive overnight experiences available anywhere in India — a world away from
            Rajasthan&apos;s deserts or North India&apos;s plains. Munnar&apos;s misty tea
            estates and Fort Kochi&apos;s Chinese fishing nets and layered colonial history round
            out a Kerala circuit with genuine variety.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/mahabalipuram" className="text-maroon underline">
                13. Mahabalipuram
              </Link>
            </span>{" "}
            — A UNESCO World Heritage site of 7th-century temples carved directly from granite
            outcrops on the Bay of Bengal, including the Shore Temple and the Five Rathas, an
            easy day trip from Chennai. Pallava dynasty sculptors carved many of these monuments
            straight into existing rock rather than building from quarried stone, a technique
            genuinely rare to see up close.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/pondicherry" className="text-maroon underline">
                14. Pondicherry
              </Link>
            </span>{" "}
            — A former French colony until 1954, considerably later than most of British India,
            with mustard-yellow colonial villas, a boulder-lined seafront Promenade, and a
            noticeably slower, café-oriented pace that stands apart from the rest of Tamil Nadu.
            Auroville, an experimental international township nearby, adds a genuinely unusual
            philosophical dimension to a visit.
          </ArticleP>

          <ArticleH2>Varanasi and the Eastern Hills</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/varanasi" className="text-maroon underline">
                15. Varanasi
              </Link>
            </span>{" "}
            — Among the oldest continuously inhabited cities in the world, and the one place on
            this list where the destination isn&apos;t a monument but a living ritual — the
            evening Ganga Aarti at Dashashwamedh Ghat happens tonight exactly as it has for
            generations, regardless of who&apos;s watching. A sunrise boat ride past the ghats
            shows a completely different, quieter mood from the evening ceremony&apos;s fire and
            drums, and both are worth building real time around.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/darjeeling" className="text-maroon underline">
                16. Darjeeling
              </Link>
            </span>{" "}
            — Tea gardens climbing cloud-wrapped ridgelines, a UNESCO-listed narrow-gauge
            &quot;toy train&quot; completed in 1881, and sunrise views of Kanchenjunga, the
            world&apos;s third-highest peak, from Tiger Hill. Darjeeling tea carries a
            Geographical Indication status similar to Champagne — genuine Darjeeling tea can only
            legally come from this specific region.
          </ArticleP>

          <ArticleH2>The West Coast</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/goa" className="text-maroon underline">
                17. Goa
              </Link>
            </span>{" "}
            — 450 years as a Portuguese colony, until 1961, gives Goa a character unlike
            anywhere else in India, from Old Goa&apos;s UNESCO-listed churches and a distinctly
            Goan cuisine blending Portuguese and Konkani influences, to a genuinely relaxed
            beach-town pace most travellers use to close out a longer trip. North Goa&apos;s
            beach shacks and nightlife and South Goa&apos;s quieter upscale resorts offer two
            different holidays within one state.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/mumbai" className="text-maroon underline">
                18. Mumbai
              </Link>
            </span>{" "}
            — India&apos;s financial and entertainment capital, with Victorian Gothic and Art
            Deco architecture standing side by side along a coastline anchored by Marine
            Drive&apos;s sweeping curve, nicknamed the &quot;Queen&apos;s Necklace.&quot;
            Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage railway station, and
            the Gateway of India both remain genuinely functional landmarks rather than purely
            historical ones.
          </ArticleP>

          <ArticleH2>Central India and the Islands</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/khajuraho" className="text-maroon underline">
                19. Khajuraho
              </Link>
            </span>{" "}
            — A UNESCO World Heritage temple complex built by the Chandela dynasty between
            roughly 950 and 1050 CE, its surfaces covered in some of the most intricately carved
            stone sculpture anywhere in India — thousands of figures depicting deities, celestial
            beings and scenes from daily life. It sees considerably fewer visitors than the Taj
            Mahal or Delhi&apos;s major monuments, making for a more contemplative visit.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              <Link href="/destinations/andaman-islands" className="text-maroon underline">
                20. Andaman Islands
              </Link>
            </span>{" "}
            — India&apos;s tropical frontier, a genuine outlier on this list — white sand,
            coral reefs and Havelock Island&apos;s beaches feel closer to Southeast Asia than to
            mainland India. It&apos;s the one entry here that works best as a dedicated
            beach-and-diving trip rather than an add-on to a heritage-focused circuit, given the
            flight time from most mainland gateways.
          </ArticleP>

          <ArticleH2>How to Actually See a Selection of These in One Trip</ArticleH2>
          <ArticleP>
            No first-time visitor sees all 20 of these places in a single trip, and trying to
            usually produces a worse experience than picking a smaller, well-connected cluster
            and giving each stop proper time. The classic starting combination is the Golden
            Triangle — Delhi, Agra and Jaipur — which alone covers three of this list&apos;s
            strongest entries within a manageable week, and extends naturally into the rest of
            Rajasthan (Udaipur, Jodhpur, Jaisalmer, Pushkar, Ranthambore) for travellers with ten
            days or more. Varanasi adds a spiritual dimension a short flight from Delhi or Agra,
            while Amritsar extends a North India itinerary further northwest. Because Rajasthan
            runs almost entirely on private car and driver hire rather than fixed group
            schedules, this entire circuit can move at whatever pace actually suits your group,
            lingering an extra half-day wherever something genuinely catches your interest.
          </ArticleP>
          <ArticleP>
            Kerala, Goa, Mahabalipuram and Pondicherry work better as a separate South India
            coastal circuit than as an add-on to a Rajasthan-heavy trip, given the distances
            involved — most travellers either dedicate a full trip to South India or fold it in
            as a second visit rather than trying to cover the whole country at once. The
            Himalayan destinations — Leh &amp; Ladakh, Srinagar &amp; Kashmir, Darjeeling — each
            need their own dedicated time and, in Ladakh&apos;s case, genuine altitude
            acclimatisation, so they&apos;re usually best treated as their own trip or a
            substantial extension rather than squeezed between other stops. Mumbai and Goa pair
            naturally as a closing leg for almost any itinerary, given Mumbai&apos;s strong
            international flight connections, while Khajuraho and Central India&apos;s wildlife
            parks connect well to a North India trip via Delhi or Varanasi if you have the extra
            days.
          </ArticleP>

          <ArticleH2>Matching These Places to What You Actually Want From a Trip</ArticleH2>
          <ArticleP>
            If heritage and architecture are the priority, the Golden Triangle plus Rajasthan
            covers more genuinely significant historical sites per day of travel than almost
            anywhere else in the world — forts, palaces and temples spanning centuries of Rajput,
            Mughal and colonial history, often within a short drive of one another. If wildlife
            is the draw, Ranthambore pairs naturally with Rajasthan given the short distance from
            Jaipur, while Central India&apos;s tiger reserves — Bandhavgarh, Kanha and Pench —
            form their own dedicated circuit for travellers specifically prioritising safari time
            over monuments.
          </ArticleP>
          <ArticleP>
            Travellers drawn to mountains and genuinely different landscapes should weight their
            itinerary toward Leh &amp; Ladakh, Kashmir or Darjeeling rather than trying to add a
            token mountain stop onto a heritage-focused trip — these destinations reward the kind
            of unhurried, dedicated time that&apos;s hard to fit alongside a packed Rajasthan
            circuit. And if beaches, relaxation and a slower pace matter most, Goa, Kerala,
            Pondicherry and the Andaman Islands between them offer genuinely different coastal
            experiences — lively nightlife, backwater stillness, French colonial charm, and
            tropical diving respectively — worth choosing between rather than trying to combine
            all four on one trip.
          </ArticleP>

          <ArticleH2>Frequently Asked Questions</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              How many of these places should a first-time visitor plan to see?
            </span>{" "}
            4 to 6 is realistic for a two-week trip without feeling rushed — trying to cover more
            usually means less time at each stop and more days lost to travel between them. A
            10-day trip comfortably covers the Golden Triangle plus one or two Rajasthan cities;
            two weeks or more allows a fuller Rajasthan circuit or a proper South India coastal
            trip.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              What&apos;s the best starting point for a first India trip?
            </span>{" "}
            The Golden Triangle (Delhi, Agra, Jaipur) remains the most common and best-supported
            starting circuit, with well-established infrastructure, manageable travel times
            between each stop, and enough variety — Mughal monuments, colonial architecture, and
            Rajput forts — to give a genuine first impression of India&apos;s range.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              Is it better to focus on one region or try to see a bit of everything?
            </span>{" "}
            One region done properly beats a scattered itinerary trying to touch North, South
            and the Himalayas in a single trip — the distances and different climates make a
            single well-connected circuit far more comfortable and memorable than a rushed tour
            spanning the whole country.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              Which of these places pairs best with wildlife safaris?
            </span>{" "}
            Ranthambore fits naturally into a Rajasthan circuit given its proximity to Jaipur,
            while Kerala and Goa itineraries can extend into Central India&apos;s tiger reserves
            for travellers specifically prioritising wildlife over a purely heritage-focused
            trip.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              What time of year suits most of these destinations?
            </span>{" "}
            October through March offers the most comfortable weather across the majority of
            this list — Rajasthan, the Golden Triangle, Varanasi and South India all see their
            most manageable temperatures in these months. Summer brings intense heat to the
            plains and deserts, while the Himalayan destinations have their own separate,
            narrower travel windows tied to snow and road access.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              Should we book a private guide and driver, or travel independently?
            </span>{" "}
            Most of these destinations — particularly Rajasthan&apos;s forts, Varanasi&apos;s
            ghats, and Ladakh&apos;s high-altitude routes — are considerably richer with a
            private, English-speaking guide and driver rather than navigating independently.
            It&apos;s also the standard way international visitors travel most of this list,
            rather than an optional upgrade.
          </ArticleP>

          <ArticleP>
            <span className="font-semibold text-ink">
              Are any of these 20 places suitable for a short 5 to 7 day trip?
            </span>{" "}
            Yes — the Golden Triangle alone (Delhi, Agra, Jaipur) fits comfortably into 5 to 7
            days, or a Rajasthan-only trip covering Jaipur, Pushkar and Udaipur works nearly as
            well in that window. Anything involving the Himalayan destinations or a wider
            multi-region circuit generally needs closer to two weeks to feel unrushed.
          </ArticleP>

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            Weather also shapes how these 20 places fit together more than most first-time
            visitors expect. Rajasthan, the Golden Triangle and Varanasi are all considerably
            more comfortable October through March, while Kerala&apos;s backwaters can be
            visited nearly year-round, with the June-to-September monsoon bringing the
            landscape&apos;s most vividly green season rather than ruling out a visit entirely.
            Ladakh&apos;s travel window is narrower still — realistically June through
            September, since both overland routes into the region close outside those months —
            which is worth factoring in early if a Himalayan leg is part of your plan, since it
            may constrain when the rest of your trip can happen around it.
          </ArticleP>
          <ArticleP>
            The real value of a list like this isn&apos;t seeing every entry — it&apos;s using it
            to recognise how different India&apos;s regions genuinely are, and building an
            itinerary around a handful that complement each other rather than a scattershot tour
            of famous names. If you&apos;re not sure which of these fit together well for your
            available time, tell us how many days you have and what draws you most — heritage,
            wildlife, mountains, or the coast — and we&apos;ll put together a route built around
            the right combination rather than trying to fit all 20 into one trip.
          </ArticleP>
        </ArticleBody>

        <JourneyCTA
          backgroundImage={heroImage}
          eyebrow="Start Your Journey"
          headline="Your India Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Tell us how many days you have and what draws you most — we'll reply with a tailored itinerary and quote, usually within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like some advice on planning my first trip to India with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
