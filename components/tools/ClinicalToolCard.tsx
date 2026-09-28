import { ClinicalTool } from "@/lib/types";
import { Wrench } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ClinicalToolCard({ tool }: { tool: ClinicalTool }) {
  return (
    <div className="glass-card-static overflow-hidden flex flex-col">
      <span className="accent-bar accent-bar-clinical" aria-hidden />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-cyan">
            <Wrench size={16} />
          </span>
          {tool.status === "coming-soon" && <Badge tone="amber" uppercase>Coming soon</Badge>}
        </div>
        <h3 className="font-display text-base font-semibold text-ink-0">{tool.name}</h3>
        <p className="text-sm text-ink-1">{tool.description}</p>
      </div>
    </div>
  );
}
