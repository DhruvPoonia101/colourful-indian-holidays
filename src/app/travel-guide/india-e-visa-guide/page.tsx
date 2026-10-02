import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * DRAFT CONTENT — visa rules, fees and the e-Arrival Card requirement were
 * verified via web search while building the 6 country-of-origin pages
 * (india-tours-from-usa/uk/australia/canada/uae/germany) rather than
 * invented here. Key facts and their sourcing:
 * - 180-day-per-visit allowance on the 1-year/5-year e-Tourist visa is
 *   specific to US, UK, Canadian and Japanese citizens; all other
 *   nationalities (including Australia and Germany, confirmed directly)
 *   get 90 days per visit on the same visas.
 * - Visa fees are stated as approximate ranges rather than exact figures —
 *   one source gave a UK 5-year fee wildly out of line with everyone
 *   else's (looked like a scraping error), so precise numbers are avoided
 *   in favour of the consistently-reported ranges.
 * - The e-Arrival Card is a genuinely new requirement (mandatory since
 *   1 April 2026, piloted from October 2025), separate from the e-Visa,
 *   confirmed across Business Today, Outlook Traveller and an immigration
 *   law firm's client alert (Envoy Global). This postdates Claude's
 *   training cutoff.
 * Always links out to the official government portal for the user to
 * actually apply/confirm current rules — never positions this agency as
 * filing the application on a traveller's behalf.
 */

const title = "India e-Visa Guide 2026: Types, Fees, Stay Limits & the New e-Arrival Card";
const description =
  "A complete guide to India's e-Tourist Visa — the 30-day, 1-year and 5-year options, how long you can actually stay, nationality-specific rules, and the new e-Arrival Card every foreign traveller now needs.";
const pagePath = "/travel-guide/india-e-visa-guide";
const heroImage = "/images/destinations/delhi-india-gate.webp";
const datePublished = "2026-09-25";
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
  { name: "India e-Visa Guide", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Can I get an Indian visa on arrival?",
    answer:
      "Not for most nationalities. Visa-on-arrival exists only in narrow cases — for example, Emirati passport holders who've previously held an Indian e-Visa or regular visa. Almost everyone else needs to apply for the e-Tourist visa online before travelling.",
  },
  {
    question: "How long before my trip should I apply?",
    answer:
      "Processing is typically quoted at up to 72 hours, but we'd recommend applying at least 2 to 4 weeks before departure to allow time for any follow-up requests or document issues, especially during peak season.",
  },
  {
    question: "What happens if I overstay my e-Visa?",
    answer:
      "Overstaying can result in fines and complications with future visa applications. If your plans change and you need more time in India, the safest route is to check with the nearest FRRO (Foreigners Regional Registration Office) before your visa's stay limit runs out, rather than after.",
  },
  {
    question: "Can I convert my e-Tourist visa into another visa type while in India?",
    answer:
      "No — e-Tourist visas are non-convertible. If your trip's purpose changes (for example, from tourism to business or study), you'd need to leave India and apply for the correct visa type fresh, rather than changing categories in-country.",
  },
  {
    question: "Do children need their own e-Visa?",
    answer:
      "Yes — every traveller, including infants and children, needs their own individual e-Visa application with their own passport. There's no option to add a child to a parent's application.",
  },
];

