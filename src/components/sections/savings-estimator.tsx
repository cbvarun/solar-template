"use client";

import { useId, useState } from "react";
import { QuoteButton } from "@/components/forms/quote-sheet";
import { formatINR } from "@/lib/utils";

interface Props {
  costPerUnit: number;
  unitsPerKwPerMonth: number;
  ctaLabel: string;
}

/** Share of your consumption the suggested system is sized to cover. */
const TARGET_OFFSET = 0.8;
const SQ_FT_PER_KW = 100;

export function SavingsEstimator({ costPerUnit, unitsPerKwPerMonth, ctaLabel }: Props) {
  const inputId = useId();
  const [bill, setBill] = useState(5000);

  const unitsUsed = bill / costPerUnit;
  const rawKw = (unitsUsed * TARGET_OFFSET) / unitsPerKwPerMonth;
  const kw = Math.max(1, Math.round(rawKw * 2) / 2); // nearest 0.5 kW, minimum 1
  const generation = Math.round(kw * unitsPerKwPerMonth);
  const monthlySaving = Math.min(Math.round(generation * costPerUnit), bill);

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

      <p className="mt-4 text-sm text-muted-foreground">
        Illustrative only. It assumes about {Math.round(costPerUnit * 10) / 10} ₹ per unit and {unitsPerKwPerMonth} units
        per kW each month. Real figures depend on your roof, shading, tariff slabs and usage. We confirm the numbers
        at the site survey. For commercial or industrial roofs, request a proposal.
      </p>

      <QuoteButton size="lg" className="mt-5 w-full sm:w-auto">
        {ctaLabel}
      </QuoteButton>
    </div>
  );
}
