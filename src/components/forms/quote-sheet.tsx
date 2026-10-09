"use client";

import { createContext, useContext, useMemo, useState } from "react";
import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";

/** Pre-fills the sheet's form, e.g. from a "Get 3 kW quote" button. */
export interface QuotePrefill {
  /** A service title, as shown in the "Interested service" dropdown. */
  service?: string;
  message?: string;
  /** Sent with the lead instead of "quote-sheet", so you can see which button it came from. */
  source?: string;
}

interface Ctx {
  enabled: boolean;
  open: (prefill?: QuotePrefill) => void;
  prefill: QuotePrefill | null;
}
const QuoteSheetContext = createContext<Ctx>({ enabled: false, open: () => {}, prefill: null });

/** The prefill of the currently open quote sheet (null when opened without one). */
export function useQuotePrefill(): QuotePrefill | null {
  return useContext(QuoteSheetContext).prefill;
}

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
  const [prefill, setPrefill] = useState<QuotePrefill | null>(null);
  const value = useMemo(
    () => ({
      enabled,
      prefill,
      open: (p?: QuotePrefill) => {
        setPrefill(p ?? null);
        setOpen(true);
      },
    }),
    [enabled, prefill],
  );

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
            {/* Keyed by the prefill so the form starts fresh when a different button opens it. */}
            <div key={JSON.stringify(prefill)} className="overflow-y-auto px-6 pb-8">
              {form}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </QuoteSheetContext.Provider>
  );
}

/** Opens the quote sheet. If the sheet feature is off, it links to /contact/ instead. */
export function QuoteButton({ children, onClick, prefill, ...props }: ButtonProps & { prefill?: QuotePrefill }) {
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
        open(prefill);
      }}
    >
      {children}
    </Button>
  );
}
