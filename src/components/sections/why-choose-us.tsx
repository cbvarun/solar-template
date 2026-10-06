import { siteConfig } from "@/lib/config";
import { getIcon } from "@/lib/icons";
import { Section } from "@/components/sections/section";

export function WhyChooseUs() {
  const items = siteConfig.home.whyChooseUs;
  return (
    <Section id="why-us" tone="muted" title={`Why homes and businesses choose ${siteConfig.company.name}`}>
      <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <li key={item.title} className="flex gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">{item.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
