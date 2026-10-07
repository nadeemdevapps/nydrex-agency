export const site = {
  name: "Nydrex",
  tagline: "Ideas become systems.",
  principle: "Make the system clearer than the problem it replaces.",
  short:
    "Nydrex turns rough concepts and business problems into useful software, web apps, automation and custom digital tools.",
  description:
    "Nydrex builds custom software, web applications, automation, internal tools and digital systems for businesses.",
  longDescription:
    "Nydrex is a founder-led software and digital product development company. We build custom software, web applications, automation systems, custom tools, dashboards, mobile products and digital business systems.",
  titles: {
    home: "Nydrex | Custom Software, Web Apps & Automation",
    services: "Services | Nydrex",
    work: "Work | Nydrex",
    about: "About | Nydrex",
    contact: "Contact | Nydrex",
    notFound: "Page not found | Nydrex",
  },
  descriptions: {
    home: "Nydrex builds custom software, web applications, automation, internal tools and digital systems for businesses.",
    services:
      "Custom software, web applications, automation, dashboards, mobile products and local business digital systems from Nydrex.",
    work: "Selected Nydrex projects and case studies will appear here. Start a project in the meantime.",
    about:
      "Nydrex is a small founder-led team. Nadeem, Moazam and Abdullah stay directly involved in planning and development.",
    contact:
      "Send a project brief to Nydrex, or message a founder on WhatsApp to start a conversation.",
    notFound: "This page is not available. Return to Nydrex to keep going.",
  },
} as const;

export const founders = [
  {
    name: "Nadeem",
    role: "Founder",
    phoneDisplay: "+92 325 1473646",
    phoneTel: "+923251473646",
    whatsapp: "https://wa.me/923251473646",
    primary: true,
  },
  {
    name: "Moazam",
    role: "Founder",
    phoneDisplay: "+92 325 5701685",
    phoneTel: "+923255701685",
    whatsapp: "https://wa.me/923255701685",
    primary: false,
  },
  {
    name: "Abdullah",
    role: "Founder",
    phoneDisplay: "+92 318 0290447",
    phoneTel: "+923180290447",
    whatsapp: "https://wa.me/923180290447",
    primary: false,
  },
] as const;

export const primaryFounder = founders[0];

export const nav = [
  { label: "Services", to: "/services" as const, hasMenu: true },
  { label: "Work", to: "/work" as const, hasMenu: false },
  { label: "About", to: "/about" as const, hasMenu: false },
  { label: "Contact", to: "/contact" as const, hasMenu: false },
] as const;

