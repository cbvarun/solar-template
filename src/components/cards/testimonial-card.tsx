import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-lg border bg-card p-6 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden="true"
              className={i < testimonial.rating ? "h-4 w-4 fill-secondary text-secondary" : "h-4 w-4 text-border"}
            />
          ))}
        </div>
        {testimonial.isSample && (
          <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Sample</span>
        )}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed">“{testimonial.quote}”</blockquote>
      <figcaption className="mt-5 border-t pt-4 text-sm">
        <span className="font-semibold">{testimonial.name}</span>
        <span className="text-muted-foreground"> · {testimonial.location}</span>
      </figcaption>
    </figure>
  );
}
