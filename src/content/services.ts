import type { Service } from "@/types/content";

/**
 * Smartsol Systems services, written for Bengaluru and Karnataka.
 * {{tokens}} still work: {{companyName}} {{utilityName}} {{regulatorName}} {{netMeteringTerm}}
 * {{subsidyScheme}} {{subsidyNote}} {{city}} {{state}} {{phone}}
 */
export const services: Service[] = [
  {
    slug: "residential-rooftop-solar",
    icon: "Home",
    title: "Residential Rooftop Solar Installation",
    summary:
      "Rooftop solar for Bengaluru homes, designed around your terrace, water tanks and BESCOM bills.",
    seoTitle: "Home Rooftop Solar Installation in Bengaluru",
    seoDescription:
      "Rooftop solar for independent houses, villas and apartments in Bengaluru: terrace survey, design, installation and BESCOM net metering by {{companyName}}.",
    image: {
      src: "/images/services/residential-rooftop-solar.webp",
      alt: "Row of solar panels on a tiled house roof behind a green hedge",
    },
    description: [
      "Most Bengaluru homes have a flat RCC terrace, and most terraces are already busy: an overhead water tank, the staircase room, a dish antenna, maybe a clothesline or a few pots. We plan the panel layout around all of it, using elevated structures where you want to keep the terrace usable underneath.",
      "We size the system from a year of your BESCOM bills, not a standard package. Then one team handles the structure, panels, inverter, wiring, earthing and BESCOM net-metering file, through to the day your new meter is fitted.",
    ],
    audience: [
      "Independent houses in layouts such as JP Nagar, Jayanagar and BTM",
      "Villas and row houses in gated communities",
      "Apartment associations offsetting lift, pump and common-area lighting",
      "Homes with ACs, a home office or an EV charger planned",
      "Families tired of BESCOM bills rising every summer",
    ],
    included: [
      "Terrace survey: usable area, water tanks, staircase room and shade from nearby buildings",
      "System sizing from your last 12 BESCOM bills",
      "Elevated structure option so the terrace stays usable",
      "Optional bird-proofing mesh to stop pigeons nesting under the panels",
      "Panels, inverter, DC and AC protection, and earthing",
      "BESCOM net-metering application and follow-up",
      "Commissioning and set-up of the monitoring app on your phone",
    ],
    process: [
      { title: "Bill and terrace check", body: "We study your BESCOM bills and visit the terrace to measure space and shade." },
      { title: "Layout and quote", body: "You see where every panel goes, the expected generation and an itemised price." },
      { title: "Installation", body: "Most homes are done in two to three days on the terrace, with the wiring routed neatly." },
      { title: "BESCOM and handover", body: "We file the net-metering papers, then commission the system once the new meter is in." },
    ],
    pricing: {
      headline: "A written quote for your terrace",
      body: "Price depends on system size, panel and inverter brands, and how high the structure needs to be. Your quote lists each component and its warranty, so you can compare like for like. {{subsidyNote}}",
      ctaLabel: "Get a residential quote",
    },
    faqs: [
      { question: "Can panels go above my water tank or on the staircase room?", answer: "Often, yes. Elevated structures can carry panels over a tank or around the staircase room, as long as there's safe access for cleaning and the tank can still be serviced. We check this at the survey." },
      { question: "Will pigeons nest under the panels?", answer: "On Bengaluru terraces they often try. A bird-proofing mesh around the array edge keeps them out, and also keeps the wiring and the terrace underneath clean. We can fit one with the installation or later." },
      { question: "Can we still use the terrace after installation?", answer: "Yes, if you choose an elevated structure. It costs a little more, but the space underneath stays usable for drying clothes or sitting out." },
    ],
    related: ["hybrid-solar-battery-backup", "net-metering-subsidy-assistance", "annual-maintenance-contract"],
  },
  {
    slug: "commercial-industrial-rooftop-solar",
    icon: "Factory",
    title: "Commercial and Industrial Rooftop Solar",
    summary:
      "Rooftop solar for factories, offices, schools and hospitals in and around Bengaluru, engineered for your load and roof.",
    seoTitle: "Commercial and Industrial Rooftop Solar in Bengaluru",
    seoDescription:
      "Rooftop solar for factories, warehouses, offices and institutions in Bengaluru's industrial areas. Load study, engineering, installation and BESCOM approvals.",
    image: {
      src: "/images/services/commercial-industrial-rooftop-solar.webp",
      alt: "Close-up of a large blue solar panel array under a cloudy sky",
    },
    description: [
      "Factories in Bommasandra, Jigani and Electronic City, and offices and institutions across the city, use most of their power in daylight. That's when solar generates, so a well-sized rooftop plant can take a real share of your commercial tariff bill.",
      "We start from your load profile, sanctioned load and roof: metal sheet, RCC or a mix. Then we engineer the structure, plan installation around your working hours, and handle the BESCOM documents for your connection category.",
    ],
    audience: [
      "Factories and workshops on metal-sheet roofs",
      "Warehouses and logistics sheds with large, open roofs",
      "Offices, IT parks and commercial buildings",
      "Schools, colleges and hospitals with steady daytime demand",
      "Hotels and apartment complexes with high common-area load",
    ],
    included: [
      "Load profile and tariff analysis from your bills and sanctioned load",
      "Roof survey: sheet condition, purlin spacing and RCC load capacity",
      "Layout, single-line diagram and generation estimate",
      "Structures matched to your roof: rail mounts on sheet, ballasted or anchored on RCC",
      "Panels, string inverters and a remote monitoring system",
      "Earthing, lightning protection and safe cable routing",
      "BESCOM documentation for your connection category",
      "Commissioning and a briefing for your maintenance staff",
    ],
    process: [
      { title: "Load study", body: "We review a year of bills, your sanctioned load and how your consumption runs through the day." },
      { title: "Engineering proposal", body: "You get a design, expected generation and the assumptions behind the payback figure." },
      { title: "Installation", body: "We work in shifts or weekends where needed, so production isn't disturbed." },
      { title: "Approvals and handover", body: "We file the BESCOM documents, commission the plant and set up monitoring access for your team." },
    ],
    pricing: {
      headline: "A proposal your finance team can check",
      body: "Commercial plants are quoted per project. The proposal shows system size, equipment, expected generation and every assumption behind the payback estimate, so the numbers can be checked against your own bills.",
      ctaLabel: "Request a commercial proposal",
    },
    faqs: [
      { question: "Can you install on our metal-sheet factory roof without leaks?", answer: "Yes, if the sheets are sound. We use clamps and rail systems designed for trapezoidal and standing-seam sheets, which avoid drilling through the sheet where possible, and we seal any fixing that must go through." },
      { question: "Will installation disrupt our production?", answer: "Most roof work happens without affecting the floor below. The final connection needs a short shutdown, which we schedule with your team, often on a weekend." },
      { question: "Does our sanctioned load limit the plant size?", answer: "It can. BESCOM rules link rooftop capacity to your sanctioned load and connection category. We check this first so the design fits what can be approved." },
    ],
    related: ["annual-maintenance-contract", "net-metering-subsidy-assistance", "site-survey-energy-audit"],
  },
  {
    slug: "hybrid-solar-battery-backup",
    icon: "BatteryCharging",
    title: "Hybrid Solar with Battery Backup",
    summary:
      "Solar with a hybrid inverter and lithium battery, so your essentials keep running through Bengaluru's power cuts.",
    seoTitle: "Hybrid Solar with Battery Backup in Bengaluru",
    seoDescription:
      "Hybrid rooftop solar with lithium battery backup for Bengaluru homes, home offices and shops. Replaces old inverter setups. Design and installation by {{companyName}}.",
    image: {
      src: "/images/services/hybrid-solar-battery-backup.webp",
      alt: "Home with rooftop solar lit up during a night storm, with battery units in the garage",
    },
    description: [
      "A standard grid-connected system switches off during a power cut, for the safety of line workers. In Bengaluru, where summer load-shedding and storm outages are part of life, many families pair solar with a battery so the lights, fans, fridge and Wi-Fi keep going.",
      "Many homes already have an old inverter and lead-acid batteries. A hybrid system can replace that setup: the solar charges a lithium battery during the day, the battery covers the outage, and surplus power still goes to BESCOM under net metering.",
    ],
    audience: [
      "Homes in areas with frequent summer power cuts",
      "Families replacing an old inverter and lead-acid batteries",
      "Home offices that can't lose power or internet mid-call",
      "Clinics, shops and small offices with essential daytime loads",
      "Villas with borewell pumps or lifts that need backup",
    ],
    included: [
      "Backup load study: which appliances, and for how many hours",
      "Solar sized to your bills, battery sized to your backup needs",
      "Hybrid inverter and lithium (LiFePO₄) battery options",
      "A separate backup circuit for the loads you choose",
      "Safe removal of your old inverter and batteries if you're replacing them",
      "BESCOM paperwork and {{netMeteringTerm}} where applicable",
      "Commissioning, app set-up and a test of how the system behaves in a power cut",
    ],
    process: [
      { title: "Backup and bill review", body: "We list the loads you want backed up and check your bills, terrace and current inverter setup." },
      { title: "Design and options", body: "You see solar and battery sizes, expected backup hours and the trade-off between options." },
      { title: "Installation", body: "We install the panels, hybrid inverter, battery and backup circuit, usually within a few days." },
      { title: "Handover", body: "We simulate a power cut with you and set up monitoring on your phone." },
    ],
    pricing: {
      headline: "Priced to the backup you need",
      body: "Cost depends mostly on battery capacity, so we quote after the backup load study. Your quote lists every component and warranty. Subsidies such as {{subsidyScheme}} apply to the solar part of grid-connected systems, not to batteries; we confirm what applies to your setup.",
      ctaLabel: "Get a hybrid system quote",
    },
    faqs: [
      { question: "Can a hybrid system replace my old home inverter?", answer: "Yes. The hybrid inverter and lithium battery take over that job, and charge from solar instead of only from the grid. We remove the old unit and batteries safely." },
      { question: "How long will the battery last during a power cut?", answer: "It depends on the battery size and the loads connected. We size it to the appliances you choose and the hours of backup you want, and show you the numbers first." },
      { question: "Can I add a battery to my existing solar system?", answer: "Often, yes. Depending on your current inverter, we add a battery-ready inverter or a separate battery system. We check your setup first." },
    ],
    related: ["residential-rooftop-solar", "annual-maintenance-contract", "site-survey-energy-audit"],
  },
  {
    slug: "solar-panel-cleaning-maintenance",
    icon: "Droplets",
    title: "Solar Panel Cleaning and Maintenance",
    summary: "Scheduled panel cleaning for Bengaluru's dust, construction grime and pigeon droppings, with a health check each visit.",
    seoTitle: "Solar Panel Cleaning in Bengaluru",
    seoDescription:
      "Professional solar panel cleaning in Bengaluru: dust, construction grime and bird droppings removed safely, with a quick system health check on every visit.",
    image: {
      src: "/images/services/solar-panel-cleaning-maintenance.webp",
      alt: "Long-handled brush washing dust off wet solar panels",
    },
    description: [
      "Bengaluru's dry months coat panels quickly. Road dust, construction work nearby and pigeon droppings can cut generation noticeably long before the panels look dirty from the ground.",
      "Our team cleans with soft brushes and water, never abrasive tools or harsh detergents that damage the glass coating. Each visit includes a quick check of the inverter, wiring and generation, so small problems are caught early.",
    ],
    audience: [
      "Homes whose generation has dropped since installation",
      "Terraces near main roads or construction sites",
      "Apartment and commercial rooftops that are hard to reach",
      "Owners who'd rather not climb onto the terrace edge themselves",
    ],
    included: [
      "Soft-brush and water cleaning of every panel",
      "Removal of bird droppings and nesting material",
      "Visual check of panels, cables, connectors and structure",
      "Inverter status and fault-log check",
      "Before-and-after generation note",
      "Advice on a cleaning schedule for your location",
    ],
    process: [
      { title: "Book a visit", body: "Tell us the system size and where the terrace is. We confirm a slot." },
      { title: "Clean and inspect", body: "We clean the panels and check the system while we're on the roof." },
      { title: "Report", body: "You get a short note on what we found and anything that needs attention." },
    ],
    pricing: {
      headline: "One visit or a schedule",
      body: "Charges depend on the number of panels, terrace height and access. Book a single clean, or a schedule that suits Bengaluru's dry season. Cleaning is also part of our AMC plans.",
      ctaLabel: "Book a cleaning visit",
    },
    faqs: [
      { question: "How often should panels be cleaned in Bengaluru?", answer: "In the dry months, from about January to May, every few weeks makes a visible difference, especially near busy roads. During the monsoon, rain does part of the job, but bird droppings still need removing." },
      { question: "Can I clean the panels myself?", answer: "You can rinse them with plain water early in the morning, when the glass is cool. Don't use detergents, scrubbers or high-pressure jets, and don't stand on the panels." },
      { question: "Do you clean systems installed by other companies?", answer: "Yes. We clean any make of system, and tell you if we notice a fault." },
    ],
    related: ["annual-maintenance-contract", "solar-repair-troubleshooting"],
  },
  {
    slug: "solar-repair-troubleshooting",
    icon: "Wrench",
    title: "Solar Repair and Troubleshooting",
    summary: "Fault finding for low generation, inverter errors and offline monitoring, on any make of system in Bengaluru.",
    seoTitle: "Solar Repair and Troubleshooting in Bengaluru",
    seoDescription:
      "Solar system not generating? {{companyName}} finds and fixes inverter faults, low generation and wiring problems on any brand of system in Bengaluru.",
    image: {
      src: "/images/services/solar-repair-troubleshooting.webp",
      alt: "Technician in work gloves using a drill on a solar panel clamp",
    },
    description: [
      "Many Bengaluru systems were installed by companies that no longer answer the phone. When the inverter shows an error, the app goes offline or the BESCOM bill creeps back up, you need someone who will diagnose the cause, not guess.",
      "We test panel strings, connectors, isolators, earthing and the inverter, compare generation with what the system should produce, and explain the fault before we fix anything.",
    ],
    audience: [
      "Systems showing an inverter error or fault code",
      "Generation that has dropped without an obvious reason",
      "Monitoring apps that have stopped updating",
      "Systems whose original installer can't be reached",
      "Damage after storms, rodents or terrace work",
    ],
    included: [
      "Generation check against the expected output",
      "Panel string voltage and current tests",
      "Connector, cable and junction box inspection, including rodent damage",
      "Inverter fault-log reading and settings check",
      "Earthing and surge protection check",
      "A written note of the fault and the fix, with prices before work starts",
      "Manufacturer warranty claim support where it applies",
    ],
    process: [
      { title: "Tell us the symptoms", body: "Send the fault code, a photo of the inverter or app, and your recent generation." },
      { title: "Diagnosis visit", body: "We test the system and find the cause." },
      { title: "Fix with your approval", body: "You get a clear explanation and price before we replace anything." },
    ],
    pricing: {
      headline: "Diagnosis first, then a clear price",
      body: "We charge for the diagnosis visit and quote any parts or repair work before starting. If the fault is covered by a manufacturer warranty, we help you claim it.",
      ctaLabel: "Report a problem",
    },
    faqs: [
      { question: "My inverter shows an error. What should I do first?", answer: "Note the error code, take a photo of the display or app, and call or WhatsApp us. Don't open the inverter or the DC isolators yourself." },
      { question: "Can you repair a system another company installed?", answer: "Yes. We work on all common inverter and panel brands." },
      { question: "Rats chewed our solar cables. Can you fix it?", answer: "Yes. We replace the damaged cable, route it through protective conduit and check that nothing else was affected." },
    ],
    related: ["annual-maintenance-contract", "solar-panel-cleaning-maintenance"],
  },
  {
    slug: "annual-maintenance-contract",
    icon: "CalendarCheck",
    title: "Annual Maintenance Contract (AMC)",
    summary: "Scheduled cleaning, inspections and generation reports for Bengaluru homes, apartments and businesses, with priority support.",
    seoTitle: "Solar AMC in Bengaluru",
    seoDescription:
      "Solar annual maintenance contracts in Bengaluru for homes, apartment associations and businesses: scheduled cleaning, inspections, reports and priority support.",
    image: {
      src: "/images/services/annual-maintenance-contract.webp",
      alt: "Technician in a yellow hard hat checking panels on a large rooftop array",
    },
    description: [
      "An AMC turns maintenance into a routine instead of a reaction. For apartment associations and businesses it also means one point of contact and a record of every visit, which helps when the committee or management changes.",
      "Each plan is built around your system size and Bengaluru's seasons: more cleaning in the dusty months, an electrical check before the monsoon, and generation reviews in between.",
    ],
    audience: [
      "Homes that want maintenance taken care of",
      "Apartment associations with common-area systems",
      "Factories, offices and institutions with larger plants",
      "Owners whose original installer no longer offers service",
    ],
    included: [
      "Scheduled panel cleaning, more often in the dry season",
      "Pre-monsoon electrical and earthing inspection",
      "Structure, fastener and bird-mesh check",
      "Inverter and monitoring review",
      "Generation reports so you can track performance",
      "Priority response for breakdowns",
    ],
    process: [
      { title: "System review", body: "We inspect your system and agree the visit schedule." },
      { title: "Scheduled visits", body: "Cleaning and inspections happen on the agreed dates, with a note after each one." },
      { title: "Reports and support", body: "You get regular generation reports and priority help when something goes wrong." },
    ],
    pricing: {
      headline: "A plan sized to your system",
      body: "AMC price depends on system size, the number of visits and terrace access. Ask for a plan, and we'll list exactly what's included.",
      ctaLabel: "Ask about AMC plans",
    },
    faqs: [
      { question: "Does the AMC cover replacement parts?", answer: "Plans differ. The quote states clearly whether parts are included or charged separately, so there are no surprises." },
      { question: "Can an apartment association take an AMC?", answer: "Yes. We work with association committees and keep a visit record they can share with residents." },
      { question: "Can I get an AMC for a system you didn't install?", answer: "Yes, after an initial inspection to check the system's condition." },
    ],
    related: ["solar-panel-cleaning-maintenance", "solar-repair-troubleshooting"],
  },
  {
    slug: "net-metering-subsidy-assistance",
    icon: "FileCheck2",
    title: "Net Metering and Subsidy Assistance",
    summary: "BESCOM net-metering applications, documents and follow-up, plus help with the {{subsidyScheme}} subsidy.",
    seoTitle: "BESCOM Net Metering and Solar Subsidy Help",
    seoDescription:
      "Help with BESCOM net-metering applications and the {{subsidyScheme}} subsidy for Bengaluru homes: documents, portal steps and follow-up by {{companyName}}.",
    image: {
      src: "/images/services/net-metering-subsidy-assistance.webp",
      alt: "Digital electricity meter and fuse board on a house wall",
    },
    description: [
      "Net metering is what lets your solar system export to the grid and earn credit on your BESCOM bill. The application involves forms, a feasibility check, an inspection and a meter change, and each step can stall if a document is missing or a name doesn't match.",
      "We prepare the file, track it with BESCOM and keep you posted. For homes, we also take you through the {{subsidyScheme}} portal steps and the documents the subsidy needs.",
    ],
    audience: [
      "Homes installing new rooftop solar",
      "Owners whose net-metering application is stuck",
      "Families applying for the {{subsidyScheme}} subsidy",
      "Apartment associations and businesses with BESCOM approvals pending",
    ],
    included: [
      "Document checklist, including name and address matching across bills and ID",
      "BESCOM net-metering application and feasibility follow-up",
      "Coordination for inspection and the bidirectional meter",
      "Subsidy portal registration and document guidance for homes",
      "Status updates until your system is approved",
    ],
    process: [
      { title: "Document check", body: "We check your bill, ID and property papers match before anything is filed." },
      { title: "Application", body: "We file with BESCOM and register on the subsidy portal where you're eligible." },
      { title: "Follow-up", body: "We track the application, inspection and meter change through to approval." },
    ],
    pricing: {
      headline: "Included with our installations",
      body: "Paperwork support is part of every system we install. If someone else installed your system and the application is stuck, ask us what's needed. {{subsidyNote}}",
      ctaLabel: "Ask about paperwork help",
    },
    faqs: [
      { question: "The name on my BESCOM bill is my late father's. Does that matter?", answer: "Usually yes. The bill name generally needs to match the applicant. We tell you which documents are needed to update it before applying." },
      { question: "How long does BESCOM net metering take?", answer: "It varies with BESCOM's workload and your sub-division. A complete, consistent file avoids the delays you can control, and we follow up at each stage." },
      { question: "Do you guarantee the subsidy?", answer: "No. Eligibility and approval are decided by the authorities. We make sure your application is complete and correct." },
    ],
    related: ["residential-rooftop-solar", "commercial-industrial-rooftop-solar", "site-survey-energy-audit"],
  },
  {
    slug: "site-survey-energy-audit",
    icon: "ClipboardList",
    title: "Site Survey and Energy Audit",
    summary: "Terrace measurement, shade study and a bill review, with a written sizing report you can use with any installer.",
    seoTitle: "Solar Site Survey and Energy Audit in Bengaluru",
    seoDescription:
      "A solar site survey in Bengaluru: terrace measurement, shade from tanks and nearby buildings, BESCOM bill review and a written sizing report from {{companyName}}.",
    image: {
      src: "/images/services/site-survey-energy-audit.webp",
      alt: "Two engineers in hard hats reviewing a tablet on a flat rooftop",
    },
    description: [
      "In a dense city, the building next door matters as much as your own terrace. A new floor going up across the road, a tall tree or your own overhead tank can shade panels for part of the day, so we check shade through the seasons before suggesting a size.",
      "The survey combines measurements on the terrace with a review of your BESCOM bills and sanctioned load. You get a written report with a recommended size, layout and expected generation.",
    ],
    audience: [
      "Homeowners comparing quotes from different installers",
      "Apartment associations planning a common-area system",
      "Businesses planning a larger plant",
      "Anyone unsure whether their terrace gets enough sun",
    ],
    included: [
      "Terrace measurement and usable-area plan",
      "Shade study: tanks, staircase room, trees and neighbouring buildings",
      "Structural observations and waterproofing condition",
      "Bill and sanctioned-load review",
      "Recommended system size and expected generation",
      "Written report",
    ],
    process: [
      { title: "Book", body: "Tell us about the property and share a few recent bills." },
      { title: "Survey", body: "We visit, measure and assess the terrace and electrical setup." },
      { title: "Report", body: "You receive a written report with our recommendation and the reasoning." },
    ],
    pricing: {
      headline: "Ask about survey charges",
      body: "Home surveys are quick; commercial and industrial audits take longer. Tell us about the property and we'll confirm what the survey involves and any charge up front.",
      ctaLabel: "Book a site survey",
    },
    faqs: [
      { question: "A building is coming up next door. Should I wait?", answer: "Ask us to check first. If the new building will shade your terrace for part of the day, it's better to know before you size the system." },
      { question: "Can I use your report with another installer?", answer: "Yes. The report is yours to use." },
      { question: "Do you check waterproofing?", answer: "We note visible waterproofing problems and recommend fixing them before installation, since it's much harder to redo once panels are in place." },
    ],
    related: ["residential-rooftop-solar", "commercial-industrial-rooftop-solar", "net-metering-subsidy-assistance"],
  },
];
