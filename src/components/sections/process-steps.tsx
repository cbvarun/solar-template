import { getProcessSteps } from "@/lib/content";
import { Section } from "@/components/sections/section";

/** A real sequence, so numbering is meaningful here. */
export function ProcessSteps() {
  const steps = getProcessSteps();
  return (
    <Section id="process" title="How a solar project runs with us" intro="Seven steps, and you know which one you're on.">
      <ol className="relative grid gap-x-12 gap-y-8 lg:grid-cols-2">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary font-heading text-base font-bold text-primary"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-1 text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
