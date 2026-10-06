import { t } from "@/lib/config";
import type { LegalPage } from "@/types/content";

export function LegalContent({ page }: { page: LegalPage }) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-muted-foreground">Last updated: {page.lastUpdated}</p>
      <p className="mt-4 text-lg">{page.intro}</p>
      {page.sections.map((s) => (
        <section key={s.heading} className="mt-9">
          <h2 className="text-xl font-semibold">{s.heading}</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-foreground/90">
            {s.body.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
