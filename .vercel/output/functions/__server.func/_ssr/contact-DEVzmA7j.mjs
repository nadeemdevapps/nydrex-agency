import { i as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as Copy, f as ArrowUpRight, l as Check } from "../_libs/lucide-react.mjs";
import { a as cn, c as needOptions, i as budgetOptions, r as SiteShell, s as founders, t as Button, u as primaryFounder } from "./site-shell-B-dSb-y5.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DEVzmA7j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-xl border border-input bg-card px-3.5 text-base text-foreground shadow-[0_0_0_0_transparent] transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-muted-foreground md:text-sm", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium leading-none text-foreground", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-xl border border-input bg-card px-3.5 py-3 text-base text-foreground transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-muted-foreground md:text-sm", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var enquirySchema = object({
	name: string().trim().min(2, "Please enter your name."),
	business: string().trim().max(120),
	phone: string().trim().min(7, "Please enter a WhatsApp or phone number.").max(24, "That number looks too long."),
	email: string().trim().email("Please enter a valid email."),
	need: string().trim().min(2, "Please tell us what you need."),
	budget: string().trim(),
	details: string().trim().min(20, "A little more detail helps — at least a couple of sentences.")
});
function formatEnquiryBrief(data) {
	return [
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
		data.details
	].join("\n");
}
function enquiryWhatsAppUrl(data) {
	return `${primaryFounder.whatsapp}?text=${encodeURIComponent(formatEnquiryBrief(data))}`;
}
var fieldClass = "w-full rounded-xl border border-input bg-card px-3.5 h-11 text-sm transition-[border-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
function ContactForm() {
	const [sent, setSent] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(enquirySchema),
		defaultValues: {
			name: "",
			business: "",
			phone: "",
			email: "",
			need: "",
			budget: "",
			details: ""
		}
	});
	const brief = (0, import_react.useMemo)(() => sent ? formatEnquiryBrief(sent) : "", [sent]);
	async function onSubmit(values) {
		setSent(values);
		const url = enquiryWhatsAppUrl(values);
		window.open(url, "_blank", "noopener,noreferrer");
	}
	async function copyBrief() {
		if (!brief) return;
		try {
			await navigator.clipboard.writeText(brief);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	if (sent) {
		const url = enquiryWhatsAppUrl(sent);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[1.6rem] border border-border bg-card p-6 shadow-border sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 rounded-full bg-sage-soft px-3 py-1 text-xs font-medium text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), "Brief ready"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-2xl font-medium tracking-tight",
					children: [
						"Send this to ",
						primaryFounder.name,
						" on WhatsApp"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Your project brief is formatted and ready. If WhatsApp did not open, use the button below."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-6 max-h-64 overflow-auto rounded-2xl bg-mist p-4 font-mono text-xs leading-relaxed whitespace-pre-wrap",
					children: brief
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-2 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: url,
								target: "_blank",
								rel: "noreferrer",
								children: ["Open WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							onClick: copyBrief,
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy brief"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => setSent(null),
							children: "Edit details"
						})
					]
				})
			]
		});
	}
	const { register, handleSubmit, formState: { errors, isSubmitting } } = form;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit(onSubmit),
		className: "rounded-[1.6rem] border border-border bg-card p-6 shadow-border sm:p-8",
		noValidate: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					htmlFor: "name",
					error: errors.name?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						autoComplete: "name",
						...register("name")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Business / Company",
					htmlFor: "business",
					hint: "Optional",
					error: errors.business?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "business",
						autoComplete: "organization",
						...register("business")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "WhatsApp or phone",
					htmlFor: "phone",
					error: errors.phone?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						autoComplete: "tel",
						inputMode: "tel",
						...register("phone")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					htmlFor: "email",
					error: errors.email?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						type: "email",
						autoComplete: "email",
						...register("email")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What do you need?",
					htmlFor: "need",
					error: errors.need?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "need",
						className: fieldClass,
						...register("need"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select one"
						}), needOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: opt,
							children: opt
						}, opt))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Budget range",
					htmlFor: "budget",
					hint: "Optional",
					error: errors.budget?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "budget",
						className: fieldClass,
						...register("budget"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select one"
						}), budgetOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: opt,
							children: opt
						}, opt))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Project details",
					htmlFor: "details",
					error: errors.details?.message,
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "details",
						rows: 6,
						placeholder: "What is the problem, who is it for, and what should a useful system do?",
						...register("details")
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Submitting opens WhatsApp to ",
					primaryFounder.name,
					" with this brief."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: isSubmitting,
				children: "Send project brief"
			})]
		})]
	});
}
function Field({ label, htmlFor, hint, error, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor,
					children: label
				}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
					children: hint
				}) : null]
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive",
				role: "alert",
				children: error
			}) : null
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-6xl px-5 py-16 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl",
				children: "Tell us what you need built."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 max-w-xl text-lg text-muted-foreground",
				children: [
					"Send a project brief and we will follow up. Prefer a message? WhatsApp",
					` ${primaryFounder.name}`,
					" — he is the primary contact for new work."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[1.6rem] border border-border bg-mist p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
								children: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: [
									"Each founder can be reached directly. For a new project, start with",
									" ",
									primaryFounder.name,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-4",
								children: founders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-2xl border border-border bg-card p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium",
												children: f.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
												children: f.primary ? "Primary" : "Founder"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:${f.phoneTel}`,
											className: "mt-1 block text-sm text-muted-foreground hover:text-foreground",
											children: f.phoneDisplay
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: f.whatsapp,
											className: "mt-3 inline-flex text-sm font-medium hover:underline",
											children: "Message on WhatsApp"
										})
									]
								}, f.name))
							})
						]
					})
				})]
			})
		]
	}) });
}
//#endregion
export { ContactPage as component };
