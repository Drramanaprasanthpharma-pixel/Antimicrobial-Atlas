import Link from "next/link";
import { AntibioticClass } from "@/lib/types";
import { Layers } from "lucide-react";

export default function ClassCard({ item }: { item: AntibioticClass }) {
  return (
    <Link
      href={`/classes#${item.slug}`}
      className="group glass-soft rounded-2xl p-5 flex flex-col gap-3 hover:border-line-strong transition-colors"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-panel-2 text-teal">
          <Layers size={16} />
        </span>
        <h3 className="font-display text-base font-semibold text-ink-0">{item.name}</h3>
      </div>
      <p className="text-sm text-ink-1">{item.description}</p>
      <div className="flex items-center justify-between text-xs text-ink-2 mt-1">
        <span>{item.keyFeature}</span>
        <span>{item.memberCount} in atlas</span>
      </div>
    </Link>
  );
}
