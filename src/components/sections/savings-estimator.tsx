"use client";

import { useId, useState } from "react";
import { MessageCircle } from "lucide-react";
import { QuoteButton } from "@/components/forms/quote-sheet";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/utils";
import { SQ_FT_PER_KW, TARGET_OFFSET, subsidyForKw, type SubsidyBand } from "@/lib/subsidy";

interface Props {
  costPerUnit: number;
  unitsPerKwPerMonth: number;
  ctaLabel: string;
  whatsapp: {
    number: string;
    /** Message with {{bill}} and {{kw}} still unresolved; filled in from the slider. */
    template: string;
    label: string;
  };
  /** Home subsidy rates; omit to leave the subsidy line out. */
  subsidy?: { scheme: string; bands: SubsidyBand[] };
}


export function SavingsEstimator({ costPerUnit, unitsPerKwPerMonth, ctaLabel, whatsapp, subsidy }: Props) {
  const inputId = useId();
  const [bill, setBill] = useState(5000);

  const unitsUsed = bill / costPerUnit;
  const rawKw = (unitsUsed * TARGET_OFFSET) / unitsPerKwPerMonth;
  const kw = Math.max(1, Math.round(rawKw * 2) / 2); // nearest 0.5 kW, minimum 1
  const generation = Math.round(kw * unitsPerKwPerMonth);
  const monthlySaving = Math.min(Math.round(generation * costPerUnit), bill);
  const subsidyAmount = subsidy ? subsidyForKw(kw, subsidy.bands) : 0;
  const message = whatsapp.template.replaceAll("{{bill}}", formatINR(bill)).replaceAll("{{kw}}", String(kw));
  const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-card sm:p-8">
      <h3 className="text-xl font-semibold">Rough estimate for your bill</h3>

      <div className="mt-6">
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor={inputId} className="text-sm font-medium">
            Your average monthly electricity bill
          </label>
          <output htmlFor={inputId} className="font-heading text-2xl font-bold text-primary">
            {formatINR(bill)}
          </output>
        </div>
        <input
          id={inputId}
          type="range"
          min={1000}
          max={50000}
          step={500}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          aria-valuetext={`${formatINR(bill)} per month`}
          className="mt-3 h-11 w-full cursor-pointer"
          style={{ accentColor: "hsl(var(--primary))" }}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{formatINR(1000)}</span>
          <span>{formatINR(50000)}</span>
        </div>
      </div>

      <dl className="mt-6 grid gap-4 sm:grid-cols-3" aria-live="polite">
        <div className="rounded-md bg-muted p-4">
          <dt className="text-sm text-muted-foreground">Suggested system</dt>
          <dd className="mt-1 font-heading text-2xl font-bold">{kw} kW</dd>
          <dd className="text-xs text-muted-foreground">about {Math.round(kw * SQ_FT_PER_KW)} sq ft of roof</dd>
        </div>
        <div className="rounded-md bg-muted p-4">
          <dt className="text-sm text-muted-foreground">Monthly generation</dt>
          <dd className="mt-1 font-heading text-2xl font-bold">~{generation} units</dd>
        </div>
        <div className="rounded-md bg-primary/10 p-4">
          <dt className="text-sm text-muted-foreground">Monthly bill reduction</dt>
          <dd className="mt-1 font-heading text-2xl font-bold text-primary">~{formatINR(monthlySaving)}</dd>
          <dd className="text-xs text-muted-foreground">about {formatINR(monthlySaving * 12)} a year</dd>
        </div>
      </dl>

      {subsidyAmount > 0 && (
        <p className="mt-4 rounded-md border border-primary/25 bg-primary/5 p-4 text-sm" aria-live="polite">
          <span className="font-semibold">If this is your home,</span> a {kw} kW system may qualify for a subsidy of
          about <span className="font-semibold text-primary">{formatINR(subsidyAmount)}</span> under {subsidy?.scheme}.
        </p>
      )}

      <p className="mt-4 text-sm text-muted-foreground">
        Illustrative only. It assumes about {Math.round(costPerUnit * 10) / 10} ₹ per unit and {unitsPerKwPerMonth} units
        per kW each month. Real figures depend on your roof, shading, tariff slabs and usage. We confirm the numbers
        at the site survey. For commercial or industrial roofs, request a proposal.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <QuoteButton size="lg" className="w-full sm:w-auto">
          {ctaLabel}
        </QuoteButton>
        <Button asChild size="lg" variant="whatsapp" className="w-full sm:w-auto">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {whatsapp.label}
          </a>
        </Button>
      </div>
    </div>
  );
}
