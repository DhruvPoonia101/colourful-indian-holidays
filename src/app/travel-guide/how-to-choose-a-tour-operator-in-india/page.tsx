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
import { BUSINESS } from "@/lib/seo/business";

/**
 * Facts about Ministry of Tourism recognition (five-year recognition after an
 * inspection, at least one year of operation, paid-up capital, inbound
 * turnover, qualified staff, licensed guides at protected monuments, the Safe
 * & Honourable Tourism pledge, certificate displayed in the office) come from
 * IATO's published "Guidelines for Recognition / Renewal as an Approved Inbound
 * Tour Operator" (iato.in/pages/view/25), checked 26 Oct 2026. Figures are
 * stated as published there and can change.
 */

const title = "How to Choose a Private Tour Operator in India: A Checklist";
const description =
  "How to choose a tour operator for India: what Ministry of Tourism recognition and IATO membership mean, how to check reviews, what a quote must include and red flags.";
const pagePath = "/travel-guide/how-to-choose-a-tour-operator-in-india";
const heroImage = "/images/destinations/jaipur-city-palace.webp";
const datePublished = "2026-10-26";
const dateModified = "2026-10-26";

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
  { name: "How to Choose a Tour Operator", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    "question": "How do I choose a tour operator in India?",
    "answer": "Check that the operator is recognised by the Ministry of Tourism or belongs to IATO, read independent reviews on Google and Tripadvisor, ask for a written quote that lists what is included, and pay by a method that leaves a record."
  },
  {
    "question": "Is it safe to book a private tour online?",
    "answer": "It can be, if you check the operator first. Look for a real office address and phone number, independent reviews, a written quote and clear cancellation terms, and pay by card or to a registered company account."
  },
  {
    "question": "What is a Ministry of Tourism approved tour operator?",
    "answer": "It is an inbound operator that has met the Ministry's published criteria and passed an inspection. Recognition lasts five years, and approved operators must display the certificate in their office."
  },
  {
    "question": "What is IATO?",
    "answer": "The Indian Association of Tour Operators is India's principal trade body for the tourism industry. Membership lets travellers confirm an agency is an accountable, operating business."
  },
  {
    "question": "What should be in a tour quote?",
    "answer": "Hotels or categories for each night, the vehicle, the guide, entry fees, taxes, meals, transfers, what is not included, and the cancellation and payment terms."
  }
];

