import type { SystemSize } from "@/types/content";

/**
 * System-size pages (/solar/<slug>/), written for Bengaluru. {{units}}, {{roof}}, {{panels}}, {{bill}}
 * and {{subsidy}} are worked out from kw and the site config (same assumptions as the savings
 * calculator), so the numbers stay consistent.
 */
export const systems: SystemSize[] = [
  {
    slug: "3-kw",
    kw: 3,
    title: "3 kW Rooftop Solar System",
    seoTitle: "3 kW Solar System in Bengaluru",
    seoDescription:
      "What a 3 kW rooftop solar system generates on a Bengaluru terrace, the space it needs, the {{subsidyScheme}} subsidy and the BESCOM process. Quotes from {{companyName}}.",
    summary: "A popular size for Bengaluru homes, and the smallest system that gets the full home subsidy.",
    intro: [
      "A 3 kW system fits on most independent-house terraces in Bengaluru, even with an overhead tank and staircase room taking up part of the space. It's also the size at which a home qualifies for the full central subsidy, which makes it good value for families with moderate BESCOM bills.",
      "Bengaluru's mild climate suits solar: panels lose less output to heat than in hotter cities, and generation stays fairly steady outside the cloudy monsoon months. Treat the figures here as a guide; we confirm them from your bills at the site survey.",
    ],
    suits: [
      "Homes with a BESCOM bill of around {{bill}} a month",
      "Families using fans, lights, a fridge, TV and one AC part of the day",
      "Independent houses with about {{roof}} sq ft of shade-free terrace",
      "Homeowners who want the maximum subsidy for the lowest investment",
    ],
    considerations: [
      "If your bill is well above {{bill}} a month, or you plan an AC or EV charger, a 5 kW system may suit you better.",
      "Overhead tanks and staircase rooms cast shadows in the morning and evening. We place panels where they get the most sun through the day.",
      "A single-phase BESCOM connection usually works for 3 kW. We check your sanctioned load before applying.",
    ],
    faqs: [
      { question: "How much electricity does a 3 kW system generate in Bengaluru?", answer: "Roughly {{units}} units a month on average: more from January to May, less during the June to October monsoon. Actual generation depends on your terrace, shading and how often the panels are cleaned." },
      { question: "How much subsidy can I get for 3 kW?", answer: "Under {{subsidyScheme}}, a 3 kW home system qualifies for the maximum central subsidy, currently {{subsidy}}, subject to the scheme's rules. {{subsidyNote}}" },
      { question: "How much terrace space does 3 kW need?", answer: "About {{roof}} sq ft of shade-free terrace, usually {{panels}} panels. An elevated structure can use the space over a water tank or keep the terrace usable underneath." },
      { question: "Will a 3 kW system make my BESCOM bill zero?", answer: "It can bring a moderate bill close to the fixed charges, but not below them. How close depends on your consumption, tariff slab and how much power you use during the day." },
    ],
  },
  {
    slug: "5-kw",
    kw: 5,
    title: "5 kW Rooftop Solar System",
    seoTitle: "5 kW Solar System in Bengaluru",
    seoDescription:
      "What a 5 kW rooftop solar system generates in Bengaluru, the terrace space it needs, BESCOM checks and the {{subsidyScheme}} subsidy.",
    summary: "For larger Bengaluru homes and villas with several ACs, a home office or an EV on the way.",
    intro: [
      "A 5 kW system suits larger homes, villas and families whose BESCOM bills climb with every summer. It generates enough to cover several ACs running part of the day, a borewell pump, or an EV charger later.",
      "The home subsidy is capped at 3 kW, so a 5 kW system gets the same subsidy as a 3 kW one. The extra capacity pays back through higher savings instead. We confirm the right size from your bills at the site survey.",
    ],
    suits: [
      "Homes with a BESCOM bill of around {{bill}} or more a month",
      "Families running two or more ACs, a borewell pump or a home office",
      "Homes planning an EV charger",
      "Villas and independent houses with about {{roof}} sq ft of shade-free terrace",
    ],
    considerations: [
      "A 5 kW system may need a three-phase connection or a sanctioned-load increase with BESCOM. We check this before you commit.",
      "Terrace space is the usual limit in the city. An elevated structure over the tank or staircase room often makes room for the extra panels.",
      "If summer power cuts are a problem in your area, consider a hybrid system with a battery. See our hybrid solar service.",
    ],
    faqs: [
      { question: "How much electricity does a 5 kW system generate in Bengaluru?", answer: "Roughly {{units}} units a month on average: more from January to May, less during the June to October monsoon. Actual generation depends on your terrace, shading and cleaning." },
      { question: "How much subsidy can I get for 5 kW?", answer: "The central home subsidy under {{subsidyScheme}} is capped at 3 kW, so a 5 kW home system gets the same maximum, currently {{subsidy}}, subject to the scheme's rules. {{subsidyNote}}" },
      { question: "How much terrace space does 5 kW need?", answer: "About {{roof}} sq ft of shade-free terrace, usually {{panels}} panels." },
      { question: "Is 5 kW too big for my home?", answer: "If your bill is well below {{bill}} a month, a smaller system is usually enough. Surplus power you export is usually credited at a lower rate than you pay BESCOM for grid power, so oversizing rarely pays. We size from your bills, not from a standard package." },
    ],
  },
];
