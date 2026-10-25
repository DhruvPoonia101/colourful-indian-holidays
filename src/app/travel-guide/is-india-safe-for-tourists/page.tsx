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
 * Written to be balanced and practical: no invented statistics, no claim
 * that India is "completely safe" or any region "risk-free", and readers are
 * pointed to their own government's current advice, which is written by
 * region and changes over time. Emergency numbers are the same ones verified
 * for the solo-travel guide (112, 1363, 1091/181, 139).
 *
 * Business facts, all confirmed by Dhruv on 25 Oct 2026: 7,900+ travellers
 * hosted (the figure shown across the site), 24/7 support for guests during
 * their trip, and drivers and hotels chosen by the company itself.
 */

const title = "Is India Safe for Tourists? An Honest Answer";
const description =
  "Is India safe for tourists? An honest answer from a Jaipur tour operator: real risks, common scams, women's safety, emergency numbers and how a private trip helps.";
const pagePath = "/travel-guide/is-india-safe-for-tourists";
const heroImage = "/images/destinations/agra-taj-mahal.webp";
const datePublished = "2026-10-25";
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
  { name: "Is India Safe for Tourists?", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Is India safe for tourists?",
    answer:
      "For most visitors on the standard routes, yes. Millions of tourists visit India every year and the problems they meet are mostly everyday ones: overcharging, touts, pickpocketing in crowds, stomach upsets and heavy traffic. More serious incidents are far less common but do happen, so sensible habits matter, and women travelling alone should plan with extra care.",
  },
  {
    question: "Is India safe for American tourists?",
    answer:
      "American visitors face the same risks as other international tourists, and the same habits apply. Government advice for India is written by region and changes over time, so read the current US State Department advice for the specific places on your route before you book.",
  },
  {
    question: "Is it safe to travel in India as a woman?",
    answer:
      "Many women travel India, alone and in groups, and have excellent trips. Many also report unwanted attention such as staring, photo requests and sometimes harassment. Arriving in daylight, using pre-booked transport, choosing well-reviewed hotels and travelling with a driver and guide all reduce the risk. Our solo travel guide covers this in more detail.",
  },
  {
    question: "Is Rajasthan safe for tourists?",
    answer:
      "Rajasthan is one of India's most visited regions and has well-established tourist infrastructure, including hotels, drivers and guides used to international visitors. The same sensible habits apply as anywhere in India: use pre-booked transport, agree prices in advance and buy tickets from official sources.",
  },
  {
    question: "Is it safe to take taxis and rickshaws in India?",
    answer:
      "Most rides are uneventful, but street taxis and rickshaws are where overcharging happens. Pre-booked cars and app-based rides remove the haggling, and a private driver on a tour removes the question altogether.",
  },
  {
    question: "Is the tap water safe to drink in India?",
    answer:
      "No. Stick to sealed bottled water, boiled or properly filtered water, including for brushing your teeth, and be careful with ice. Our health guide covers food and water in more detail.",
  },
  {
    question: "What support do I get if something goes wrong on my trip?",
    answer:
      "Guests travelling with us have 24/7 support from our team throughout the trip. If you have a problem you can call or message us at any hour and we will do everything we can to solve it, from rebooking a transfer to getting you to a doctor. For anything urgent, call 112 first.",
  },
  {
    question: "Should I buy travel insurance for India?",
    answer:
      "Yes. Take a policy with medical cover and emergency evacuation, and check that it covers every region on your route. Cover can differ by region, so confirm with your insurer when you send them your itinerary.",
  },
];

