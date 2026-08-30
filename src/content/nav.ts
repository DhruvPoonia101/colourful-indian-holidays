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
    columnsPerRow: 5,
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
        heading: "India — Himalayan",
        items: [
          { label: "Leh & Ladakh", href: "/destinations/leh-ladakh" },
          { label: "Srinagar & Kashmir", href: "/destinations/srinagar-kashmir" },
          { label: "Himachal (Manali & Shimla)", href: "/destinations/himachal" },
          { label: "Rishikesh & Haridwar", href: "/destinations/rishikesh-haridwar" },
          { label: "Darjeeling", href: "/destinations/darjeeling" },
        ],
      },
      {
        heading: "India — More",
        items: [
          { label: "Goa", href: "/destinations/goa" },
          { label: "Mumbai", href: "/destinations/mumbai" },
          { label: "Kerala", href: "/destinations/kerala" },
          { label: "Madurai", href: "/destinations/madurai" },
          { label: "Chennai", href: "/destinations/chennai" },
          { label: "Amritsar", href: "/destinations/amritsar" },
          { label: "Andaman Islands", href: "/destinations/andaman-islands" },
          { label: "Kaziranga", href: "/destinations/kaziranga" },
          { label: "Tamil Nadu Beaches", href: "/destinations/tamil-nadu-beaches" },
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
          { label: "South India Tours", href: "/packages/south-india-tours" },
          { label: "Kerala Tours", href: "/packages/kerala-tours" },
          { label: "Kashmir & Ladakh Tours", href: "/packages/kashmir-ladakh-tours" },
          { label: "Taj Mahal Tours", href: "/packages/taj-mahal-tours" },
        ],
      },
      {
        heading: "Nepal & Bhutan",
        items: [
          { label: "Nepal Tours", href: "/packages/nepal-tours" },
          { label: "Bhutan Tours", href: "/packages/bhutan-tours" },
          { label: "India & Nepal Tours", href: "/packages/india-nepal-tours" },
          { label: "India, Nepal & Bhutan", href: "/packages/india-nepal-bhutan-tours" },
          { label: "Nepal & Bhutan Tours", href: "/packages/nepal-bhutan-tours" },
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
          { label: "Rajasthan Highlights", href: "/packages/rajasthan-tours/highlights" },
          { label: "North India Highlights", href: "/packages/north-india-tours/highlights" },
          { label: "India Highlights", href: "/packages/india-highlights-tours" },
        ],
      },
    ],
    durationRow: {
      heading: "By Duration",
      items: [
        { label: "3–5 Days", href: "/packages/duration/3-5-days" },
        { label: "6–9 Days", href: "/packages/duration/6-9-days" },
        { label: "10–14 Days", href: "/packages/duration/10-14-days" },
        { label: "15+ Days", href: "/packages/duration/15-plus-days" },
      ],
    },
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
        heading: "Culture & Heritage",
        items: [
          { label: "Heritage Tours", href: "/themes/heritage-tours" },
          { label: "Palace & Fort Tours", href: "/themes/palace-fort-tours" },
          { label: "UNESCO Heritage Sites", href: "/themes/unesco-heritage-sites" },
          { label: "Cultural Tours", href: "/themes/cultural-tours" },
          { label: "Village Experiences", href: "/themes/village-experiences" },
        ],
      },
      {
        heading: "Wildlife & Nature",
        items: [
          { label: "Tiger Safari Tours", href: "/themes/tiger-safari-tours" },
          { label: "Wildlife Tours", href: "/packages/wildlife-tours" },
          { label: "Bird Watching", href: "/themes/bird-watching" },
          { label: "Nature & Landscape", href: "/themes/nature-landscape" },
          { label: "National Parks", href: "/themes/national-parks" },
        ],
      },
      {
        heading: "Spiritual & Wellness",
        items: [
          { label: "Spiritual India", href: "/themes/spiritual-india" },
          { label: "Varanasi & Ganges", href: "/themes/varanasi-ganges" },
          { label: "Buddhist Tours", href: "/themes/buddhist-tours" },
          { label: "Yoga & Wellness", href: "/themes/yoga-wellness" },
          { label: "Temple Tours", href: "/themes/temple-tours" },
        ],
      },
      {
        heading: "Luxury & Romance",
        items: [
          { label: "Luxury India", href: "/themes/luxury-india" },
          { label: "Luxury Rajasthan", href: "/themes/luxury-rajasthan" },
          { label: "Honeymoon Tours", href: "/themes/honeymoon-tours" },
          { label: "Romantic Getaways", href: "/themes/romantic-getaways" },
          { label: "Palace Experiences", href: "/themes/palace-experiences" },
        ],
      },
      {
        heading: "Adventure",
        items: [
          { label: "Himalayan Adventures", href: "/themes/himalayan-adventures" },
          { label: "Trekking", href: "/themes/trekking" },
          { label: "Desert Safari", href: "/themes/desert-safari" },
          { label: "Rafting", href: "/themes/rafting" },
          { label: "Adventure Tours", href: "/themes/adventure-tours" },
        ],
      },
      {
        heading: "Special Interest",
        items: [
          { label: "Food & Cooking", href: "/themes/food-cooking" },
          { label: "Photography Tours", href: "/themes/photography-tours" },
          { label: "Festival Tours", href: "/themes/festival-tours" },
          { label: "Family Holidays", href: "/themes/family-holidays" },
          { label: "Solo Travel", href: "/themes/solo-travel" },
        ],
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
    activeMatch: "/best-time-to-visit",
    wide: true,
    gridLayout: true,
    items: [
      { label: "January", href: "/best-time-to-visit/january" },
      { label: "February", href: "/best-time-to-visit/february" },
      { label: "March", href: "/best-time-to-visit/march" },
      { label: "April", href: "/best-time-to-visit/april" },
      { label: "May", href: "/best-time-to-visit/may" },
      { label: "June", href: "/best-time-to-visit/june" },
      { label: "July", href: "/best-time-to-visit/july" },
      { label: "August", href: "/best-time-to-visit/august" },
      { label: "September", href: "/best-time-to-visit/september" },
      { label: "October", href: "/best-time-to-visit/october" },
      { label: "November", href: "/best-time-to-visit/november" },
      { label: "December", href: "/best-time-to-visit/december" },
    ],
    viewAllHref: "/best-time-to-visit",
    viewAllLabel: "View Full Travel Calendar",
  },
  { type: "link", label: "Travel Guide", href: "/travel-guide" },
  { type: "link", label: "Contact Us", href: "/contact" },
];