export const services = [
  {
    slug: "custom-software",
    navLabel: "Custom software",
    title: "Custom Software Development",
    short: "Systems shaped around how the work actually happens.",
    summary:
      "Software designed around your operations — not a generic product you have to squeeze into.",
    body: "We design and build software that replaces scattered tools, spreadsheets and workarounds with one clearer system. The starting point is the work itself: who does it, where it breaks, and what should happen instead.",
    points: [
      "Operational systems unique to your process",
      "Replacing fragile spreadsheet-led workflows",
      "Clearer handoffs between people and teams",
    ],
  },
  {
    slug: "web-apps",
    navLabel: "Web apps",
    title: "Web Application Development",
    short: "Browser-based products your team and customers can actually use.",
    summary:
      "Customer portals, admin systems, booking flows and the software people open every day.",
    body: "We build web applications that sit in the browser and carry the real work: requests, records, approvals, reports. Fast enough to use on a busy day, structured enough to stay understandable as they grow.",
    points: [
      "Customer and partner portals",
      "Internal admin and operations apps",
      "Booking, intake and workflow products",
    ],
  },
  {
    slug: "automation",
    navLabel: "Automation",
    title: "Automation & Integrations",
    short: "Move information once. Let the system do the rest.",
    summary:
      "Connect forms, CRMs, inventories and notifications so people stop copying data by hand.",
    body: "Automation is useful when it removes a repeated, error-prone step — not when it adds another dashboard to check. We connect the tools you already use and design the path information should take.",
    points: [
      "Form to system to notification flows",
      "Connecting existing business tools",
      "Fewer manual copy-paste steps",
    ],
  },
  {
    slug: "tools-dashboards",
    navLabel: "Tools & dashboards",
    title: "Custom Tools & Dashboards",
    short: "Purpose-built tools for the work off-the-shelf software misses.",
    summary: "Internal utilities, admin panels and dashboards that make the next decision obvious.",
    body: "Some work never quite fits a ready-made product. We build the specific tool — a dashboard, an ops panel, a focused utility — so the people doing the work can see status, act, and move on.",
    points: [
      "Operational dashboards",
      "Internal tools for recurring tasks",
      "Views that show what needs attention",
    ],
  },
  {
    slug: "mobile",
    navLabel: "Mobile",
    title: "Mobile Products",
    short: "The same system, carried in a pocket.",
    summary:
      "Mobile-first products for customers or field teams — not a stripped-down afterthought.",
    body: "When the work happens away from a desk, the product has to live on a phone. We build mobile products that use the same underlying system as the rest of the business, so field and office stay in sync.",
    points: [
      "Customer-facing mobile products",
      "Field and on-the-floor tools",
      "Shared data with the rest of the system",
    ],
  },
  {
    slug: "local-business",
    navLabel: "Local systems",
    title: "Local Business Digital Systems",
    short: "Software that fits the counter, the floor and the back office.",
    summary:
      "Digital systems for local operations: orders, staff, customers, inventory and daily work.",
    body: "Local businesses do not need a bloated platform. They need a system that matches the day: taking orders, tracking staff, keeping customers, watching stock. We build those systems so daily operations are easier to run.",
    points: [
      "Orders, customers and daily operations",
      "Staff-facing tools that stay simple",
      "Systems sized for how the business actually runs",
    ],
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Listen",
    body: "We start with the problem, the people involved, and the work already happening. No solution is sketched before that is clear.",
  },
  {
    n: "02",
    title: "Shape",
    body: "We map a system that is clearer than the problem it replaces — what stays, what goes, and how information should move.",
  },
  {
    n: "03",
    title: "Build",
    body: "Founders stay involved while the product is designed and developed. You see the system take shape, not a black box at the end.",
  },
  {
    n: "04",
    title: "Hand over",
    body: "You receive a working system, explained in plain language, ready to use. Support continues where it is useful.",
  },
] as const;

export const faqs = [
  {
    q: "What does Nydrex build?",
    a: "Custom software, web applications, automation and integrations, internal tools and dashboards, mobile products, and digital systems for local businesses. The common thread is a system that is clearer than the problem it replaces.",
  },
  {
    q: "Who will I work with?",
    a: "Nydrex is founder-led. Nadeem, Moazam and Abdullah stay directly involved in planning and development. You are not handed off to an anonymous production line.",
  },
  {
    q: "How do we start a project?",
    a: "Send a short project brief through the contact page, or message Nadeem on WhatsApp. We use that to understand what you need, then follow up to talk through the problem and the shape of a system.",
  },
  {
    q: "Do you work with local businesses as well as larger products?",
    a: "Yes. Some work is a focused local operations system. Some is a broader web or mobile product. Both are in scope when the problem is real and a custom system is the right answer.",
  },
  {
    q: "How can I reach a founder directly?",
    a: "Each founder is available on WhatsApp and phone. Nadeem is the primary contact for new project conversations. All three numbers are listed on the contact and about pages.",
  },
] as const;

export const needOptions = [
  "Custom software",
  "Web application",
  "Automation & integrations",
  "Custom tools & dashboards",
  "Mobile product",
  "Local business system",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "To be discussed",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000+",
] as const;

export function pageHead(title: string, description: string) {
  return {
    meta: [{ title }, { name: "description", content: description }],
  };
}
