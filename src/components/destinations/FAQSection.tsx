"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMessageCircle, FiPhone } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/destinations/SectionIntro";
import { BUSINESS } from "@/lib/seo/business";
import { whatsappUrl } from "@/lib/whatsapp";
import type { FaqItem } from "@/lib/seo/faq-schema";

export function FAQSection({
  eyebrow,
  heading,
  intro,
  faqs,
  whatsappMessage = "Hi! I have a question before booking my trip with Colourful Indian Holidays.",
  topDivider = false,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  faqs: FaqItem[];
  whatsappMessage?: string;
  topDivider?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const telHref = `tel:${BUSINESS.telephone.replace(/\s+/g, "")}`;

  return (
    <section className={`py-10 sm:py-14 ${topDivider ? "border-t border-sand/70" : ""}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          <Reveal>
            <SectionIntro
              eyebrow={eyebrow}
              heading={heading}
              maxWidthClassName="max-w-sm"
              headingSizeClassName="text-3xl sm:text-4xl"
            />
            {intro && <p className="mt-5 text-sm leading-relaxed text-ink-soft">{intro}</p>}

            <div className="mt-8 rounded-2xl border border-sand bg-cream p-6">
              <p className="text-sm leading-relaxed text-ink-soft">
                Can&apos;t find your answer? Our team responds within 2 hours on WhatsApp and
                within 12 hours by email.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={whatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-5 py-3 text-sm font-semibold text-ivory transition-all duration-200 hover:scale-[1.03] hover:bg-maroon-dark"
                >
                  <FiMessageCircle aria-hidden="true" className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/40 px-5 py-3 text-sm font-semibold text-maroon transition-all duration-200 hover:scale-[1.03] hover:bg-maroon/5"
                >
                  <FiPhone aria-hidden="true" className="h-4 w-4" />
                  Call Us
                </a>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={faq.question} delay={index * 0.05}>
                  <div
                    className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                      isOpen ? "border-gold/50 bg-cream" : "border-sand bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-display text-base font-semibold text-ink sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-maroon text-ivory" : "border border-sand text-ink-soft"
                        }`}
                      >
                        {isOpen ? (
                          <FiChevronUp aria-hidden="true" className="h-4 w-4" />
                        ) : (
                          <FiChevronDown aria-hidden="true" className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] px-5 pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="overflow-hidden text-sm leading-relaxed text-ink-soft">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
