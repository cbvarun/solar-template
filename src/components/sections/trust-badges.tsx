import { Award } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function TrustBadges() {
  const certs = siteConfig.about.certifications;
  if (certs.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-3">
      {certs.map((c) => (
        <li key={c.name} className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium">
          <Award className="h-4 w-4 text-primary" aria-hidden="true" />
          {c.name}
        </li>
      ))}
    </ul>
  );
}
