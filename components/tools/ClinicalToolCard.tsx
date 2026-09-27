import Link from "next/link";
import { ClinicalTool } from "@/lib/types";
import { Wrench, ArrowUpRight } from "lucide-react";

export default function ClinicalToolCard({ tool }: { tool: ClinicalTool }) {
  return (
    <Link
      href={tool.href}
      className="group glass-soft rounded-2xl p-5 flex flex-col gap-3 hover:border-line-strong transition-colors"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-cyan">
          <Wrench size={16} />
        </span>
        {tool.status === "coming-soon" ? (
          <span className="text-[10px] uppercase tracking-wide text-amber border border-amber/30 rounded-full px-2 py-0.5">
            Coming soon
          </span>
        ) : (
          <ArrowUpRight size={16} className="text-ink-2 group-hover:text-teal transition-colors" />
        )}
      </div>
      <h3 className="font-display text-base font-semibold text-ink-0">{tool.name}</h3>
      <p className="text-sm text-ink-1">{tool.description}</p>
    </Link>
  );
}
