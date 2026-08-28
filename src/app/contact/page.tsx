import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { HighlightsStrip } from "@/components/destinations/HighlightsStrip";
import { FAQSection } from "@/components/destinations/FAQSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { JourneyCTA } from "@/components/shared/JourneyCTA";
import { contactWhyPlanWithUs, contactFaqs } from "@/content/contact";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-schema";
import { faqJsonLd } from "@/lib/seo/faq-schema";
import { organizationJsonLd } from "@/lib/seo/organization-schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import { DEFAULT_TRUST_BADGES } from "@/content/trust-badges";

const title = "Contact Us | Plan Your India & Rajasthan Trip";
const description =
  "Get in touch with Colourful Indian Holidays to start planning your private Rajasthan or India tour. WhatsApp, email, or send an enquiry — we typically reply within 2 hours.";
const pagePath = "/contact";
const heroImage = "/images/contact/contact-hero.webp";

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
    type: "website",
    images: [
      {
        url: `${SITE_URL}${heroImage}`,
        width: 1200,
        height: 630,
        alt: "Udaipur City Palace at night, viewed across Lake Pichola",
      },
    ],
  },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact Us", path: pagePath },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(contactFaqs)) }}
      />

      <main>
        {/* 1. Hero */}
        <PageHero
          image={heroImage}
          imageAlt="Udaipur City Palace at night, viewed across Lake Pichola"
          breadcrumbs={breadcrumbs}
          eyebrow="Get in Touch"
          headline="Let's Plan Your India Journey"
          subheadline="Tell us what you have in mind, and our Rajasthan-based travel experts will reply with a tailored itinerary and quote — usually within 24 hours."
          whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
        />

        {/* 2. Why Plan With Us — trust, before the ask */}
        <HighlightsStrip
          eyebrow="Why Plan With Us"
          heading="What You Get Working With Us Directly"
          highlights={contactWhyPlanWithUs}
        />

        {/* 3. Contact Info + Enquiry Form, side by side (merged: options + office/company info) */}
        <section id="enquiry-form" className="border-t border-sand/70 py-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-[380px_1fr] lg:gap-12">
            <div className="lg:order-1">
              <ContactInfoCard />
            </div>
            <div className="lg:order-2">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* 4. FAQ */}
        <FAQSection
          eyebrow="FAQ"
          heading="Common Questions"
          intro="Everything you might want to know before sending an enquiry."
          faqs={contactFaqs}
          whatsappMessage="Hi! I have a question before booking with Colourful Indian Holidays."
          topDivider
        />

        {/* 5. Closing CTA */}
        <JourneyCTA
          backgroundImage="/images/contact/contact-hero.webp"
          eyebrow="Start Your Journey"
          headline="Your India, Nepal & Bhutan Journey Awaits."
          headlineItalic="Where Will You Begin?"
          subtext="Every trip starts with a conversation — tell us what you're picturing, and we'll take it from there."
          primaryLabel="Plan My Journey"
          primaryHref="#enquiry-form"
          whatsappMessage="Hi! I'd like to plan a tour with Colourful Indian Holidays."
          trustBadges={DEFAULT_TRUST_BADGES}
        />
      </main>
    </>
  );
}