export default function IndiaEVisaGuidePage() {
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
          imageAlt="India Gate at dusk, Delhi"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="India e-Visa Guide: Types, Fees & Stay Limits"
          subheadline="What almost every international traveller needs before boarding a flight to India — explained clearly, with the nationality-specific details that generic visa sites tend to skip."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about visas before booking my trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            Almost every international traveller visiting India for tourism needs to apply for an
            e-Visa before departure — there&apos;s no visa-on-arrival for the vast majority of
            nationalities, and the rules differ more by passport than most people expect going in.
            This guide covers the three e-Tourist visa options, how long you can actually stay on
            each one (which is a genuinely different question from how long the visa is valid
            for), the nationality-specific rules that catch people out, the application process
            itself, and the e-Arrival Card — a separate, newer requirement that has nothing to do
            with your visa but is just as mandatory.
          </ArticleP>

          <ArticleH2>The Three e-Tourist Visa Options</ArticleH2>
          <ArticleP>
            India&apos;s e-Tourist visa comes in three durations, and the right one depends on how
            often you expect to visit rather than just the length of a single trip.
          </ArticleP>
          <ArticleUL>
            <li>
              <span className="font-semibold text-ink">30-day e-Tourist visa</span> — double
              entry, valid 30 days from your date of arrival. The cheapest and simplest option for
              a single trip, typically priced lower in the April-to-June off-peak window and
              higher from July through March.
            </li>
            <li>
              <span className="font-semibold text-ink">1-year e-Tourist visa</span> — multiple
              entry, valid 365 days from the date it&apos;s issued. Worth considering if you might
              return to India more than once within the year.
            </li>
            <li>
              <span className="font-semibold text-ink">5-year e-Tourist visa</span> — multiple
              entry, valid 5 years from issue. The best value for frequent visitors, at a higher
              upfront fee than the shorter options.
            </li>
          </ArticleUL>
          <ArticleP>
            All three carry an additional bank or gateway charge on top of the base fee (commonly
            cited around 2.5%), and exact pricing shifts periodically, so it&apos;s worth confirming
            current fees on the official portal at the time you apply rather than relying on a
            number quoted months earlier.
          </ArticleP>

          <ArticleH2>Visa Validity vs. How Long You Can Actually Stay</ArticleH2>
          <ArticleP>
            This is the detail that trips up more travellers than any other part of the process:
            visa validity and permitted stay length are two different things, and which one
            matters depends on which visa you hold. On the 30-day e-Visa, the validity period is
            your window to enter India — once you&apos;re in, you can stay the full 30 days even if
            that runs past the visa&apos;s expiry date. On the 1-year and 5-year e-Visas, it works the
            other way around: the expiry date is the latest date you must leave India, and your
            stay on any single visit is capped well below the full validity period. Confusing the
            two is a genuine, commonly-made mistake, so it&apos;s worth reading your visa&apos;s stated
            terms carefully rather than assuming either interpretation applies.
          </ArticleP>

          <ArticleH2>How Long Can You Stay? It Depends on Your Passport</ArticleH2>
          <ArticleP>
            On the 1-year and 5-year e-Tourist visas, most nationalities are limited to 90 days of
            continuous stay per visit. A small group of nationalities — citizens of the{" "}
            <Link href="/india-tours-from-usa" className="text-maroon underline">
              United States
            </Link>
            ,{" "}
            <Link href="/india-tours-from-uk" className="text-maroon underline">
              United Kingdom
            </Link>
            , and Canada, along with Japan — get an extended allowance of up to 180 days per
            visit. This isn&apos;t a minor technicality if you&apos;re planning a longer stay: an American,
            British or Canadian traveller can realistically plan a 3-month trip on a single visa
            entry, while an{" "}
            <Link href="/india-tours-from-australia" className="text-maroon underline">
              Australian
            </Link>
            ,{" "}
            <Link href="/india-tours-from-germany" className="text-maroon underline">
              German
            </Link>
            , or most other nationality&apos;s traveller planning the same length of stay would need to
            structure their trip around the 90-day limit, or plan a border exit and re-entry.
            Regardless of nationality, total time spent in India across the calendar year on
            tourist visas is generally capped at 180 days.
          </ArticleP>
          <ArticleP>
            Travellers flying from the{" "}
            <Link href="/india-tours-from-uae" className="text-maroon underline">
              UAE
            </Link>{" "}
            specifically should note that your visa requirement is set by your own passport&apos;s
            nationality, not by UAE residency — living in Dubai or Abu Dhabi doesn&apos;t change these
            rules for you unless you actually hold an Emirati passport.
          </ArticleP>
          <ArticleP>
            As a quick reference, here&apos;s how the stay limit breaks down for six commonly asked
            about nationalities on the 1-year and 5-year e-Tourist visas:
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">United States</span> — up to 180 days per visit</li>
            <li><span className="font-semibold text-ink">United Kingdom</span> — up to 180 days per visit</li>
            <li><span className="font-semibold text-ink">Canada</span> — up to 180 days per visit</li>
            <li><span className="font-semibold text-ink">Australia</span> — up to 90 days per visit</li>
            <li><span className="font-semibold text-ink">Germany</span> — up to 90 days per visit</li>
            <li><span className="font-semibold text-ink">UAE (Emirati passport holders only)</span> — separate Visa-on-Arrival option, up to 60 days, available only if you&apos;ve previously held an Indian e-Visa or regular visa</li>
          </ArticleUL>
          <ArticleP>
            This list isn&apos;t exhaustive — dozens of other nationalities are eligible for the
            e-Tourist visa on the standard 90-day allowance — but it covers the passports we&apos;re
            asked about most often. If yours isn&apos;t listed here, the official e-Visa portal will
            confirm your specific stay limit as part of the application itself.
          </ArticleP>

          <ArticleH2>What Do You Need to Apply for an e-Visa?</ArticleH2>
          <ArticleP>
            The entire application happens online, through India&apos;s official government e-Visa
            portal — never a third-party site claiming to offer a faster or guaranteed service.
            You&apos;ll need:
          </ArticleP>
          <ArticleUL>
            <li>A passport valid for at least 6 months beyond your planned arrival date, with at least 2 blank pages</li>
            <li>A digital, passport-style photograph (plain white background, no glasses or headwear except for religious reasons)</li>
            <li>A scanned copy of your passport&apos;s bio page</li>
            <li>A valid email address (your approved e-Visa is sent here)</li>
            <li>A debit or credit card to pay the applicable fee</li>
            <li>Your planned arrival date, port of entry, and accommodation address in India</li>
          </ArticleUL>
          <ArticleP>
            Once approved, you&apos;ll receive your Electronic Travel Authorization (ETA) by email —
            print it and carry it with your passport, since you&apos;ll present both at immigration on
            arrival. The most commonly cited rejection reasons are worth avoiding deliberately:
            photos that don&apos;t meet the specification (wrong background, face too small or large in
            frame), incomplete or mismatched personal details against the passport, and applying
            for a port of entry that doesn&apos;t actually accept e-Visa arrivals.
          </ArticleP>

          <ArticleH2>Which Airports and Seaports Accept the e-Visa?</ArticleH2>
          <ArticleP>
            e-Visa entry is accepted at a defined list of international airports — including
            Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad, Goa, Kochi, Ahmedabad, Amritsar,
            Jaipur and Varanasi, among others — plus a small number of seaports including Mumbai,
            Kochi and Goa. Land border crossings are not valid entry points for the e-Tourist visa.
            If your itinerary starts somewhere off this list, it&apos;s worth double-checking your entry
            point is covered before booking flights.
          </ArticleP>
          <ArticleP>
            One genuinely common trip-planning question this raises: if your international flight
            lands in Delhi but your first stop is actually Jaipur or Agra, that&apos;s not a problem —
            your e-Visa entry point is simply the airport you first land at, and everything after
            that is domestic travel within India, already covered once you&apos;ve cleared immigration.
          </ArticleP>

          <ArticleH2>Do OCI and PIO Cardholders Need an e-Visa?</ArticleH2>
          <ArticleP>
            No — Overseas Citizen of India (OCI) cardholders don&apos;t need a tourist visa at all for
            visits to India, since the OCI card itself functions as a lifelong, multiple-entry
            visa. If you or a family member holds OCI status, this entire e-Visa process doesn&apos;t
            apply to you, though the e-Arrival Card requirement covered below still does, since
            that&apos;s a separate immigration-tracking system rather than a visa. If you&apos;re travelling
            with a mixed group — some members holding OCI cards, others needing the standard
            e-Visa — it&apos;s worth planning each person&apos;s documentation separately rather than
            assuming one process covers everyone.
          </ArticleP>

          <ArticleH2>Tourist vs. Business e-Visa: Which Do You Actually Need?</ArticleH2>
          <ArticleP>
            The e-Tourist visa covers sightseeing, visiting friends or relatives, and short
            recreational activities like a yoga course — which is to say, almost everyone reading
            a guide like this. It does not cover paid work, journalism, or attending India-based
            employment of any kind. If your trip includes genuine business activity — attending
            meetings, exploring a venture, or trade-fair participation — the e-Business visa is the
            correct category instead, and it&apos;s worth choosing the right one from the start rather
            than risking an immigration question about your stated purpose on arrival. For anyone
            simply travelling to see the country, though, the Tourist e-Visa is the one to apply
            for.
          </ArticleP>

          <ArticleH2>How Do You Track Your Application?</ArticleH2>
          <ArticleP>
            Most applications are approved within the stated 72-hour window, though the portal
            itself doesn&apos;t guarantee a fixed turnaround, and processing can extend to several
            business days during genuinely busy periods — the run-up to major Indian festivals or
            the October-to-March peak season, for instance. You can check your application&apos;s
            status directly on the official portal using the reference number generated when you
            submitted it, rather than needing to contact anyone by phone or email. If your
            approved e-Visa hasn&apos;t arrived by email within the expected window, check your spam
            folder before assuming something has gone wrong — it&apos;s a genuinely common false alarm.
          </ArticleP>

          <ArticleH2>Best Time to Apply, and Why Seasonal Fees Exist</ArticleH2>
          <ArticleP>
            The 30-day e-Visa&apos;s fee typically shifts between an off-peak rate (roughly
            April through June) and a higher rate for the rest of the year, reflecting India&apos;s
            own tourist season rather than anything about the application itself. This doesn&apos;t
            affect the 1-year or 5-year visas, which carry a flat fee regardless of when you
            apply or travel. Beyond cost, timing your application 2 to 4 weeks ahead of departure
            — rather than the bare minimum the portal suggests — gives you a real buffer if
            immigration authorities request a clearer photo or additional documentation, which
            happens often enough to plan around rather than treat as an edge case.
          </ArticleP>

          <ArticleH2>The e-Arrival Card: A Separate, Newer Requirement</ArticleH2>
          <ArticleP>
            Since 1 April 2026 (piloted from October 2025), every foreign national arriving in
            India — regardless of visa type, and including OCI cardholders — must also submit a
            free digital e-Arrival Card within 72 hours before landing. This is genuinely separate
            from your e-Visa; holding a valid visa does not exempt you from also filing this. The
            form replaces the paper disembarkation card once handed out on flights, takes a few
            minutes to complete through the Bureau of Immigration&apos;s portal or the Su-Swagatam
            mobile app, and covers your passport details, flight information, purpose of visit,
            and accommodation address. Once submitted, you&apos;ll receive a QR code to present at
            check-in and immigration. Families or groups of up to five people travelling together
            can file a single consolidated form rather than one each.
          </ArticleP>

          <ArticleH2>Common Mistakes Worth Avoiding</ArticleH2>
          <ArticleP>
            Beyond the visa-vs-stay-duration confusion above, a few other mistakes come up
            repeatedly. Applying too close to the travel date leaves no buffer for a follow-up
            request, which can genuinely derail a trip if it happens the week before departure.
            Assuming an e-Tourist visa can be extended or converted once you&apos;re in India is
            another — it can&apos;t, on either count, and the only real fix for wanting more time is
            leaving the country and applying fresh. Uploading a photo that doesn&apos;t meet the
            portal&apos;s specific formatting rules (plain background, correct face proportion, no
            head covering unless for religious reasons) is consistently cited as one of the most
            common rejection reasons, and it&apos;s entirely avoidable with a proper passport-style
            photo taken specifically for the application rather than a cropped holiday snapshot.
            And simply not realising the e-Arrival Card exists at all is increasingly common,
            since it&apos;s new enough that plenty of general travel advice circulating online hasn&apos;t
            caught up with it yet.
          </ArticleP>

          <ArticleMidCTA
            text="Once your visa is sorted, the fun part is planning the trip itself."
            href="/travel-guide/first-trip-to-india-guide"
            linkLabel="Read our First Trip to India guide"
          />

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            The e-Visa process itself is genuinely straightforward once you know which of the
            three durations fits your trip and how long your specific nationality is permitted to
            stay — the confusion mostly comes from validity-vs-stay-duration and the newer
            e-Arrival Card requirement catching people off guard. We&apos;re not a visa agency and
            don&apos;t file applications on your behalf, but if you&apos;re planning a trip with us and have
            a question about how the visa rules apply to your specific itinerary, ask us directly
            — it&apos;s exactly the kind of practical detail we help international travellers work
            through before they book.
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
          headline="Visa Sorted? Let's Plan the Trip."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question about visas before booking my trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
