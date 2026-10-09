import type { SiteConfigInput } from "../../site.schema";
import {
  defaultNavigation,
  defaultLeadFormFields,
  defaultLeadFormOptions,
  defaultFeatures,
} from "../../defaults";

/**
 * Smartsol Systems (example/backup copy of the active config). Strings may use {{tokens}}: {{companyName}} {{legalName}} {{phone}}
 * {{email}} {{city}} {{state}} {{year}} {{utilityName}} {{regulatorName}}
 * {{netMeteringTerm}} {{subsidyScheme}} {{subsidyNote}}
 * Anything in [square brackets] is a placeholder to replace before launch.
 */
const config: SiteConfigInput = {
  company: {
    name: "Smartsol Systems",
    legalName: "Smartsol Systems", // [Replace with registered legal name]
    tagline: "Rooftop solar, installed right and looked after for the long run.",
    description:
      "Smartsol Systems designs, installs and maintains rooftop solar for homes, businesses and factories in Bengaluru and across Karnataka, with net-metering support and long-term service.",
    foundedYear: 2026,
    registrationNumber: "GSTIN: 29AGBFS2442P1ZG",
    logo: { light: "/brand/logo.svg", alt: "Smartsol Systems logo", width: 180, height: 48 },
    favicon: "/brand/favicon.svg",
    ogImage: "/brand/og-default.jpg",
  },

  seo: {
    siteUrl: "https://www.smartsolsystems.example", // [Replace; or set NEXT_PUBLIC_SITE_URL]
    titleTemplate: "%s | {{companyName}}",
    defaultTitle: "Rooftop Solar in Bengaluru | {{companyName}}",
    locale: "en_IN",
    priceRange: "₹₹",
  },

  theme: {
    colors: {
      primary: "#0B5CAD",
      primaryForeground: "#FFFFFF",
      secondary: "#F5B50A",
      secondaryForeground: "#1B1B1B",
      dark: { primary: "#5AA2F0" },
    },
    fonts: { heading: "Poppins", body: "Inter" },
    radius: "lg",
    buttonStyle: "solid",
    darkMode: "system",
  },

  contact: {
    phone: "+91 97420 20101",
    phoneHref: "tel:+919742020101",
    whatsappNumber: "919742020101",
    whatsappMessageTemplate:
      "Hi {{companyName}}, I'm interested in {{service}} in {{city}}. Please share more details.",
    email: "smartsolsystemspan@gmail.com",
    address: {
      line1: "Sri Ganapa, First Floor",
      line2: "Muthurayaswamy Layout, Hulimavu Lake Road",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560076",
      country: "IN",
    },
    googleMaps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.7777955920906!2d77.59997037509818!3d12.874249787432221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b6236057749%3A0x66100f4e8facba10!2sSmartsol%20Systems!5e1!3m2!1sen!2sin!4v1791421594814!5m2!1sen!2sin",
      linkUrl:
        "https://maps.app.goo.gl/FRv24iQSs3WZWkCn7",
    },
    businessHours: [{ days: "Monday – Sunday", hours: "Open 24 hours" }],
  },

  serviceAreas: {
    headline: "Rooftop solar across Bengaluru and Karnataka",
    states: ["Karnataka"],
    primaryCities: ["Bengaluru", "Mysuru", "Tumakuru"],
  },

  regional: {
    utilityName: "BESCOM",
    regulatorName: "KERC",
    netMeteringTerm: "net metering",
    subsidyScheme: "PM Surya Ghar: Muft Bijli Yojana",
    subsidyNote:
      "Subsidy amounts, eligibility and the application process are set by the central and state governments and change from time to time. We confirm the current rules for your property at the site survey.",
  },

  social: {
    // From the Google Business Profile: the Maps place link, and the "Ask for reviews" link.
    googleBusiness: "https://maps.app.goo.gl/FRv24iQSs3WZWkCn7",
    googleReview: "https://g.page/r/CRC6rI9ODxBmEBM/review",
  },
  analytics: {},
  navigation: defaultNavigation,

  home: {
    hero: {
      headline: "Rooftop solar in Bengaluru, done properly.",
      subheadline:
        "Lower your electricity bill with a system sized to your home or business. Site survey, design, installation, BESCOM net-metering paperwork and after-sales service from one local team.",
      primaryCta: { label: "Book a site survey", href: "/contact/" },
      whatsappCtaLabel: "Chat on WhatsApp",
      image: { src: "/images/hero.svg", alt: "Solar panels on a Bengaluru home terrace at sunrise" },
      highlights: ["Homes, businesses & factories", "On-grid & hybrid with battery backup", "BESCOM net metering", "PM Surya Ghar subsidy help"],
      areas: ["Hulimavu", "JP Nagar", "Jayanagar", "Electronic City", "Whitefield", "Mysuru"],
    },
    trustStats: [
      { value: "[000]+", label: "Installations completed" },
      { value: "[0]+ years", label: "Years of experience" },
      { value: "[0.0]/5", label: "Average customer rating" },
      { value: "[00] years", label: "Panel performance warranty" },
      { value: "[00]", label: "Certified installers" },
      { value: "[00]+", label: "Cities and localities served" },
    ],
    whyChooseUs: [
      { icon: "Gauge", title: "Sized from your BESCOM bills", body: "We work from a year of your bills and your actual terrace, not a standard package." },
      { icon: "Home", title: "Planned around your terrace", body: "Water tanks, the staircase room and a usable terrace all go into the layout, with elevated structures where they help." },
      { icon: "FileCheck2", title: "BESCOM file handled", body: "We prepare the net-metering application and follow it up through inspection and the meter change." },
      { icon: "BadgeIndianRupee", title: "Itemised, written quotes", body: "Every component, brand and warranty is listed, so you can compare quotes like for like." },
      { icon: "MapPin", title: "Based in South Bengaluru", body: "Our office is on Hulimavu Lake Road, so surveys and service visits across the city are quick to arrange." },
      { icon: "CalendarCheck", title: "Here after switch-on", body: "Cleaning, AMC and repairs from the same team, including for systems other companies installed." },
    ],
    savings: {
      headline: "See what solar could save you",
      costPerUnit: 7,
      unitsPerKwPerMonth: 120,
      benefits: [
        { title: "Smaller BESCOM bills", body: "Every unit your terrace generates is a unit you don't buy at your tariff slab." },
        { title: "Less exposure to tariff revisions", body: "When KERC revises tariffs, the power you make yourself doesn't get dearer." },
        { title: "A use for idle terrace space", body: "The terrace that only holds a water tank can pay for itself, and still be used underneath with an elevated structure." },
        { title: "Steady output in Bengaluru's climate", body: "Mild temperatures mean panels lose less to heat than in hotter cities; output dips mainly in the cloudy monsoon months." },
      ],
    },
    subsidy: {
      headline: "{{subsidyScheme}} subsidy for home solar",
      intro:
        "Bengaluru homes installing rooftop solar can get central financial assistance, paid into your bank account once the system is installed, the BESCOM meter is changed and the inspection is done. We take you through each step.",
      tiers: [
        { amount: "₹30,000", label: "per kW, for the first 2 kW" },
        { amount: "₹18,000", label: "for the 3rd kW" },
        { amount: "₹78,000", label: "maximum, for systems of 3 kW and above" },
      ],
      footnote:
        "For individual homes. Housing societies and RWAs can get ₹18,000 per kW for common facilities such as lifts, pumps and EV charging.",
      checkedOn: "checked October 2026", // [Re-check the amounts on the portal before launch and every few months]
      sourceUrl: "https://pmsuryaghar.gov.in/",
      helpHeadline: "How we help with the subsidy",
      helpItems: [
        "A terrace survey and the right size for your BESCOM bills",
        "Registration on the national rooftop solar portal",
        "BESCOM feasibility approval and net-metering paperwork",
        "Installation, meter change and inspection",
        "Guidance on the subsidy claim and documents",
      ],
      ctaLabel: "Check my subsidy eligibility",
      bands: [
        { uptoKw: 2, perKw: 30000 },
        { uptoKw: 3, perKw: 18000 },
      ],
    },
    packages: {
      headline: "Popular rooftop solar systems",
      intro: "Typical sizes for Bengaluru homes and businesses. We confirm the right size from your bills and terrace at the survey.",
      items: [
        {
          name: "3 kW",
          kw: 3,
          tagline: "For independent houses with moderate bills",
          points: ["About 300 sq ft of shade-free terrace", "Fits around most water tanks and staircase rooms", "BESCOM net-metering file included", "Help with the full home subsidy"],
          ctaLabel: "Get a 3 kW quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "5 kW",
          kw: 5,
          tagline: "For villas and homes with several ACs",
          points: ["About 500 sq ft of shade-free terrace", "Room to add an EV charger later", "BESCOM load and phase check included", "Help with the home subsidy"],
          ctaLabel: "Get a 5 kW quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "6 kW and above",
          tagline: "For large homes, shops and offices",
          points: ["Designed around your load and roof", "Three-phase systems where BESCOM requires them", "Factory and commercial sizes on request"],
          ctaLabel: "Get a custom quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "Hybrid + battery",
          tagline: "For areas with summer power cuts",
          points: ["Hybrid inverter and lithium battery", "Replaces an old inverter and lead-acid batteries", "Surplus still exported to BESCOM"],
          ctaLabel: "Get a hybrid quote",
          service: "hybrid-solar-battery-backup",
        },
      ],
      footnote: "No fixed prices: cost depends on your terrace, how high the structure needs to be and the brands you choose. Every quote is itemised.",
    },
    brands: {
      headline: "Brands we install",
      intro: "Equipment from established makers, chosen for your terrace, budget and backup needs. Your quote names the exact models.",
      groups: [
        {
          label: "Solar, inverters and electrical",
          items: [{ name: "TATA" }, { name: "Crompton" }, { name: "Panasonic" }, { name: "Deye" }, { name: "Growatt" }, { name: "GoodWe" }, { name: "L&T" }, { name: "Havells" }, { name: "Anchor" }, { name: "Polycab" }],
        },
      ],
    },
  },

  landing: {
    headline: "Get a free rooftop solar quote in Bengaluru",
    subheadline:
      "Tell us about your home or business. We size the system from your BESCOM bill and terrace, and show what the {{subsidyScheme}} subsidy covers.",
    bullets: [
      "Layout planned around your water tank and staircase room",
      "BESCOM net-metering and subsidy paperwork handled",
      "On-grid and hybrid systems with battery backup",
      "Itemised, written quote from a South Bengaluru team",
    ],
  },

  about: {
    story: [
      "Smartsol Systems is a Bengaluru-based rooftop solar company working from Hulimavu, serving homes, businesses and industries across Karnataka.",
      "We design each system from the customer's own bills and roof, handle the BESCOM paperwork ourselves, and stay available after commissioning.",
      "Smartsol Systems was set up in 2026 to make rooftop solar simple and dependable for families and businesses in Bengaluru. We work with established brands such as TATA, Panasonic, Havells and Polycab, and one team takes each project from the first terrace survey to switch-on and long-term service.",
    ],
    mission: "To make dependable solar power practical for every rooftop we work on.",
    values: [
      { title: "Honest sizing", body: "We recommend the system you need, not the biggest one we can sell." },
      { title: "Clean workmanship", body: "Neat wiring, proper earthing and tidy roofs, because it shows and it matters." },
      { title: "Clear paperwork", body: "Written quotes, warranty cards and approval status you can follow." },
      { title: "Long-term care", body: "A solar system is a long-term asset, and we plan service accordingly." },
    ],
    certifications: [], // Add real certifications or approvals, e.g. { name: "MNRE empanelled" }
    philosophy:
      "Solar is a long-term asset. We choose equipment, structures and wiring with the long term in mind, and we tell customers plainly what they need and what they don't.",
  },

  cta: {
    quoteLabel: "Get a Quote",
    callLabel: "Call Now",
    whatsappLabel: "WhatsApp",
    bannerHeadline: "Ready to see what solar can do for your roof?",
    bannerBody:
      "Tell us about your property and your electricity bill. We'll get back to you during working hours.",
  },

  leadForm: {
    // web3formsAccessKey: falls back to NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    web3formsSubject: "New solar enquiry — {{companyName}}",
    web3formsFromName: "{{companyName}} Website",
    successMessage: "Thank you. Our solar team will contact you shortly.",
    errorMessage:
      "Something went wrong while sending your enquiry. Please try again, or call or WhatsApp us directly.",
    redirectToThankYou: false,
    billPrompt: {
      text: "Want a faster, more accurate quote? Send us a photo of your latest {{utilityName}} bill on WhatsApp so we can size your system before the site visit.",
      buttonLabel: "Send my bill on WhatsApp",
      whatsappMessage: "Hi {{companyName}}, I just sent an enquiry on your website. Here is a photo of my latest electricity bill.",
    },
    fields: defaultLeadFormFields,
    options: defaultLeadFormOptions,
    consentText:
      "I agree to be contacted by {{companyName}} about my enquiry by phone, WhatsApp or email.",
    rateLimit: { maxSubmissions: 3, windowMinutes: 60 },
    // Turnstile activates only when a site key is set (NEXT_PUBLIC_TURNSTILE_SITE_KEY)
    captcha: { provider: "turnstile" },
  },

  // Hidden until real numbers, reviews and projects are available. Set to true to show.
  features: { ...defaultFeatures, trustStats: false, testimonials: false, projects: false },
};

export default config;
