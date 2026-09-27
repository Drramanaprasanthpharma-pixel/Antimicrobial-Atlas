import { AMSDefinition } from "@/lib/data/ams-definitions";
import Badge, { BadgeTone } from "@/components/ui/Badge";

const orgTone: Record<string, BadgeTone> = {
  WHO: "cyan",
  CDC: "teal",
  IDSA: "emerald",
};

export default function AMSDefinitionCard({ definition }: { definition: AMSDefinition }) {
  return (
    <div className="glass-card-static overflow-hidden flex flex-col">
      <span className="accent-bar accent-bar-ams" aria-hidden />
      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <Badge tone={orgTone[definition.org] ?? "neutral"} mono>
          {definition.org}
        </Badge>
        <p className="text-xs text-ink-2">{definition.fullName}</p>
        <p className="text-sm text-ink-1 leading-relaxed">{definition.definition}</p>
      </div>
    </div>
  );
}
