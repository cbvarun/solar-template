import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export interface Crumb {
  name: string;
  path: string;
}

/** H1 + breadcrumb trail (with BreadcrumbList JSON-LD). `trail` excludes Home. */
export function PageHeader({
  title,
  intro,
  trail,
  children,
}: {
  title: string;
  intro?: string;
  trail: Crumb[];
  children?: React.ReactNode;
}) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...trail];
  return (
    <section className="border-b bg-muted/50">
      <JsonLd data={breadcrumbJsonLd(all)} />
      <div className="container py-10 lg:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            {all.map((c, i) => {
              const last = i === all.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-1">
                  {last ? (
                    <span aria-current="page" className="text-foreground">{c.name}</span>
                  ) : (
                    <Link href={c.path} className="rounded-sm underline-offset-4 hover:text-primary hover:underline">
                      {c.name}
                    </Link>
                  )}
                  {!last && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
