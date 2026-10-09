import { siteConfig, t } from "@/lib/config";
import { Section } from "@/components/sections/section";

/** Equipment brands, grouped (panels, inverters, batteries). Renders nothing if home.brands is not set. */
export function BrandsSection() {
  const brands = siteConfig.home.brands;
  if (!brands) return null;

  return (
    <Section id="brands" title={t(brands.headline)} intro={brands.intro && t(brands.intro)}>
      <div className={brands.groups.length > 1 ? "grid gap-8 md:grid-cols-3" : "grid gap-8"}>
        {brands.groups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {group.items.map((brand) => (
                <li
                  key={brand.name}
                  className="flex h-14 items-center rounded-md border bg-card px-4 text-sm font-semibold shadow-card"
                >
                  {brand.logo ? (
                    // Plain <img>: static export, and brand logos are usually small SVG/PNG files.
                    <img src={brand.logo} alt={brand.name} className="h-8 w-auto max-w-32 object-contain" />
                  ) : (
                    brand.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
