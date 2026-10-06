import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/sections/section";
import { ServiceCard } from "@/components/cards/service-card";
import { getServices } from "@/lib/content";

/** Six service cards plus an "all services" tile, so the 3-column grid ends cleanly. */
export function ServicesOverview() {
  const services = getServices();
  const shown = services.slice(0, 6);
  return (
    <Section
      id="services"
      title="Rooftop solar, from first survey to long-term service"
      intro="Install it, connect it, keep it running. One team handles every stage."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
        <Link
          href="/services/"
          className="group flex min-h-48 flex-col justify-between rounded-lg bg-primary p-6 text-primary-foreground shadow-card transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <span className="text-xl font-semibold leading-snug">
            See all {services.length} services, including repair, AMC and site surveys
          </span>
          <span className="inline-flex items-center gap-2 font-semibold">
            View services
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
