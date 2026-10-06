import type { FaqGroup } from "@/types/content";

export const faqGroups: FaqGroup[] = [
  {
    id: "pricing",
    title: "Pricing",
    faqs: [
      { question: "How much does a rooftop solar system cost?", answer: "Cost depends on system size, panel and inverter brand, roof type and structure. We give a written, itemised quote after a site survey. Be cautious of any price quoted without seeing your roof or bills." },
      { question: "How do I know how much I will save?", answer: "We estimate generation from system size and location, then compare it with your tariff and consumption. Actual savings vary with weather, shading, cleaning and how much power you use during the day." },
      { question: "Can I pay in stages?", answer: "Payment terms are agreed in your quote and usually follow project milestones. Ask us for the schedule that applies to your project." },
    ],
  },
  {
    id: "subsidy",
    title: "Subsidy",
    faqs: [
      { question: "Is there a government subsidy for home solar?", answer: "Residential rooftop systems may be eligible under {{subsidyScheme}}. {{subsidyNote}}" },
      { question: "Do you help with the subsidy application?", answer: "Yes. We prepare the document checklist and guide you through the portal steps. Approval is decided by the authorities, not by us." },
      { question: "Can businesses claim a subsidy?", answer: "Residential subsidy schemes generally don't apply to commercial or industrial rooftops. Other incentives, such as tax treatment of depreciation, may apply. Confirm with your accountant." },
    ],
  },
  {
    id: "net-metering",
    title: "Net metering",
    faqs: [
      { question: "What is net metering?", answer: "Net metering lets your system export surplus daytime power to the grid. Your {{utilityName}} meter records imports and exports, and your bill is adjusted for the net units. Billing rules are set by {{regulatorName}} and can change." },
      { question: "Do I need net metering to install solar?", answer: "A grid-connected system needs utility approval to operate. Net metering is what gives you credit for exported power. Requirements vary by consumer category and sanctioned load, so we check your case first." },
      { question: "How long does approval take?", answer: "It depends on utility workload and how complete your documents are. We prepare the file carefully to avoid delays you can control." },
    ],
  },
  {
    id: "installation",
    title: "Installation",
    faqs: [
      { question: "How long does installation take?", answer: "A typical home system takes a few days on site. Commercial projects run longer, depending on size. Approvals and the meter change add time after installation." },
      { question: "Is my roof suitable?", answer: "Most RCC, tile and sheet roofs can work. We check shadow, orientation, usable area and structural condition during the site survey." },
      { question: "Will installation damage my roof or cause leaks?", answer: "We mount on engineered structures and seal penetrations carefully. We also point out any existing waterproofing problems before work starts." },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    faqs: [
      { question: "Does solar need maintenance?", answer: "Very little, but not none. Panels need periodic cleaning, and the system benefits from a yearly electrical check." },
      { question: "How often should I clean my panels?", answer: "It depends on dust, rain and your surroundings. We can advise from your location and generation data." },
      { question: "What should I do if the inverter shows an error?", answer: "Note the fault code, take a photo of the display or app, and contact us. Please don't open the inverter or isolators yourself." },
    ],
  },
  {
    id: "warranties",
    title: "Warranties",
    faqs: [
      { question: "What warranties will I get?", answer: "Warranties come from the equipment manufacturers: typically a product warranty and a longer performance warranty on panels, plus an inverter warranty. Exact terms depend on the brand, and your quote lists them." },
      { question: "Who handles a warranty claim?", answer: "For systems we install, we coordinate claims with the manufacturers, and we tell you upfront if something isn't covered." },
      { question: "What about workmanship?", answer: "Workmanship terms for installation are stated in your quote or agreement. Ask us for the period that applies to your project." },
    ],
  },
  {
    id: "commercial",
    title: "Commercial solar",
    faqs: [
      { question: "Is commercial rooftop solar worth it?", answer: "Businesses with high daytime consumption often get the best match between generation and use. We model your load and tariff in a proposal so you can judge payback with your own numbers." },
      { question: "Can solar go on a sheet or asbestos roof?", answer: "Sheet roofs are common for industrial rooftop solar, but the roof must be strong and in good condition. Asbestos roofs usually need a structural and safety assessment first. Our survey checks this." },
      { question: "Do you handle utility approvals for factories?", answer: "Yes. We prepare the technical documents and coordinate with {{utilityName}} based on your sanctioned load and tariff category." },
    ],
  },
];
