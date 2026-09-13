/**
 * Maps every nav href to its exact label text (extracted from nav.ts).
 * Used by the Coming Soon catch-all routes so placeholder pages show the
 * real nav wording ("Leh & Ladakh") instead of a crude slug-to-title guess
 * ("Leh Ladakh").
 */
export const NAV_LABELS: Record<string, string> = {
  "/destinations/rajasthan": "Rajasthan",
  "/destinations/delhi": "Delhi",
  "/destinations/agra": "Agra",
  "/destinations/varanasi": "Varanasi",
  "/destinations/ranthambore": "Ranthambore",
  "/destinations/leh-ladakh": "Leh & Ladakh",
  "/destinations/srinagar-kashmir": "Srinagar & Kashmir",
  "/destinations/himachal": "Himachal (Manali & Shimla)",
  "/destinations/rishikesh-haridwar": "Rishikesh & Haridwar",
  "/destinations/darjeeling": "Darjeeling",
  "/destinations/goa": "Goa",
  "/destinations/mumbai": "Mumbai",
  "/destinations/kerala": "Kerala",
  "/destinations/madurai": "Madurai",
  "/destinations/chennai": "Chennai",
  "/destinations/amritsar": "Amritsar",
  "/destinations/kathmandu": "Kathmandu",
  "/destinations/pokhara": "Pokhara",
  "/destinations/chitwan": "Chitwan",
  "/destinations/nagarkot": "Nagarkot",
  "/destinations/lumbini": "Lumbini",
  "/destinations/everest-region": "Everest Region",
  "/destinations/thimphu": "Thimphu",
  "/destinations/paro": "Paro",
  "/destinations/punakha": "Punakha",

  "/tours/golden-triangle-tour": "Golden Triangle Tour",
  "/tours/rajasthan-tours": "Rajasthan Tours",
  "/tours/north-india-tours": "North India Tours",
  "/tours/south-india-tours": "South India Tours",
  "/tours/kerala-tours": "Kerala Tours",
  "/tours/kashmir-ladakh-tours": "Kashmir & Ladakh Tours",
  "/tours/taj-mahal-tours": "Taj Mahal Tours",
  "/tours/nepal-tours": "Nepal Tours",
  "/tours/bhutan-tours": "Bhutan Tours",
  "/tours/india-nepal-tours": "India & Nepal Tours",
  "/tours/india-nepal-bhutan-tours": "India, Nepal & Bhutan",
  "/tours/nepal-bhutan-tours": "Nepal & Bhutan Tours",
  "/tours/golden-triangle-tour-udaipur": "Golden Triangle Tour with Udaipur",
  "/tours/golden-triangle-tour-varanasi": "Golden Triangle Tour with Varanasi",
  "/tours/golden-triangle-tour-ranthambore": "Golden Triangle Tour with Ranthambore",
  "/tours/golden-triangle-tour-ajmer-pushkar": "Golden Triangle Tour with Ajmer & Pushkar",
  "/tours/rajasthan-highlights": "Rajasthan Highlights",
  "/tours/north-india-highlights": "North India Highlights",
  "/tours/india-highlights": "India Highlights",
  "/tours/3-5-day-tours": "3–5 Day Tours",
  "/tours/6-9-day-tours": "6–9 Day Tours",
  "/tours/10-14-day-tours": "10–14 Day Tours",
  "/tours/15-plus-day-tours": "15+ Day Tours",
  "/tours/wildlife-tours": "Wildlife Tours",

  "/experiences/heritage-tours": "Heritage Tours",
  "/experiences/palace-fort-tours": "Palace & Fort Tours",
  "/experiences/unesco-heritage-sites": "UNESCO Heritage Sites",
  "/experiences/cultural-tours": "Cultural Tours",
  "/experiences/village-experiences": "Village Experiences",
  "/experiences/tiger-safari-tours": "Tiger Safari Tours",
  "/experiences/bird-watching": "Bird Watching",
  "/experiences/nature-landscape": "Nature & Landscape",
  "/experiences/national-parks": "National Parks",
  "/experiences/spiritual-india": "Spiritual India",
  "/experiences/varanasi-ganges": "Varanasi & Ganges",
  "/experiences/buddhist-tours": "Buddhist Tours",
  "/experiences/yoga-wellness": "Yoga & Wellness",
  "/experiences/temple-tours": "Temple Tours",
  "/experiences/luxury-india": "Luxury India",
  "/experiences/luxury-rajasthan": "Luxury Rajasthan",
  "/experiences/honeymoon-tours": "Honeymoon Tours",
  "/experiences/romantic-getaways": "Romantic Getaways",
  "/experiences/palace-experiences": "Palace Experiences",
  "/experiences/himalayan-adventures": "Himalayan Adventures",
  "/experiences/trekking": "Trekking",
  "/experiences/desert-safari": "Desert Safari",
  "/experiences/rafting": "Rafting",
  "/experiences/adventure-tours": "Adventure Tours",
  "/experiences/food-cooking": "Food & Cooking",
  "/experiences/photography-tours": "Photography Tours",
  "/experiences/festival-tours": "Festival Tours",
  "/experiences/family-holidays": "Family Holidays",
  "/experiences/solo-travel": "Solo Travel",

  "/car-rental/sedan": "Sedan",
  "/car-rental/suv": "SUV",
  "/car-rental/tempo-traveller": "Tempo Traveller",
  "/car-rental/luxury-cars": "Luxury Cars",
  "/car-rental/coaches": "Coaches",

  "/best-time-to-visit-india/january": "January",
  "/best-time-to-visit-india/february": "February",
  "/best-time-to-visit-india/march": "March",
  "/best-time-to-visit-india/april": "April",
  "/best-time-to-visit-india/may": "May",
  "/best-time-to-visit-india/june": "June",
  "/best-time-to-visit-india/july": "July",
  "/best-time-to-visit-india/august": "August",
  "/best-time-to-visit-india/september": "September",
  "/best-time-to-visit-india/october": "October",
  "/best-time-to-visit-india/november": "November",
  "/best-time-to-visit-india/december": "December",

  "/travel-guide": "Travel Guide",
};

/**
 * Category label + parent hub path for each top-level section, used for the
 * Coming Soon page's breadcrumb and "back to hub" link.
 */
export const CATEGORY_META: Record<string, { label: string; hubPath: string; hubLabel: string }> = {
  destinations: { label: "Destinations", hubPath: "/destinations", hubLabel: "All Destinations" },
  packages: { label: "Tours & Packages", hubPath: "/tours", hubLabel: "All Tour Packages" },
  themes: { label: "Experiences", hubPath: "/experiences", hubLabel: "All Experiences" },
  "car-rental": { label: "Car Rental", hubPath: "/car-rental", hubLabel: "View All Fleet" },
  "best-time-to-visit-india": {
    label: "Travel by Month",
    hubPath: "/best-time-to-visit-india",
    hubLabel: "Full Travel Calendar",
  },
};

/** Fallback for a slug with no exact nav label match: turns "leh-ladakh" into "Leh Ladakh". */
export function titleCaseFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
