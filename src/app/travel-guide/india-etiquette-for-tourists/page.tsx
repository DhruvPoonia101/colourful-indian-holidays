import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleFAQ } from "@/components/travel-guide/ArticleFAQ";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * Checked 25 Oct 2026 against Travel India Smart's etiquette guide
 * (greeting, right hand, shoes, dress, temple conduct, leather, photography,
 * public behaviour, hospitality, head wobble). General customs, not rules for
 * every site; guides advise on site-specific rules. */

const title = "India Etiquette for Tourists: Temples, Dress, Photos and Customs";
const description =
  "India etiquette for tourists: what to wear at temples, removing shoes, using your right hand, asking before taking photos and other customs explained.";
const pagePath = "/travel-guide/india-etiquette-for-tourists";
const heroImage = "/images/destinations/kashi-vishwanath-temple.webp";
const datePublished = "2026-10-25";
const dateModified = datePublished;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}${pagePath}` },
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
  { name: "India Etiquette", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "What should I wear to temples in India?",
    answer:
      "Cover your shoulders and knees, wear shoes that slip off easily, and carry a scarf, since you may need to cover your head at gurdwaras and mosques. Some temples also ban leather items such as belts and bags.",
  },
  {
    question: "Do I have to take my shoes off in India?",
    answer:
      "Yes, at temples, mosques, gurdwaras and in most homes. Look for racks near the entrance, and wear socks if the ground is hot or you prefer.",
  },
  {
    question: "Can I take photos in temples and of people?",
    answer:
      "Ask before photographing people, especially women and the elderly, and respect photography bans inside temples and some monuments. Your guide will tell you where cameras are not allowed.",
  },
  {
    question: "Why should I use my right hand?",
    answer:
      "The left hand is traditionally considered unclean, so eat, hand over money and receive things with your right hand, or both hands for a gift.",
  },
  {
    question: "Are public displays of affection acceptable in India?",
    answer:
      "Keep them low-key. Holding hands is usually fine in cities, but kissing and close embraces can draw attention, especially in smaller towns and at religious sites.",
  },
  {
    question: "Is it rude to refuse food or chai?",
    answer:
      "Accepting is the polite default, since refusing outright can disappoint a host. A small taste is enough, and you can decline politely if you have dietary restrictions.",
  },
  {
    question: "Does a head wobble mean yes or no?",
    answer:
      "Usually yes or 'I understand', but people may avoid a direct 'no', so confirm important details such as pickup times and prices.",
  },
];

export default function GuidePage() {
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
            articleJsonLd({ headline: title, description, path: pagePath, image: heroImage, datePublished, dateModified })
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
          imageAlt="Kashi Vishwanath Temple, Varanasi"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="India Etiquette for Tourists"
          subheadline="Temples, dress, photos and everyday customs, explained simply."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about customs and etiquette on my India trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              Dress modestly, remove your shoes at temples and homes, use your right hand to eat and give, and ask before photographing people.
            </span>{" "}
            India is welcoming to visitors, and a few habits go a long way. This guide covers the customs that matter most for tourists, from temples to meals.
          </ArticleP>
          <ArticleH2>The Essentials at a Glance</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Greeting:</span> Say namaste with palms together and a slight bow. Handshakes are common in cities; follow the lead of the person you are meeting.</li>
            <li><span className="font-semibold text-ink">Right hand:</span> Eat, give and receive with your right hand.</li>
            <li><span className="font-semibold text-ink">Shoes:</span> Remove them before entering temples, mosques, gurdwaras and most homes.</li>
            <li><span className="font-semibold text-ink">Dress:</span> Cover shoulders and knees at religious sites. Clean Western clothes are fine elsewhere.</li>
            <li><span className="font-semibold text-ink">Photos:</span> Ask before photographing people.</li>
          </ArticleUL>
          <ArticleH2>Temples, Mosques and Gurdwaras</ArticleH2>
          <ArticleP>
            Dress modestly, cover your shoulders and knees, and take off your shoes. Cover your head at gurdwaras, and carry a scarf for mosques. Walk clockwise around a shrine, do not touch idols or sacred objects unless invited, and leave leather items such as belts and bags outside some Hindu and Jain temples. Respect photography bans.
          </ArticleP>
          <ArticleH2>Feet, Hands and Gestures</ArticleH2>
          <ArticleP>
            Avoid pointing your feet at people or shrines, and do not step over someone sitting or lying down. Use your right hand to eat and to pass things. The famous head wobble usually means yes or 'I understand', but people may avoid a direct 'no', so confirm important details.
          </ArticleP>
          <ArticleH2>Photography</ArticleH2>
          <ArticleP>
            Always ask before photographing people, especially women, elders and worshippers. Some temples and monuments ban photography or charge extra for cameras, and your guide will tell you the rules at each site.
          </ArticleP>
          <ArticleH2>Food and Hospitality</ArticleH2>
          <ArticleP>
            Accepting food or chai graciously is the polite default, and refusing outright can disappoint a host. You will often eat with your right hand, and sharing is common. If you have dietary restrictions, say so politely when ordering or at a home. For what to expect on a plate, see our <Link href="/travel-guide/first-trip-to-india-guide" className="text-maroon underline">first-trip guide</Link>.
          </ArticleP>
          <ArticleH2>Everyday Behaviour</ArticleH2>
          <ArticleP>
            Keep public displays of affection low-key, stay calm in crowds and haggling, and dress modestly in everyday settings, particularly in smaller towns and rural areas. A smile and patience go a long way in a country where schedules are flexible.
          </ArticleP>
          <ArticleP>
            Sources summarised from <a href="https://www.travelindiasmart.com/trip-planning/indian-etiquette-dos-and-donts" className="text-maroon underline" target="_blank" rel="noopener noreferrer">Travel India Smart</a>. Related reading: <Link href="/travel-guide/tipping-in-india" className="text-maroon underline">tipping in India</Link>, <Link href="/travel-guide/what-to-pack-for-india" className="text-maroon underline">what to pack</Link> and <Link href="/travel-guide/is-india-safe-for-tourists" className="text-maroon underline">whether India is safe for tourists</Link>.
          </ArticleP>

          <ArticleFAQ faqs={faqs} />
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
          headline="Questions Before You Go?"
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question about customs and etiquette on my India trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
