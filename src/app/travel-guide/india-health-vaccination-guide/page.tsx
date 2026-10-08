import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleByline, AuthorBioCard, ArticleBody, ArticleH2, ArticleP, ArticleUL } from "@/components/travel-guide/ArticleBody";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { ArticleTopCTA } from "@/components/travel-guide/ArticleTopCTA";
import { ArticleMidCTA } from "@/components/travel-guide/ArticleMidCTA";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { articleJsonLd } from "@/lib/seo/article-schema";
import { faqJsonLd, type FaqItem } from "@/lib/seo/faq-schema";
import { FAQSection } from "@/components/destinations/FAQSection";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

/**
 * DRAFT CONTENT — deliberately general and cautious, per the site's own
 * decision to keep health content light on specifics. This is informational
 * travel-planning content, not medical advice, and stays that way
 * throughout: no medication names, no dosing, no diagnosis. Facts
 * (which vaccines CDC/WHO commonly recommend for India, that no vaccine is
 * required for entry except yellow-fever-transit cases, that malaria
 * prevention is prescription-based) were verified via search against
 * CDC's own India destination page and Yellow Book rather than assumed.
 * Every specific recommendation is attributed to "your doctor or a travel
 * health clinic" rather than stated as this agency's own advice, and the
 * article links out to CDC/WHO rather than positioning this site as a
 * medical authority. Content here should be reviewed periodically against
 * CDC's current India page, since specific vaccine recommendations do
 * shift over time.
 */

const title = "India Health & Vaccination Guide: What to Know Before You Travel";
const description =
  "General health and vaccination guidance for international travellers to India — commonly recommended vaccines, food and water safety, malaria precautions, and when to see a travel health clinic. Not a substitute for medical advice.";
const pagePath = "/travel-guide/india-health-vaccination-guide";
const heroImage = "/images/destinations/rishikesh-2.webp";
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
  { name: "Health & Vaccination Guide", path: pagePath },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need any vaccines to enter India?",
    answer:
      "No vaccine is legally required for entry, with one exception: proof of yellow fever vaccination is required if you've been in a country with risk of yellow fever transmission in the 6 days before arriving. Beyond that legal requirement, several vaccines are commonly recommended for general health protection — see your doctor or a travel health clinic to discuss what's right for your specific trip.",
  },
  {
    question: "How far ahead of my trip should I see a doctor?",
    answer:
      "4 to 6 weeks is generally recommended, since some vaccines need time to become fully effective or require more than one dose spaced weeks apart. If you're travelling sooner than that, it's still worth a visit — some protection is better than none, and a doctor can advise on what's still worthwhile at short notice.",
  },
  {
    question: "Is it safe to eat street food in India?",
    answer:
      "Millions of travellers enjoy Indian street food safely by using the same judgment they would anywhere — choosing stalls with high turnover and visible hygiene, food that's cooked fresh in front of you and served hot, and avoiding anything that's been sitting out. It's a personal risk tolerance question rather than a strict yes-or-no, and your guide can point you toward vetted options if you'd rather not guess.",
  },
  {
    question: "Do I need anti-malarial medication for my trip?",
    answer:
      "That depends on which regions you're visiting, the season, and your own medical history — it's a prescription decision for your doctor to make with you, not something we can advise on. Mention your specific itinerary when you see them, since malaria risk varies significantly by region and altitude within India.",
  },
  {
    question: "What happens if I get sick during my trip?",
    answer:
      "Major Indian cities have private hospitals with high standards of care, and your guide and driver can help you reach one quickly if needed — that's part of why we keep a direct WhatsApp line open throughout your trip. For anything beyond immediate logistics, travel insurance with medical coverage is genuinely worth having, since we can help you get to care but can't provide medical advice ourselves.",
  },
  {
    question: "Can I bring my regular prescription medication to India?",
    answer:
      "Generally yes, kept in its original packaging with enough for your full trip plus a buffer. A letter from your doctor describing your condition and medications is worth carrying too. Check with your doctor or pharmacist about any medication-specific rules, since this varies by drug and isn't something we can advise on.",
  },
  {
    question: "Is altitude sickness a concern on an India trip?",
    answer:
      "Only if your itinerary includes higher-altitude regions like Ladakh or parts of Kashmir — it isn't a factor for Rajasthan, the Golden Triangle, or most of the plains. If your trip does include altitude, a gradual ascent with a rest day built in helps considerably, and it's worth discussing your plans with your doctor beforehand if you have any relevant health conditions.",
  },
];

