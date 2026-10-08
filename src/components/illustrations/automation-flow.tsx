import { useEffect, useRef, useState } from "react";
import { Bell, Blocks, Cable, ClipboardList, Monitor, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/logo";

type Wire = { id: string; path: string; direction: "in" | "out" };

export function AutomationFlow() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const [wires, setWires] = useState<Wire[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const diagram = diagramRef.current;
    if (!diagram) return;
    const anchors = [...diagram.querySelectorAll<HTMLElement>("[data-flow-anchor]")];
    const hub = diagram.querySelector<HTMLElement>("[data-flow-anchor='hub']")!;

    const measure = () => {
      const bounds = diagram.getBoundingClientRect();
      const horizontal = window.matchMedia("(min-width: 768px)").matches;
      const hubBounds = hub.getBoundingClientRect();
      const inputs = anchors.filter((node) => node.dataset.flowAnchor === "input");
      const outputs = anchors.filter((node) => node.dataset.flowAnchor === "output");

      const connect = (
        node: HTMLElement,
        index: number,
        count: number,
        incoming: boolean,
      ): Wire => {
        const nodeBounds = node.getBoundingClientRect();
        const port = (index + 1) / (count + 1);
        const from = horizontal
          ? incoming
            ? { x: nodeBounds.right, y: nodeBounds.top + nodeBounds.height / 2 }
            : { x: hubBounds.right, y: hubBounds.top + hubBounds.height * port }
          : incoming
            ? { x: nodeBounds.left + nodeBounds.width / 2, y: nodeBounds.bottom }
            : { x: hubBounds.left + hubBounds.width * port, y: hubBounds.bottom };
        const to = horizontal
          ? incoming
            ? { x: hubBounds.left, y: hubBounds.top + hubBounds.height * port }
            : { x: nodeBounds.left, y: nodeBounds.top + nodeBounds.height / 2 }
          : incoming
            ? { x: hubBounds.left + hubBounds.width * port, y: hubBounds.top }
            : { x: nodeBounds.left + nodeBounds.width / 2, y: nodeBounds.top };
        const x1 = from.x - bounds.left;
        const y1 = from.y - bounds.top;
        const x2 = to.x - bounds.left;
        const y2 = to.y - bounds.top;
        const path = horizontal
          ? `M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`
          : `M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
        return {
          id: `${incoming ? "in" : "out"}-${index}`,
          path,
          direction: incoming ? "in" : "out",
        };
      };

      setWires([
        ...inputs.map((node, index) => connect(node, index, inputs.length, true)),
        ...outputs.map((node, index) => connect(node, index, outputs.length, false)),
      ]);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(diagram);
    anchors.forEach((node) => resizeObserver.observe(node));
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    visibilityObserver.observe(diagram);
    measure();
    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-border bg-mist p-6 sm:p-10"
      aria-hidden="true"
    >
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        One connected system
      </p>
      <div ref={diagramRef} className={`energy-flow mt-8 ${visible ? "energy-flow-visible" : ""}`}>
        <svg className="energy-wires" width="100%" height="100%" aria-hidden="true">
          {wires.map((wire) => (
            <g key={wire.id}>
              <path className="energy-wire-track" d={wire.path} />
              {[1, 2, 3].map((bead) => (
                <g key={bead}>
                  <path
                    className={`energy-wire-pulse energy-wire-${wire.direction} energy-bead-${bead}`}
                    d={wire.path}
                    pathLength={100}
                  />
                  <path
                    className={`energy-wire-pulse energy-wire-core energy-wire-${wire.direction} energy-bead-${bead}`}
                    d={wire.path}
                    pathLength={100}
                  />
                </g>
              ))}
            </g>
          ))}
        </svg>
        <div className="energy-inputs">
          <Node
            label="Business problem"
            note="Understand the work"
            icon={ClipboardList}
            direction="input"
          />
          <Node
            label="Existing tools"
            note="Connect what you already use"
            icon={Wrench}
            direction="input"
          />
        </div>
        <div data-flow-anchor="hub" className="energy-hub-anchor">
          <div className="energy-hub">
            <LogoMark className="energy-logo" />
          </div>
        </div>
        <div className="energy-outputs">
          <Node
            label="Web application"
            note="A place to get the work done"
            icon={Monitor}
            direction="output"
          />
          <Node
            label="Dashboard"
            note="See what needs attention"
            icon={Blocks}
            direction="output"
          />
          <Node
            label="Automation"
            note="The next handoff happens"
            icon={Cable}
            direction="output"
          />
        </div>
      </div>
      <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
        <Bell className="size-3.5 shrink-0" /> Information reaches the right person, at the right
        step.
      </p>
    </div>
  );
}

function Node({
  label,
  note,
  icon: Icon,
  direction,
}: {
  label: string;
  note: string;
  icon: LucideIcon;
  direction: "input" | "output";
}) {
  return (
    <div data-flow-anchor={direction} className="energy-node-anchor">
      <div className={`energy-node energy-node-${direction}`}>
        <span className="energy-node-icon">
          <Icon className="size-4" strokeWidth={1.5} />
        </span>
        <div>
          <p className="energy-node-label">{label}</p>
          <p className="mt-1 text-xs text-muted-foreground">{note}</p>
        </div>
      </div>
    </div>
  );
}
