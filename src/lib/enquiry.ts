import { z } from "zod";
import { primaryFounder } from "@/lib/site";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  business: z.string().trim().max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a WhatsApp or phone number.")
    .max(24, "That number looks too long."),
  email: z.string().trim().email("Please enter a valid email."),
  need: z.string().trim().min(2, "Please tell us what you need."),
  budget: z.string().trim(),
  details: z
    .string()
    .trim()
    .min(20, "A little more detail helps — at least a couple of sentences."),
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
