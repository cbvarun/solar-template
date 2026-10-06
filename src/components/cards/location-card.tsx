import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Location } from "@/types/content";

export function LocationCard({ location }: { location: Location }) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border bg-card p-5 shadow-card transition-shadow hover:shadow-lg">
      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
      <h3 className="mt-3 text-lg font-semibold">
        <Link
          href={`/service-areas/${location.slug}/`}
          className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
        >
          Rooftop solar in {location.name}
        </Link>
      </h3>
      <p className="text-sm text-muted-foreground">{location.region}</p>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{location.highlights[0]}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        See coverage
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </article>
  );
}
