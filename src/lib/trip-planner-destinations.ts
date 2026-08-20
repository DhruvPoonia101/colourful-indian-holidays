import { navItems } from "@/content/nav";

/**
 * Flat, deduplicated list of destination labels pulled from the "Destinations"
 * mega-menu in the main nav, so the trip planner dropdown always stays in
 * sync with the nav without maintaining a second list by hand.
 */
export const tripPlannerDestinations: string[] = (() => {
  const destinationsDropdown = navItems.find(
    (item) => item.type === "dropdown" && item.label === "Destinations"
  );

  if (!destinationsDropdown || destinationsDropdown.type !== "dropdown" || !destinationsDropdown.columns) {
    return [];
  }

  const labels = destinationsDropdown.columns.flatMap((column) =>
    column.items.map((item) => item.label)
  );

  return Array.from(new Set(labels));
})();