export default function Page() {
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
          imageAlt="The City Palace, Jaipur"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="How to Choose a Tour Operator in India"
          subheadline="What to check before you book: recognition, reviews, the quote, payment and the questions to ask."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I'd like to ask some questions before booking a private tour with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">To choose a private tour operator for India, check four things: that it is a real, accountable business, that independent reviews back it up, that the quote says in writing exactly what is included, and that you pay in a way that leaves a record.</span> This guide explains each one, and the questions to ask any operator, including us.
          </ArticleP>
          <ArticleH2>What Does Ministry of Tourism Recognition Mean?</ArticleH2>
          <ArticleP>
            India&apos;s Ministry of Tourism recognises inbound tour operators, those that bring foreign visitors to India, as "approved". Under the guidelines published by the Indian Association of Tour Operators (IATO), recognition is granted for five years after an inspection by a committee that includes a Ministry regional director and an IATO member. An operator has to have been trading for at least a year, show paid-up capital and foreign-exchange earnings from inbound tourism, keep an office with qualified staff, and use government-licensed guides at protected monuments. Approved operators also sign the Ministry&apos;s Safe and Honourable Tourism pledge and must display their approval certificate in the office. Read the full guidelines on the <Link href="https://www.iato.in/pages/view/25" className="text-maroon underline">IATO website</Link>.
          </ArticleP>
          <ArticleP>
            Recognition is a useful signal, not a guarantee of quality. Nothing stops you booking with an operator that is not approved, but it is fair to ask whether an operator is, and to ask to see the certificate.
          </ArticleP>
          <ArticleH2>What Is IATO, and Should Your Operator Belong?</ArticleH2>
          <ArticleP>
            The Indian Association of Tour Operators is India&apos;s principal trade body for the tourism industry. Membership gives travellers a way to check that an agency is an accountable, operating business and not an anonymous website. We are an IATO-registered agency, and you can see our <Link href="/awards-recognition" className="text-maroon underline">recognition and membership details</Link> and verify them on the IATO site. Ask any operator for its member details and check them yourself.
          </ArticleP>
          <ArticleH2>How Do You Check an Operator&apos;s Reviews?</ArticleH2>
          <ArticleUL>
            <li>Look at platforms the operator does not control, such as Google and Tripadvisor, not just testimonials on its own site.</li>
            <li>Read the middle reviews, not only the five-star ones, and look for specific details: named guides, hotels, how problems were handled.</li>
            <li>Check how the operator replies to a complaint. A calm, specific reply tells you more than a perfect score.</li>
            <li>Compare the number of reviews with how long the business has been trading.</li>
          </ArticleUL>
          <ArticleP>
            For reference, our rating is {BUSINESS.aggregateRating.ratingValue} from {BUSINESS.aggregateRating.reviewCount}+ reviews on Tripadvisor and {BUSINESS.googleRating.ratingValue} from {BUSINESS.googleRating.reviewCount}+ on Google. Read them on those platforms, or see our <Link href="/testimonials" className="text-maroon underline">testimonials page</Link>, which shows reviews word for word.
          </ArticleP>
          <ArticleH2>What Should a Written Quote Include?</ArticleH2>
          <ArticleP>
            A trustworthy quote leaves little to guess. Ask for it in writing and check it names:
          </ArticleP>
          <ArticleUL>
            <li>The hotels, or the exact category, for every night, and whether the room is twin-sharing.</li>
            <li>The vehicle type, whether it is air-conditioned, and that it is private to your group.</li>
            <li>The guide&apos;s language and where the guide is with you.</li>
            <li>Entry fees, taxes, meals and transfers: which are in and which are out.</li>
            <li>Flights, visas, tips and insurance, which are normally listed as not included.</li>
            <li>The cancellation and refund terms, the deposit and when the balance is due.</li>
          </ArticleUL>
          <ArticleP>
            Our own list is in <Link href="/travel-guide/whats-included-in-a-private-tour-of-india" className="text-maroon underline">What&apos;s included in a private tour of India</Link>, and our terms are on the <Link href="/cancellation-policy-and-terms-and-conditions" className="text-maroon underline">cancellation policy page</Link>.
          </ArticleP>
          <ArticleMidCTA
            text="Want a written quote you can check against this list?"
            href="/contact"
            linkLabel="Request a quote"
          />

          <ArticleH2>How Should You Pay?</ArticleH2>
          <ArticleUL>
            <li>Pay by a method that leaves a record, such as a card or a bank transfer to a registered company account, and keep the receipt.</li>
            <li>Ask exactly what the deposit is and when the rest is due.</li>
            <li>Be careful if an operator asks you to pay to a personal account, or to hurry because a price will expire.</li>
          </ArticleUL>
          <ArticleH2>What Are the Warning Signs?</ArticleH2>
          <ArticleUL>
            <li>A price far below every other quote. Ask what has been cut: hotel quality, the vehicle, the guide or the entry fees.</li>
            <li>No named hotels, no office address and no phone number, only a messaging app.</li>
            <li>Vague answers about what is included, or a quote that will not be put in writing.</li>
            <li>Pressure to decide today.</li>
            <li>Shopping stops you did not ask for. Ask whether any stops are included and whether you can skip them.</li>
          </ArticleUL>
          <ArticleH2>Is Bhutan Different?</ArticleH2>
          <ArticleP>
            Yes. Visitors to Bhutan book through a licensed operator, and the government charges a Sustainable Development Fee for each night of your stay. Any quote should show that fee clearly. Our <Link href="/travel-guide/bhutan-visa-fee-and-best-time-to-visit" className="text-maroon underline">Bhutan guide</Link> explains the visa and the fee.
          </ArticleP>
          <ArticleH2>Questions to Ask Any Operator</ArticleH2>
          <ArticleUL>
            <li>Are you recognised by the Ministry of Tourism, and can I see the certificate?</li>
            <li>Are you an IATO member, and what is your member number?</li>
            <li>Which hotels are in the quote, and what changes if one is unavailable?</li>
            <li>Who will guide us, and are the guides licensed?</li>
            <li>What is not included?</li>
            <li>What is your cancellation policy, in writing?</li>
            <li>Who can I call during the trip if something goes wrong?</li>
            <li>Can you share recent reviews from travellers from my country?</li>
          </ArticleUL>

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
          headline="Ask Us Anything Before You Book."
          headlineItalic="We'll Answer Plainly."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I'd like to ask some questions before booking a private tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
