"use client";

import { useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TurnstileWidget } from "@/components/forms/turnstile-widget";
import { leadFormDefaults, leadFormSchema, type LeadFormValues } from "@/lib/validation";
import { checkRateLimit, recordSubmission } from "@/lib/rate-limit";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { cn } from "@/lib/utils";
import type { LeadFormSettings } from "@/lib/leadform-props";

interface Props {
  settings: LeadFormSettings;
  /** Where the form sits: "home", "contact", "quote-sheet", a service slug... Sent with the lead. */
  source: string;
  defaultService?: string;
  defaultCity?: string;
  /** Single column (used in the slide-in sheet). */
  compact?: boolean;
  className?: string;
}

function FieldShell({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={id}>
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-muted-foreground"> (optional)</span>
        )}
      </Label>
      {children}
      {/* Fixed-height slot so error text appearing doesn't shift the layout */}
      <p id={`${id}-error`} role={error ? "alert" : undefined} className="min-h-5 text-sm text-destructive">
        {error ?? ""}
      </p>
    </div>
  );
}

export function LeadFormClient({ settings, source, defaultService, defaultCity, compact, className }: Props) {
  const uid = useId().replace(/:/g, "");
  const router = useRouter();
  const successRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [formError, setFormError] = useState<{ headline: string; detail?: string } | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  const [wantsCaptcha, setWantsCaptcha] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: { ...leadFormDefaults, service: defaultService ?? "", city: defaultCity ?? "" },
    mode: "onTouched",
  });

  const id = (name: string) => `${uid}-${name}`;
  const f = settings.fields;
  const gridCols = compact ? "" : "sm:grid-cols-2";

  function resetCaptcha() {
    setCaptchaToken(null);
    setCaptchaKey((k) => k + 1);
  }

  async function onSubmit(values: LeadFormValues) {
    setFormError(null);

    // Honeypot ticked: a bot. Pretend success, send nothing.
    if (values.botcheck) {
      setStatus("success");
      return;
    }

    const limit = checkRateLimit(settings.rateLimit.maxSubmissions, settings.rateLimit.windowMinutes);
    if (!limit.allowed) {
      setFormError({
        headline: "You've sent a few enquiries already.",
        detail: `Please try again in about ${limit.retryInMinutes} minute${limit.retryInMinutes === 1 ? "" : "s"}, or call us on ${settings.fallback.phoneLabel}.`,
      });
      return;
    }

    if (settings.turnstileSiteKey && !captchaToken) {
      setFormError({
        headline: "Please complete the verification check.",
        detail: "Tick the box in the verification widget, then send your enquiry again.",
      });
      return;
    }

    const result = await submitToWeb3Forms({
      values,
      accessKey: settings.accessKey,
      subject: settings.subject,
      fromName: settings.fromName,
      captchaToken: captchaToken ?? undefined,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      source,
    });

    if (!result.ok) {
      setFormError({ headline: settings.errorMessage, detail: result.message });
      if (settings.turnstileSiteKey) resetCaptcha();
      return;
    }

    recordSubmission(settings.rateLimit.windowMinutes);
    reset({ ...leadFormDefaults, service: defaultService ?? "", city: defaultCity ?? "" });
    if (settings.turnstileSiteKey) resetCaptcha();

    // Web3Forms ignores `redirect` for JSON requests, so we navigate client-side.
    if (settings.thankYouPath) {
      router.push(settings.thankYouPath);
      return;
    }
    setStatus("success");
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className={cn("rounded-lg border border-primary/30 bg-primary/5 p-6 outline-none", className)}
      >
        <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
        <p className="mt-3 text-lg font-semibold">{settings.successMessage}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Need us sooner? Call{" "}
          <a className="font-medium text-primary underline" href={settings.fallback.phoneHref}>
            {settings.fallback.phoneLabel}
          </a>{" "}
          or{" "}
          <a className="font-medium text-primary underline" href={settings.fallback.whatsappUrl} target="_blank" rel="noopener noreferrer">
            message us on WhatsApp
          </a>
          .
        </p>
        <Button type="button" variant="outline" className="mt-5" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={className}
      aria-label="Enquiry form"
      onFocusCapture={() => settings.turnstileSiteKey && setWantsCaptcha(true)}
    >
      {/* Required by Web3Forms; the JSON payload in lib/web3forms.ts carries it too. */}
      <input type="hidden" name="access_key" value={settings.accessKey} />

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this box empty
          <input type="checkbox" tabIndex={-1} autoComplete="off" {...register("botcheck")} />
        </label>
      </div>

      <div className={cn("grid gap-x-4", gridCols)}>
        <FieldShell id={id("name")} label="Full name" required error={errors.fullName?.message}>
          <Input
            id={id("name")}
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={`${id("name")}-error`}
            aria-required="true"
            {...register("fullName")}
          />
        </FieldShell>

        <FieldShell id={id("phone")} label="Phone number" required error={errors.phone?.message}>
          <Input
            id={id("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={`${id("phone")}-error`}
            aria-required="true"
            {...register("phone")}
          />
        </FieldShell>

        {f.email && (
          <FieldShell id={id("email")} label="Email" error={errors.email?.message}>
            <Input
              id={id("email")}
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={`${id("email")}-error`}
              {...register("email")}
            />
          </FieldShell>
        )}

        <FieldShell id={id("city")} label="City or location" required error={errors.city?.message}>
          <Input
            id={id("city")}
            autoComplete="address-level2"
            aria-invalid={!!errors.city}
            aria-describedby={`${id("city")}-error`}
            aria-required="true"
            {...register("city")}
          />
        </FieldShell>

        {f.propertyType && (
          <FieldShell id={id("property")} label="Property type" error={errors.propertyType?.message}>
            <Controller
              control={control}
              name="propertyType"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger id={id("property")} aria-describedby={`${id("property")}-error`}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {settings.options.propertyTypes.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FieldShell>
        )}

        {f.monthlyBill && settings.options.billRanges.length > 0 && (
          <FieldShell id={id("bill")} label="Monthly electricity bill" error={errors.monthlyBill?.message}>
            <Controller
              control={control}
              name="monthlyBill"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger id={id("bill")} aria-describedby={`${id("bill")}-error`}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {settings.options.billRanges.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FieldShell>
        )}

        {f.roofType && (
          <FieldShell id={id("roof")} label="Roof type" error={errors.roofType?.message}>
            <Controller
              control={control}
              name="roofType"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger id={id("roof")} aria-describedby={`${id("roof")}-error`}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {settings.options.roofTypes.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FieldShell>
        )}

        {f.service && (
          <FieldShell id={id("service")} label="Interested service" error={errors.service?.message}>
            <Controller
              control={control}
              name="service"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger id={id("service")} aria-describedby={`${id("service")}-error`}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {settings.options.services.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FieldShell>
        )}
      </div>

      {f.message && (
        <FieldShell id={id("message")} label="Message" error={errors.message?.message}>
          <Textarea
            id={id("message")}
            rows={3}
            aria-invalid={!!errors.message}
            aria-describedby={`${id("message")}-error`}
            {...register("message")}
          />
        </FieldShell>
      )}

      <div className="space-y-1.5">
        <div className="flex items-start gap-3">
          <Controller
            control={control}
            name="consent"
            render={({ field }) => (
              <Checkbox
                id={id("consent")}
                checked={field.value}
                onCheckedChange={(v) => field.onChange(v === true)}
                onBlur={field.onBlur}
                aria-invalid={!!errors.consent}
                aria-describedby={`${id("consent")}-error`}
                aria-required="true"
                className="mt-0.5"
              />
            )}
          />
          <Label htmlFor={id("consent")} className="text-sm font-normal leading-snug">
            {settings.consentText}
            <span className="text-destructive" aria-hidden="true">
              {" "}
              *
            </span>
          </Label>
        </div>
        <p id={`${id("consent")}-error`} role={errors.consent ? "alert" : undefined} className="min-h-5 text-sm text-destructive">
          {errors.consent?.message ?? ""}
        </p>
      </div>

      {settings.turnstileSiteKey && (
        <div className="mb-3">
          {wantsCaptcha ? (
            <TurnstileWidget key={captchaKey} siteKey={settings.turnstileSiteKey} onToken={setCaptchaToken} />
          ) : (
            <div className="min-h-[65px]" aria-hidden="true" />
          )}
        </div>
      )}

      {formError && (
        <div role="alert" className="mb-4 flex gap-3 rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
          <div>
            <p className="font-semibold text-destructive">{formError.headline}</p>
            {formError.detail && <p className="mt-1 text-foreground/80">{formError.detail}</p>}
            <p className="mt-1 text-foreground/80">
              You can also call{" "}
              <a className="font-medium text-primary underline" href={settings.fallback.phoneHref}>
                {settings.fallback.phoneLabel}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send enquiry"
        )}
      </Button>
    </form>
  );
}
