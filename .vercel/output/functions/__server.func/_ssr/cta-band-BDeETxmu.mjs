import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Button } from "./site-shell-B-dSb-y5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-BDeETxmu.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Build something useful.", body = "Tell us the problem. We will help you shape a system that is clearer than the work it replaces." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 pb-20 sm:px-8 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-secondary px-8 py-14 text-secondary-foreground sm:px-14 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-primary uppercase",
							children: "Start a project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl font-medium tracking-tight sm:text-5xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-secondary-foreground/70",
							children: body
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						children: ["Start a project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			})
		})
	});
}
//#endregion
export { CtaBand as t };
