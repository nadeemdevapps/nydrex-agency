import { z } from "zod";
import { budgetOptions, needOptions, primaryFounder } from "@/lib/site";

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Please use 100 characters or fewer."),
  business: z.string().trim().max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a WhatsApp or phone number.")
    .max(24, "That number looks too long.")
    .regex(/^\+?[\d\s().-]+$/, "Use digits and an optional international + prefix.")
    .refine((phone) => {
      const digits = phone.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }, "Please enter a valid phone number with 7 to 15 digits."),
  email: z.string().trim().email("Please enter a valid email.").max(254),
  need: z.enum(needOptions, { error: "Please tell us what you need." }),
  budget: z.union([z.literal(""), z.enum(budgetOptions)]),
  details: z
    .string()
    .trim()
    .min(20, "Please add at least 20 characters about your project.")
    .max(3000, "Please keep your project details under 3,000 characters."),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;

export function formatEnquiryBrief(data: EnquiryValues) {
  const lines = [
    `Hello ${primaryFounder.name}, I would like to start a project with Nydrex.`,
    "",
    `Name: ${data.name}`,
    `Business: ${data.business.trim() ? data.business.trim() : "—"}`,
    `WhatsApp / phone: ${data.phone}`,
    `Email: ${data.email}`,
    `What I need: ${data.need}`,
    `Budget: ${data.budget.trim() ? data.budget.trim() : "To be discussed"}`,
    "",
    "Project details:",
    data.details,
  ];
  return lines.join("\n");
}

export function enquiryWhatsAppUrl(data: EnquiryValues) {
  return `${primaryFounder.whatsapp}?text=${encodeURIComponent(formatEnquiryBrief(data))}`;
}
