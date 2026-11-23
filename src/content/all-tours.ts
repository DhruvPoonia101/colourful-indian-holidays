import type { CityCard } from "@/components/destinations/CityGrid";
import type { PackageContent } from "@/content/packages/types";
import { goldenTriangleTours } from "@/content/packages/golden-triangle-tour-classic";
import { goldenTriangleUdaipurTours } from "@/content/packages/golden-triangle-tour-udaipur";
import { goldenTriangleVaranasiTours } from "@/content/packages/golden-triangle-tour-varanasi";
import { goldenTriangleRanthamboreTours } from "@/content/packages/golden-triangle-tour-ranthambore";
import { goldenTriangleAjmerPushkarTours } from "@/content/packages/golden-triangle-tour-ajmer-pushkar";
import { tajMahalTours } from "@/content/packages/taj-mahal-tours";
import { northIndiaTours } from "@/content/packages/north-india-tours";
import { northIndiaHighlights } from "@/content/packages/north-india-highlights";
import { indiaHighlights } from "@/content/packages/india-highlights";
import { rajasthanTours } from "@/content/packages/rajasthan-tours-classic";
import { rajasthanHighlights } from "@/content/packages/rajasthan-highlights";
import { grandRajasthanCircuit } from "@/content/packages/grand-rajasthan-circuit";
import { rajasthanCultureHeritageTrail } from "@/content/packages/rajasthan-culture-heritage-trail";
import { jaipurCityTour } from "@/content/packages/jaipur-city-tour";
import { udaipurTour } from "@/content/packages/udaipur-tour";
import { jodhpurTour } from "@/content/packages/jodhpur-tour";
import { jaisalmerTour } from "@/content/packages/jaisalmer-tour";
import { pushkarTour } from "@/content/packages/pushkar-tour";
import { wildlifeTours } from "@/content/packages/wildlife-tours";
import { rajasthanWildlifeSafari } from "@/content/packages/rajasthan-wildlife-safari";
import { ranthamboreTour } from "@/content/packages/ranthambore-tour";
import { kazirangaTour } from "@/content/packages/kaziranga-tour";
import { periyarWildlifeTour } from "@/content/packages/periyar-wildlife-tour";
import { keralaToursClassic } from "@/content/packages/kerala-tours-classic";
import { alleppeyBackwatersTour } from "@/content/packages/alleppey-backwaters-tour";
import { munnarTour } from "@/content/packages/munnar-tour";
import { kochiTour } from "@/content/packages/kochi-tour";
import { keralaBeachesTour } from "@/content/packages/kerala-beaches-tour";
import { southIndiaToursClassic } from "@/content/packages/south-india-tours-classic";
import { chennaiTour } from "@/content/packages/chennai-tour";
import { mahabalipuramTour } from "@/content/packages/mahabalipuram-tour";
import { maduraiTour } from "@/content/packages/madurai-tour";
import { pondicherryTour } from "@/content/packages/pondicherry-tour";
import { tamilNaduBeachesTour } from "@/content/packages/tamil-nadu-beaches-tour";
import { kashmirLadakhToursClassic } from "@/content/packages/kashmir-ladakh-tours-classic";
import { kashmirValleyTour } from "@/content/packages/kashmir-valley-tour";
import { ladakhTour } from "@/content/packages/ladakh-tour";
import { himachalTour } from "@/content/packages/himachal-tour";
import { darjeelingTour } from "@/content/packages/darjeeling-tour";
import { sikkimTour } from "@/content/packages/sikkim-tour";
import { mumbaiTour } from "@/content/packages/mumbai-tour";
import { maharashtraTour } from "@/content/packages/maharashtra-tour";
import { maharashtraBeachesTour } from "@/content/packages/maharashtra-beaches-tour";
import { kolkataTour } from "@/content/packages/kolkata-tour";
import { odishaTour } from "@/content/packages/odisha-tour";
import { nepalTours } from "@/content/packages/nepal-tours";
import { bhutanTours } from "@/content/packages/bhutan-tours";
import { nepalBhutanTours } from "@/content/packages/nepal-bhutan-tours";
import { indiaNepalTours } from "@/content/packages/india-nepal-tours";
import { indiaBhutanTours } from "@/content/packages/india-bhutan-tours";
import { indiaNepalBhutanTours } from "@/content/packages/india-nepal-bhutan-tours";
import { sriLankaTours } from "@/content/packages/sri-lanka-tours";
import { sriLankaGrandTour } from "@/content/packages/sri-lanka-grand-tour";
import { indiaSriLankaTours } from "@/content/packages/india-sri-lanka-tours";
import { keralaSriLankaTours } from "@/content/packages/kerala-sri-lanka-tours";

