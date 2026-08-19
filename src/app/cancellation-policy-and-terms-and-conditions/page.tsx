import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/LegalPageLayout";
import { BUSINESS, SITE_NAME, SITE_URL } from "@/lib/seo/business";

const pagePath = "/cancellation-policy-and-terms-and-conditions";

export const metadata: Metadata = {
  title: `Terms & Cancellation Policy | ${SITE_NAME}`,
  description: `Booking terms, payment terms and cancellation policy for ${SITE_NAME}.`,
  alternates: {
    canonical: `${SITE_URL}${pagePath}`,
  },
  robots: { index: true, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft sm:text-base">
      {children}
    </ul>
  );
}

export default function TermsAndCancellationPage() {
  return (
    <LegalPageLayout title="Terms &amp; Cancellation Policy" lastUpdated="August 2026">
      <section>
        <H2>1. Booking of a Tour</H2>
        <P>
          To book a tour, we require 30% of the total tour cost as an advance payment to
          proceed with hotel bookings and other arrangements. In addition to this 30%, we
          require the full amount for any air or train ticket bookings that need to be issued.
        </P>
        <P>
          Once we receive your advance payment, we proceed with hotel bookings and begin
          arrangements for your tour, keeping you updated throughout. After hotels are
          confirmed, we&apos;ll email you the booking status, at which point a further 20% of
          the tour cost is due. The remaining 50% balance should be paid before 45 days prior
          to arrival (the commencement of your tour).
        </P>
        <P>
          During the peak season of Christmas and New Year (20 December to 5 January), 100%
          payment is required to confirm your booking.
        </P>
      </section>

      <section>
        <H2>2. Amendments to a Booked Tour</H2>
        <P>
          We don&apos;t encourage changes to confirmed arrangements. However, if you need to
          amend an already-booked tour, we&apos;ll do our best to accommodate changes depending
          on hotel, train and flight availability, along with any cancellation charges those
          providers apply. Changes are subject to a minimum amendment and administration
          charge.
        </P>
      </section>

      <section>
        <H2>3. Cancellation of a Booked Tour</H2>
        <P>
          We wouldn&apos;t recommend cancelling your tour, but we understand there can be valid
          reasons to do so. Cancellations must be notified in writing by email. Depending on
          when we receive your cancellation notice relative to your arrival date, the following
          charges apply:
        </P>
        <UL>
          <li>
            60 days or more before arrival — 20% of the tour cost, plus the cost of any
            non-refundable services (flights, wildlife safaris, etc.)
          </li>
          <li>
            30 to 60 days before arrival — 30% of the tour cost, plus the cost of any
            non-refundable services
          </li>
          <li>
            15 to 30 days before arrival — 50% of the tour cost, plus the cost of any
            non-refundable services
          </li>
          <li>Within 15 days of arrival — no refund</li>
        </UL>
      </section>

      <section>
        <H2>4. Flights, Trains &amp; Wildlife Safaris</H2>
        <P>
          Flight tickets booked through us are non-refundable. Name and date changes may be
          possible depending on the airline&apos;s own policy and charges. We&apos;re not able
          to offer a refund for any flight that&apos;s cancelled or delayed by the airline — this
          is governed entirely by the airline&apos;s own policy.
        </P>
        <P>
          Wildlife safaris booked into any national park or sanctuary are non-refundable, and
          the date cannot be changed or moved to a future booking.
        </P>
        <P>
          Special train journeys — including Palace on Wheels and the Golden Chariot — are
          governed by that train&apos;s own cancellation and refund policy, not the terms above.
        </P>
      </section>

      <section>
        <H2>5. Additional Terms</H2>
        <UL>
          <li>
            During peak season (20 December to 5 January travel dates), the standard
            cancellation policy above does not apply. Some hotels — including the Taj Group,
            Oberoi Group and other luxury properties — may require a non-refundable deposit at
            the time of booking, in which case your refund is limited to what that hotel or
            service provider&apos;s own policy allows.
          </li>
          <li>
            We&apos;re not responsible for refunds relating to unused accommodation, missed
            meals, or airline cancellations that occur during your tour.
          </li>
          <li>Room type allocation is subject to availability, at the hotel&apos;s sole discretion.</li>
        </UL>
      </section>

      <section>
        <H2>6. Payment</H2>
        <P>
          <strong className="text-ink">Online payment via gateway:</strong> Transacting online
          with a credit card on our website is secure — we do not retain your credit card
          details. A 2% bank charge applies to the amount paid, which is added to your final
          payment.
        </P>
        <P>
          <strong className="text-ink">Bank transfer:</strong> Payment can also be made by
          direct bank remittance to our bankers. Bank details are sent to you by email when
          payment is due.
        </P>
      </section>

      <section>
        <H2>7. Other Terms &amp; Conditions</H2>
        <P>
          By booking through {SITE_NAME}, you&apos;re considered to have read and accepted the
          terms set out on this page.
        </P>
        <P>
          {SITE_NAME} acts only as a booking agent on behalf of third-party service providers
          (hotels, flights, trains, safaris and similar), and all such services are provided on
          an &quot;as is&quot; and &quot;as available&quot; basis, governed by the terms and
          conditions of the relevant service provider.
        </P>
        <P>
          We are not liable for circumstances arising from force majeure events — acts of God,
          fire, weather, epidemic, road closures, technical issues and similar — and reserve the
          right to change a schedule, booking or itinerary in the interest of your safety and
          well-being in such situations, without obligation to pay compensation, refund,
          interest or damages.
        </P>
        <P>
          {SITE_NAME} disclaims any implied warranties imputed by the laws of any jurisdiction
          or country, and is subject to the jurisdiction of the courts of Jaipur, Rajasthan,
          India.
        </P>
      </section>

      <section>
        <H2>8. Contact Us</H2>
        <P>
          Questions about these terms or an existing booking can be sent to{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-maroon underline">
            {BUSINESS.email}
          </a>{" "}
          or {BUSINESS.telephone}.
        </P>
      </section>
    </LegalPageLayout>
  );
}
