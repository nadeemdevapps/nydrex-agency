import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, m as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as Menu, p as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-B-dSb-y5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96] transition-[color,background-color,box-shadow,opacity,transform,border-color] duration-150 ease-out", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgb(22_22_22_/_0.06)] hover:brightness-[0.97]",
			ink: "bg-secondary text-secondary-foreground hover:opacity-90",
			outline: "border border-border bg-card text-foreground hover:bg-mist",
			ghost: "text-foreground hover:bg-mist",
			link: "text-foreground underline-offset-4 hover:underline rounded-none px-0"
		},
		size: {
			default: "h-11 rounded-full px-5 text-sm",
			sm: "h-9 rounded-full px-4 text-sm",
			lg: "h-12 rounded-full px-6 text-base",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		className: cn("size-8", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "9",
			fill: "currentColor",
			className: "text-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10 8.5h3.1L22 18.8V8.5H24.5V23.5H21.4L12.5 13.2V23.5H10V8.5Z",
			fill: "currentColor",
			className: "text-ink"
		})]
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 text-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[1.05rem] font-semibold tracking-tight",
			children: "Nydrex"
		})]
	});
}
var site = {
	name: "Nydrex",
	tagline: "Ideas become systems.",
	principle: "Make the system clearer than the problem it replaces.",
	short: "Nydrex turns rough concepts and business problems into useful software, web apps, automation and custom digital tools.",
	description: "Nydrex builds custom software, web applications, automation, internal tools and digital systems for businesses.",
	longDescription: "Nydrex is a founder-led software and digital product development company. We build custom software, web applications, automation systems, custom tools, dashboards, mobile products and digital business systems.",
	titles: {
		home: "Nydrex | Custom Software, Web Apps & Automation",
		services: "Services | Nydrex",
		work: "Work | Nydrex",
		about: "About | Nydrex",
		contact: "Contact | Nydrex",
		notFound: "Page not found | Nydrex"
	},
	descriptions: {
		home: "Nydrex builds custom software, web applications, automation, internal tools and digital systems for businesses.",
		services: "Custom software, web applications, automation, dashboards, mobile products and local business digital systems from Nydrex.",
		work: "Selected Nydrex projects and case studies will appear here. Start a project in the meantime.",
		about: "Nydrex is a small founder-led team. Nadeem, Moazam and Abdullah stay directly involved in planning and development.",
		contact: "Send a project brief to Nydrex, or message a founder on WhatsApp to start a conversation.",
		notFound: "This page is not available. Return to Nydrex to keep going."
	}
};
var founders = [
	{
		name: "Nadeem",
		role: "Founder",
		phoneDisplay: "+92 325 1473646",
		phoneTel: "+923251473646",
		whatsapp: "https://wa.me/923251473646",
		primary: true
	},
	{
		name: "Moazam",
		role: "Founder",
		phoneDisplay: "+92 325 5701685",
		phoneTel: "+923255701685",
		whatsapp: "https://wa.me/923255701685",
		primary: false
	},
	{
		name: "Abdullah",
		role: "Founder",
		phoneDisplay: "+92 318 0290447",
		phoneTel: "+923180290447",
		whatsapp: "https://wa.me/923180290447",
		primary: false
	}
];
var primaryFounder = founders[0];
var nav = [
	{
		label: "Services",
		to: "/services",
		hasMenu: true
	},
	{
		label: "Work",
		to: "/work",
		hasMenu: false
	},
	{
		label: "About",
		to: "/about",
		hasMenu: false
	},
	{
		label: "Contact",
		to: "/contact",
		hasMenu: false
	}
];
var services = [
	{
		slug: "custom-software",
		title: "Custom Software Development",
		short: "Systems shaped around how the work actually happens.",
		summary: "Software designed around your operations — not a generic product you have to squeeze into.",
		body: "We design and build software that replaces scattered tools, spreadsheets and workarounds with one clearer system. The starting point is the work itself: who does it, where it breaks, and what should happen instead.",
		points: [
			"Operational systems unique to your process",
			"Replacing fragile spreadsheet-led workflows",
			"Clearer handoffs between people and teams"
		]
	},
	{
		slug: "web-apps",
		title: "Web Application Development",
		short: "Browser-based products your team and customers can actually use.",
		summary: "Customer portals, admin systems, booking flows and the software people open every day.",
		body: "We build web applications that sit in the browser and carry the real work: requests, records, approvals, reports. Fast enough to use on a busy day, structured enough to stay understandable as they grow.",
		points: [
			"Customer and partner portals",
			"Internal admin and operations apps",
			"Booking, intake and workflow products"
		]
	},
	{
		slug: "automation",
		title: "Automation & Integrations",
		short: "Move information once. Let the system do the rest.",
		summary: "Connect forms, CRMs, inventories and notifications so people stop copying data by hand.",
		body: "Automation is useful when it removes a repeated, error-prone step — not when it adds another dashboard to check. We connect the tools you already use and design the path information should take.",
		points: [
			"Form to system to notification flows",
			"Connecting existing business tools",
			"Fewer manual copy-paste steps"
		]
	},
	{
		slug: "tools-dashboards",
		title: "Custom Tools & Dashboards",
		short: "Purpose-built tools for the work off-the-shelf software misses.",
		summary: "Internal utilities, admin panels and dashboards that make the next decision obvious.",
		body: "Some work never quite fits a ready-made product. We build the specific tool — a dashboard, an ops panel, a focused utility — so the people doing the work can see status, act, and move on.",
		points: [
			"Operational dashboards",
			"Internal tools for recurring tasks",
			"Views that show what needs attention"
		]
	},
	{
		slug: "mobile",
		title: "Mobile Products",
		short: "The same system, carried in a pocket.",
		summary: "Mobile-first products for customers or field teams — not a stripped-down afterthought.",
		body: "When the work happens away from a desk, the product has to live on a phone. We build mobile products that use the same underlying system as the rest of the business, so field and office stay in sync.",
		points: [
			"Customer-facing mobile products",
			"Field and on-the-floor tools",
			"Shared data with the rest of the system"
		]
	},
	{
		slug: "local-business",
		title: "Local Business Digital Systems",
		short: "Software that fits the counter, the floor and the back office.",
		summary: "Digital systems for local operations: orders, staff, customers, inventory and daily work.",
		body: "Local businesses do not need a bloated platform. They need a system that matches the day: taking orders, tracking staff, keeping customers, watching stock. We build those systems so daily operations are easier to run.",
		points: [
			"Orders, customers and daily operations",
			"Staff-facing tools that stay simple",
			"Systems sized for how the business actually runs"
		]
	}
];
var processSteps = [
	{
		n: "01",
		title: "Listen",
		body: "We start with the problem, the people involved, and the work already happening. No solution is sketched before that is clear."
	},
	{
		n: "02",
		title: "Shape",
		body: "We map a system that is clearer than the problem it replaces — what stays, what goes, and how information should move."
	},
	{
		n: "03",
		title: "Build",
		body: "Founders stay involved while the product is designed and developed. You see the system take shape, not a black box at the end."
	},
	{
		n: "04",
		title: "Hand over",
		body: "You receive a working system, explained in plain language, ready to use. Support continues where it is useful."
	}
];
var faqs = [
	{
		q: "What does Nydrex build?",
		a: "Custom software, web applications, automation and integrations, internal tools and dashboards, mobile products, and digital systems for local businesses. The common thread is a system that is clearer than the problem it replaces."
	},
	{
		q: "Who will I work with?",
		a: "Nydrex is founder-led. Nadeem, Moazam and Abdullah stay directly involved in planning and development. You are not handed off to an anonymous production line."
	},
	{
		q: "How do we start a project?",
		a: "Send a short project brief through the contact page, or message Nadeem on WhatsApp. We use that to understand what you need, then follow up to talk through the problem and the shape of a system."
	},
	{
		q: "Do you work with local businesses as well as larger products?",
		a: "Yes. Some work is a focused local operations system. Some is a broader web or mobile product. Both are in scope when the problem is real and a custom system is the right answer."
	},
	{
		q: "How can I reach a founder directly?",
		a: "Each founder is available on WhatsApp and phone. Nadeem is the primary contact for new project conversations. All three numbers are listed on the contact and about pages."
	}
];
var needOptions = [
	"Custom software",
	"Web application",
	"Automation & integrations",
	"Custom tools & dashboards",
	"Mobile product",
	"Local business system",
	"Not sure yet"
];
var budgetOptions = [
	"To be discussed",
	"Under $5,000",
	"$5,000 – $15,000",
	"$15,000 – $40,000",
	"$40,000+"
];
function pageHead(title, description) {
	return { meta: [{ title }, {
		name: "description",
		content: description
	}] };
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: site.longDescription
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
						children: "Pages"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2.5",
						children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm text-foreground/80 hover:text-foreground",
							children: item.label
						}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-sm text-foreground/80 hover:text-foreground",
							children: "Start a project"
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							hash: s.slug,
							className: "text-sm text-foreground/80 hover:text-foreground",
							children: s.title
						}) }, s.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 sm:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
							children: "Founders"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: founders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: f.whatsapp,
								className: "text-sm text-muted-foreground hover:text-foreground",
								children: f.phoneDisplay
							})] }, f.name))
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Nydrex"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs",
					children: site.principle
				})]
			})
		})]
	});
}
var serviceIcons = {
	"custom-software": "01",
	"web-apps": "02",
	automation: "03",
	"tools-dashboards": "04",
	mobile: "05",
	"local-business": "06"
};
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [servicesOpen, setServicesOpen] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const menuId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		setServicesOpen(false);
		setMobileOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8",
				onMouseLeave: () => setServicesOpen(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						"aria-label": "Nydrex home",
						className: "relative z-10 rounded-lg focus-visible:outline-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "absolute inset-x-0 hidden items-center justify-center gap-1 md:flex",
						"aria-label": "Primary",
						children: nav.map((item) => item.hasMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-[color,background-color] duration-150 ease-out hover:bg-mist hover:text-foreground", (pathname.startsWith("/services") || servicesOpen) && "text-foreground"),
							"aria-expanded": servicesOpen,
							"aria-controls": menuId,
							onMouseEnter: () => setServicesOpen(true),
							onFocus: () => setServicesOpen(true),
							onClick: () => setServicesOpen((v) => !v),
							children: item.label
						}, item.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onMouseEnter: () => setServicesOpen(false),
							className: cn("rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-[color,background-color] duration-150 ease-out hover:bg-mist hover:text-foreground", pathname === item.to && "text-foreground"),
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "sm:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Start"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
								open: mobileOpen,
								onOpenChange: setMobileOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "icon",
										className: "md:hidden",
										"aria-label": "Open menu",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
									className: "fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-background p-6 shadow-border focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
												className: "text-base font-semibold",
												children: "Menu"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "outline",
													size: "icon",
													"aria-label": "Close menu",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
											className: "mt-8 flex flex-col gap-1",
											"aria-label": "Mobile",
											children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: item.to,
												className: "rounded-2xl px-3 py-3 text-lg font-medium hover:bg-mist",
												children: item.label
											}, item.to))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 border-t border-border pt-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
												children: "Services"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-3 space-y-1",
												children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/services",
													hash: s.slug,
													className: "block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-mist hover:text-foreground",
													children: s.title
												}) }, s.slug))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "mt-auto w-full",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/contact",
												children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
											})
										})
									]
								})] })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: menuId,
				hidden: !servicesOpen,
				className: cn("absolute inset-x-0 top-full hidden border-b border-border bg-background md:block", !servicesOpen && "pointer-events-none"),
				onMouseEnter: () => setServicesOpen(true),
				children: servicesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-2 gap-2 px-8 py-6 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 flex flex-col justify-between rounded-2xl bg-mist p-6 lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
							children: "Product"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xl font-medium tracking-tight",
							children: "Software, systems and tools — built around the work."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "mt-8 inline-flex items-center gap-2 text-sm font-medium",
							children: ["All services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					}), services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						hash: s.slug,
						className: "group rounded-2xl p-4 transition-[background-color] duration-150 ease-out hover:bg-mist",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-widest text-muted-foreground uppercase",
								children: serviceIcons[s.slug]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-medium text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-snug text-muted-foreground",
								children: s.short
							})
						]
					}, s.slug))]
				}) : null
			})
		]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { cn as a, needOptions as c, processSteps as d, services as f, budgetOptions as i, pageHead as l, LogoMark as n, faqs as o, site as p, SiteShell as r, founders as s, Button as t, primaryFounder as u };
