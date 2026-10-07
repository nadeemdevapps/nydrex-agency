import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Paperclip, d as Bell, i as Plus, l as Check, n as UserPlus, p as ArrowRight, s as FileText, u as Bookmark } from "../_libs/lucide-react.mjs";
import { a as cn, d as processSteps, f as services, n as LogoMark, o as faqs, p as site, r as SiteShell, s as founders, t as Button } from "./site-shell-B-dSb-y5.mjs";
import { n as faqJsonLd, r as JsonLd } from "./router-DC1qNVjZ.mjs";
import { t as CtaBand } from "./cta-band-BDeETxmu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNXao0v_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium transition-[color] duration-150 ease-out hover:text-ink [&[data-state=open]>span]:rotate-45", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-transform duration-200 ease-out",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
		})]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function AutomationFlow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[2rem] border border-border bg-mist p-6 sm:p-8",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 size-full text-border",
				preserveAspectRatio: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "18%",
						y1: "30%",
						x2: "48%",
						y2: "48%",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeDasharray: "4 6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "48%",
						y1: "52%",
						x2: "78%",
						y2: "28%",
						stroke: "currentColor",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "50%",
						y1: "58%",
						x2: "76%",
						y2: "72%",
						stroke: "currentColor",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "22%",
						y1: "68%",
						x2: "46%",
						y2: "55%",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeDasharray: "4 6"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				className: "absolute top-[12%] left-[8%] w-36",
				label: "Business problem",
				tone: "card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				className: "absolute top-[58%] left-[10%] w-32",
				label: "Existing tools",
				tone: "card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				className: "absolute top-[38%] left-[38%] w-40",
				label: "Nydrex",
				tone: "mint",
				plus: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				className: "absolute top-[10%] right-[8%] w-36",
				label: "Web application",
				tone: "ink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				className: "absolute right-[10%] bottom-[12%] w-36",
				label: "Automation",
				tone: "card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
				className: "absolute top-[42%] right-[34%] hidden w-28 sm:block",
				label: "Dashboard",
				tone: "card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none relative h-72 sm:h-80" })
		]
	});
}
function Node({ className, label, tone, plus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-sm font-medium shadow-border ${{
			card: "bg-card text-foreground border-border",
			mint: "bg-primary text-primary-foreground border-transparent",
			ink: "bg-secondary text-secondary-foreground border-transparent"
		}[tone]} ${className ?? ""}`,
		children: [plus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-6 items-center justify-center rounded-full bg-ink text-xs text-secondary-foreground",
			children: "+"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-current opacity-40" }), label]
	});
}
function BentoStudio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center rounded-[1.8rem] border border-border bg-card p-8 shadow-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rotate-[-8deg]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-20 shadow-border" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[1.8rem] bg-ink p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 200 200",
					className: "size-full text-primary",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "200",
							height: "200",
							fill: "currentColor",
							className: "text-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M20 160 C60 40, 140 40, 180 160",
							fill: "none",
							stroke: "currentColor",
							className: "text-primary",
							strokeWidth: "2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M30 40 L90 110 L50 170",
							fill: "none",
							stroke: "currentColor",
							className: "text-sage-soft",
							strokeWidth: "1.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "140",
							cy: "70",
							r: "18",
							fill: "currentColor",
							className: "text-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "120",
							y: "120",
							width: "46",
							height: "28",
							rx: "8",
							fill: "currentColor",
							className: "text-card"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-2 row-span-2 flex flex-col justify-between rounded-[1.8rem] bg-primary p-6 text-primary-foreground sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest uppercase opacity-70",
						children: "Inside a Nydrex system"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-6 h-48 w-full max-w-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiCard, {
								className: "absolute top-8 left-4 rotate-[-8deg] opacity-80",
								title: "Handbook"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiCard, {
								className: "absolute top-4 left-10 rotate-[-2deg] opacity-90",
								title: "Playbooks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiCard, {
								className: "absolute top-0 left-16 rotate-3",
								title: "Operations",
								active: true
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/80",
						children: "Knowledge, tasks and daily work live in one place — searchable, assignable, and connected to the rest of the system."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[1.8rem] border border-border bg-card p-5 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
						children: "New module"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg font-medium leading-tight",
						children: "Security policies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 flex items-center gap-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), " 5 pages"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground",
							children: "+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-sage-soft px-2.5 py-1 text-[11px] text-primary-foreground",
							children: "Internal"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center rounded-[1.8rem] border border-border bg-card shadow-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
						className: "size-12 text-ink",
						strokeWidth: 1.25
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
						className: "absolute -right-2 -bottom-1 size-6 text-ink",
						strokeWidth: 1.5
					})]
				})
			})
		]
	});
}
function WikiCard({ className, title, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-52 rounded-2xl border border-border bg-card p-4 shadow-border ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
			children: "Wiki"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 space-y-1.5 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Employee resources"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `flex items-center justify-between rounded-lg px-2 py-1 ${active ? "bg-mist font-medium" : ""}`,
					children: [title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "›"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Menu and recipes"
				})
			]
		})]
	});
}
function ComponentBoard() {
	const [happy, setHappy] = (0, import_react.useState)(7);
	const [repeat, setRepeat] = (0, import_react.useState)(true);
	const days = [
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa",
		"Su"
	];
	const [activeDays, setActiveDays] = (0, import_react.useState)([
		"Mo",
		"We",
		"Fr"
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BoardCard, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-10 items-center rounded-full border border-border bg-mist px-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Search"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2",
						children: "invoice"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs tracking-widest text-muted-foreground uppercase",
					children: "Found 2 results"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm",
					children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", {
							className: "rounded-sm bg-primary px-0.5",
							children: "invoice"
						}),
						" ",
						"intake flow"
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-48 overflow-hidden rounded-2xl border border-border bg-card text-sm shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full px-4 py-2.5 text-left text-muted-foreground",
						children: "Edit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex w-full items-center justify-between bg-primary px-4 py-2.5 text-left font-medium text-primary-foreground",
						children: "Generate report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "block w-full px-4 py-2.5 text-left text-muted-foreground",
						children: "Remove"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BoardCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-16 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: "2 / 6 complete"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-5 items-center justify-center rounded-full bg-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-primary-foreground" })
						}), "How it starts"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-5 items-center justify-center rounded-full bg-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-primary-foreground" })
						}), "Roles and access"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-5 rounded-full border border-border" }), "Working together"]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-medium leading-none",
					children: "08"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-xs tracking-widest text-muted-foreground uppercase",
					children: "Sun"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 rounded-2xl border border-border bg-mist p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Shift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted-foreground",
							children: "09:00 to 17:00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-card px-2 py-0.5 text-xs",
								children: "Floor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground",
								children: "Ops"
							})]
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-mist p-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "To your attention"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted-foreground",
						children: "Delivery window moved. Confirm the new handoff in the system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-card px-3 py-1 text-xs",
							children: "Later"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground",
							children: "Accept"
						})]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BoardCard, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Is repeating"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "switch",
						"aria-checked": repeat,
						onClick: () => setRepeat((v) => !v),
						className: `relative h-6 w-10 rounded-full transition-[background-color] duration-150 ease-out ${repeat ? "bg-primary" : "bg-mist"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 size-5 rounded-full bg-card shadow-border transition-transform duration-150 ease-out ${repeat ? "translate-x-4" : "translate-x-0.5"}` })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: "Repeat weekly"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-1",
					children: days.map((d) => {
						const on = activeDays.includes(d);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveDays((curr) => curr.includes(d) ? curr.filter((x) => x !== d) : [...curr, d]),
							className: `size-8 rounded-full text-xs font-medium ${on ? "bg-ink text-secondary-foreground" : "border border-border text-muted-foreground"}`,
							children: d.slice(0, 2)
						}, d);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-stretch overflow-hidden rounded-2xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
						children: "Open queue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 inline-flex rounded-full bg-primary px-2 py-0.5 text-sm font-medium text-primary-foreground",
						children: "12"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 border-l border-border p-4 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "8 ready" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "3 waiting" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1 blocked" })
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BoardCard, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm font-medium",
					children: "How clear is the system?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 1,
					max: 10,
					value: happy,
					onChange: (e) => setHappy(Number(e.target.value)),
					className: "mt-4 w-full accent-ink",
					"aria-label": "Clarity rating"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-center font-mono text-sm",
					children: [happy, " / 10"]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BoardCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-full border border-border bg-mist px-3 py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground",
					children: "@nydrex"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "check the flow" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "size-3" }), " Attach"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3" }), " Assign"]
				})]
			})] })
		]
	});
}
function BoardCard({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-[1.6rem] border border-border bg-card p-5 shadow-border",
		children
	});
}
function HeroSystem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto aspect-square w-full max-w-lg",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[8%] rounded-full border border-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[18%] rounded-full border border-dashed border-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[18%] right-[8%] left-[18%] motion-safe-float",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WindowFrame, {
					title: "Operations",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
							children: "Intake → Build → Live"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 flex-1 rounded-md bg-mist" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 w-10 rounded-md bg-sage-soft" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 flex-1 rounded-md bg-mist" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex items-end gap-1",
							children: [
								40,
								64,
								48,
								80,
								56,
								72,
								44
							].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 rounded-sm bg-ink/80",
								style: { height: h / 4 }
							}, i))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[6%] left-[4%] w-[42%] -rotate-6 motion-safe-float [animation-delay:-1.4s]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[8%] right-[2%] w-[38%] rotate-3 motion-safe-float [animation-delay:-2.2s]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MiniCard, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium",
							children: "Queue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary px-2 py-0.5 font-mono text-[10px] text-primary-foreground",
							children: "live"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1.5 overflow-hidden rounded-full bg-mist",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 rounded-full bg-ink" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-[10px] text-muted-foreground",
						children: "3 of 5 steps"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-[14%] left-[6%] w-[46%] rotate-[-4deg] motion-safe-float [animation-delay:-0.8s]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MiniCard, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
						children: "Flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: "Form → API → Notify"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-6 rounded-full bg-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-6 rounded-full border border-ink bg-card" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-6 rounded-full bg-ink" })
						]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute right-[4%] bottom-[10%] w-[40%] rotate-6 motion-safe-float [animation-delay:-3s]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MiniCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium",
					children: "To-do, today"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-2 space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3.5 rounded-full bg-primary" }), "Confirm intake"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3.5 rounded-full bg-primary" }), "Map the handoff"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3.5 rounded-full border border-border" }), "Review with team"]
						})
					]
				})] })
			})
		]
	});
}
function WindowFrame({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-3 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 font-mono text-[10px] text-muted-foreground",
					children: title
				})
			]
		}), children]
	});
}
function MiniCard({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border bg-card p-3.5 shadow-border",
		children
	});
}
function PhoneFrame() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[1.6rem] border border-border bg-card p-2 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-2 h-1.5 w-10 rounded-full bg-mist" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-mist p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium",
					children: "Customer portal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-3/4 rounded bg-card" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-1/2 rounded bg-card" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-lg bg-primary px-2 py-1.5 text-center font-mono text-[10px] text-primary-foreground",
					children: "Open request"
				})
			]
		})]
	});
}
var stages = [
	{
		label: "Customer",
		note: "Request, order, question"
	},
	{
		label: "Portal",
		note: "A place to submit and track"
	},
	{
		label: "Operations",
		note: "The team sees and acts"
	},
	{
		label: "Automation",
		note: "Handoffs that run themselves"
	}
];
function SystemMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
		children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "h-full rounded-[1.4rem] border border-border bg-card p-5 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-widest text-muted-foreground uppercase",
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg font-medium",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: s.note
					})
				]
			}), i < stages.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "absolute top-1/2 -right-2 hidden size-4 -translate-y-1/2 text-muted-foreground lg:block" }) : null]
		}, s.label))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: faqJsonLd() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 pb-8 sm:px-8 lg:grid-cols-2 lg:pt-20 lg:pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
						children: "Founder-led software studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl",
						children: [
							"Ideas become",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "underline decoration-primary decoration-4 underline-offset-8",
								children: "systems."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg leading-relaxed text-muted-foreground",
						children: site.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
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
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSystem, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-5 py-4 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Custom software" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Web apps" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Automation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dashboards" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mobile" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Local systems" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
							children: "What we build"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-medium tracking-tight sm:text-4xl",
							children: "Software for the work that currently lives in inboxes, chats and spreadsheets."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoStudio, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							hash: s.slug,
							className: "bg-background p-6 transition-[background-color] duration-150 ease-out hover:bg-mist",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-medium",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: s.summary
							})]
						}, s.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-mist/60 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-end gap-8 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
								children: "How a system fits"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-medium tracking-tight sm:text-4xl",
								children: "From the first request to the work that runs itself."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-md text-muted-foreground",
								children: "Most useful products are a path: someone asks, someone sees it, someone acts, and the next time it happens without the same friction."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemMap, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutomationFlow, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
						children: "How we work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl",
						children: "A short path from the problem to a working system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4",
						children: processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-muted-foreground",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-xl font-medium",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: step.body
							})
						] }, step.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
							children: "The interface layer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-lg text-3xl font-medium tracking-tight sm:text-4xl",
							children: "The kind of software people actually touch."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm text-muted-foreground",
							children: "Search, schedules, alerts, repeating work, assignment — small pieces that add up to a system."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComponentBoard, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
						children: "Founders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Small team. Direct involvement."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted-foreground",
						children: "Nydrex is led by three founders. You work with the people building the system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-4 sm:grid-cols-3",
						children: founders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-[1.6rem] border border-border bg-card p-6 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-12 items-center justify-center rounded-2xl bg-primary font-semibold text-primary-foreground",
									children: f.name.slice(0, 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-lg font-medium",
									children: f.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: f.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: f.whatsapp,
									className: "mt-4 inline-block text-sm hover:underline",
									children: f.phoneDisplay
								})
							]
						}, f.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
							children: "Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-medium tracking-tight sm:text-4xl",
							children: "Before you write."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "A few straight answers. If you would rather talk, WhatsApp is open."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: item.q,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
						}, item.q))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	})] });
}
//#endregion
export { Home as component };
