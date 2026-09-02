import { BUSINESS, SITE_NAME } from "@/lib/seo/business";

/**
 * Embeds a Google Map centred on the business address, searching by name +
 * address so the map matches the actual "Colourful Indian Holidays" Google
 * Business listing (with its own labelled pin) rather than just a bare
 * street address. Uses the public, keyless embed endpoint
 * (maps.google.com/maps?...&output=embed) — no API key or billing required.
 */
export function LocationMap() {
  const address = BUSINESS.address;
  const fullAddress = `${SITE_NAME}, ${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}, India`;
  const query = encodeURIComponent(fullAddress);
  const src = `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="overflow-hidden rounded-3xl border border-sand shadow-sm">
      <iframe
        title="Our office location on Google Maps"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 420 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
