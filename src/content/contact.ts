import type { Highlight } from "@/components/destinations/HighlightsStrip";
import type { FaqItem } from "@/lib/seo/faq-schema";

export const contactWhyPlanWithUs: Highlight[] = [
  {
    title: "18+ Years of Local Expertise",
    description:
      "Founded in 2008 and based in Jaipur — every itinerary is built by people who live where you're travelling.",
  },
  {
    title: "Personalised, Not Fixed Packages",
    description:
      "Every trip is built around your dates, interests and budget, not slotted into a pre-set group tour.",
  },
  {
    title: "English-Speaking Expert Guides",
    description:
      "Local guides who know the history and can navigate cultural questions naturally, in fluent English.",
  },
  {
    title: "Support Throughout Your Trip",
    description:
      "A direct WhatsApp line to our team for the full length of your journey, not just before you book.",
  },
  {
    title: "Handpicked Heritage Hotels",
    description:
      "We personally vet every property we recommend — real palaces and forts, not generic hotel chains.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Your quote shows exactly what's included, with no hidden fees added after you've committed.",
  },
] as const;

export const contactFaqs: FaqItem[] = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer:
      "We reply to WhatsApp messages within 2 hours during business hours, and to emails within 12 hours. For urgent enquiries, WhatsApp is the fastest way to reach us.",
  },
  {
    question: "Do I need to pay anything to get a quote?",
    answer:
      "No — sending an enquiry and receiving a tailored itinerary and quote is completely free, with no obligation to book.",
  },
  {
    question: "Can you help with group or corporate bookings?",
    answer:
      "Yes, we regularly arrange group tours, family reunions, and corporate incentive trips. Mention your group size in the form and we'll put together options suited to larger parties.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Your rough travel dates, number of travellers, which destinations interest you, and your budget range help us the most — but even a general enquiry with just your dates in mind is a perfectly good place to start.",
  },
  {
    question: "Do you book flights, or only local travel within India?",
    answer:
      "Our focus is on private, in-country travel — hotels, guides, drivers and experiences across India, Nepal and Bhutan. We don't book international flights, but we're happy to advise on arrival and departure timing once your itinerary is set.",
  },
] as const;
