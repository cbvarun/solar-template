import type { SiteConfigInput } from "../../site.schema";
import {
  defaultNavigation,
  defaultLeadFormFields,
  defaultLeadFormOptions,
  defaultFeatures,
} from "../../defaults";

/**
 * Green World Innovations. To launch this company, copy the four files in this
 * folder over the active ones (see README: "Switching companies").
 * Anything in [square brackets] is a placeholder to replace before launch.
 */
const config: SiteConfigInput = {
  company: {
    name: "Green World Innovations",
    legalName: "Green World Innovations", // [Replace with registered legal name]
    tagline: "Dependable rooftop solar for homes and businesses across central Kerala.",
    description:
      "Green World Innovations designs, installs and services rooftop solar for homes, businesses and institutions in Kottayam and across central Kerala, with KSEB net-metering support.",
    foundedYear: 2020, // [Replace with the real year]
    logo: { light: "/brand/logo.svg", alt: "Green World Innovations logo", width: 180, height: 48 },
    favicon: "/brand/favicon.svg",
    ogImage: "/brand/og-default.jpg",
  },

  seo: {
    siteUrl: "https://greenworldinnovations.com",
    titleTemplate: "%s | {{companyName}}",
    defaultTitle: "Rooftop Solar in Kottayam, Kerala | {{companyName}}",
    locale: "en_IN",
    priceRange: "₹₹",
  },

  theme: {
    colors: {
      primary: "#15803D",
      primaryForeground: "#FFFFFF",
      secondary: "#FBBF24",
      secondaryForeground: "#1B1B1B",
    },
    fonts: { heading: "Plus Jakarta Sans", body: "DM Sans" },
    radius: "xl",
    buttonStyle: "pill",
    darkMode: "off",
  },

  contact: {
    phone: "+91 75610 02770",
    phoneHref: "tel:+917561002770",
    whatsappNumber: "917561002770",
    whatsappMessageTemplate:
      "Hi {{companyName}}, I'm interested in {{service}} in {{city}}. Please share more details.",
    email: "greenworld.niram@gmail.com",
    address: {
      line1: "Door No. 9/354D, 1st Floor, Puthankalayel Building",
      line2: "South Kallara P.O, Kalambukad",
      city: "Kottayam",
      state: "Kerala",
      postalCode: "686611",
      country: "IN",
    },
    googleMaps: {
      embedUrl:
        "https://www.google.com/maps?q=Puthankalayel+Building,+South+Kallara+P.O,+Kalambukad,+Kottayam+686611&output=embed",
      linkUrl:
        "https://www.google.com/maps/search/?api=1&query=Puthankalayel+Building,+South+Kallara+P.O,+Kalambukad,+Kottayam+686611",
    },
    businessHours: [{ days: "Monday – Saturday", hours: "9:00 AM – 6:00 PM IST" }],
  },

  serviceAreas: {
    headline: "Rooftop solar across central Kerala",
    states: ["Kerala"],
    primaryCities: ["Kottayam", "Ernakulam", "Alappuzha", "Idukki", "Pathanamthitta"],
  },

  regional: {
    utilityName: "KSEB",
    regulatorName: "KSERC",
    netMeteringTerm: "net metering",
    subsidyScheme: "PM Surya Ghar: Muft Bijli Yojana",
    subsidyNote:
      "Subsidy amounts, eligibility and the application process are set by the central and state governments and change from time to time. We confirm the current rules for your property at the site survey.",
  },

  social: {},
  analytics: {},
  navigation: defaultNavigation,

  home: {
    hero: {
      headline: "Rooftop solar in Kottayam, built for Kerala roofs.",
      subheadline:
        "Cut your KSEB bill with a system sized to your home or business. Survey, design, installation and KSEB net-metering paperwork from a Kottayam-based team that stays around for service.",
      primaryCta: { label: "Book a site survey", href: "/contact/" },
      whatsappCtaLabel: "Chat on WhatsApp",
      image: { src: "/images/hero.svg", alt: "Solar panels on a tiled roof in Kerala" },
      highlights: ["Homes, businesses & institutions", "On-grid & hybrid with battery backup", "KSEB net metering", "PM Surya Ghar subsidy help"],
      areas: ["Kottayam", "Kallara", "Ernakulam", "Alappuzha", "Idukki", "Pathanamthitta"],
    },
    trustStats: [
      { value: "[000]+", label: "Installations completed" },
      { value: "[0]+ years", label: "Years of experience" },
      { value: "[0.0]/5", label: "Average customer rating" },
      { value: "[00] years", label: "Panel performance warranty" },
      { value: "[00]", label: "Certified installers" },
      { value: "[00]+", label: "Towns and localities served" },
    ],
    whyChooseUs: [
      { icon: "Gauge", title: "Sized to your bills", body: "We design from your actual consumption and roof, not from a standard package." },
      { icon: "ShieldCheck", title: "Built for monsoon and humidity", body: "Structures, fasteners and cabling chosen to cope with heavy rain and humid air." },
      { icon: "FileCheck2", title: "KSEB paperwork handled", body: "We prepare and follow up the net-metering file so you don't have to chase it." },
      { icon: "BadgeIndianRupee", title: "Itemised, written quotes", body: "See what each component costs and what warranty it carries before you decide." },
      { icon: "Headset", title: "A local team that answers", body: "Call or WhatsApp the team that installed your system." },
      { icon: "CalendarCheck", title: "Care after commissioning", body: "Cleaning, AMC and repairs keep your system performing through the seasons." },
    ],
    savings: {
      headline: "See what solar could save you",
      costPerUnit: 6.5,
      unitsPerKwPerMonth: 110,
      benefits: [
        { title: "Lower monthly bills", body: "Every unit you generate is a unit you don't buy from the grid." },
        { title: "Protection from tariff hikes", body: "Your solar units don't get costlier when grid tariffs rise." },
        { title: "More energy independence", body: "Produce a good part of your own power from your own roof." },
        { title: "Low upkeep", body: "Periodic cleaning and a yearly check keep output healthy." },
      ],
    },
    subsidy: {
      headline: "{{subsidyScheme}} subsidy for home solar",
      intro:
        "Homes installing rooftop solar can get central financial assistance, paid into your bank account after the system is installed and inspected. We take you through the process, from portal registration to the claim.",
      tiers: [
        { amount: "₹30,000", label: "per kW, for the first 2 kW" },
        { amount: "₹18,000", label: "for the 3rd kW" },
        { amount: "₹78,000", label: "maximum, for systems of 3 kW and above" },
      ],
      footnote:
        "For individual homes. Housing societies and RWAs can get ₹18,000 per kW for common facilities such as lifts, pumps and EV charging.",
      checkedOn: "checked October 2026", // [Re-check the amounts on the portal before launch and every few months]
      sourceUrl: "https://pmsuryaghar.gov.in/",
      helpHeadline: "We handle the process with you",
      helpItems: [
        "Site survey and the right system size for your bills",
        "Registration on the national rooftop solar portal",
        "{{utilityName}} feasibility approval and {{netMeteringTerm}} paperwork",
        "Installation, commissioning and inspection",
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
      intro: "Typical sizes for homes and small businesses. We confirm the right size for your roof and bills at the site survey.",
      items: [
        {
          name: "3 kW",
          kw: 3,
          tagline: "For small and medium homes",
          points: ["Needs about 300 sq ft of shade-free roof", "Panels, inverter, structure and installation", "{{utilityName}} {{netMeteringTerm}} paperwork", "Subsidy application support"],
          ctaLabel: "Get a 3 kW quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "5 kW",
          kw: 5,
          tagline: "For larger homes and higher bills",
          points: ["Needs about 500 sq ft of shade-free roof", "Panels, inverter, structure and installation", "{{utilityName}} {{netMeteringTerm}} paperwork", "Subsidy application support"],
          ctaLabel: "Get a 5 kW quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "6 kW and above",
          tagline: "For villas, shops and high consumption",
          points: ["Designed around your roof and load", "Three-phase systems where your connection needs it", "Commercial and industrial sizes on request"],
          ctaLabel: "Get a custom quote",
          service: "residential-rooftop-solar",
        },
        {
          name: "Hybrid + battery",
          tagline: "Keep the power on during cuts",
          points: ["Hybrid inverter and lithium battery", "Backup for the essential loads you choose", "Surplus still exported where {{netMeteringTerm}} allows"],
          ctaLabel: "Get a hybrid quote",
          service: "hybrid-solar-battery-backup",
        },
      ],
      footnote: "No fixed prices: cost depends on your roof, structure height and the equipment you choose. Every quote is itemised.",
    },
    // brands: {
    //   headline: "Equipment we install",
    //   groups: [
    //     { label: "Panels", items: [{ name: "[Brand]", logo: "/images/brands/[brand].svg" }] },
    //     { label: "Inverters", items: [{ name: "[Brand]" }] },
    //     { label: "Batteries", items: [{ name: "[Brand]" }] },
    //   ],
    // },
  },

  landing: {
    headline: "Get a free rooftop solar quote in {{city}}",
    subheadline:
      "Tell us about your home or business. We size the system from your {{utilityName}} bill and show what the {{subsidyScheme}} subsidy covers.",
    bullets: [
      "System sized to your bills and roof, not a standard package",
      "Subsidy and {{utilityName}} {{netMeteringTerm}} paperwork handled",
      "On-grid and hybrid systems with battery backup",
      "Itemised, written quote with every component and warranty",
    ],
  },

  about: {
    story: [
      "Green World Innovations is a rooftop solar company based in Kalambukad, Kottayam, serving homes, businesses and institutions across central Kerala.",
      "We design each system from the customer's own bills and roof, handle the KSEB paperwork ourselves, and stay available after commissioning.",
      "[Add your founding story: who started the company, why, and what you learned from your first installations.]",
    ],
    mission: "To make dependable solar power practical for every Kerala rooftop we work on.",
    values: [
      { title: "Honest sizing", body: "We recommend the system you need, not the biggest one we can sell." },
      { title: "Built for Kerala", body: "Tile, RCC and sheet roofs, heavy rain and humid air all shape our designs." },
      { title: "Clear paperwork", body: "Written quotes, warranty cards and approval status you can follow." },
      { title: "Long-term care", body: "A solar system is a long-term asset, and we plan service accordingly." },
    ],
    certifications: [{ name: "[Add certification or empanelment, e.g. ANERT or KSEB approvals]" }],
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
    captcha: { provider: "turnstile" },
  },

  features: defaultFeatures,
};

export default config;
