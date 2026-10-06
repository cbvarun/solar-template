import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { buildMetadata } from "@/lib/metadata";
import { getLocations } from "@/lib/content";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/sections/section";
import { LocationCard } from "@/components/cards/location-card";
import { CTASection } from "@/components/sections/cta-section";

export const metadata = buildMetadata({
  title: "Service Areas",
  description: `Where ${siteConfig.company.name} installs and services rooftop solar: ${siteConfig.serviceAreas.primaryCities.join(", ")}.`,
  path: "/service-areas/",
});

export default function ServiceAreasPage() {
  if (!siteConfig.features.serviceAreaPages) notFound();
  const { serviceAreas } = siteConfig;
  return (
    <>
      <PageHeader
        title={serviceAreas.headline}
        intro={`We work in ${serviceAreas.primaryCities.join(", ")}${serviceAreas.states.length ? ` (${serviceAreas.states.join(", ")})` : ""}. Pick your area to see what we do there.`}
        trail={[{ name: "Service Areas", path: "/service-areas/" }]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {getLocations().map((l) => (
            <LocationCard key={l.slug} location={l} />
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          Don&apos;t see your area? Get in touch. We often take on projects just outside these areas.
        </p>
      </Section>
      <CTASection />
    </>
  );
}
