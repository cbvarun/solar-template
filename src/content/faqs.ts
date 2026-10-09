import type { FaqGroup } from "@/types/content";

/** Smartsol Systems FAQs, written for Bengaluru homes and businesses. */
export const faqGroups: FaqGroup[] = [
  {
    id: "pricing",
    title: "Pricing",
    faqs: [
      { question: "How much does rooftop solar cost in Bengaluru?", answer: "It depends on system size, the panel and inverter brands, and how high the structure needs to be to clear your water tank or keep the terrace usable. We give a written, itemised quote after seeing your terrace and BESCOM bills. Be wary of any price quoted without a site visit." },
      { question: "How much will I save on my BESCOM bill?", answer: "We estimate generation from the system size and your terrace, then compare it with your tariff slab and daytime use. Savings are highest when you use more power during the day, for example with ACs, a home office or a borewell pump." },
      { question: "Can I pay in stages?", answer: "Payment terms are set out in your quote and usually follow project milestones. Ask us for the schedule that applies to your project." },
    ],
  },
  {
    id: "subsidy",
    title: "Subsidy",
    faqs: [
      { question: "Is there a government subsidy for home solar in Karnataka?", answer: "Homes may be eligible for the central subsidy under {{subsidyScheme}}. {{subsidyNote}}" },
      { question: "Do you help with the subsidy application?", answer: "Yes. We check your documents, register you on the national portal and take you through each step. Approval is decided by the authorities, not by us." },
      { question: "Can apartments or businesses claim the subsidy?", answer: "The home subsidy covers individual houses. Apartment associations may be eligible for support on common-area systems under the scheme's housing society rules. Businesses usually aren't, though tax benefits such as depreciation may apply; check with your accountant." },
    ],
  },
  {
    id: "net-metering",
    title: "BESCOM net metering",
    faqs: [
      { question: "What is net metering?", answer: "Net metering lets your solar system send surplus daytime power to the BESCOM grid. A bidirectional meter records what you import and export, and your bill is adjusted for the difference. The billing rules are set by {{regulatorName}} and can change." },
      { question: "Do I need net metering to install solar?", answer: "A grid-connected system needs BESCOM's approval before it can operate, and net metering is what gives you credit for the power you export. Requirements depend on your connection category and sanctioned load, so we check your case first." },
      { question: "How long does BESCOM approval take?", answer: "It varies with BESCOM's workload in your sub-division and how complete the file is. A consistent set of documents avoids the delays you can control." },
    ],
  },
  {
    id: "installation",
    title: "Installation",
    faqs: [
      { question: "How long does installation take?", answer: "Most home systems take two to three days on the terrace. Commercial plants take longer, depending on size. The BESCOM inspection and meter change come after installation." },
      { question: "Is my terrace suitable?", answer: "Most RCC terraces work, as do metal-sheet roofs in good condition. We check shade from tanks, staircase rooms, trees and neighbouring buildings, plus the usable area and the roof's condition." },
      { question: "Will installation cause leaks on my terrace?", answer: "We use structures designed for RCC terraces and seal every fixing carefully. If the waterproofing is already weak, we tell you before work starts, because it's much harder to fix once panels are in place." },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    faqs: [
      { question: "Does solar need maintenance?", answer: "Very little, but not none. In Bengaluru, dust and bird droppings are the main reason output drops, so regular cleaning matters. A yearly electrical check before the monsoon is also worthwhile." },
      { question: "How often should I clean my panels?", answer: "Every few weeks in the dry months, from about January to May, and more often near busy roads or construction. During the monsoon, rain helps, but droppings still need removing." },
      { question: "What should I do if the inverter shows an error?", answer: "Note the fault code, take a photo of the display or app, and call or WhatsApp us. Please don't open the inverter or isolators yourself." },
    ],
  },
  {
    id: "warranties",
    title: "Warranties",
    faqs: [
      { question: "What warranties will I get?", answer: "Warranties come from the equipment makers: a product warranty and a longer performance warranty on panels, and a separate inverter warranty. Exact terms depend on the brand, and your quote lists them." },
      { question: "Who handles a warranty claim?", answer: "For systems we install, we coordinate the claim with the manufacturer, and we tell you up front if something isn't covered." },
      { question: "Is the installation work itself covered?", answer: "The workmanship terms for the installation are stated in your quote. Ask us for the period that applies to your project." },
    ],
  },
  {
    id: "commercial",
    title: "Commercial solar",
    faqs: [
      { question: "Is rooftop solar worth it for a factory or office?", answer: "Businesses that use most of their power in daylight, as factories, offices and schools do, usually get the best return. We model your load and tariff in a proposal so you can judge payback from your own numbers." },
      { question: "Can solar go on a metal-sheet or asbestos roof?", answer: "Metal-sheet roofs in good condition are common for industrial solar. Asbestos roofs need a structural and safety assessment first, and sometimes replacing the roof is the better option. Our survey checks this." },
      { question: "Do you handle BESCOM approvals for factories?", answer: "Yes. We prepare the technical documents and coordinate with BESCOM based on your sanctioned load and tariff category." },
    ],
  },
];
