export interface SubsidyBand {
  /** This band's rate applies to capacity up to this many kW. */
  uptoKw: number;
  perKw: number;
}

/**
 * Subsidy for a system of `kw`, from rate bands sorted by uptoKw.
 * With [{2, 30000}, {3, 18000}]: 1 kW → 30,000; 2.5 kW → 69,000; 5 kW → 78,000 (capped at the last band).
 */
export function subsidyForKw(kw: number, bands: SubsidyBand[]): number {
  let total = 0;
  let from = 0;
  for (const band of bands) {
    if (kw <= from) break;
    total += (Math.min(kw, band.uptoKw) - from) * band.perKw;
    from = band.uptoKw;
  }
  return Math.round(total);
}

// Shared sizing assumptions: the calculator, package cards and size pages all use these.
/** Share of your consumption a suggested system is sized to cover. */
export const TARGET_OFFSET = 0.8;
export const SQ_FT_PER_KW = 100;
export const PANEL_WATTS = 550;

/** Rule-of-thumb figures for a system of `kw`. */
export function systemFacts(
  kw: number,
  { costPerUnit, unitsPerKwPerMonth, bands }: { costPerUnit: number; unitsPerKwPerMonth: number; bands?: SubsidyBand[] },
) {
  const unitsPerMonth = Math.round(kw * unitsPerKwPerMonth);
  return {
    unitsPerMonth,
    roofSqFt: Math.round(kw * SQ_FT_PER_KW),
    panels: Math.ceil((kw * 1000) / PANEL_WATTS),
    /** The monthly bill this size is suggested for by the calculator. */
    typicalBill: Math.round(((unitsPerMonth / TARGET_OFFSET) * costPerUnit) / 50) * 50,
    subsidy: bands ? subsidyForKw(kw, bands) : 0,
  };
}
