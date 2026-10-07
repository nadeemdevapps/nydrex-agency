import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [copyError, setCopyError] = useState(false);
  const reviewHeading = useRef<HTMLHeadingElement>(null);

  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      business: "",
      phone: "",
      email: "",
      budget: "",
      details: "",
    },
  });

  useEffect(() => {
    if (sent) reviewHeading.current?.focus();
  }, [sent]);

  const brief = useMemo(() => (sent ? formatEnquiryBrief(sent) : ""), [sent]);

  async function onSubmit(values: EnquiryValues) {
    setCopied(false);
    setCopyError(false);
    setSent(values);
  }

  async function copyBrief() {
    if (!brief) return;
    try {
      await navigator.clipboard.writeText(brief);
      setCopyError(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  if (sent) {
    const url = enquiryWhatsAppUrl(sent);
    return (
      <div className="rounded-xl border border-border bg-card p-6 shadow-border sm:p-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-3 py-1 text-xs font-medium text-primary-foreground">
          <Check className="size-3.5" />
          Brief ready
        </p>
        <h2 ref={reviewHeading} tabIndex={-1} className="mt-4 text-2xl font-medium tracking-tight">
          Send this to {primaryFounder.name} on WhatsApp
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Your project brief is formatted and ready to send. Open WhatsApp to message{" "}
          {primaryFounder.name}, or copy the brief first.
        </p>
        <pre className="mt-6 max-h-64 overflow-auto rounded-2xl bg-mist p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
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
        <p role="status" className="mt-3 text-sm text-muted-foreground">
          {copyError
            ? "Copy is unavailable. Select the brief above to copy it, or open WhatsApp directly."
            : copied
              ? "Project brief copied to clipboard."
              : "The brief is sent only when you press Send in WhatsApp."}
        </p>
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
      className="rounded-xl border border-border bg-card p-6 shadow-border sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            maxLength={100}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>
        <Field
          label="Business / Company"
          htmlFor="business"
          hint="Optional"
          error={errors.business?.message}
        >
          <Input
            id="business"
            autoComplete="organization"
            maxLength={120}
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? "business-error" : undefined}
            {...register("business")}
          />
        </Field>
        <Field label="WhatsApp or phone" htmlFor="phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={24}
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>
        <Field label="Email" htmlFor="email" hint="Optional" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
        <Field label="What do you need?" htmlFor="need" error={errors.need?.message}>
          <select
            id="need"
            defaultValue=""
            required
            aria-invalid={!!errors.need}
            aria-describedby={errors.need ? "need-error" : undefined}
            className={fieldClass}
            {...register("need")}
          >
            <option value="">Select one</option>
            {needOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" htmlFor="budget" hint="Optional" error={errors.budget?.message}>
          <select
            id="budget"
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            className={fieldClass}
            {...register("budget")}
          >
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
            maxLength={3000}
            required
            aria-invalid={!!errors.details}
            aria-describedby={errors.details ? "details-error" : undefined}
            placeholder="What is the problem, who is it for, and what should a useful system do?"
            {...register("details")}
          />
        </Field>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          You will review the brief on the next step, then send it to {primaryFounder.name} on
          WhatsApp.
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
          <span className="font-mono text-micro tracking-widest text-muted-foreground uppercase">
            {hint}
          </span>
        ) : null}
      </div>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
