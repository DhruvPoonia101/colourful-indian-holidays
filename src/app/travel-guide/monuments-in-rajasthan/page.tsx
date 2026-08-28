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
            a circuit. Here&apos;s what to expect at each of the major sites, roughly in the
            order most first-time visitors see them.
          </ArticleP>

          <ArticleH2>Amber Fort, Jaipur</ArticleH2>
          <ArticleP>
            Amber Fort is usually the first major monument on a Rajasthan itinerary, and it sets
            the bar high — a hilltop fort-palace overlooking Maota Lake, with courtyards, mirror
            work, and fortified walls that climb the ridgeline behind it. Arrive early in the
            morning, both to beat the heat and the crowds, and to see the fort in the kind of
            soft light it was built to be seen in.
          </ArticleP>

          <ArticleH2>City Palace &amp; Hawa Mahal, Jaipur</ArticleH2>
          <ArticleP>
            Back in the city itself, the City Palace is still partly a working royal residence,
            with museum wings open to visitors. A short walk away, Hawa Mahal — the &quot;Palace
            of Winds&quot; — is famous for its honeycomb facade of 953 small windows, built so
            royal women could watch street life below without being seen themselves. It&apos;s
            best photographed from across the street in the early morning, when the light hits
            the pink sandstone directly.
          </ArticleP>

          <ArticleH2>Mehrangarh Fort, Jodhpur</ArticleH2>
          <ArticleP>
            Mehrangarh sits on a sheer rock outcrop above Jodhpur&apos;s old blue city, and is
            widely considered one of the best-preserved forts in India — its museum galleries,
            covering armour, palanquins, and royal portraits, are genuinely well curated rather
            than an afterthought. The views over the blue-washed rooftops below are reason
            enough to visit on their own.
          </ArticleP>

          <ArticleH2>Jaisalmer Fort</ArticleH2>
          <ArticleP>
            Jaisalmer Fort is one of the very few &quot;living forts&quot; left in the world —
            around a quarter of the old city&apos;s population still lives within its walls, in
            havelis that are centuries old. That makes it a genuinely different kind of visit
            from Rajasthan&apos;s other forts: you&apos;re walking through an inhabited
            neighbourhood, not a preserved monument, with shops, guesthouses and homes built
            into the same sandstone.
          </ArticleP>

          <ArticleH2>City Palace &amp; Lake Palace, Udaipur</ArticleH2>
          <ArticleP>
            Udaipur&apos;s City Palace is the largest palace complex in Rajasthan, built up over
            nearly 400 years by successive rulers, with balconies looking directly out over Lake
            Pichola. The Lake Palace itself — the white marble palace that appears to float on
            the lake — is now a hotel, but it&apos;s worth seeing from the water even if
            you&apos;re not staying there; several boat tours pass close by at sunset.
          </ArticleP>

          <ArticleH2>Chittorgarh Fort</ArticleH2>
          <ArticleP>
            Chittorgarh is the largest fort in India by area, and carries some of Rajasthan&apos;s
            most significant history — it was the capital of Mewar for centuries and the site of
            several famous sieges. It sees far fewer international visitors than Jaipur or
            Udaipur, which makes it one of the better places in Rajasthan to see a major
            monument without the crowds.
          </ArticleP>

          <ArticleH2>Jantar Mantar, Jaipur</ArticleH2>
          <ArticleP>
            A UNESCO World Heritage Site in its own right, Jantar Mantar is a collection of
            nineteen astronomical instruments built in stone and marble in the early 18th
            century — still functional, and still remarkably accurate. It&apos;s an easy add-on
            to a City Palace and Hawa Mahal morning in Jaipur.
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
              much more vivid
            </li>
            <li>Comfortable, closed shoes are worth it — fort floors and stairs are uneven stone</li>
            <li>
              Entry fees are typically higher for foreign visitors than for Indian nationals;
              this is standard practice across India&apos;s monuments, not specific to any one
              site
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
            . Tell us how many days you have and we&apos;ll build a route around the monuments
            that matter most to you.
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
