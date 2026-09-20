import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * IMAGE NOTE: no genuine photo of Shekhawati's painted havelis exists in
 * the asset library. "jaisalmer-patwon-ki-haveli.webp" was considered but
 * rejected — it shows Jaisalmer's carved-stone haveli architecture, a
 * genuinely different art form from Shekhawati's painted frescoes, and
 * using it here would misrepresent exactly what makes the region
 * distinctive. This page uses a general Rajasthan heritage image instead,
 * with honest, non-Shekhawati-specific alt text. Replace with a real
 * Mandawa, Nawalgarh or Fatehpur Shekhawati fresco photo when available.
 */

const title = "Places to Visit in Shekhawati | Travel Guide";
const description =
  "Rajasthan's open-air fresco gallery — the painted haveli towns of Mandawa, Nawalgarh, Fatehpur and Dundlod, why the murals exist at all, and how to actually plan a visit.";
const pagePath = "/travel-guide/places-to-visit-in-shekhawati";
const heroImage = "/images/destinations/amber-fort-jaipur.webp";
const datePublished = "2026-09-21";
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
  { name: "Places to Visit in Shekhawati", path: pagePath },
];

export default function ShekhawatiGuidePage() {
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

      <main>
        <PageHero
          image={heroImage}
          imageAlt="Ornate Rajasthani heritage architecture"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Places to Visit in Shekhawati"
          subheadline="Rajasthan's open-air fresco gallery — painted merchant mansions covering entire towns, and a region most first-time visitors never realise exists."
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
            Ask most first-time visitors to name a region of Rajasthan and you&apos;ll hear
            Jaipur, Udaipur, Jodhpur, Jaisalmer — the cities that anchor almost every standard
            itinerary. Shekhawati rarely comes up, and that&apos;s a genuine shame, because it
            holds one of the most visually extraordinary things in the entire state: an entire
            region of small towns where the outer walls of merchant mansions are covered, floor
            to roofline, in elaborate painted murals. Locals and a small circle of art historians
            sometimes call it the world&apos;s largest open-air art gallery, and while that
            claim is impossible to verify precisely, the density and scale of painted surface
            across Shekhawati&apos;s towns genuinely has no equivalent anywhere else in India,
            or arguably anywhere else in the world.
          </ArticleP>
          <ArticleP>
            This guide covers what Shekhawati actually is, why hundreds of elaborately painted
            mansions ended up in a cluster of otherwise unremarkable small towns, which specific
            towns are worth visiting and what distinguishes one from another, and the practical
            logistics of actually building a Shekhawati stop into a wider Rajasthan itinerary.
            If you&apos;ve already done Jaipur and Jodhpur on a previous trip, or you&apos;re
            simply looking for something genuinely different from the standard Golden Triangle
            and Rajasthan circuit, Shekhawati is very likely the most interesting region of the
            state you haven&apos;t heard of yet.
          </ArticleP>

          <ArticleH2>Why Shekhawati Has Hundreds of Painted Mansions</ArticleH2>
          <ArticleP>
            Shekhawati&apos;s wealth, and by extension its art, has an unusual origin story. The
            region sat along major camel caravan trade routes between Delhi, Gujarat&apos;s
            ports and Central Asia from roughly the 14th century onward, and the local Marwari
            merchant community grew genuinely wealthy from that trade over several centuries.
            When the British built new railway lines and port infrastructure through Bombay and
            Calcutta in the 19th century, those old caravan routes lost much of their commercial
            relevance almost overnight — but rather than staying in Shekhawati to watch the
            local economy shrink, many Marwari merchant families followed the new trade routes
            to India&apos;s growing colonial cities, building substantial fortunes in Bombay,
            Calcutta and elsewhere.
          </ArticleP>
          <ArticleP>
            What makes Shekhawati unusual is what those merchants did next: rather than simply
            settling permanently in their new, wealthier cities, they sent money back to their
            home towns to build increasingly elaborate havelis — grand family mansions — as a
            visible display of success and a mark of continued connection to their roots, even
            while the family itself often lived elsewhere for most of the year. Between roughly
            the 1830s and the 1930s, this pattern repeated itself across dozens of small
            Shekhawati towns, with families competing, in effect, to build the most impressive
            and elaborately decorated haveli, hiring teams of local and travelling artists to
            cover both interior rooms and entire exterior facades in painted murals. The result
            is a hundred-year snapshot of a wealthy merchant class expressing status through art
            at a scale and density found nowhere else in India.
          </ArticleP>

          <ArticleH2>What the Frescoes Actually Depict</ArticleH2>
          <ArticleP>
            The murals themselves are genuinely eclectic, which is part of what makes walking
            through Shekhawati&apos;s towns so engaging. Traditional Hindu religious scenes —
            Krishna and Radha, various avatars of Vishnu, processions of gods and goddesses —
            sit alongside scenes of everyday 19th-century life: hunting parties, wedding
            processions, court scenes, and merchants conducting business. As the British colonial
            presence grew more visible across India, local artists began incorporating what they
            saw and heard about into their work, sometimes with a genuinely charming naivety —
            early automobiles, steam trains, telephones, gramophones and even aeroplanes appear
            painted onto haveli walls by artists who in many cases had never actually seen these
            things directly, working instead from secondhand descriptions or the occasional
            imported photograph, which sometimes results in wonderfully inventive interpretations
            of Western technology rendered in a traditional Rajasthani painting style.
          </ArticleP>
          <ArticleP>
            The paint itself was typically made from natural, locally sourced pigments — mineral
            and vegetable dyes ground and mixed by hand — applied using a fresco technique where
            pigment is worked into wet lime plaster so that it bonds chemically with the wall as
            it dries, rather than simply sitting on top of the surface as a coating would. Some
            of the more elaborate havelis also used a related technique called araish, a
            polished lime plaster finish that gives certain wall surfaces a genuinely marble-like
            sheen despite containing no actual marble, a cost-effective way for merchant families
            to achieve a luxurious appearance without the expense of quarried stone. This is part
            of why many of the murals have survived over a century of harsh desert sun,
            wind-blown sand and temperature swings in genuinely good condition, though it&apos;s
            also worth being honest that many havelis are in serious decline, with owning
            families long since moved away permanently and no resources locally available for
            proper restoration — walking through Shekhawati today means seeing both remarkably
            preserved masterpieces and buildings in genuine, visible disrepair, sometimes on the
            very same street.
          </ArticleP>

          <ArticleH2>Mandawa — The Most Visited Shekhawati Town</ArticleH2>
          <ArticleP>
            Mandawa is Shekhawati&apos;s most developed town for visitors, with several havelis
            converted into heritage hotels, making it the natural base for exploring the wider
            region even if you plan day trips to other towns. The Mandawa Castle, itself
            converted into a hotel, anchors the town, and a cluster of well-preserved havelis
            within easy walking distance — including the Murmuria Haveli and the Gulab Rai Ladia
            Haveli — showcase some of the region&apos;s most vivid and best-maintained murals.
            Because Mandawa sees more visitors than other Shekhawati towns, it also has better
            tourist infrastructure generally — more accommodation options, restaurants used to
            international visitors, and guides genuinely knowledgeable about the specific
            history of individual buildings rather than generic commentary.
          </ArticleP>

          <ArticleH2>Nawalgarh — The Largest Concentration of Havelis</ArticleH2>
          <ArticleP>
            Nawalgarh holds the largest overall concentration of havelis in the region, including
            the Podar Haveli, now converted into a museum specifically dedicated to preserving
            and explaining Shekhawati&apos;s fresco tradition — a genuinely useful stop before
            exploring the town&apos;s other havelis independently, since it provides context
            that makes the rest of the visit considerably richer. The Morarka Haveli and the
            Aath Haveli complex (literally &quot;eight havelis&quot;, referring to a cluster of
            eight mansions built by a single extended family) are also worth seeking out.
            Nawalgarh&apos;s sheer density of painted buildings means a visit here rewards
            genuinely slow, unhurried wandering rather than a checklist approach to specific
            named havelis.
          </ArticleP>

          <ArticleH2>Fatehpur — Restoration Efforts Worth Seeing</ArticleH2>
          <ArticleP>
            Fatehpur is notable specifically for a small number of havelis that have undergone
            genuine, careful restoration in recent decades, most prominently through the efforts
            of a French artist who settled in the town and worked to restore several buildings
            using traditional techniques and pigments rather than modern shortcuts. Seeing a
            genuinely restored haveli alongside the more commonly encountered faded or
            deteriorating examples elsewhere in the region gives a useful sense of what these
            buildings looked like in their original condition, and Fatehpur&apos;s restoration
            work has become something of a model referenced elsewhere in conversations about
            Shekhawati&apos;s conservation more broadly.
          </ArticleP>

          <ArticleH2>Dundlod & Ramgarh — Quieter Alternatives</ArticleH2>
          <ArticleP>
            For travellers who&apos;ve already spent a day or two in Mandawa and Nawalgarh and
            want to see more without the (relatively mild, by Rajasthan standards) crowds of the
            better-known towns, Dundlod and Ramgarh both reward the extra effort. Dundlod&apos;s
            fort, also converted into a heritage hotel, sits alongside several notable havelis
            including the Goenka Haveli, while Ramgarh — founded relatively late, in the 1790s,
            by a merchant family who left Fatehpur after a dispute — is sometimes described as
            having some of the most densely concentrated fresco work of any single Shekhawati
            town, packed into a genuinely small geographic footprint.
          </ArticleP>

          <ArticleH2>Frequently Asked Questions</ArticleH2>
          <ArticleP>
            <span className="font-semibold text-ink">
              Is Shekhawati worth visiting if we&apos;ve already seen Jaipur and Udaipur?
            </span>{" "}
            Genuinely yes, and arguably more so — Shekhawati offers a completely different kind
            of Rajasthan experience from palace and fort sightseeing, focused on wandering small
            towns and discovering painted buildings at your own pace rather than following a
            structured monument circuit. Travellers who&apos;ve already done a first Rajasthan
            trip often find Shekhawati the most memorable addition on a return visit.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              Can we go inside the havelis, or is it all exterior viewing?
            </span>{" "}
            It varies by building. Some havelis have been converted into museums, hotels or
            guesthouses specifically to welcome visitors inside, while many others remain
            privately owned family properties, often unoccupied for most of the year, where a
            caretaker may or may not allow entry depending on the day and their own discretion.
            A knowledgeable local guide makes a genuine difference here, since they&apos;ll know
            which havelis are reliably open and can often negotiate entry to buildings a solo
            visitor would simply walk past.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              How long do the frescoes typically last, and are they actively being lost?
            </span>{" "}
            This is a genuine, ongoing concern. Well-maintained frescoes using the traditional
            fresco technique can last well over a century, as many in Shekhawati already have,
            but without active maintenance, exposure to desert sun, wind-driven sand and
            occasional monsoon rain gradually degrades the paint layer. Some havelis have lost
            entire sections of mural in the decades since their owning families moved away
            permanently, and conservation efforts — like those seen in Fatehpur — remain
            localised rather than comprehensive across the whole region, which is part of why
            visiting sooner rather than later is genuinely worth prioritising if this interests
            you.
          </ArticleP>
          <ArticleP>
            <span className="font-semibold text-ink">
              Is Shekhawati suitable for a day trip, or does it need an overnight stay?
            </span>{" "}
            A single long day trip from Jaipur is technically possible given the three to four
            hour drive each way, but it makes for a rushed visit that only allows time for one
            town, realistically. An overnight stay in Mandawa, with a day or two of exploring
            the wider region, gives a genuinely fuller sense of what makes Shekhawati distinctive
            rather than a brief, single-town taste of it.
          </ArticleP>

          <ArticleH2>Planning a Shekhawati Visit</ArticleH2>
          <ArticleP>
            Shekhawati sits roughly three to four hours by road from Jaipur, and a similar
            distance from Delhi, making it a genuinely practical add-on to either a Rajasthan
            circuit or a Golden Triangle itinerary rather than requiring a separate dedicated
            trip. Most visitors base themselves in Mandawa for one or two nights and take day
            trips to Nawalgarh, Fatehpur, Dundlod or Ramgarh depending on how much time is
            available — a single night is workable if Shekhawati is a brief add-on, but two
            nights genuinely allows for a more unhurried pace across several towns rather than
            rushing between them.
          </ArticleP>
          <ArticleUL>
            <li>
              A private vehicle and driver is genuinely the practical way to see Shekhawati —
              public transport between the towns is limited and slow, and much of the appeal is
              wandering unplanned side streets rather than following a fixed route.
            </li>
            <li>
              Many havelis are privately owned and either closed to visitors entirely or charge
              a small entry fee at the caretaker&apos;s discretion — a local guide familiar with
              which buildings are currently accessible saves considerable frustration.
            </li>
            <li>
              October through March offers the most comfortable temperatures for walking between
              havelis on foot; April through June turns genuinely hot across the whole region.
            </li>
            <li>
              A good camera or phone with a wide-angle lens is worth having — many of the most
              striking murals are on tall facades in narrow streets, and capturing the full
              scale of a wall requires stepping back further than the street width often allows.
            </li>
          </ArticleUL>
          <ArticleP>
            Shekhawati works well as a two or three-day addition to a wider{" "}
            <Link href="/destinations/rajasthan" className="text-maroon underline">
              Rajasthan
            </Link>{" "}
            itinerary, either inserted between Delhi and Jaipur if you&apos;re arriving from the
            capital, or as a detour before or after a longer Rajasthan circuit. It genuinely
            rewards travellers with a curiosity for art and social history more than those
            purely chasing forts and palaces, and it remains one of the least crowded regions on
            this list despite its scale and significance — a real advantage for anyone who finds
            the more heavily visited stops on a standard Rajasthan circuit occasionally
            overwhelming. If you&apos;d like Shekhawati built into a trip you&apos;re already
            planning, or want to know how much extra time it realistically adds to a Golden
            Triangle or Rajasthan itinerary, our team can put together a route around your
            specific dates and interests.
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
          headline="Add Shekhawati to Your Rajasthan Trip."
          headlineItalic="Where Will You Begin?"
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to plan a trip that includes Shekhawati with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
