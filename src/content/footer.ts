export const footerExploreLinks = [
  { label: "Destinations (India)", href: "/destinations" },
  { label: "Destinations (Nepal)", href: "/destinations/nepal" },
  { label: "Popular Tours", href: "/packages" },
  { label: "Fleet & Car Rental", href: "/car-rental" },
  { label: "Travel by Month", href: "/best-time-to-visit" },
] as const;

export const sisterCompanies = [
  { label: "Palace on Wheels", href: "https://palaceonwheelstour.com" },
  { label: "Rajasthan Travel Agency", href: "https://rajasthantravelagency.com" },
] as const;

export const footerCompanyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/travel-guide" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/cancellation-policy-and-terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap.xml" },
] as const;

// Real URLs pending from the user — using "#" per their explicit instruction until supplied.
export const socialLinks = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "TripAdvisor", href: "#", icon: "tripadvisor" },
] as const;
