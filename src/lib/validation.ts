import { z } from "zod";

/**
 * Indian mobile: optional +91 / 91 / 0 prefix, then 10 digits starting 6-9.
 * Spaces and dashes are ignored.
 */
const INDIAN_MOBILE = /^(?:\+91|91|0)?[6-9]\d{9}$/;

export function normalizePhone(value: string): string {
  return value.replace(/[\s-]/g, "");
}

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(80, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .refine((v) => INDIAN_MOBILE.test(normalizePhone(v)), "Enter a valid 10-digit Indian mobile number."),
  email: z.string().trim().email("Enter a valid email address.").optional().or(z.literal("")),
  propertyType: z.string().optional(),
  monthlyBill: z.string().optional(),
  roofType: z.string().optional(),
  city: z.string().trim().min(2, "Please enter your city or location.").max(80, "Location is too long."),
  service: z.string().optional(),
  message: z.string().trim().max(1000, "Message is too long (max 1000 characters).").optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please agree to be contacted so we can respond to your enquiry.",
  }),
  // Honeypot. Real users never see or tick it.
  botcheck: z.boolean().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const leadFormDefaults: LeadFormValues = {
  fullName: "",
  phone: "",
  email: "",
  propertyType: "",
  monthlyBill: "",
  roofType: "",
  city: "",
  service: "",
  message: "",
  consent: false,
  botcheck: false,
};
