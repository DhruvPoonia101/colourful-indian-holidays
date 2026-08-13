export type DropdownLink = {
  label: string;
  href: string;
};

export type NavLink = {
  type: "link";
  label: string;
  href: string;
};

export type NavDropdown = {
  type: "dropdown";
  label: string;
  /** Widens the panel to accommodate a future 3x4 / 4x3 grid (e.g. Travel by Month). */
  wide?: boolean;
  items: DropdownLink[];
  viewAllHref?: string;
  viewAllLabel?: string;
  comingSoonNote?: string;
};

export type NavItem = NavLink | NavDropdown;

export const navItems: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "dropdown",
    label: "Destination",
    items: [],
    comingSoonNote: "Destination guides are being added soon.",
  },
  {
    type: "dropdown",
    label: "Packages",
    items: [],
    comingSoonNote: "Curated packages are being added soon.",
  },
  {
    type: "dropdown",
    label: "Car Rental",
    items: [
      { label: "Sedan", href: "/car-rental/sedan" },
      { label: "SUV", href: "/car-rental/suv" },
      { label: "Tempo Traveller", href: "/car-rental/tempo-traveller" },
      { label: "Luxury Cars", href: "/car-rental/luxury-cars" },
      { label: "Coaches", href: "/car-rental/coaches" },
    ],
    viewAllHref: "/car-rental",
    viewAllLabel: "View All Fleet",
  },
  {
    type: "dropdown",
    label: "Travel by Month",
    wide: true,
    items: [],
    comingSoonNote: "A month-by-month travel guide is coming soon.",
  },
  {
    type: "dropdown",
    label: "Themed Packages",
    items: [],
    comingSoonNote: "Themed journeys are being added soon.",
  },
  { type: "link", label: "Blogs", href: "/blogs" },
  { type: "link", label: "Contact Us", href: "/contact" },
];
