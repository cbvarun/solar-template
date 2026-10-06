import { cn } from "@/lib/utils";

/** Consistent vertical rhythm + optional heading block for every section. */
export function Section({
  id,
  title,
  intro,
  tone = "plain",
  className,
  children,
}: {
  id?: string;
  title?: string;
  intro?: string;
  tone?: "plain" | "muted";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={title && id ? `${id}-heading` : undefined} className={cn("py-14 lg:py-20", tone === "muted" && "bg-muted/50", className)}>
      <div className="container">
        {title && (
          <div className="mb-10 max-w-2xl">
            <h2 id={id ? `${id}-heading` : undefined} className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            {intro && <p className="mt-3 text-lg text-muted-foreground">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
