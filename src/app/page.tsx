import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesOverview } from "@/components/sections/services-overview";
import { SubsidySection } from "@/components/sections/subsidy-section";
import { PackagesSection } from "@/components/sections/packages-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SavingsSection } from "@/components/sections/savings-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQPreview } from "@/components/sections/faq-preview";
import { LeadSection } from "@/components/sections/lead-section";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <PackagesSection />
      <SubsidySection />
      <WhyChooseUs />
      <BrandsSection />
      <ProcessSteps />
      <SavingsSection />
      <TestimonialsSection />
      <FAQPreview />
      <LeadSection source="home" />
    </>
  );
}
