/**
 * Client-side throttle using localStorage. This is a UX guard against
 * accidental double-submits and casual abuse, not real security.
 * Real spam protection = honeypot + Turnstile + Web3Forms' own filtering.
 */
const STORAGE_KEY = "lead-form:submissions";

type Result = { allowed: true } | { allowed: false; retryInMinutes: number };

function read(): number[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((n): n is number => typeof n === "number") : [];
  } catch {
    return [];
  }
}

export function checkRateLimit(maxSubmissions: number, windowMinutes: number): Result {
  const windowMs = windowMinutes * 60_000;
  const now = Date.now();
  const recent = read().filter((ts) => now - ts < windowMs);

  if (recent.length >= maxSubmissions) {
    const oldest = Math.min(...recent);
    const retryInMinutes = Math.max(1, Math.ceil((oldest + windowMs - now) / 60_000));
    return { allowed: false, retryInMinutes };
  }
  return { allowed: true };
}

export function recordSubmission(windowMinutes: number): void {
  try {
    const windowMs = windowMinutes * 60_000;
    const now = Date.now();
    const recent = read().filter((ts) => now - ts < windowMs);
    recent.push(now);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch {
    // Storage unavailable (private mode etc.): fail open.
  }
}
