/**
 * Shared trust badge list for the JourneyCTA component, used at the bottom
 * of every page. Single source of truth so every page shows the same set —
 * update once here instead of in each page individually.
 */
export type TrustBadge = {
  label: string;
  href?: string;
};

export const DEFAULT_TRUST_BADGES: TrustBadge[] = [
  {
    label: "IATO Registered Agency",
    href: "https://iato.in/member-get?id=eyJpdiI6IlM1bVJjMHM5NkhZTmQ1Z1gxUkNjUWc9PSIsInZhbHVlIjoiTTJTUFJ6TGRkOXN5OExHRkRWMEVidz09IiwibWFjIjoiMWFhYzI5Y2RlMDI1NTZmZWQwZjgxOGM4YTg4ZTQ3ZjIzYTJkYTQ1MTE5MzgyZjliMWNkNjBiMzAzOWI4MzE2NCIsInRhZyI6IiJ9",
  },
  { label: "No Hidden Fees" },
  { label: "International Payments Accepted" },
  { label: "Respond Within 2 Hours" },
  {
    label: "Recognised by Ministry of Tourism, Govt of India",
    href: "https://nidhi.tourism.gov.in/home/directory?categoryCode=02&subcategory=&type=registered&cityName=COLOURFUL+INDIAN+HOLIDAYS+%28Unit%29&cityCode=ERJ000157_U&stateName=",
  },
  {
    label: "4.9 Star Rating on Google",
    href: "https://share.google/7X4vOahXLHBf878Zv",
  },
  {
    label: "5 Star Rating on Trip Advisor",
    href: "https://www.tripadvisor.in/Attraction_Review-g304551-d3846895-Reviews-Colourful_Indian_Holidays-New_Delhi_National_Capital_Territory_of_Delhi.html",
  },
];
