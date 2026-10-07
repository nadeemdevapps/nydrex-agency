import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as SiteShell, t as Button } from "./site-shell-B-dSb-y5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-uhTjT2pN.js
var import_jsx_runtime = require_jsx_runtime();
function WorkSoon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto h-56 w-full max-w-md",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, { className: "absolute top-10 left-[12%] rotate-[-10deg] opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, { className: "absolute top-6 left-[18%] rotate-[-4deg] opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				className: "absolute top-2 left-[24%] rotate-2",
				featured: true
			})
		]
	});
}
function Sheet({ className, featured }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-56 rounded-2xl border border-border bg-card p-5 shadow-border ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
					children: "Case study"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-sm border border-border" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-3/4 rounded bg-mist" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-1/2 rounded bg-mist" })]
			}),
			featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-5 inline-flex rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] text-primary-foreground",
				children: "Preparing"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-5 w-16 rounded-full bg-mist" })
		]
	});
}
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
				children: "Work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSoon, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-medium tracking-tight sm:text-6xl",
				children: "Work, coming soon."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-lg text-lg text-muted-foreground",
				children: "We’re preparing selected Nydrex projects and case studies for this space."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-md text-sm text-muted-foreground",
				children: "Until then, the most useful next step is a conversation about what you need built."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						children: "See services"
					})
				})]
			})
		]
	}) });
}
//#endregion
export { WorkPage as component };
