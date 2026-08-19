import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappUrl, mailtoUrl } from "@/lib/whatsapp";

type CTASectionProps = {
  heading?: string;
  description?: string;
  whatsappMessage?: string;
  emailSubject?: string;
};

export function CTASection({
  heading = "Let's Start Planning Your India Journey",
  description = "Tell us where you're travelling from and what you have in mind — we'll reply with a tailored itinerary and quote, usually within 24 hours.",
  whatsappMessage = "Hi! I'd like to plan a tour with Colourful Indian Holidays.",
  emailSubject = "Enquiry: Rajasthan & India Tour",
}: CTASectionProps = {}) {
  return (
    <section
      id="trip-planner-cta"
      className="bg-ink py-20 text-center text-ivory sm:py-28"
    >
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-ivory/80">{description}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={whatsappUrl(whatsappMessage)} external>
              Chat on WhatsApp
            </Button>
            <Button href={mailtoUrl(emailSubject)} external variant="outline">
              Email Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
