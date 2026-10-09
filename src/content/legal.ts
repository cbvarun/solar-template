import type { LegalPage } from "@/types/content";

/**
 * TEMPLATE TEXT. Have a qualified lawyer review and adapt it before launch.
 * Tokens like {{companyName}} are resolved automatically.
 */
export const legalPages: LegalPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How {{companyName}} collects, uses and protects the personal information you share through this website.",
    lastUpdated: "9 October 2026",
    intro:
      "{{legalName}} ({{companyName}}, “we”, “us”) respects your privacy. This policy explains what we collect through this website and how we use it.",
    sections: [
      { heading: "Information we collect", body: [
        "When you submit an enquiry form, we collect the details you enter: name, phone number, email address (optional), city or location, property and roof type, electricity bill range, the service you're interested in and your message.",
        "Like most websites, we may also collect basic usage data such as pages visited and device type, if analytics are enabled.",
      ]},
      { heading: "How we use your information", body: [
        "We use your details to respond to your enquiry, prepare quotes, schedule site visits and provide our services. With your consent, we may contact you by phone, WhatsApp or email about your enquiry.",
        "We do not sell your personal information.",
      ]},
      { heading: "Form processing", body: [
        "Enquiry forms are processed by Web3Forms, a third-party form service, which delivers each submission to us by email. Web3Forms processes the data under its own privacy policy.",
      ]},
      { heading: "Analytics and cookies", body: [
        "If enabled, we use analytics tools such as Google Analytics, Meta Pixel or Cloudflare Web Analytics to understand how the site is used. These tools may set cookies or collect anonymised usage data. You can block cookies in your browser settings.",
      ]},
      { heading: "Sharing your information", body: [
        "We share information only with service providers who help us run the website and our business, with utilities or authorities when you've asked us to process an application on your behalf, or where the law requires it.",
      ]},
      { heading: "Retention and security", body: [
        "We keep enquiry details for as long as needed to serve you and meet legal or accounting obligations. We take reasonable steps to protect your information, but no online transmission is completely secure.",
      ]},
      { heading: "Your rights", body: [
        "You may ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, as provided under applicable Indian law, including the Digital Personal Data Protection Act, 2023. Email us at {{email}} or call {{phone}}.",
      ]},
      { heading: "Changes to this policy", body: [
        "We may update this policy from time to time. The latest version will always be on this page.",
      ]},
    ],
  },
  {
    slug: "terms",
    title: "Terms and Conditions",
    description:
      "The terms that apply when you use the {{companyName}} website and request quotes or services.",
    lastUpdated: "9 October 2026",
    intro:
      "By using this website you agree to these terms. They apply to the website operated by {{legalName}} ({{companyName}}).",
    sections: [
      { heading: "Use of this website", body: [
        "The content here is for general information about our services. Please don't misuse the site, attempt to disrupt it, or submit false or misleading enquiries.",
      ]},
      { heading: "Estimates and quotes", body: [
        "Savings, generation and payback figures on this website are illustrative estimates. Actual results depend on roof, shading, weather, consumption, tariffs and maintenance. Only a written quote from us is an offer of services and pricing.",
      ]},
      { heading: "Approvals and subsidies", body: [
        "Grid connection, {{netMeteringTerm}} and subsidies such as {{subsidyScheme}} are decided by {{utilityName}}, {{regulatorName}} and government authorities. We help with documentation, but we cannot guarantee approval, timing or amounts.",
      ]},
      { heading: "Services and warranties", body: [
        "The scope, schedule, warranties and payment terms for any project are set out in the written quote or agreement we issue. Equipment warranties are provided by the respective manufacturers.",
      ]},
      { heading: "Limitation of liability", body: [
        "To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of this website. Nothing here limits liability that cannot legally be limited.",
      ]},
      { heading: "Third-party links", body: [
        "This site may link to third-party websites, including government portals. We are not responsible for their content or availability.",
      ]},
      { heading: "Governing law", body: [
        "These terms are governed by the laws of India. Courts at {{city}}, {{state}} have jurisdiction over any dispute.",
      ]},
      { heading: "Contact", body: [
        "Questions about these terms? Email {{email}} or call {{phone}}.",
      ]},
    ],
  },
];
