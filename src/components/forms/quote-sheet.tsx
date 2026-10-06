"use client";

import { createContext, useContext, useMemo, useState } from "react";
import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";

interface Ctx {
  enabled: boolean;
  open: () => void;
}
const QuoteSheetContext = createContext<Ctx>({ enabled: false, open: () => {} });

interface ProviderProps {
  enabled: boolean;
  title: string;
  description: string;
  /** A server-rendered <LeadForm compact source="quote-sheet" /> */
  form: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Wraps the site once (in layout.tsx). Any <QuoteButton> opens one shared
 * slide-in form: a bottom sheet on mobile, a right-hand drawer on desktop.
 */
export function QuoteSheetProvider({ enabled, title, description, form, children }: ProviderProps) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ enabled, open: () => setOpen(true) }), [enabled]);

  return (
    <QuoteSheetContext.Provider value={value}>
      {children}
      {enabled && (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent>
            <div className="px-6 pb-3 pr-16 pt-6">
              <SheetTitle>{title}</SheetTitle>
              <SheetDescription className="mt-1">{description}</SheetDescription>
            </div>
            <div className="overflow-y-auto px-6 pb-8">{form}</div>
          </SheetContent>
        </Sheet>
      )}
    </QuoteSheetContext.Provider>
  );
}

/** Opens the quote sheet. If the sheet feature is off, it links to /contact/ instead. */
export function QuoteButton({ children, onClick, ...props }: ButtonProps) {
  const { enabled, open } = useContext(QuoteSheetContext);

  if (!enabled) {
    return (
      <Button asChild {...props}>
        <Link href="/contact/">{children}</Link>
      </Button>
    );
  }
  return (
    <Button
      type="button"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        open();
      }}
    >
      {children}
    </Button>
  );
}