export default function IndiaHealthVaccinationGuidePage() {
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
          imageAlt="The Lakshman Jhula suspension bridge over the Ganges, Rishikesh"
          breadcrumbs={breadcrumbs}
          eyebrow="Travel Guide"
          headline="Health & Vaccination Guide for India"
          subheadline="General guidance on staying well during your trip — what to check with your doctor before you go, and sensible precautions once you're here."
        />

        <ArticleByline
          authorName="Dhruv Poonia"
          authorRole="Digital & Marketing Manager, Colourful Indian Holidays"
          authorUrl="https://www.linkedin.com/in/dhruv-poonia-4b4400288/"
          datePublished={datePublished}
          dateModified={dateModified}
        />

        <ArticleTopCTA whatsappMessage="Hi! I have a question before booking my trip with Colourful Indian Holidays." />

        <ArticleBody>
          <ArticleP>
            <span className="font-semibold text-ink">
              This guide is general travel-planning information, not medical advice.
            </span>{" "}
            We&apos;re a tour operator, not a medical practice, and every specific recommendation
            below should be confirmed with your own doctor or a travel health clinic, who can
            account for your personal medical history, current health guidance, and your specific
            itinerary. For the most current official guidance, the{" "}
            <a
              href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/india"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline"
            >
              CDC&apos;s India travel health page
            </a>{" "}
            and the{" "}
            <a
              href="https://www.who.int/travel-advice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline"
            >
              World Health Organization
            </a>{" "}
            are the authoritative sources, and both are updated more frequently than any single
            article can keep pace with.
          </ArticleP>

          <ArticleH2>See a Doctor or Travel Health Clinic Before You Go</ArticleH2>
          <ArticleP>
            The single most useful thing you can do health-wise before an India trip is book an
            appointment with your doctor or a dedicated travel health clinic 4 to 6 weeks ahead of
            departure. This gives enough time for any recommended vaccines to take effect, some of
            which require more than one dose spaced weeks apart. Bring your specific itinerary to
            that appointment — recommendations genuinely differ between a week in Delhi and Agra,
            a rural wildlife safari, or a longer trip that includes rural Rajasthan or a Himalayan
            region, since exposure risk varies by where you&apos;re actually going and for how long.
          </ArticleP>

          <ArticleH2>Travelling With Children, or While Pregnant</ArticleH2>
          <ArticleP>
            If you&apos;re travelling with young children, or are pregnant, it&apos;s worth raising this
            specifically when you see your doctor or travel clinic, since some vaccines and
            precautions are handled differently for these groups — a few vaccines aren&apos;t given to
            infants under a certain age, and some general precautions (certain medications,
            specific food and water advice) carry additional considerations during pregnancy.
            This isn&apos;t something a general guide like this one can responsibly cover in detail;
            it genuinely needs a conversation with a professional who knows your specific
            situation, ideally well before you finalise travel dates.
          </ArticleP>

          <ArticleH2>What Vaccines Are Commonly Discussed for India Travel?</ArticleH2>
          <ArticleP>
            No vaccine is legally required to enter India, with one specific exception: travellers
            arriving from a country with risk of yellow fever transmission must show proof of
            yellow fever vaccination. Beyond that legal requirement, health authorities including
            the US CDC commonly discuss the following with travellers to India — this is general
            awareness, not a personal recommendation, and which of these (if any) make sense for
            you is a conversation for your own doctor:
          </ArticleP>
          <ArticleUL>
            <li>Being up to date on routine vaccines you&apos;d already have as part of normal healthcare — measles-mumps-rubella (MMR), tetanus-diphtheria-pertussis, and polio among them</li>
            <li>Hepatitis A, commonly discussed for most travellers to India regardless of trip style, since it spreads through contaminated food and water</li>
            <li>Hepatitis B, typically discussed for longer stays or specific activities that carry exposure risk</li>
            <li>Typhoid, commonly discussed for most travellers given how food and water are typically sourced while travelling</li>
            <li>Japanese encephalitis, typically discussed for longer stays in rural areas or during specific transmission seasons, since it&apos;s spread by mosquitoes in agricultural regions</li>
            <li>Rabies, sometimes discussed for travellers likely to have significant outdoor exposure or animal contact, given India&apos;s population of stray dogs in many areas</li>
          </ArticleUL>
          <ArticleP>
            This list is a starting point for a conversation with a professional, not a checklist
            to work through alone — your own health history, age, and exact itinerary all factor
            into what actually makes sense for you. It&apos;s also worth noting that recommendations
            can and do change over time as disease patterns shift, which is exactly why we point
            to CDC and WHO resources above rather than treating this list as fixed and final.
          </ArticleP>

          <ArticleH2>Malaria & Mosquito-Borne Illness</ArticleH2>
          <ArticleP>
            Parts of India carry a risk of malaria and other mosquito-borne illnesses, and there&apos;s
            no vaccine against malaria itself — protection comes from a combination of prescription
            antimalarial medication (a decision for your doctor, based on your specific itinerary
            and region) and avoiding mosquito bites in the first place. Practical, low-effort steps
            that genuinely help: use insect repellent containing DEET or a comparable active
            ingredient, wear long sleeves and trousers in the evening when mosquitoes are most
            active, and sleep in air-conditioned or properly screened rooms where possible, which
            most hotels on our itineraries already provide.
          </ArticleP>

          <ArticleH2>Food & Water Safety</ArticleH2>
          <ArticleP>
            Traveller&apos;s diarrhoea is the most common health issue visitors to India actually
            experience, and it&apos;s also the most preventable through simple habits rather than
            medication. Stick to bottled, boiled, or properly filtered water, including for
            brushing teeth, and be cautious with ice unless you know it&apos;s made from safe water.
            Food that&apos;s cooked fresh and served hot is generally lower-risk than anything that&apos;s
            been sitting at room temperature, and peeling your own fruit is safer than
            pre-cut fruit from an unknown source. None of this means avoiding India&apos;s food scene —
            it means applying the same common sense you&apos;d use travelling anywhere with different
            food safety standards than home.
          </ArticleP>
          <ArticleP>
            On our itineraries specifically, every hotel we book is one we know directly rather
            than an anonymous listing, and bottled water is standard practice at meals and in your
            room throughout the trip. Your guide can also point you toward well-regarded local
            restaurants that international travellers have eaten at safely many times before,
            which takes some of the guesswork out of trying new food without simply avoiding it
            altogether.
          </ArticleP>

          <ArticleH2>Sun, Heat & Altitude</ArticleH2>
          <ArticleP>
            India&apos;s climate varies enormously by region and season, and the health precautions
            that matter shift accordingly. In Rajasthan and much of the plains during the hotter
            months, heat and sun exposure are the more immediate concern — staying hydrated,
            wearing sun protection, and pacing outdoor sightseeing around the cooler parts of the
            day matter more than anything on a vaccine schedule. If your itinerary includes
            higher-altitude regions like Ladakh or parts of the Kashmir Valley, altitude
            acclimatisation becomes the relevant consideration instead — a gradual ascent and a
            rest day built into the itinerary helps considerably, and it&apos;s worth discussing your
            planned altitude and pace with your doctor beforehand if you have any relevant health
            conditions.
          </ArticleP>
          <ArticleP>
            Monsoon season (roughly June through September across most of the country, though
            timing shifts by region) brings its own considerations — heavier rainfall can affect
            road conditions and travel times, and standing water after rain can increase
            mosquito-breeding sites, which is one more reason mosquito bite prevention matters
            during and after the monsoon specifically. This is also part of why most of our
            itineraries are built around the October-to-March window rather than the middle of
            summer, independent of any health consideration — it&apos;s simply the more comfortable
            season for sightseeing across most of the country.
          </ArticleP>

          <ArticleH2>Can You Bring Medication From Home?</ArticleH2>
          <ArticleP>
            If you take regular prescription medication, bring enough for your entire trip plus a
            reasonable buffer, kept in its original, clearly labelled packaging rather than a pill
            organiser, especially for anything you&apos;d need to explain at customs. A letter from your
            doctor describing your condition and medications is worth carrying too, particularly
            for anything that might otherwise look unusual to airport security or Indian customs.
            This is general packing advice rather than medical guidance — your own doctor is the
            right person to confirm what you specifically need for the length and nature of your
            trip.
          </ArticleP>

          <ArticleH2>Common Minor Issues & Simple Precautions</ArticleH2>
          <ArticleP>
            Beyond the more serious risks covered above, most travellers&apos; actual health
            experience in India comes down to smaller, manageable things. Jet lag from a long-haul
            flight is worth planning around on your first day or two rather than scheduling
            intensive sightseeing immediately on arrival — several of our itineraries deliberately
            build in a lighter first day for exactly this reason. Heat and humidity, particularly
            outside the cooler October-to-March season, can catch travellers off guard if they&apos;re
            used to a temperate climate; pacing outdoor time, wearing breathable clothing, and
            carrying water are simple, effective habits rather than anything requiring medical
            preparation. And a mild adjustment period for your digestive system when trying new
            foods and water sources is common enough that it&apos;s rarely worth worrying about in
            advance — it typically resolves on its own within a day or two for most travellers who
            follow sensible food and water precautions.
          </ArticleP>

          <ArticleH2>A Basic Travel Health Kit</ArticleH2>
          <ArticleP>
            Packing a small, familiar health kit is worth doing regardless of your specific
            itinerary — not because India requires anything unusual, but because having your own
            trusted basics on hand beats searching for an equivalent product in an unfamiliar
            pharmacy at an inconvenient hour. Sensible, general items include: any over-the-counter
            remedies you&apos;d normally reach for at home, a basic first-aid kit (plasters, antiseptic
            wipes, blister care if you&apos;ll be doing a lot of walking), sunscreen and insect
            repellent, and hand sanitiser for situations where washing facilities aren&apos;t
            immediately available. This is general packing advice, not a medical recommendation —
            what belongs in your specific kit is worth a quick conversation with your pharmacist or
            doctor alongside your travel health appointment.
          </ArticleP>

          <ArticleH2>Medical Care & Travel Insurance</ArticleH2>
          <ArticleP>
            India&apos;s major cities have private hospitals with genuinely high standards of care,
            and international travellers, expatriates and medical tourists alike routinely use
            them. Rural areas and smaller towns have more limited facilities, which is one reason
            an itinerary&apos;s routing matters even from a health-planning perspective. Regardless of
            where you&apos;re headed, travel insurance that includes medical coverage and emergency
            evacuation is genuinely worth having — not something we arrange on your behalf, but a
            gap worth closing yourself before you travel rather than after something&apos;s already
            gone wrong.
          </ArticleP>

          <ArticleH2>What We Can Help With, and What We Can&apos;t</ArticleH2>
          <ArticleP>
            We&apos;re honest about where our expertise starts and stops. We can build your itinerary
            around a sensible pace, route you through cities with better medical infrastructure
            when it matters, recommend hotels with air conditioning and reliable facilities, and
            keep a direct WhatsApp line open throughout your trip so your guide or driver can get
            you to care quickly if you need it. What we can&apos;t do is give you medical advice, tell
            you which vaccines or medications you personally need, or replace a conversation with
            your own doctor. Treat this guide as a starting point for that conversation, not a
            substitute for it.
          </ArticleP>
          <ArticleP>
            If you have a health-related question specific to your itinerary — say, whether a
            particular region on your route carries any particular consideration, or how much
            walking a specific day involves — that&apos;s exactly the kind of practical, logistics-level
            question we&apos;re happy to help with directly. What we&apos;ll always redirect back to a
            professional is anything that requires medical judgment about your personal health,
            since that&apos;s simply not a call we&apos;re qualified to make on your behalf.
          </ArticleP>

          <ArticleMidCTA
            text="Tell us your route, and we'll build the itinerary around it."
            href="/tours"
            linkLabel="See our tour packages"
          />

          <ArticleH2>Bringing It All Together</ArticleH2>
          <ArticleP>
            The health side of planning an India trip is genuinely straightforward once you treat
            it the way you would for any international trip: see a doctor or travel clinic with
            time to spare, get real insurance rather than hoping for the best, and apply
            common-sense food, water and sun precautions once you&apos;re here. None of it should
            overshadow the trip itself — millions of international travellers visit India every
            year and come home simply having had a great time, with a bit of sensible preparation
            behind them rather than constantly at the front of their minds the whole way through.
          </ArticleP>
          <ArticleP>
            If anything in this guide raised a question specific to your own health or your
            planned itinerary, the right next step is the same either way: a direct conversation
            with your own doctor or a travel health clinic, armed with your actual travel dates and
            destinations rather than a generic itinerary. Once that&apos;s sorted, the more enjoyable
            part of planning — where to go, what to see, and how to fit it all into the time you
            have — is exactly where we come in.
          </ArticleP>
        </ArticleBody>

        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions About Health & Vaccinations"
          intro="Straight answers to the questions travellers ask before they go."
          faqs={faqs}
          whatsappMessage="Hi! I have a question before booking my trip with Colourful Indian Holidays."
          topDivider
        />

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
          headline="Health Prep Sorted? Let's Plan the Trip."
          headlineItalic="Tell Us Your Dates."
          subtext="Every itinerary is built privately around your dates and interests — tell us what you have in mind and we'll reply within 24 hours."
          primaryLabel="Plan My Journey"
          primaryHref="/contact"
          whatsappMessage="Hi! I have a question before booking my trip with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
