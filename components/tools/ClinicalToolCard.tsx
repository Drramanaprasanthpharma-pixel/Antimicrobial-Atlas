import Link from "next/link";
import { ClinicalTool } from "@/lib/types";
import { Wrench, ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ClinicalToolCard({ tool }: { tool: ClinicalTool }) {
  const soon = tool.status === "coming-soon";

  const content = (
    <>
      <span className="accent-bar accent-bar-clinical" aria-hidden />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-cyan">
            <Wrench size={16} />
          </span>
          {soon ? (
            <Badge tone="amber" uppercase>Coming soon</Badge>
          ) : (
            <ArrowUpRight size={16} className="text-ink-2 group-hover:text-teal transition-colors" />
          )}
        </div>
        <h3 className="font-display text-base font-semibold text-ink-0">{tool.name}</h3>
        <p className="text-sm text-ink-1">{tool.description}</p>
      </div>
    </>
  );

  // Coming-soon tools have no page to open, so they render as a plain card.
  if (soon) {
    return <div className="group glass-card-static overflow-hidden flex flex-col">{content}</div>;
  }
  return (
    <Link href={tool.href} className="group glass-card overflow-hidden flex flex-col">
      {content}
    </Link>
  );
}