/**
 * Every bookable tour package, grouped for the /tours "All Tour Packages"
 * listing. Cards are built from each package's own content file, so names,
 * durations and images stay in sync automatically. When you add a new
 * package, add it to one of the groups below.
 */
function card(p: PackageContent): CityCard {
  const days = p.itinerary.length;
  const nights = Math.max(days - 1, 1);
  return {
    name: p.name,
    tagline: `${days} ${days === 1 ? "Day" : "Days"} / ${nights} ${nights === 1 ? "Night" : "Nights"}`,
    description: p.tagline,
    href: `/tours/${p.slug}`,
    image: p.heroImage,
    imageAlt: p.heroImageAlt,
  };
}

export type TourGroup = { id: string; eyebrow: string; heading: string; tours: CityCard[] };

export const allTourGroups: TourGroup[] = [
  {
    id: "golden-triangle",
    eyebrow: "Golden Triangle & North India",
    heading: "Delhi, Agra & Beyond",
    tours: [goldenTriangleTours, goldenTriangleUdaipurTours, goldenTriangleVaranasiTours, goldenTriangleRanthamboreTours, goldenTriangleAjmerPushkarTours, tajMahalTours, northIndiaTours, northIndiaHighlights, indiaHighlights].filter((p) => !p.draftPendingReview).map(card),
  },
  {
    id: "rajasthan",
    eyebrow: "Rajasthan",
    heading: "Forts, Palaces & the Desert",
    tours: [rajasthanTours, rajasthanHighlights, grandRajasthanCircuit, rajasthanCultureHeritageTrail, jaipurCityTour, udaipurTour, jodhpurTour, jaisalmerTour, pushkarTour].filter((p) => !p.draftPendingReview).map(card),
  },
  {
    id: "wildlife",
    eyebrow: "Wildlife & Safari",
    heading: "Tigers, Rhinos & Elephants",
    tours: [wildlifeTours, rajasthanWildlifeSafari, ranthamboreTour, kazirangaTour, periyarWildlifeTour].filter((p) => !p.draftPendingReview).map(card),
  },
  {
    id: "south",
    eyebrow: "Kerala & South India",
    heading: "Backwaters, Temples & Coast",
    tours: [keralaToursClassic, alleppeyBackwatersTour, munnarTour, kochiTour, keralaBeachesTour, southIndiaToursClassic, chennaiTour, mahabalipuramTour, maduraiTour, pondicherryTour, tamilNaduBeachesTour].filter((p) => !p.draftPendingReview).map(card),
  },
  {
    id: "himalaya",
    eyebrow: "Himalayas, Kashmir & Ladakh",
    heading: "Mountains & Hill Stations",
    tours: [kashmirLadakhToursClassic, kashmirValleyTour, ladakhTour, himachalTour, darjeelingTour, sikkimTour].filter((p) => !p.draftPendingReview).map(card),
  },
  {
    id: "west-east",
    eyebrow: "West & East India",
    heading: "Mumbai, Maharashtra, Kolkata & Odisha",
    tours: [mumbaiTour, maharashtraTour, maharashtraBeachesTour, kolkataTour, odishaTour].filter((p) => !p.draftPendingReview).map(card),
  },
  {
    id: "nepal-bhutan",
    eyebrow: "Nepal & Bhutan",
    heading: "The Himalayan Kingdoms",
    tours: [nepalTours, bhutanTours, nepalBhutanTours, indiaNepalTours, indiaBhutanTours, indiaNepalBhutanTours].filter((p) => !p.draftPendingReview).map(card),
  },
  {
    id: "sri-lanka",
    eyebrow: "Sri Lanka",
    heading: "The Island of Contrasts",
    tours: [sriLankaTours, sriLankaGrandTour, indiaSriLankaTours, keralaSriLankaTours].filter((p) => !p.draftPendingReview).map(card),
  },
];
