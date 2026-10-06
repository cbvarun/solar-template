import { siteConfig } from "@/lib/config";

/** Trust indicators. Values come straight from config, so placeholders are visible until replaced. */
export function StatsSection() {
  if (!siteConfig.features.trustStats) return null;
  const stats = siteConfig.home.trustStats;
  return (
    <section aria-label="Company at a glance" className="border-b">
      <div className="container">
        <dl className="grid grid-cols-2 divide-x divide-y border-x sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end px-4 py-6 sm:px-6">
              <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
              <dd className="font-heading text-2xl font-bold tracking-tight text-primary lg:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
