/**
 * Clear "see the tour" links for informational pages that attract searches
 * (beaches, pilgrimage, festivals, parks) but few bookings. One entry per
 * page path, so copy and links live in one place. Every href is a live,
 * built tour or experience page.
 */
export type TourLink = {
  href: string;
  /** Name of the tour page, used in the button label. */
  label: string;
  title: string;
  text: string;
  /** Optional second link, e.g. a planning guide. */
  secondary?: { href: string; label: string };
};

const TIGER_SECONDARY = {
  href: "/travel-guide/which-tiger-reserve-in-india-and-when-to-go",
  label: "Which tiger reserve, and when to go",
};

export const TOUR_LINKS: Record<string, TourLink> = {
  "/destinations/tamil-nadu-beaches": {
    href: "/tours/tamil-nadu-beaches-tour",
    label: "Tamil Nadu Beaches Tour",
    title: "See this coast on a private tour",
    text: "We plan the Tamil Nadu coast as a private trip with a car and driver. Tell us your dates and we will send a quote.",
  },
  "/destinations/gujarat-beaches": {
    href: "/tours/goa-and-beaches-tours",
    label: "India Beach Tours",
    title: "Planning a beach holiday in India?",
    text: "See our private beach tours, then tell us where you want to go and we will price a route that includes it.",
  },
  "/destinations/maharashtra-beaches": {
    href: "/tours/maharashtra-beaches-tour",
    label: "Maharashtra Beaches Tour",
    title: "See this coast on a private tour",
    text: "We plan the Maharashtra coast as a private trip with a car and driver. Tell us your dates and we will send a quote.",
  },
  "/destinations/maharashtra": {
    href: "/tours/maharashtra-tour",
    label: "Maharashtra Tour",
    title: "Visit Maharashtra on a private tour",
    text: "Our Maharashtra tour is planned around your dates, with a private car and driver. Ask for a quote and we will reply within 24 hours.",
  },
  "/destinations/andaman-islands": {
    href: "/experiences/andaman-beach-honeymoon",
    label: "Andaman Beach Holiday",
    title: "Book the Andamans with us",
    text: "See our Andaman beach holiday, or tell us your dates and we will build the trip around them.",
  },
  "/destinations/thimphu": {
    href: "/tours/bhutan-tours",
    label: "Bhutan Tours",
    title: "See Thimphu on a Bhutan tour",
    text: "Visitors to Bhutan book through a licensed operator. We plan the whole trip for you, from Paro to Thimphu and beyond.",
    secondary: {
      href: "/travel-guide/bhutan-visa-fee-and-best-time-to-visit",
      label: "Bhutan visa, fee and best time to go",
    },
  },
  "/destinations/bandhavgarh": {
    href: "/tours/wildlife-tiger-safari-tours",
    label: "India Tiger Safari Tours",
    title: "Go on a tiger safari with us",
    text: "We plan tiger safaris at Bandhavgarh and other reserves, with the park permits and lodges arranged for you.",
    secondary: TIGER_SECONDARY,
  },
  "/destinations/sariska": {
    href: "/tours/wildlife-tiger-safari-tours",
    label: "India Tiger Safari Tours",
    title: "Go on a tiger safari with us",
    text: "We plan tiger safaris in Rajasthan and across India, with the park permits and lodges arranged for you.",
    secondary: TIGER_SECONDARY,
  },
  "/destinations/rishikesh-haridwar": {
    href: "/experiences/spiritual-india",
    label: "Spiritual India Tour",
    title: "Visit Haridwar and Rishikesh on a private tour",
    text: "Our Spiritual India tour includes Haridwar and Rishikesh, planned around your dates with a private car and guide.",
  },
  "/destinations/amritsar": {
    href: "/experiences/spiritual-india",
    label: "Spiritual India Tour",
    title: "Visit Amritsar on a private tour",
    text: "Our Spiritual India tour includes the Golden Temple, planned around your dates with a private car and guide.",
  },
  "/destinations/varanasi": {
    href: "/tours/golden-triangle-tour-varanasi",
    label: "Golden Triangle with Varanasi",
    title: "Add Varanasi to a private tour",
    text: "See Varanasi as part of a Golden Triangle trip, or ask us to plan the Ganges on its own.",
    secondary: { href: "/experiences/varanasi-ganges-tours", label: "Varanasi and Ganges tours" },
  },
  "/destinations/kolkata": {
    href: "/tours/kolkata-tour",
    label: "Kolkata Tour",
    title: "See Kolkata on a private tour",
    text: "Our Kolkata tour is planned around your dates, with a private car and a local guide.",
  },
  "/destinations/chennai": {
    href: "/tours/chennai-tour",
    label: "Chennai Tour",
    title: "See Chennai on a private tour",
    text: "Our Chennai tour is planned around your dates, with a private car and a local guide.",
    secondary: { href: "/tours/south-india-tours", label: "South India tours" },
  },
  "/destinations/darjeeling": {
    href: "/tours/darjeeling-tour",
    label: "Darjeeling Tour",
    title: "See Darjeeling on a private tour",
    text: "Our Darjeeling tour is planned around your dates, with a private car and a local guide.",
  },
  "/travel-guide/pilgrimage-holiday-destinations-in-india": {
    href: "/experiences/pilgrimage-tours",
    label: "Pilgrimage Tours",
    title: "Plan a pilgrimage trip with us",
    text: "We plan private pilgrimage tours in India, with the route, car and guide arranged around your dates.",
    secondary: { href: "/experiences/spiritual-india", label: "Spiritual India tour" },
  },
  "/travel-guide/monuments-in-rajasthan": {
    href: "/tours/rajasthan-tours",
    label: "Rajasthan Tours",
    title: "See these forts and palaces on a private tour",
    text: "Our Rajasthan tours are planned around the forts and palaces you want most. Tell us your dates and we will send a quote.",
  },
  "/travel-guide/places-to-visit-in-shekhawati": {
    href: "/tours/rajasthan-tours",
    label: "Rajasthan Tours",
    title: "Add Shekhawati to a Rajasthan tour",
    text: "Tell us you want Shekhawati's painted havelis and we will build them into a private Rajasthan route.",
  },
  "/travel-guide/20-best-tourist-places-to-visit-in-india": {
    href: "/tours/india-highlights",
    label: "India Highlights Tour",
    title: "See the highlights on one private tour",
    text: "Our India Highlights tour links the best-known places on this list in one route. Tell us your dates and we will send a quote.",
  },
  "/travel-guide/top-cultural-festivals-in-india": {
    href: "/experiences/festival-tours",
    label: "Festival Tours",
    title: "Plan a trip around a festival",
    text: "We plan private festival tours, timed to the festival dates. Tell us which festival and we will build the trip.",
  },
};
