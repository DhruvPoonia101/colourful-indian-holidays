import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * DRAFT CONTENT — currency declaration thresholds, the ATITHI e-customs
 * app, and UPI access for foreign tourists were all verified via search
 * rather than assumed.
 * - Declaration thresholds (USD 5,000 cash / USD 10,000 total foreign
 *   exchange, INR 25,000 for residents) are consistent across RBI-sourced
 *   summaries and current as of 2026.
 * - ATITHI is a genuinely current detail: CBIC's e-customs declaration app,
 *   now described as "the dominant route" for currency declaration at
 *   major airports, alongside the older paper CDF.
 * - UPI for foreign tourists is deliberately NOT presented as generally
 *   available. The "UPI One World" wallet pilot (Feb 2026) was limited to
 *   India AI Impact Summit delegates from 40+ countries, with per-load and
 *   monthly caps, and one May 2026 source explicitly describes tourist UPI
 *   access as still only "partially open" with no confirmed date for
 *   general rollout. This article recommends cards and cash as the
 *   practical default and mentions UPI as an emerging option worth
 *   checking on arrival, rather than something to plan a trip around.
 * The existing 2% card-payment charge already stated on the cancellation-
 * policy page is repeated here for consistency, not introduced fresh.
 */

const title = "India Currency & Payments Guide: Cash, Cards & UPI Explained";
const description =
  "How to handle money on an India trip — currency exchange, ATMs and card acceptance, the new UPI One World pilot for tourists, and the customs declaration rules for bringing cash into the country.";
const pagePath = "/travel-guide/india-currency-payments-guide";
const heroImage = "/images/destinations/pushkar-bazaar.webp";
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
  { name: "Currency & Payments Guide", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Should I exchange currency before I travel or after I arrive?",
    answer:
      "Exchanging a small amount before you travel for your first few hours in India is convenient, but you'll generally get a better rate at a bank or authorised money changer in India than at your home airport. Avoid arrival-hall currency counters at Indian airports too, where rates are typically the least favourable of any option.",
  },
  {
    question: "How much cash can I bring into India?",
    answer:
      "There's no upper limit on foreign currency, but you must declare it to customs if your cash exceeds USD 5,000, or your total foreign exchange (cash plus traveller's cheques and drafts) exceeds USD 10,000. Below those thresholds, no declaration is needed.",
  },
  {
    question: "Can I use my debit or credit card everywhere in India?",
    answer:
      "In hotels, restaurants, larger shops and malls, yes — Visa and Mastercard are widely accepted. In markets, with street vendors, small local restaurants and auto-rickshaws, cash is still the norm, so carrying some rupees is worth it even if cards cover most of your bigger expenses.",
  },
  {
    question: "Can I use UPI as a foreign tourist?",
    answer:
      "Not generally, at least not yet. A pilot program (UPI One World) has opened limited access for specific groups, but broad tourist access isn't confirmed or reliable as of this writing. Plan around cards and cash as your primary payment methods, and treat UPI as a possible bonus to check on arrival rather than something to rely on.",
  },
  {
    question: "Will my bank charge fees for ATM withdrawals in India?",
    answer:
      "Likely yes, on both ends — the Indian ATM operator typically charges a fee for international cards, and your home bank may add its own foreign transaction or ATM fee on top. Check with your bank before you travel, since some offer fee-free international withdrawals as an account feature worth knowing about ahead of time.",
  },
];

