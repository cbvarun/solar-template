import type { SystemSize } from "@/types/content";

/**
 * System-size pages (/solar/<slug>/). Shared across companies. Use {{tokens}} for anything
 * company- or region-specific. {{units}}, {{roof}}, {{panels}}, {{bill}} and {{subsidy}} are worked out from kw and
 * the site config (same assumptions as the savings calculator), so the numbers stay consistent.
 */
export const systems: SystemSize[] = [
  {
    slug: "3-kw",
    kw: 3,
    title: "3 kW Rooftop Solar System",
    seoTitle: "3 kW Solar System in {{city}}",
    seoDescription:
      "What a 3 kW rooftop solar system generates in {{city}}, how much roof it needs, the {{subsidyScheme}} subsidy and who it suits. Get a quote from {{companyName}}.",
    summary: "A popular size for homes, and the smallest system that gets the full home subsidy.",
    intro: [
      "A 3 kW system suits most small and medium homes in {{city}}. It is also the size at which a home qualifies for the full central subsidy, so it is often the best value for households with moderate bills.",
      "We size every system from your actual {{utilityName}} bills and roof, so treat the numbers on this page as a guide. We confirm them at the site survey.",
    ],
    suits: [
      "Homes with a monthly bill of around {{bill}}",
      "Families using fans, lights, a fridge, TV and one AC part of the day",
      "Independent houses with about 300 sq ft of shade-free terrace",
      "Homeowners who want the maximum subsidy for the lowest investment",
    ],
    considerations: [
      "If your bill is well above {{bill}} a month, or you plan to add an AC or EV charger, a 5 kW system may suit you better.",
      "Water tanks, staircase rooms and nearby trees cast shadows. We plan the layout around them at the site survey.",
      "A single-phase connection usually works for 3 kW. We check your sanctioned load with {{utilityName}}.",
    ],
    faqs: [
      { question: "How much electricity does a 3 kW system generate?", answer: "Roughly {{units}} units a month on average, more in sunny months and less in the monsoon. Actual generation depends on your roof direction, shading and cleaning." },
      { question: "How much subsidy can I get for 3 kW?", answer: "Under {{subsidyScheme}}, a 3 kW home system qualifies for the maximum central subsidy, currently {{subsidy}}, subject to the scheme's rules. {{subsidyNote}}" },
      { question: "How much roof space does 3 kW need?", answer: "About {{roof}} sq ft of shade-free roof, usually {{panels}} panels. Elevated structures can make use of terraces with water tanks or other obstructions." },
      { question: "Will a 3 kW system make my bill zero?", answer: "It can bring a moderate bill close to the fixed charges, but not below them. How close depends on your consumption, tariff slab and how much power you use during the day." },
    ],
  },
  {
    slug: "5-kw",
    kw: 5,
    title: "5 kW Rooftop Solar System",
    seoTitle: "5 kW Solar System in {{city}}",
    seoDescription:
      "What a 5 kW rooftop solar system generates in {{city}}, roof space needed, the {{subsidyScheme}} subsidy and who it suits. Get a quote from {{companyName}}.",
    summary: "For larger homes, higher bills and families planning an AC or EV charger.",
    intro: [
      "A 5 kW system suits larger homes, villas and families with higher bills in {{city}}. It generates enough to cover several ACs running part of the day, or to make room for an EV charger later.",
      "The home subsidy is capped at 3 kW, so a 5 kW system gets the same subsidy as a 3 kW one. The extra capacity pays back through the higher savings. We confirm the right size from your {{utilityName}} bills at the site survey.",
    ],
    suits: [
      "Homes with a monthly bill of around {{bill}} or more",
      "Families running two or more ACs, a water pump or a home office",
      "Homes planning an EV charger or more appliances",
      "Independent houses and villas with about 500 sq ft of shade-free roof",
    ],
    considerations: [
      "A 5 kW system may need a three-phase connection or a sanctioned-load increase. We check this with {{utilityName}} before you commit.",
      "Roof space is the usual limit. We plan the layout around tanks, staircase rooms and shade, or use an elevated structure.",
      "If power cuts are a concern, a hybrid system with a battery can be added. See our hybrid solar service.",
    ],
    faqs: [
      { question: "How much electricity does a 5 kW system generate?", answer: "Roughly {{units}} units a month on average, more in sunny months and less in the monsoon. Actual generation depends on your roof direction, shading and cleaning." },
      { question: "How much subsidy can I get for 5 kW?", answer: "The central home subsidy under {{subsidyScheme}} is capped at 3 kW, so a 5 kW home system gets the same maximum, currently {{subsidy}}, subject to the scheme's rules. {{subsidyNote}}" },
      { question: "How much roof space does 5 kW need?", answer: "About {{roof}} sq ft of shade-free roof, usually {{panels}} panels." },
      { question: "Is 5 kW too big for my home?", answer: "If your bill is well below {{bill}} a month, a smaller system is usually enough. Surplus power you export is usually credited at a lower rate than you pay for grid power, so oversizing rarely pays. We size from your bills, not from a standard package." },
    ],
  },
];
