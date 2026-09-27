import { AMSDefinition } from "@/lib/data/ams-definitions";

const orgColor: Record<string, string> = {
  WHO: "text-cyan border-cyan/30 bg-cyan/10",
  CDC: "text-teal border-teal/30 bg-teal/10",
  IDSA: "text-emerald border-emerald/30 bg-emerald/10",
};

export default function AMSDefinitionCard({ definition }: { definition: AMSDefinition }) {
  return (
    <div className="glass-soft rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
      <span
        className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-data font-medium ${orgColor[definition.org]}`}
      >
        {definition.org}
      </span>
      <p className="text-xs text-ink-2">{definition.fullName}</p>
      <p className="text-sm text-ink-1 leading-relaxed">{definition.definition}</p>
    </div>
  );
}
