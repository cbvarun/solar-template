import { buildMetadata } from "@/lib/metadata";
import { getServices } from "@/lib/content";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { ServiceCard } from "@/components/cards/service-card";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = buildMetadata({
  title: "Rooftop Solar Services",
  description:
    "Residential and commercial rooftop solar installation, panel cleaning, repair, AMC, net-metering assistance and site surveys.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Rooftop solar services"
        intro="Installation, paperwork and long-term care for homes, businesses and factories."
        trail={[{ name: "Services", path: "/services/" }]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getServices().map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
