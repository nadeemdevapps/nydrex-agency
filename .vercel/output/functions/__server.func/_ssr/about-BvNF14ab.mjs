import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as processSteps, p as site, r as SiteShell, s as founders } from "./site-shell-B-dSb-y5.mjs";
import { t as CtaBand } from "./cta-band-BDeETxmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BvNF14ab.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
						children: "About"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-6xl",
						children: "Small team. Direct involvement."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
						children: [site.longDescription, " Planning and development stay with the founders rather than disappearing into a long chain of handoffs."]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl rounded-[2rem] bg-secondary px-8 py-14 text-secondary-foreground sm:px-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-primary uppercase",
						children: "Principle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl",
						children: site.principle
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-medium tracking-tight",
						children: "Founders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted-foreground",
						children: "Three owners. Same title. Direct lines."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-4 lg:grid-cols-3",
						children: founders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[1.6rem] border border-border bg-card p-7 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-14 items-center justify-center rounded-2xl bg-mist text-2xl font-medium",
									children: f.name.slice(0, 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-2xl font-medium",
									children: f.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: f.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 space-y-1.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${f.phoneTel}`,
										className: "block hover:underline",
										children: f.phoneDisplay
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: f.whatsapp,
										className: "block text-muted-foreground hover:text-foreground",
										children: "WhatsApp"
									})]
								})
							]
						}, f.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-20 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-medium tracking-tight",
						children: "How the work is done"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 divide-y divide-border border-y border-border",
						children: processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-3 py-8 sm:grid-cols-[5rem_8rem_1fr] sm:items-baseline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs tracking-widest text-muted-foreground",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-medium",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: step.body
								})
							]
						}, step.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Talk to the people who will build it." })
		]
	}) });
}
//#endregion
export { AboutPage as component };