export default function IndiaCurrencyPaymentsGuidePage() {
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
          imageAlt="Pushkar's market street, lit up in the evening"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Currency & Payments Guide for India"
          subheadline="Cash, cards, ATMs and the rise of UPI — how money actually moves on an India trip, and what to expect at the till."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about payments before booking my trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            India&apos;s currency is the Indian Rupee (₹, INR), and how you handle money here has
            shifted noticeably in recent years — the country has one of the world&apos;s most advanced
            digital payment systems for locals, even while cash remains genuinely essential for a
            large share of everyday transactions. For an international traveller, the practical
            reality sits in between: cards cover more than they used to, cash still matters more
            than in many Western countries, and a newer digital option (UPI) is edging open to
            tourists but isn&apos;t something to plan a trip around just yet. This guide covers what
            actually works, in practice, for a visitor — not the theoretical picture you&apos;d get
            from a generic list of payment methods, but how money genuinely changes hands on a real
            trip, route by route and city by city.
          </ArticleP>

          <ArticleH2>Where Should You Exchange Currency for the Best Rate?</ArticleH2>
          <ArticleP>
            You&apos;ll generally get a better exchange rate at a bank or an RBI-authorised money
            changer inside India than at your home country&apos;s airport before you leave, and
            noticeably better than the currency counters in the arrivals hall of Indian airports,
            which are convenient but consistently offer among the least favourable rates available.
            A reasonable approach: exchange a small amount before or immediately on arrival for
            your first day&apos;s incidental expenses, then use an authorised money changer or bank in
            the city for anything larger once you&apos;ve had a chance to compare rates rather than
            exchanging everything in one rushed transaction at the airport.
          </ArticleP>
          <ArticleP>
            When comparing rates, look at the actual amount of rupees you&apos;ll receive rather than
            just the advertised exchange rate, since some money changers advertise an attractive
            headline rate while adding a separate commission or service fee that isn&apos;t obvious
            until you&apos;re at the counter. Reputable banks and well-known authorised dealers rarely
            do this, which is one more reason to favour them over an unfamiliar exchange counter
            simply because it&apos;s convenient.
          </ArticleP>

          <ArticleH2>Bringing Cash Into India: Declaration Rules</ArticleH2>
          <ArticleP>
            There&apos;s no upper limit on how much foreign currency you can bring into India, but two
            thresholds trigger a mandatory customs declaration: foreign currency notes exceeding
            USD 5,000, or total foreign exchange (cash plus traveller&apos;s cheques, drafts and similar
            instruments) exceeding USD 10,000. Below those figures, no declaration is required and
            you can simply walk through the green channel. Above them, declare via the Currency
            Declaration Form or, increasingly, the ATITHI app — a government e-customs declaration
            app that&apos;s become the standard route at major airports, letting you file your
            declaration before landing and present a QR code at customs rather than filling out a
            paper form on arrival. Indian currency carriage works differently: residents may carry
            up to ₹25,000 in or out of the country without declaration, while non-residents,
            including most tourists, generally aren&apos;t permitted to carry Indian rupee notes across
            the border at all, which is one more reason it&apos;s not worth trying to source rupees
            before you land.
          </ArticleP>
          <ArticleP>
            For the vast majority of tourists on a standard holiday, none of this ends up mattering
            in practice — carrying a few hundred dollars in cash alongside a card is well under
            either threshold. It becomes genuinely relevant mainly for longer stays, business
            travel involving larger cash needs, or specific situations like carrying cash for a
            family wedding or property matter, which is a different category of travel to the
            leisure itineraries this guide is mostly written for. Whichever category you fall into,
            keeping the declaration receipt (paper CDF or ATITHI confirmation) is worth doing if you
            plan to convert a large sum to rupees at a bank later in your trip, since authorised
            dealers may ask to see it for amounts above their own internal threshold.
          </ArticleP>

          <ArticleH2>ATMs & Card Payments</ArticleH2>
          <ArticleP>
            ATMs are widely available in every city and most towns on a typical itinerary, and
            international Visa and Mastercard-network debit cards generally work at them, subject
            to your own bank&apos;s international withdrawal settings — it&apos;s worth confirming these are
            switched on before you travel, since a card blocked for suspected fraud on your first
            withdrawal is a genuinely common and avoidable travel hiccup. Expect a withdrawal fee
            from the Indian ATM operator, often on top of whatever your home bank charges for
            international withdrawals, so larger, less frequent withdrawals are usually more
            cost-effective than several small ones.
          </ArticleP>
          <ArticleP>
            A practical tip worth knowing: ATMs run by major Indian banks (SBI, HDFC, ICICI, Axis
            among the largest) tend to be more reliable for international cards than smaller
            regional or white-label ATM networks, which occasionally reject foreign cards outright
            or impose lower per-transaction limits. If one ATM declines your card, it&apos;s often
            simply that machine or network rather than a problem with your card itself — trying a
            different bank&apos;s ATM nearby resolves this more often than not.
          </ArticleP>
          <ArticleP>
            Card acceptance for purchases has grown substantially — hotels, restaurants, larger
            shops and malls generally accept Visa and Mastercard without issue. Markets, small
            local restaurants, auto-rickshaw drivers and roadside vendors are a different story,
            where cash is still the norm and sometimes the only option. If you pay your tour
            balance with us by card, a 2% bank or gateway charge applies, disclosed upfront in your
            quote rather than added as a surprise later — worth knowing as a general pattern, since
            many merchants and card machines in India apply a similar surcharge on card payments.
          </ArticleP>

          <ArticleH2>UPI: India&apos;s Dominant Payment System (and Where Tourists Stand)</ArticleH2>
          <ArticleP>
            UPI (Unified Payments Interface) is how the vast majority of everyday transactions
            happen in India today — scan a QR code with a banking app, confirm the amount, and the
            payment clears instantly, whether it&apos;s a market stall or a five-figure rent payment.
            For years this was genuinely off-limits to foreign visitors without an Indian bank
            account, but that&apos;s been changing incrementally. A prepaid wallet called UPI One World
            began a pilot rollout in early 2026, allowing visitors from a defined list of countries
            to load funds and pay via UPI QR codes without an Indian bank account or SIM card —
            though as of writing, this has been rolled out in stages tied to specific events and
            airports rather than opened generally to all tourists.
          </ArticleP>
          <ArticleP>
            The practical takeaway: don&apos;t plan your trip&apos;s payment strategy around UPI access,
            since it isn&apos;t a reliable, universally available option for visitors yet. Cards and
            cash remain the dependable combination. That said, it&apos;s worth asking your hotel or
            checking on arrival whether tourist UPI access has expanded further by the time you
            travel — this is genuinely moving quickly, and what wasn&apos;t available six months ago
            may be by the time you read this.
          </ArticleP>
          <ArticleP>
            You&apos;ll also see other digital wallets and apps in everyday use — Paytm and PhonePe
            among the most common — largely built on the same UPI infrastructure and subject to the
            same access limitations for foreign visitors today. None of these currently offer a
            meaningfully easier path for tourists than UPI itself, so the practical advice remains
            the same regardless of which app or brand you might read about: treat digital wallets
            as a possible bonus rather than a primary plan.
          </ArticleP>

          <ArticleH2>What Do Things Typically Cost in India?</ArticleH2>
          <ArticleP>
            India remains inexpensive by Western standards for day-to-day spending, though &quot;how
            much things cost&quot; varies enormously between a street-food meal and a five-star hotel
            restaurant, or between a local bus and a private car with driver. As a rough sense of
            scale for personal spending money beyond what&apos;s included in a booked itinerary: a
            simple restaurant meal typically costs a fraction of an equivalent meal at home, bottled
            water and soft drinks are inexpensive everywhere, and souvenirs and handicrafts range
            widely depending on quality and where you buy them — a fixed-price government emporium
            versus a bazaar stall where bargaining is expected are genuinely different experiences
            and price points for similar-looking items.
          </ArticleP>
          <ArticleP>
            Bargaining is a normal, expected part of shopping in markets and with individual
            vendors, though not in fixed-price shops, malls, or with hotel and restaurant bills.
            If you&apos;re unsure whether a price is negotiable, your guide can usually tell you at a
            glance, and watching how locals approach the same stall is often the fastest way to
            calibrate what a fair starting offer looks like.
          </ArticleP>
          <ArticleP>
            A useful mental model: treat the first quoted price at a bazaar stall as an opening
            position rather than the actual price, and a good-natured, unhurried back-and-forth as
            part of the interaction rather than something to feel awkward about — vendors generally
            expect it and often enjoy the exchange more than a straight, silent purchase. That said,
            there&apos;s no need to over-optimise a small purchase down to the last rupee; most
            experienced travellers settle on a price that feels fair to both sides rather than
            squeezing out every possible discount.
          </ArticleP>

          <ArticleH2>Tipping: A Quick Note</ArticleH2>
          <ArticleP>
            Tipping isn&apos;t legally required anywhere in India, but it&apos;s a well-established and
            genuinely appreciated practice in tourism specifically, where guides and drivers often
            rely on it as a meaningful part of their income. Small notes are the easiest way to
            handle this, since exact change matters more here than rounding up the way you might
            elsewhere — another good reason to keep a reasonable stock of smaller-denomination
            rupees on hand throughout your trip rather than only larger notes.
          </ArticleP>

          <ArticleH2>A Practical Money Strategy for Your Trip</ArticleH2>
          <ArticleUL>
            <li>Carry a primary card (Visa or Mastercard) for hotels, larger restaurants and shops</li>
            <li>Keep a reasonable amount of rupee cash on hand for markets, small vendors, tips, and auto-rickshaws</li>
            <li>Withdraw cash from bank-branded ATMs where possible, in larger amounts less often to reduce per-withdrawal fees</li>
            <li>Confirm your card&apos;s international and ATM settings with your bank before you travel</li>
            <li>Keep a small emergency cash reserve in a separate place from your main wallet</li>
            <li>Keep a stock of smaller-denomination notes for tips, small purchases and situations where a vendor can&apos;t break a large bill</li>
          </ArticleUL>
          <ArticleP>
            On our itineraries, hotels, the vehicle and driver, and any pre-arranged activities are
            already settled as part of your booking, so day-to-day cash on the road mostly covers
            personal spending — meals outside included options, souvenirs, tips, and small
            purchases along the way. Your guide can also help point you toward the nearest reliable
            ATM or money changer wherever you are, rather than leaving you to search on your own.
          </ArticleP>

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            Money in India is more straightforward for visitors than the details above might
            suggest — the short version is card for the big things, cash for the small things, and
            a sensible ATM strategy in between. The declaration rules only matter if you&apos;re
            carrying unusually large amounts of cash, and UPI is worth keeping an eye on as an
            emerging option rather than building a plan around. If you have a specific question
            about handling money on your itinerary, it&apos;s exactly the kind of practical detail worth
            asking us directly before you travel.
          </ArticleP>
          <ArticleP>
            None of this needs to occupy much of your actual attention once you&apos;re on the ground —
            a card, a reasonable amount of local cash, and a general sense of the rules above is
            genuinely all most travellers need for a smooth, worry-free trip. The goal of this guide
            is to remove that low-level uncertainty before you land, not to add a new thing to
            worry about during a trip that should mostly be about the places you&apos;re seeing rather
            than how you&apos;re paying for them.
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
          headline="Money Sorted? Let's Plan the Trip."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question about payments before booking my trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
