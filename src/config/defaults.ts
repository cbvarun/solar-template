import type { SiteConfigInput } from "./site.schema";
import { services } from "@/content/services";

/** Shared structure so a new company config stays short. Override any of it in site.config.ts. */

const serviceLinks = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}/`,
}));

export const defaultNavigation: SiteConfigInput["navigation"] = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/", children: serviceLinks },
    { label: "Projects", href: "/projects/" },
    { label: "Service Areas", href: "/service-areas/" },
    { label: "FAQs", href: "/faqs/" },
    { label: "Contact", href: "/contact/" },
  ],
  headerCta: { label: "Get a Quote", action: "quote-sheet" },
  footerColumns: [
    { title: "Services", links: serviceLinks },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about/" },
        { label: "Projects", href: "/projects/" },
        { label: "Service Areas", href: "/service-areas/" },
        { label: "FAQs", href: "/faqs/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms/" },
  ],
  copyrightText: "© {{year}} {{legalName}}. All rights reserved.",
};

export const defaultLeadFormFields: SiteConfigInput["leadForm"]["fields"] = {
  email: true,
  propertyType: true,
  monthlyBill: true,
  roofType: true,
  service: true,
  message: true,
};

export const defaultLeadFormOptions: SiteConfigInput["leadForm"]["options"] = {
  propertyTypes: ["Residential", "Commercial", "Industrial"],
  billRanges: [
    "Below ₹2,000",
    "₹2,000 – ₹5,000",
    "₹5,000 – ₹10,000",
    "₹10,000 – ₹25,000",
    "Above ₹25,000",
    "Not sure",
  ],
  roofTypes: ["RCC", "Tile", "Sheet", "Other"],
};

export const defaultFeatures: SiteConfigInput["features"] = {
  stickyMobileCta: true,
  floatingWhatsApp: true,
  quoteSheet: true,
  projects: true,
  serviceAreaPages: true,
  testimonials: true,
  trustStats: true,
};
