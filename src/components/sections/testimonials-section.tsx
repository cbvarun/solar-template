import { siteConfig } from "@/lib/config";
import { getTestimonials } from "@/lib/content";
import { Section } from "@/components/sections/section";
import { TestimonialCard } from "@/components/cards/testimonial-card";

export function TestimonialsSection() {
  const testimonials = getTestimonials();
  if (!siteConfig.features.testimonials || testimonials.length === 0) return null;

  return (
    <Section id="testimonials" title="What customers say">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((x) => (
          <TestimonialCard key={x.id} testimonial={x} />
        ))}
      </div>
    </Section>
  );
}
