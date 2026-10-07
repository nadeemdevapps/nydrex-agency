import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  enquirySchema,
  enquiryWhatsAppUrl,
  formatEnquiryBrief,
  type EnquiryValues,
} from "@/lib/enquiry";
import { budgetOptions, needOptions, primaryFounder } from "@/lib/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-3.5 h-11 text-sm transition-[border-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ContactForm() {
  const [sent, setSent] = useState<EnquiryValues | null>(null);
  const [copied, setCopied] = useState(false);

  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      business: "",
      phone: "",
      email: "",
      need: "",
      budget: "",
      details: "",
    },
  });

  const brief = useMemo(
    () => (sent ? formatEnquiryBrief(sent) : ""),
    [sent],
  );

  async function onSubmit(values: EnquiryValues) {
    setSent(values);
  }

  async function copyBrief() {
    if (!brief) return;
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    const url = enquiryWhatsAppUrl(sent);
    return (
      <div className="rounded-[1.6rem] border border-border bg-card p-6 shadow-border sm:p-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-3 py-1 text-xs font-medium text-primary-foreground">
          <Check className="size-3.5" />
          Brief ready
        </p>
        <h2 className="mt-4 text-2xl font-medium tracking-tight">
          Send this to {primaryFounder.name} on WhatsApp
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Your project brief is formatted and ready to send. Open WhatsApp to
          message {primaryFounder.name}, or copy the brief first.
        </p>
        <pre className="mt-6 max-h-64 overflow-auto rounded-2xl bg-mist p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap">
          {brief}
        </pre>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button asChild>
            <a href={url} target="_blank" rel="noreferrer">
              Open WhatsApp
              <ArrowUpRight />
            </a>
          </Button>
          <Button type="button" variant="outline" onClick={copyBrief}>
            {copied ? <Check /> : <Copy />}
            {copied ? "Copied" : "Copy brief"}
          </Button>
          <Button type="button" variant="ghost" onClick={() => setSent(null)}>
            Edit details
          </Button>
        </div>
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.6rem] border border-border bg-card p-6 shadow-border sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" {...register("name")} />
        </Field>
        <Field
          label="Business / Company"
          htmlFor="business"
          hint="Optional"
          error={errors.business?.message}
        >
          <Input id="business" autoComplete="organization" {...register("business")} />
        </Field>
        <Field
          label="WhatsApp or phone"
          htmlFor="phone"
          error={errors.phone?.message}
        >
          <Input id="phone" autoComplete="tel" inputMode="tel" {...register("phone")} />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field
          label="What do you need?"
          htmlFor="need"
          error={errors.need?.message}
        >
          <select id="need" className={fieldClass} {...register("need")}>
            <option value="">Select one</option>
            {needOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Budget range"
          htmlFor="budget"
          hint="Optional"
          error={errors.budget?.message}
        >
          <select id="budget" className={fieldClass} {...register("budget")}>
            <option value="">Select one</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Project details"
          htmlFor="details"
          error={errors.details?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="details"
            rows={6}
            placeholder="What is the problem, who is it for, and what should a useful system do?"
            {...register("details")}
          />
        </Field>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          You will review the brief on the next step, then send it to{" "}
          {primaryFounder.name} on WhatsApp.
        </p>
        <Button type="submit" disabled={isSubmitting}>
          Send project brief
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={htmlFor}>{label}</Label>
        {hint ? (
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            {hint}
          </span>
        ) : null}
      </div>
      {children}
      {error ? (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
