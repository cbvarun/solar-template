import type { Service } from "@/types/content";

/**
 * Shared across companies. Use {{tokens}} for anything company- or region-specific:
 * {{companyName}} {{utilityName}} {{regulatorName}} {{netMeteringTerm}}
 * {{subsidyScheme}} {{subsidyNote}} {{city}} {{state}} {{phone}}
 */
export const services: Service[] = [
  {
    slug: "residential-rooftop-solar",
    icon: "Home",
    title: "Residential Rooftop Solar Installation",
    summary:
      "Grid-connected solar sized to your bills and your roof, installed and commissioned by one team.",
    seoTitle: "Residential Rooftop Solar Installation",
    seoDescription:
      "Rooftop solar for homes: site survey, design, installation, {{netMeteringTerm}} paperwork and after-sales service from {{companyName}}.",
    image: {
      src: "/images/services/residential-rooftop-solar.webp",
      alt: "Row of solar panels on a tiled house roof behind a green hedge",
    },
    description: [
      "Your roof, your bills and your daily routine decide the right system size. {{companyName}} starts with your {{utilityName}} bills and a roof inspection, then designs a grid-connected system that fits your consumption and budget.",
      "We manage the whole job: structure, panels, inverter, wiring, earthing, {{netMeteringTerm}} paperwork and commissioning. One team from first call to first unit generated, and one number to call afterwards.",
    ],
    audience: [
      "Independent houses and villas with a usable terrace or roof",
      "Apartment associations with access to common roof area",
      "Homeowners with high daytime use: fans, AC, pumps, home offices",
      "Families planning an EV charger or more appliances",
    ],
    included: [
      "Site visit with shadow and roof-strength check",
      "System sizing from your last 12 months of bills",
      "Mounting structure matched to your roof type (RCC, tile or sheet)",
      "Solar panels and inverter with manufacturer warranty cards",
      "DC and AC cabling, earthing and surge protection",
      "{{netMeteringTerm}} application support with {{utilityName}}",
      "Commissioning, monitoring app setup and a handover walkthrough",
    ],
    process: [
      { title: "Bill and roof review", body: "We study your bills, then inspect the roof for shade, usable space and structural condition." },
      { title: "Design and quote", body: "You receive a layout, expected generation and an itemised written quote." },
      { title: "Installation", body: "Structure, panels, inverter and wiring go in. Most home systems take a few days on site, depending on size and weather." },
      { title: "Approvals and commissioning", body: "We handle the {{netMeteringTerm}} paperwork, then commission the system and show you how to read it." },
    ],
    pricing: {
      headline: "A written quote after the site visit",
      body: "Cost depends on system size, roof type, equipment and structure height, so we don't publish one-size prices. Your quote lists every component and warranty. {{subsidyNote}}",
      ctaLabel: "Get a residential quote",
    },
    faqs: [
      { question: "How big a system do I need?", answer: "It depends on your monthly units and your shadow-free roof area. We size it from your last 12 bills and show the working in your quote." },
      { question: "Will solar work during a power cut?", answer: "A standard grid-connected system shuts down during a grid outage, for safety. If you want backup power, ask us about a hybrid system with batteries." },
      { question: "How long does installation take?", answer: "Most home systems take a few days on site. Approvals and the {{utilityName}} inspection add time afterwards, and we manage those for you." },
    ],
    related: ["net-metering-subsidy-assistance", "annual-maintenance-contract", "site-survey-energy-audit"],
  },
  {
    slug: "commercial-industrial-rooftop-solar",
    icon: "Factory",
    title: "Commercial and Industrial Rooftop Solar",
    summary:
      "Engineered rooftop systems for factories, offices, schools and hospitals, with approvals and monitoring.",
    seoTitle: "Commercial and Industrial Rooftop Solar",
    seoDescription:
      "Grid-connected rooftop solar for factories, offices, schools and hospitals. Engineering, installation and {{utilityName}} approvals by {{companyName}}.",
    image: {
      src: "/images/services/commercial-industrial-rooftop-solar.webp",
      alt: "Close-up of a large blue solar panel array under a cloudy sky",
    },
    description: [
      "Businesses that run mostly in daylight use rooftop solar well, because generation lines up with load. We engineer systems for factories, warehouses, offices, schools, hospitals and hotels, starting from your load profile and roof condition.",
      "{{companyName}} manages design, structure, installation, safety compliance and utility approvals, then monitors performance so you can compare actual savings with your {{utilityName}} bill.",
    ],
    audience: [
      "Factories and industrial sheds with large roof area",
      "Offices, malls and hotels with high daytime load",
      "Schools, colleges and hospitals",
      "Warehouses and cold storage",
      "Businesses that want more predictable power costs",
    ],
    included: [
      "Load profile and tariff analysis",
      "Roof load and structural assessment",
      "Layout and single-line diagram",
      "Structure designed for wind load and your roof sheeting",
      "Panels, inverters and a monitoring system",
      "Utility approvals and {{netMeteringTerm}} support where applicable",
      "Earthing, lightning protection and fire-safe cable routing",
      "Commissioning and operator training",
    ],
    process: [
      { title: "Load study", body: "We review your bills, sanctioned load and daytime consumption pattern." },
      { title: "Engineering and proposal", body: "You get a design, expected generation and the assumptions behind the payback estimate." },
      { title: "Procurement and installation", body: "We schedule installation windows with your facility team to limit disruption." },
      { title: "Approvals and handover", body: "We file the documents {{utilityName}} requires, commission the plant and train your operators." },
    ],
    pricing: {
      headline: "A project proposal with payback assumptions",
      body: "Commercial systems are quoted per project. The proposal shows system size, equipment, expected generation and the assumptions behind payback, so your finance team can check the numbers.",
      ctaLabel: "Request a commercial proposal",
    },
    faqs: [
      { question: "Can you work around our production schedule?", answer: "Yes. We plan installation windows with your facility team to keep disruption low." },
      { question: "Do you handle approvals for larger systems?", answer: "Yes. We prepare and file the documents {{utilityName}} requires and flag early any conditions that apply to your sanctioned load." },
    ],
    related: ["annual-maintenance-contract", "net-metering-subsidy-assistance", "site-survey-energy-audit"],
  },
  {
    slug: "solar-panel-cleaning-maintenance",
    icon: "Droplets",
    title: "Solar Panel Cleaning and Maintenance",
    summary: "Safe, scheduled panel cleaning with a quick health check on every visit.",
    seoTitle: "Solar Panel Cleaning and Maintenance",
    seoDescription:
      "Professional solar panel cleaning and performance checks to recover lost generation. One-time and scheduled visits from {{companyName}}.",
    image: {
      src: "/images/services/solar-panel-cleaning-maintenance.webp",
      alt: "Long-handled brush washing dust off wet solar panels",
    },
    description: [
      "Dust, bird droppings, pollen and hard-water stains all reduce generation. We clean with soft brushes and clean water, and check connections and shading while we are on the roof.",
      "Book a one-time clean or put it on a schedule. Every visit ends with a short condition note, so you know what we found.",
    ],
    audience: [
      "Homeowners whose panels look dusty or stained",
      "Apartments and institutions with large arrays",
      "Systems near construction, busy roads or farmland",
      "Any system that hasn't been cleaned in over six months",
    ],
    included: [
      "Safe roof access with fall protection",
      "Soft-brush cleaning with clean water, no abrasives or harsh chemicals",
      "Visual check for cracks, hotspots and loose clamps",
      "Check for shading and bird nesting",
      "Inverter reading before and after cleaning",
      "Short service report with photos",
    ],
    process: [
      { title: "Book a slot", body: "Tell us your system size and roof access, and we confirm a visit." },
      { title: "Pre-clean reading", body: "We note the inverter output and inspect the array." },
      { title: "Cleaning", body: "Panels are cleaned section by section, and clamps and connectors are checked." },
      { title: "Report", body: "You receive a short note with photos and anything that needs attention." },
    ],
    pricing: {
      headline: "Priced by system size and roof access",
      body: "Charges depend on the number of panels, roof height and access. Tell us your system size and we'll quote a one-time or scheduled visit. Cleaning is also part of our AMC plans.",
      ctaLabel: "Book a cleaning visit",
    },
    faqs: [
      { question: "How often should panels be cleaned?", answer: "It depends on dust, rain and your surroundings. Many systems benefit from a clean every one to three months. We can advise from your generation data." },
      { question: "Can I clean the panels myself?", answer: "Rinsing from a safe position is fine. We don't recommend climbing onto a roof or using abrasives or pressure jets, which can damage the glass and coating." },
    ],
    related: ["annual-maintenance-contract", "solar-repair-troubleshooting"],
  },
  {
    slug: "solar-repair-troubleshooting",
    icon: "Wrench",
    title: "Solar Repair and Troubleshooting",
    summary:
      "Fault finding for low generation, inverter errors and offline monitoring, on any make of system.",
    seoTitle: "Solar Repair and Troubleshooting",
    seoDescription:
      "Inverter errors, low generation or monitoring offline? {{companyName}} diagnoses and repairs rooftop solar systems.",
    image: {
      src: "/images/services/solar-repair-troubleshooting.webp",
      alt: "Technician in work gloves using a drill on a solar panel clamp",
    },
    description: [
      "A system that suddenly generates less, shows an inverter error, trips, or goes offline in the app usually has a findable cause. We start with data and a physical inspection, not guesswork.",
      "We repair systems we didn't install as well, and replace faulty parts with correctly rated equivalents. You get a clear diagnosis and a quote before anything is replaced.",
    ],
    audience: [
      "Owners whose generation has dropped",
      "Systems showing inverter fault codes",
      "Systems with monitoring or Wi-Fi offline",
      "Systems affected by storms, monsoon or rodent damage",
      "Owners whose original installer is no longer reachable",
    ],
    included: [
      "Fault-code and generation-data review",
      "String-level voltage and current testing",
      "Inspection of connectors, cabling, earthing and isolators",
      "Inverter and monitoring diagnostics",
      "Written diagnosis with repair options",
      "Replacement parts with their manufacturer warranty",
    ],
    process: [
      { title: "Describe the issue", body: "Send the fault code, a photo and your generation history." },
      { title: "Diagnose", body: "We test the system on site and find the cause." },
      { title: "Quote the fix", body: "You see what we found and what it will cost before we replace anything." },
      { title: "Repair and verify", body: "We repair, then confirm generation is back to expected levels." },
    ],
    pricing: {
      headline: "Diagnosis first, then a quote",
      body: "Repair cost depends entirely on the fault. We tell you what we found and what the fix will cost before replacing anything.",
      ctaLabel: "Report a problem",
    },
    faqs: [
      { question: "Do you repair systems installed by other companies?", answer: "In most cases, yes. Brand and age affect parts availability, and we'll tell you plainly if a repair isn't worthwhile." },
      { question: "My inverter shows a red light. Is that dangerous?", answer: "A fault light usually means the inverter has shut down to protect itself. Don't open the inverter or isolators yourself. Send us the fault code and a photo, and we'll advise on next steps." },
    ],
    related: ["annual-maintenance-contract", "solar-panel-cleaning-maintenance"],
  },
  {
    slug: "annual-maintenance-contract",
    icon: "CalendarCheck",
    title: "Annual Maintenance Contract (AMC)",
    summary: "Scheduled cleaning, inspections and performance reports, with priority support.",
    seoTitle: "Solar Annual Maintenance Contract (AMC)",
    seoDescription:
      "Annual maintenance contracts for rooftop solar: scheduled cleaning, inspections, performance reports and priority support from {{companyName}}.",
    image: {
      src: "/images/services/annual-maintenance-contract.webp",
      alt: "Technician in a yellow hard hat checking panels on a large rooftop array",
    },
    description: [
      "An AMC keeps your system generating close to its design output and gives you one number to call when something looks off. Visits are scheduled, so nothing depends on you remembering.",
      "Each visit covers cleaning, inspection and a performance check against expected generation. You get a short report after every visit.",
    ],
    audience: [
      "Homeowners who don't want to think about upkeep",
      "Businesses that need documented maintenance",
      "Housing societies and institutions",
      "Owners whose installer's service period is ending",
    ],
    included: [
      "Scheduled panel cleaning",
      "Electrical inspection of connectors, cables, earthing and isolators",
      "Inverter health and settings check",
      "Performance report against expected generation",
      "Priority response for breakdown calls",
      "Minor fixes during visits (clamps, cable ties, labels)",
    ],
    process: [
      { title: "Initial inspection", body: "We record the condition and baseline output of your system." },
      { title: "Plan agreed", body: "We set the visit schedule and what's covered, in writing." },
      { title: "Scheduled visits", body: "We clean, inspect and test on each visit and send a report." },
      { title: "Annual review", body: "We compare the year's generation with expectations and recommend any changes." },
    ],
    pricing: {
      headline: "Plans by system size and visit frequency",
      body: "Share your system details and we'll send a plan showing the visit schedule and exactly what's covered.",
      ctaLabel: "Ask about AMC plans",
    },
    faqs: [
      { question: "Does the AMC cover replacement parts?", answer: "Plans differ. Our quote states clearly whether parts are covered or charged separately, so there are no surprises." },
      { question: "Can I take an AMC for a system you didn't install?", answer: "Yes, after a one-time inspection to record the system's condition." },
    ],
    related: ["solar-panel-cleaning-maintenance", "solar-repair-troubleshooting"],
  },
  {
    slug: "net-metering-subsidy-assistance",
    icon: "FileCheck2",
    title: "Net Metering and Subsidy Assistance",
    summary:
      "Applications, documents and follow-up with {{utilityName}}, plus guidance on subsidy eligibility.",
    seoTitle: "Net Metering and Subsidy Assistance",
    seoDescription:
      "Help with {{netMeteringTerm}} applications, {{utilityName}} approvals and {{subsidyScheme}} documentation for rooftop solar systems.",
    image: {
      src: "/images/services/net-metering-subsidy-assistance.webp",
      alt: "Digital electricity meter and fuse board on a house wall",
    },
    description: [
      "Connecting a system to the grid involves applications, drawings, inspections and a meter change. {{companyName}} prepares and follows up the paperwork with {{utilityName}} so the process doesn't stall.",
      "We also explain what to expect from {{subsidyScheme}}: who is eligible, which documents are needed and how the application is filed. {{subsidyNote}}",
    ],
    audience: [
      "Customers installing a system with us",
      "Owners of a system installed without grid connection or {{netMeteringTerm}}",
      "Housing societies and businesses unsure of their sanctioned-load rules",
      "Anyone stuck on the subsidy portal",
    ],
    included: [
      "Eligibility check and document checklist",
      "Application preparation and submission to {{utilityName}}",
      "Single-line diagram and technical documents as required",
      "Coordination for inspection and meter replacement",
      "Follow-up on pending steps",
      "Guidance through the {{subsidyScheme}} portal where you're eligible",
    ],
    process: [
      { title: "Check eligibility", body: "We review your connection category, sanctioned load and the scheme rules that apply." },
      { title: "Prepare documents", body: "We assemble drawings, forms and supporting papers." },
      { title: "Apply and follow up", body: "We submit, track and respond to queries from {{utilityName}}." },
      { title: "Inspection and meter", body: "We coordinate the inspection and the meter change until the system is live." },
    ],
    pricing: {
      headline: "Normally part of the project quote",
      body: "If you're installing with us, paperwork support is normally scoped into the project quote. For systems installed elsewhere, tell us where you are in the process and we'll quote the remaining steps.",
      ctaLabel: "Ask about paperwork help",
    },
    faqs: [
      { question: "How long does {{netMeteringTerm}} approval take?", answer: "Timelines depend on {{utilityName}} workload and on your documents being complete. We give realistic expectations at the start and keep following up." },
      { question: "Will I definitely get a subsidy?", answer: "Not necessarily. Eligibility, amounts and procedures are decided by the authorities and change from time to time. {{subsidyNote}}" },
    ],
    related: ["residential-rooftop-solar", "commercial-industrial-rooftop-solar", "site-survey-energy-audit"],
  },
  {
    slug: "site-survey-energy-audit",
    icon: "ClipboardList",
    title: "Site Survey and Energy Audit",
    summary: "Roof measurement, shadow analysis and a bill review, with a written sizing report.",
    seoTitle: "Solar Site Survey and Energy Audit",
    seoDescription:
      "Rooftop solar site survey and energy audit: shadow analysis, load study and a sizing report before you commit. By {{companyName}}.",
    image: {
      src: "/images/services/site-survey-energy-audit.webp",
      alt: "Two engineers in hard hats reviewing a tablet on a flat rooftop",
    },
    description: [
      "A good solar project starts with measurement. We visit your property, map usable roof area, check shading through the day, inspect the structure and review your electricity bills.",
      "You receive a plain-language report with the recommended system size, expected generation, a rough cost range and any roof work needed. The report is yours to keep.",
    ],
    audience: [
      "Anyone comparing solar quotes",
      "Businesses planning a large rooftop system",
      "Owners with complex roofs: multiple levels or partial shade",
      "Customers who want a bill-reduction plan before spending",
    ],
    included: [
      "Roof measurement and usable-area mapping",
      "Shadow analysis across the day",
      "Structural and waterproofing observations",
      "Review of 12 months of bills and sanctioned load",
      "For commercial sites: load pattern and tariff review",
      "Written report with system size, generation estimate and cost range",
    ],
    process: [
      { title: "Book a visit", body: "Tell us about the property and pick a time." },
      { title: "On-site survey", body: "We measure, photograph and test for shading and structural condition." },
      { title: "Analysis", body: "We model generation against your bills and load." },
      { title: "Report and walkthrough", body: "We explain the findings and answer your questions." },
    ],
    pricing: {
      headline: "Ask about survey charges",
      body: "Home visits are usually quick, while commercial and industrial audits take longer. Tell us about the property and we'll confirm what the survey involves and any charge, up front.",
      ctaLabel: "Book a site survey",
    },
    faqs: [
      { question: "How long does a survey take?", answer: "A typical home survey is quick, often about an hour on site. Larger commercial properties take longer." },
      { question: "What should I keep ready?", answer: "Your last 12 electricity bills, your consumer number and access to the roof. For commercial sites, a recent sanctioned-load document helps." },
    ],
    related: ["residential-rooftop-solar", "commercial-industrial-rooftop-solar", "net-metering-subsidy-assistance"],
  },
];
