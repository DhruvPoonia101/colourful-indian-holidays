export type DropdownLink = {
  label: string;
  href: string;
};

export type DropdownColumn = {
  heading: string;
  items: DropdownLink[];
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
  /** Renders `items` as a 3-column grid of pill links instead of a vertical list (e.g. Travel by Month's 12-month grid). Ignored when `columns` is present. */
  gridLayout?: boolean;
  /** Grouped mega-menu columns (e.g. Destination). Takes precedence over `items` when present. */
  columns?: DropdownColumn[];
  /** Overrides the default 3-column grid wrap for `columns` — use when columns have
   * uneven item counts and wrapping to a second row would leave an awkward gap
   * above the shorter columns (e.g. Destinations' 5 columns of very different lengths). */
  columnsPerRow?: number;
  /** Optional full-width row below the columns (e.g. Packages' "By Duration" strip). */
  durationRow?: DropdownColumn;
  viewAllHref?: string;
  viewAllLabel?: string;
  comingSoonNote?: string;
  /** URL prefix used to detect whether the current page belongs to this dropdown, for the active-page underline. */
  activeMatch?: string;
};

export type NavItem = NavLink | NavDropdown;

export const navItems: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "dropdown",
    label: "Destinations",
    activeMatch: "/destinations",
    columnsPerRow: 4,
    items: [],
    columns: [
      {
        heading: "India — Flagship",
        items: [
          { label: "Rajasthan", href: "/destinations/rajasthan" },
          { label: "Delhi", href: "/destinations/delhi" },
          { label: "Agra", href: "/destinations/agra" },
          { label: "Varanasi", href: "/destinations/varanasi" },
          { label: "Ranthambore", href: "/destinations/rajasthan/ranthambore" },
        ],
      },
      {
        heading: "India — North",
        items: [
          { label: "Leh & Ladakh", href: "/destinations/leh-ladakh" },
          { label: "Srinagar & Kashmir", href: "/destinations/srinagar-kashmir" },
          { label: "Himachal", href: "/destinations/himachal" },
          { label: "Rishikesh & Haridwar", href: "/destinations/rishikesh-haridwar" },
          { label: "Amritsar", href: "/destinations/amritsar" },
          { label: "Sariska", href: "/destinations/sariska" },
        ],
      },
      {
        heading: "India — South",
        items: [
          { label: "Kerala", href: "/destinations/kerala" },
          { label: "Madurai", href: "/destinations/madurai" },
          { label: "Chennai", href: "/destinations/chennai" },
          { label: "Mahabalipuram", href: "/destinations/mahabalipuram" },
          { label: "Pondicherry", href: "/destinations/pondicherry" },
          { label: "Tamil Nadu Beaches", href: "/destinations/tamil-nadu-beaches" },
        ],
      },
      {
        heading: "India — West",
        items: [
          { label: "Goa", href: "/destinations/goa" },
          { label: "Mumbai", href: "/destinations/mumbai" },
          { label: "Gujarat", href: "/destinations/gujarat" },
          { label: "Gujarat Beaches", href: "/destinations/gujarat-beaches" },
          { label: "Maharashtra", href: "/destinations/maharashtra" },
          { label: "Maharashtra Beaches", href: "/destinations/maharashtra-beaches" },
        ],
      },
      {
        heading: "India — East",
        items: [
          { label: "Darjeeling", href: "/destinations/darjeeling" },
          { label: "Sikkim", href: "/destinations/sikkim" },
          { label: "Kolkata", href: "/destinations/kolkata" },
          { label: "Kaziranga", href: "/destinations/kaziranga" },
          { label: "Odisha", href: "/destinations/odisha" },
          { label: "Andaman Islands", href: "/destinations/andaman-islands" },
        ],
      },
      {
        heading: "India — Central",
        items: [
          { label: "Khajuraho", href: "/destinations/khajuraho" },
          { label: "Bandhavgarh", href: "/destinations/bandhavgarh" },
          { label: "Kanha", href: "/destinations/kanha" },
          { label: "Pench", href: "/destinations/pench" },
        ],
      },
      {
        heading: "Nepal",
        items: [
          { label: "Kathmandu", href: "/destinations/kathmandu" },
          { label: "Pokhara", href: "/destinations/pokhara" },
          { label: "Chitwan", href: "/destinations/chitwan" },
          { label: "Nagarkot", href: "/destinations/nagarkot" },
          { label: "Lumbini", href: "/destinations/lumbini" },
          { label: "Everest Region", href: "/destinations/everest-region" },
        ],
      },
      {
        heading: "Bhutan",
        items: [
          { label: "Thimphu", href: "/destinations/thimphu" },
          { label: "Paro", href: "/destinations/paro" },
          { label: "Punakha", href: "/destinations/punakha" },
          { label: "Gangtey", href: "/destinations/gangtey" },
        ],
      },
    ],
    viewAllHref: "/destinations",
    viewAllLabel: "View All Destinations",
  },
  {
    type: "dropdown",
    label: "Tours & Packages",
    activeMatch: "/packages",
    items: [],
    columns: [
      {
        heading: "India Tours",
        items: [
          { label: "Golden Triangle Tours", href: "/packages/golden-triangle-tours" },
          { label: "Rajasthan Tours", href: "/packages/rajasthan-tours" },
          { label: "North India Tours", href: "/packages/north-india-tours" },
        ],
      },
      {
        heading: "Popular Circuits",
        items: [
          {
            label: "Delhi – Agra – Jaipur",
            href: "/packages/golden-triangle-tours/delhi-agra-jaipur",
          },
          {
            label: "Delhi – Agra – Jaipur – Udaipur",
            href: "/packages/golden-triangle-tours/delhi-agra-jaipur-udaipur",
          },
        ],
      },
    ],
    viewAllHref: "/packages",
    viewAllLabel: "View All Tour Packages",
  },
  {
    type: "dropdown",
    label: "Experiences",
    activeMatch: "/themes",
    wide: true,
    items: [],
    columns: [
      {
        heading: "Wildlife & Nature",
        items: [{ label: "Wildlife Tours", href: "/packages/wildlife-tours" }],
      },
      {
        heading: "Special Interest",
        items: [{ label: "Festival Tours", href: "/themes/festival-tours" }],
      },
    ],
    viewAllHref: "/themes",
    viewAllLabel: "Explore All Experiences",
  },
  {
    type: "dropdown",
    label: "Car Rental",
    activeMatch: "/car-rental",
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
    activeMatch: "/best-time-to-visit-india",
    wide: true,
    gridLayout: true,
    items: [
      { label: "January", href: "/best-time-to-visit-india/january" },
      { label: "February", href: "/best-time-to-visit-india/february" },
      { label: "March", href: "/best-time-to-visit-india/march" },
      { label: "April", href: "/best-time-to-visit-india/april" },
      { label: "May", href: "/best-time-to-visit-india/may" },
      { label: "June", href: "/best-time-to-visit-india/june" },
      { label: "July", href: "/best-time-to-visit-india/july" },
      { label: "August", href: "/best-time-to-visit-india/august" },
      { label: "September", href: "/best-time-to-visit-india/september" },
      { label: "October", href: "/best-time-to-visit-india/october" },
      { label: "November", href: "/best-time-to-visit-india/november" },
      { label: "December", href: "/best-time-to-visit-india/december" },
    ],
    viewAllHref: "/best-time-to-visit-india",
    viewAllLabel: "View Full Travel Calendar",
  },
  { type: "link", label: "Travel Guide", href: "/travel-guide" },
  { type: "link", label: "Contact Us", href: "/contact" },
];
