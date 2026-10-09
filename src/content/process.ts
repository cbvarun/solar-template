import type { ProcessStep } from "@/types/content";

/** How a Smartsol installation runs, from first call to after-sales. */
export const processSteps: ProcessStep[] = [
  { icon: "MessagesSquare", title: "First conversation", body: "Share your BESCOM bills and tell us about your terrace. We'll say plainly whether solar makes sense for you." },
  { icon: "Search", title: "Terrace survey", body: "We measure the terrace, check shade from tanks and nearby buildings, and look at your sanctioned load." },
  { icon: "PencilRuler", title: "Layout and quote", body: "You see where every panel goes, what it should generate and an itemised price." },
  { icon: "HardHat", title: "Installation", body: "Our crew fits the structure, panels, inverter and wiring, and leaves the terrace clean." },
  { icon: "FileCheck2", title: "BESCOM paperwork", body: "We file and follow up the net-metering application, and guide you on subsidy documents where you're eligible." },
  { icon: "PlugZap", title: "Switch on", body: "Once the new meter is in, the system goes live and we show you the inverter and monitoring app." },
  { icon: "LifeBuoy", title: "After-sales", body: "Cleaning, AMC and repairs from the same team that installed your system." },
];
