import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  { icon: "MessagesSquare", title: "Consultation", body: "Tell us about your property and your electricity bills. We'll tell you honestly whether solar makes sense." },
  { icon: "Search", title: "Site survey", body: "We measure the roof, check shading and structure, and review your sanctioned load." },
  { icon: "PencilRuler", title: "Design and quote", body: "You get a layout, expected generation and an itemised written quote." },
  { icon: "HardHat", title: "Installation", body: "Our crew installs structure, panels, inverter and wiring with safety and neat workmanship in mind." },
  { icon: "FileCheck2", title: "{{netMeteringTerm}} and documents", body: "We prepare and follow up the {{utilityName}} paperwork, and guide you on subsidy documents where you're eligible." },
  { icon: "PlugZap", title: "Commissioning", body: "The system goes live, and we walk you through the inverter and monitoring app." },
  { icon: "LifeBuoy", title: "Support", body: "Cleaning, AMC and repairs from the same team that installed your system." },
];