export default function IsIndiaSafePage() {
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
          imageAlt="The Taj Mahal framed by a sandstone archway, Agra"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Is India Safe for Tourists?"
          subheadline="An honest answer from a Jaipur-based tour operator: what actually goes wrong, what to do about it, and how a private trip changes the picture."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question about travelling safely in India before booking with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              For most tourists on the standard routes, India is a trip that goes well.
            </span>{" "}
            Millions of visitors come every year, and what goes wrong is mostly everyday
            hassle: overcharging, touts, pickpockets in crowded places, stomach upsets and
            hair-raising traffic. Serious incidents are far less common, but they do happen, so
            it pays to travel with a little preparation. That is the honest answer, and the
            rest of this guide explains what to do with it.
          </ArticleP>
          <ArticleP>
            We are a family-run tour operator based in Jaipur, and we have been arranging
            private trips across India, Nepal and Bhutan since 2007. We have hosted more than
            7,900 travellers, so what follows comes from what actually happens on the ground
            rather than from a brochure.
          </ArticleP>

          <ArticleH2>What Actually Goes Wrong for Tourists in India?</ArticleH2>
          <ArticleP>
            In our experience, nearly all problems fall into a short list. Knowing it in advance
            takes most of the sting out of it.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">Touts and commissions.</span> Someone at a station or monument offers to be your guide, or tells you the place you want is &quot;closed today&quot; and steers you to a shop. Politely decline and keep walking.</li>
            <li><span className="font-semibold text-ink">Overcharging.</span> Street taxis and rickshaws quote foreigners higher prices. Agree the fare before you get in, or use a pre-booked car or an app-based ride.</li>
            <li><span className="font-semibold text-ink">Gem, carpet and &quot;government&quot; shop pressure.</span> A friendly stranger or driver suggests a stop where you will be pushed to buy. You never have to go in.</li>
            <li><span className="font-semibold text-ink">Fake ticket sellers.</span> At major monuments, buy tickets from the official counter or the official website, not from people approaching you outside.</li>
            <li><span className="font-semibold text-ink">Pickpocketing.</span> It happens in crowded markets, stations and festivals, as in any big city. Carry only what you need and keep your phone out of back pockets.</li>
            <li><span className="font-semibold text-ink">Stomach upsets.</span> By far the most common health issue. Drink sealed or filtered water and choose food that is cooked fresh and served hot. See our <Link href="/travel-guide/india-health-vaccination-guide" className="text-maroon underline">health guide</Link>.</li>
            <li><span className="font-semibold text-ink">Traffic.</span> Roads are busy and driving habits differ from home. Cross carefully, and avoid driving yourself.</li>
          </ArticleUL>

          <ArticleH2>Is India Safe for Women Travelling Alone?</ArticleH2>
          <ArticleP>
            Many women travel India alone and have excellent trips, and many also report
            unwanted attention such as staring, requests for photographs, comments and, in some
            places, harassment. Both are real, so it is worth planning for the second.
          </ArticleP>
          <ArticleUL>
            <li>Arrive in new cities in daylight, and use pre-booked or app-based transport after dark.</li>
            <li>Choose hotels with good recent reviews from other women, and share your live location with someone at home.</li>
            <li>Dress modestly. It reduces attention and is also respectful at religious sites.</li>
            <li>If a situation feels wrong, leave it. You do not owe anyone politeness at the cost of your comfort.</li>
          </ArticleUL>
          <ArticleP>
            Travelling with a private driver and guide changes the experience considerably, because
            you are never negotiating a ride or waiting alone for transport. Our{" "}
            <Link href="/travel-guide/solo-travel-india-guide" className="text-maroon underline">
              solo travel guide
            </Link>{" "}
            goes into more detail for women travelling alone.
          </ArticleP>

          <ArticleMidCTA
            text="Want a trip planned around your pace and comfort?"
            href="/private-tours-of-india"
            linkLabel="See how our private tours work"
          />

          <ArticleH2>How Does a Private Tour Change the Risk?</ArticleH2>
          <ArticleP>
            Most of the problems above come from being on your own in busy places with strangers
            who want your money. A private trip takes away most of those situations.
          </ArticleP>
          <ArticleUL>
            <li><span className="font-semibold text-ink">You have your own driver and guide.</span> No haggling with street taxis, no wondering whether a ride is the right price, and someone who knows each place with you.</li>
            <li><span className="font-semibold text-ink">We choose the hotels and drivers ourselves.</span> They are people and properties we know and book directly, not anonymous listings.</li>
            <li><span className="font-semibold text-ink">Tickets and entry are handled.</span> You avoid the fake sellers and the queues.</li>
            <li><span className="font-semibold text-ink">You have 24/7 support.</span> Guests can call or message us at any hour during the trip, and we will do our best to solve whatever has come up.</li>
          </ArticleUL>

          <ArticleH2>What About Government Travel Advice?</ArticleH2>
          <ArticleP>
            Government travel advice for India is written by region, not for the country as a
            whole, and it is updated from time to time. Before you book any trip, read the
            current advice from your own government for the specific places on your route:
          </ArticleP>
          <ArticleUL>
            <li>
              <a href="https://travel.state.gov" target="_blank" rel="noopener noreferrer" className="text-maroon underline">US State Department travel advisories</a>
            </li>
            <li>
              <a href="https://www.gov.uk/foreign-travel-advice/india" target="_blank" rel="noopener noreferrer" className="text-maroon underline">UK Foreign Office advice for India</a>
            </li>
            <li>
              <a href="https://www.smartraveller.gov.au/destinations/asia/india" target="_blank" rel="noopener noreferrer" className="text-maroon underline">Australian Smartraveller advice for India</a>
            </li>
            <li>
              <a href="https://travel.gc.ca/destinations/india" target="_blank" rel="noopener noreferrer" className="text-maroon underline">Canadian travel advice for India</a>
            </li>
          </ArticleUL>
          <ArticleP>
            Also check that your travel insurance covers every region on your route. Send us your
            planned stops and we will talk through each one with you before you book.
          </ArticleP>

          <ArticleH2>Is Any Time of Year Harder?</ArticleH2>
          <ArticleP>
            Safety is partly about season. Heat in Rajasthan and the plains from April to June
            can be punishing, heavy monsoon rain can slow road and rail travel, and Delhi&apos;s
            air quality is often poor between November and January. Our{" "}
            <Link href="/best-time-to-visit-india" className="text-maroon underline">
              best-time-to-visit guide
            </Link>{" "}
            shows what each month feels like, region by region.
          </ArticleP>

          <ArticleH2>Ten Habits That Keep Most Trips Trouble-Free</ArticleH2>
          <ArticleUL>
            <li>Buy travel insurance with medical cover and emergency evacuation.</li>
            <li>Drink only sealed, boiled or filtered water.</li>
            <li>Agree prices before you start any ride or service.</li>
            <li>Buy monument tickets from official counters or websites.</li>
            <li>Keep copies of your passport and visa, stored separately from the originals.</li>
            <li>Use a money belt or a secure bag in crowds, and carry limited cash.</li>
            <li>Save your hotel and driver numbers in your phone.</li>
            <li>Do not accept food or drink from strangers.</li>
            <li>Be wary of anyone who says an attraction is closed or has moved.</li>
            <li>Trust your instincts. Leave any situation that feels wrong.</li>
          </ArticleUL>

          <ArticleH2>Emergency Numbers Worth Saving</ArticleH2>
          <ArticleUL>
            <li><span className="font-semibold text-ink">112</span> — the national emergency number. It connects to police, fire and ambulance, and can be dialled even without a SIM.</li>
            <li><span className="font-semibold text-ink">1363</span> — the Ministry of Tourism&apos;s 24-hour tourist helpline, which advises visitors in twelve languages including English. It is a guidance line rather than an emergency service, so call 112 first for anything urgent.</li>
            <li><span className="font-semibold text-ink">1091</span> — the women-in-distress helpline, with 181 also used in many states.</li>
            <li><span className="font-semibold text-ink">139</span> — Indian Railways help, for problems on a train.</li>
          </ArticleUL>
          <ArticleP>
            A foreign SIM roaming in India may not connect to short codes such as 1363. If a
            number will not go through, ask your hotel to call for you, and keep our number and
            your driver&apos;s saved as a fallback.
          </ArticleP>

          <ArticleH2>The Bottom Line</ArticleH2>
          <ArticleP>
            India rewards preparation. Know the common scams, drink safe water, insure the trip,
            check your own government&apos;s advice, and travel with people who handle the awkward
            parts for you. If you would like a trip built around exactly that, tell us your dates
            and route and we will reply within 24 hours.
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
          headline="Travel India With Support Behind You."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests, with your own guide and driver and 24/7 support. Tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question about travelling safely in India before booking with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
