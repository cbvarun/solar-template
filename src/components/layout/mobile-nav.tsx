"use client";

import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { QuoteButton } from "@/components/forms/quote-sheet";

interface Item {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface Props {
  items: Item[];
  companyName: string;
  quoteLabel: string;
  callLabel: string;
  phoneHref: string;
  whatsappUrl: string;
  whatsappLabel: string;
}

export function MobileNav({ items, companyName, quoteLabel, callLabel, phoneHref, whatsappUrl, whatsappLabel }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="border-b px-5 py-4 pr-16">
          <SheetTitle>{companyName}</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-3">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between rounded-md px-3 text-base font-medium hover:bg-muted [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="ml-3 border-l pl-2">
                      <li>
                        <SheetClose asChild>
                          <Link href={item.href} className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-primary hover:bg-muted">
                            All {item.label.toLowerCase()}
                          </Link>
                        </SheetClose>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose asChild>
                            <Link href={child.href} className="flex min-h-11 items-center rounded-md px-3 text-sm hover:bg-muted">
                              {child.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <SheetClose asChild>
                    <Link href={item.href} className="flex min-h-12 items-center rounded-md px-3 text-base font-medium hover:bg-muted">
                      {item.label}
                    </Link>
                  </SheetClose>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-2 border-t p-4">
          <SheetClose asChild>
            <QuoteButton size="lg">{quoteLabel}</QuoteButton>
          </SheetClose>
          <div className="grid grid-cols-2 gap-2">
            <Button asChild variant="outline">
              <a href={phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {callLabel}
              </a>
            </Button>
            <Button asChild variant="whatsapp">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {whatsappLabel}
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
