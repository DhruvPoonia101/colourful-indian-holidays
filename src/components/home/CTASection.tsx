import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappUrl, mailtoUrl } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section
      id="trip-planner-cta"
      className="bg-ink py-20 text-center text-ivory sm:py-28"
    >
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Let&apos;s Start Planning Your India Journey
          </h2>
          <p className="mt-4 text-ivory/80">
            Tell us where you&apos;re travelling from and what you have in mind — we&apos;ll
            reply with a tailored itinerary and quote, usually within 24 hours.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={whatsappUrl("Hi! I'd like to plan a tour with Colourful Indian Holidays.")}
              external
            >
              Chat on WhatsApp
            </Button>
            <Button
              href={mailtoUrl("Enquiry: Rajasthan & India Tour")}
              external
              variant="outline"
            >
              Email Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
