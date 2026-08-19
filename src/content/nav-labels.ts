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

  "/packages/golden-triangle-tours": "Golden Triangle Tours",
  "/packages/rajasthan-tours": "Rajasthan Tours",
  "/packages/north-india-tours": "North India Tours",
  "/packages/south-india-tours": "South India Tours",
  "/packages/kerala-tours": "Kerala Tours",
  "/packages/kashmir-ladakh-tours": "Kashmir & Ladakh Tours",
  "/packages/taj-mahal-tours": "Taj Mahal Tours",
  "/packages/nepal-tours": "Nepal Tours",
  "/packages/bhutan-tours": "Bhutan Tours",
  "/packages/india-nepal-tours": "India & Nepal Tours",
  "/packages/india-nepal-bhutan-tours": "India, Nepal & Bhutan",
  "/packages/nepal-bhutan-tours": "Nepal & Bhutan Tours",
  "/packages/golden-triangle-tours/delhi-agra-jaipur": "Delhi – Agra – Jaipur",
  "/packages/golden-triangle-tours/delhi-agra-jaipur-udaipur": "Delhi – Agra – Jaipur – Udaipur",
  "/packages/rajasthan-tours/highlights": "Rajasthan Highlights",
  "/packages/north-india-tours/highlights": "North India Highlights",
  "/packages/india-highlights-tours": "India Highlights",
  "/packages/duration/3-5-days": "3–5 Day Tours",
  "/packages/duration/6-9-days": "6–9 Day Tours",
  "/packages/duration/10-14-days": "10–14 Day Tours",
  "/packages/duration/15-plus-days": "15+ Day Tours",
  "/packages/wildlife-tours": "Wildlife Tours",

  "/themes/heritage-tours": "Heritage Tours",
  "/themes/palace-fort-tours": "Palace & Fort Tours",
  "/themes/unesco-heritage-sites": "UNESCO Heritage Sites",
  "/themes/cultural-tours": "Cultural Tours",
  "/themes/village-experiences": "Village Experiences",
  "/themes/tiger-safari-tours": "Tiger Safari Tours",
  "/themes/bird-watching": "Bird Watching",
  "/themes/nature-landscape": "Nature & Landscape",
  "/themes/national-parks": "National Parks",
  "/themes/spiritual-india": "Spiritual India",
  "/themes/varanasi-ganges": "Varanasi & Ganges",
  "/themes/buddhist-tours": "Buddhist Tours",
  "/themes/yoga-wellness": "Yoga & Wellness",
  "/themes/temple-tours": "Temple Tours",
  "/themes/luxury-india": "Luxury India",
  "/themes/luxury-rajasthan": "Luxury Rajasthan",
  "/themes/honeymoon-tours": "Honeymoon Tours",
  "/themes/romantic-getaways": "Romantic Getaways",
  "/themes/palace-experiences": "Palace Experiences",
  "/themes/himalayan-adventures": "Himalayan Adventures",
  "/themes/trekking": "Trekking",
  "/themes/desert-safari": "Desert Safari",
  "/themes/rafting": "Rafting",
  "/themes/adventure-tours": "Adventure Tours",
  "/themes/food-cooking": "Food & Cooking",
  "/themes/photography-tours": "Photography Tours",
  "/themes/festival-tours": "Festival Tours",
  "/themes/family-holidays": "Family Holidays",
  "/themes/solo-travel": "Solo Travel",

  "/car-rental/sedan": "Sedan",
  "/car-rental/suv": "SUV",
  "/car-rental/tempo-traveller": "Tempo Traveller",
  "/car-rental/luxury-cars": "Luxury Cars",
  "/car-rental/coaches": "Coaches",

  "/best-time-to-visit/january": "January",
  "/best-time-to-visit/february": "February",
  "/best-time-to-visit/march": "March",
  "/best-time-to-visit/april": "April",
  "/best-time-to-visit/may": "May",
  "/best-time-to-visit/june": "June",
  "/best-time-to-visit/july": "July",
  "/best-time-to-visit/august": "August",
  "/best-time-to-visit/september": "September",
  "/best-time-to-visit/october": "October",
  "/best-time-to-visit/november": "November",
  "/best-time-to-visit/december": "December",

  "/travel-guide": "Travel Guide",
};

/**
 * Category label + parent hub path for each top-level section, used for the
 * Coming Soon page's breadcrumb and "back to hub" link.
 */
export const CATEGORY_META: Record<string, { label: string; hubPath: string; hubLabel: string }> = {
  destinations: { label: "Destinations", hubPath: "/destinations", hubLabel: "All Destinations" },
  packages: { label: "Tours & Packages", hubPath: "/packages", hubLabel: "All Tour Packages" },
  themes: { label: "Experiences", hubPath: "/themes", hubLabel: "All Experiences" },
  "car-rental": { label: "Car Rental", hubPath: "/car-rental", hubLabel: "View All Fleet" },
  "best-time-to-visit": {
    label: "Travel by Month",
    hubPath: "/best-time-to-visit",
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
