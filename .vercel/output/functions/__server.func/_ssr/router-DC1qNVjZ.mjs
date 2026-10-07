import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as ArrowLeft, r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { d as processSteps, f as services, l as pageHead, o as faqs, p as site, r as SiteShell, s as founders, t as Button } from "./site-shell-B-dSb-y5.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DC1qNVjZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-destructive",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-8",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted-foreground",
				children: errorMessage(error)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
				children: "Back home"
			})
		]
	});
}
function NotFoundPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl",
				children: "This page is not here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted-foreground",
				children: "The address may have changed, or the page does not exist. Head back to the Nydrex homepage."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), "Back home"]
					})
				})
			})
		]
	}) });
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function JsonLd({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function organizationJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: site.name,
		description: site.description,
		founder: founders.map((f) => ({
			"@type": "Person",
			name: f.name,
			jobTitle: f.role,
			telephone: f.phoneTel
		})),
		contactPoint: {
			"@type": "ContactPoint",
			telephone: founders[0].phoneTel,
			contactType: "sales",
			availableLanguage: ["en"]
		}
	};
}
function websiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: site.name,
		description: site.description
	};
}
function faqJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a
			}
		}))
	};
}
var styles_default = "/assets/styles-CP91hcSH.css";
var FONT_HREF = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap";
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: site.titles.home },
			{
				name: "description",
				content: site.descriptions.home
			},
			{
				name: "theme-color",
				content: "#F5F5F2"
			},
			{
				name: "author",
				content: "Nydrex"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: FONT_HREF
			}
		]
	}),
	component: RootDocument,
	notFoundComponent: NotFoundPage
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-background font-sans text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: organizationJsonLd() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: websiteJsonLd() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-DNXao0v_.mjs");
var Route$9 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => pageHead(site.titles.home, site.descriptions.home)
});
var $$splitComponentImporter$4 = () => import("../_-BulpVqGk.mjs");
var Route$8 = createFileRoute("/$")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => pageHead(site.titles.notFound, site.descriptions.notFound)
});
var $$splitComponentImporter$3 = () => import("./about-BvNF14ab.mjs");
var Route$7 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => pageHead(site.titles.about, site.descriptions.about)
});
var $$splitComponentImporter$2 = () => import("./contact-DEVzmA7j.mjs");
var Route$6 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => pageHead(site.titles.contact, site.descriptions.contact)
});
function llmsTxt(origin) {
	return `# Nydrex

> ${site.description}

${site.longDescription}

## Founders

${founders.map((f) => `- ${f.name}, ${f.role} — ${f.phoneDisplay} — ${f.whatsapp}${f.primary ? " (primary contact for new projects)" : ""}`).join("\n")}

## Services

${services.map((s) => `- ${s.title}: ${s.summary}`).join("\n")}

## Pages

- [Home](${origin}/)
- [Services](${origin}/services)
- [Work](${origin}/work)
- [About](${origin}/about)
- [Contact](${origin}/contact)

## Contact

Start a project: ${origin}/contact
Primary WhatsApp: ${founders[0].whatsapp}

## Optional

- [llms-full.txt](${origin}/llms-full.txt) — full website copy for AI systems
`;
}
function llmsFullTxt(origin) {
	return `# Nydrex — full site copy

> ${site.description}

${site.longDescription}

Positioning: ${site.tagline}
Supporting: ${site.short}
Brand principle: ${site.principle}

Nydrex currently has three founders / owners. Do not assume specialties, years of experience, office addresses, email addresses, social accounts, clients, testimonials or project results beyond what is written here.

## Founders

${founders.map((f) => `### ${f.name}
- Role: ${f.role}
- Phone / WhatsApp: ${f.phoneDisplay}
- WhatsApp: ${f.whatsapp}
${f.primary ? "- Primary contact for new project conversations\n" : ""}`).join("\n")}

## Services

${services.map((s) => `### ${s.title}
${s.body}

${s.points.map((p) => `- ${p}`).join("\n")}
`).join("\n")}

## How Nydrex works

${processSteps.map((s) => `${s.n} ${s.title} — ${s.body}`).join("\n")}

## FAQ

${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Work

Selected Nydrex projects and case studies are being prepared. No public case studies are listed yet. Do not invent clients or results.

## Pages

- Home: ${origin}/
- Services: ${origin}/services
- Work: ${origin}/work
- About: ${origin}/about
- Contact: ${origin}/contact
- Sitemap: ${origin}/sitemap.xml
- robots.txt: ${origin}/robots.txt

## Contact

Project enquiry form: ${origin}/contact
Primary WhatsApp: ${founders[0].whatsapp}
`;
}
function sitemapXml(origin) {
	const today = "2026-10-07";
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
		{
			loc: "/",
			priority: "1.0"
		},
		{
			loc: "/services",
			priority: "0.9"
		},
		{
			loc: "/work",
			priority: "0.6"
		},
		{
			loc: "/about",
			priority: "0.8"
		},
		{
			loc: "/contact",
			priority: "0.9"
		}
	].map((u) => `  <url>
    <loc>${origin}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
}
function robotsTxt(origin) {
	return `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
}
function originFromRequest(request) {
	const url = new URL(request.url);
	const forwarded = request.headers.get("x-forwarded-host");
	const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
	if (forwarded) return `${proto}://${forwarded.split(",")[0].trim()}`;
	return url.origin;
}
var Route$5 = createFileRoute("/llms-full.txt")({ server: { handlers: { GET: ({ request }) => new Response(llmsFullTxt(originFromRequest(request)), { headers: {
	"content-type": "text/plain; charset=utf-8",
	"cache-control": "public, max-age=3600"
} }) } } });
var Route$4 = createFileRoute("/llms.txt")({ server: { handlers: { GET: ({ request }) => new Response(llmsTxt(originFromRequest(request)), { headers: {
	"content-type": "text/plain; charset=utf-8",
	"cache-control": "public, max-age=3600"
} }) } } });
var Route$3 = createFileRoute("/robots.txt")({ server: { handlers: { GET: ({ request }) => new Response(robotsTxt(originFromRequest(request)), { headers: {
	"content-type": "text/plain; charset=utf-8",
	"cache-control": "public, max-age=3600"
} }) } } });
var $$splitComponentImporter$1 = () => import("./services-CEuU9kqG.mjs");
var Route$2 = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => pageHead(site.titles.services, site.descriptions.services)
});
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: ({ request }) => new Response(sitemapXml(originFromRequest(request)), { headers: {
	"content-type": "application/xml; charset=utf-8",
	"cache-control": "public, max-age=3600"
} }) } } });
var $$splitComponentImporter = () => import("./work-uhTjT2pN.mjs");
var Route = createFileRoute("/work")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => pageHead(site.titles.work, site.descriptions.work)
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	SplatRoute: Route$8.update({
		id: "/$",
		path: "/$",
		getParentRoute: () => Route$10
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$6.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	LlmsFullDottxtRoute: Route$5.update({
		id: "/llms-full.txt",
		path: "/llms-full.txt",
		getParentRoute: () => Route$10
	}),
	LlmsDottxtRoute: Route$4.update({
		id: "/llms.txt",
		path: "/llms.txt",
		getParentRoute: () => Route$10
	}),
	RobotsDottxtRoute: Route$3.update({
		id: "/robots.txt",
		path: "/robots.txt",
		getParentRoute: () => Route$10
	}),
	ServicesRoute: Route$2.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$10
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$10
	}),
	WorkRoute: Route.update({
		id: "/work",
		path: "/work",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundPage,
		scrollRestoration: true
	});
}
//#endregion
export { NotFoundPage as i, faqJsonLd as n, JsonLd as r, router_exports as t };
