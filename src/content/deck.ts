import heroImg from "@/assets/hero.jpg";
import retailImg from "@/assets/retail.jpg";
import luxuryImg from "@/assets/luxury.jpg";
import diningImg from "@/assets/dining.jpg";
import attractionsImg from "@/assets/attractions.jpg";
import eventsImg from "@/assets/events.jpg";
const heroVideo = "/videos/hero.mp4";
const eventsVideo = "/videos/events.mp4";

export type OpportunityId = "retail" | "sponsorship" | "events";

export interface Opportunity {
  id: OpportunityId;
  label: string;
  tagline: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  cta: string;
  kpis: { value: string; label: string }[];
  accentNote: string;
}

export const PROPERTY = {
  name: "Mall of America",
  city: "Bloomington, Minnesota",
  shortName: "MOA",
};

export const media = {
  heroImg,
  retailImg,
  luxuryImg,
  diningImg,
  attractionsImg,
  eventsImg,
  heroVideo,
  eventsVideo,
};

export const opportunities: Record<OpportunityId, Opportunity> = {
  retail: {
    id: "retail",
    label: "Retail Leasing",
    tagline: "Open where the country comes to shop.",
    heroEyebrow: "Retail Growth Platform",
    heroTitle: "Put your brand in front of a nation.",
    heroLede:
      "From luxury flagships to breakout pop-ups, Mall of America is the highest-traffic launchpad in North American retail.",
    cta: "Discuss Leasing",
    accentNote: "520+ brands. One address that does the marketing for you.",
    kpis: [
      { value: "40M+", label: "Annual Visitors" },
      { value: "520+", label: "Retail Brands" },
      { value: "5.6M", label: "Sq Ft Of Retail" },
      { value: "#1", label: "U.S. Mall By Traffic" },
    ],
  },
  sponsorship: {
    id: "sponsorship",
    label: "Brand Partnerships",
    tagline: "Activate inside a year-round audience engine.",
    heroEyebrow: "Brand Activation Platform",
    heroTitle: "Reach millions. Be impossible to ignore.",
    heroLede:
      "A living, breathing destination where your brand can stage experiences that capture attention no media buy can replicate.",
    cta: "Explore Sponsorship",
    accentNote: "Always-on impressions across digital, physical, and experiential.",
    kpis: [
      { value: "40M+", label: "Annual Impressions" },
      { value: "75%", label: "Visitors Beyond 150 mi" },
      { value: "365", label: "Days Of Activation" },
      { value: "4.2M", label: "Social Reach / Mo" },
    ],
  },
  events: {
    id: "events",
    label: "Event Hosting",
    tagline: "Stage the moment everyone is talking about.",
    heroEyebrow: "Event & Experience Platform",
    heroTitle: "A stage built for the unforgettable.",
    heroLede:
      "Concerts, launches, conventions, and activations inside a destination that guarantees an audience before doors even open.",
    cta: "Plan An Event",
    accentNote: "Built-in foot traffic. Turnkey venues. National press magnet.",
    kpis: [
      { value: "400+", label: "Events / Year" },
      { value: "30K+", label: "Daily Footfall" },
      { value: "9", label: "Flexible Venues" },
      { value: "100%", label: "Audience On Arrival" },
    ],
  },
};

export const audienceStats = [
  {
    value: "40M+",
    label: "Annual visitors",
    sub: "More than Disney World & the Grand Canyon combined",
  },
  { value: "75%", label: "Travel 150+ miles", sub: "A genuine regional & national destination" },
  {
    value: "$10B",
    label: "Regional economic impact",
    sub: "An economic anchor for the upper Midwest",
  },
  { value: "30%", label: "Out-of-state tourists", sub: "High-intent, high-spend visitors" },
];

export const whyPoints = [
  {
    title: "Unmatched Scale",
    body: "5.6 million square feet under one roof — a destination measured in city blocks, not storefronts.",
    image: media.retailImg,
  },
  {
    title: "Guaranteed Traffic",
    body: "More than 40 million visits a year arrive before you spend a dollar on acquisition.",
    image: media.attractionsImg,
  },
  {
    title: "A Complete Ecosystem",
    body: "Retail, dining, entertainment, and live events compound into dwell time no standalone location can match.",
    image: media.diningImg,
  },
];

export const activations = [
  {
    title: "Digital Experiences",
    body: "Owned screens, app placements, and immersive media reaching every visitor journey.",
    metric: "40M+ impressions",
  },
  {
    title: "Experiential Activations",
    body: "Pop-up stages, product demos, and branded environments in the busiest atriums.",
    metric: "30K+ daily footfall",
  },
  {
    title: "Event Sponsorships",
    body: "Title and presenting roles across a 400+ event annual calendar.",
    metric: "400+ events / yr",
  },
  {
    title: "Destination Partnerships",
    body: "Long-term, category-exclusive integration into the fabric of the property.",
    metric: "Category exclusive",
  },
];

export const venues = [
  {
    name: "The Rotunda",
    capacity: "5,000",
    use: "Concerts · Launches · Broadcasts",
    image: media.eventsImg,
  },
  {
    name: "Nickelodeon Universe",
    capacity: "Full-park buyout",
    use: "Brand activations · Galas",
    image: media.attractionsImg,
  },
  {
    name: "Luxury Wing",
    capacity: "Private",
    use: "VIP previews · Trunk shows",
    image: media.luxuryImg,
  },
  {
    name: "Grand Atrium",
    capacity: "10,000+ daily",
    use: "Expos · Conventions",
    image: media.retailImg,
  },
];

export const retailCategories = [
  {
    cat: "Luxury & Flagship",
    demand: "High",
    note: "Anchor positioning with national visibility.",
  },
  {
    cat: "Contemporary & Apparel",
    demand: "Very High",
    note: "The core engine of repeat foot traffic.",
  },
  { cat: "Food & Beverage", demand: "High", note: "Dwell-time drivers with premium margins." },
  { cat: "Pop-Up & Experiential", demand: "Surging", note: "Test markets with instant scale." },
];
