import { ResourceLink } from "@/lib/data/resources";
import { ExternalLink } from "lucide-react";

export default function ResourceLinkCard({ resource }: { resource: ResourceLink }) {
  return (
    <div className="glass-card-static p-5 flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-panel-2 text-cyan">
        <ExternalLink size={16} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-teal font-medium">{resource.org}</p>
        <h3 className="font-display text-sm font-semibold text-ink-0 mt-0.5">{resource.title}</h3>
        <p className="text-sm text-ink-1 mt-1">{resource.description}</p>
      </div>
    </div>
  );
}
