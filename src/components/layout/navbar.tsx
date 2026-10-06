import { ChevronDown } from "lucide-react";
import { NavLink } from "@/components/layout/nav-link";
import { getMainNav } from "@/lib/nav";

/**
 * Desktop navigation. Dropdowns are pure CSS (hover + keyboard focus),
 * so this component ships no JavaScript besides <NavLink>.
 */
export function Navbar() {
  const items = getMainNav();
  const linkClass =
    "inline-flex min-h-11 items-center gap-1 rounded-md px-3 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <li key={item.href} className="group relative">
            <NavLink href={item.href} className={linkClass}>
              {item.label}
              {item.children && <ChevronDown className="h-4 w-4 opacity-60" aria-hidden="true" />}
            </NavLink>
            {item.children && (
              <ul className="invisible absolute left-0 top-full z-50 w-80 rounded-lg border bg-card p-2 opacity-0 shadow-card transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <NavLink
                      href={child.href}
                      className="block rounded-md px-3 py-2.5 text-sm text-foreground/85 hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
