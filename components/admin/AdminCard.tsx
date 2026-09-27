import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export default function AdminCard({
  title,
  description,
  icon,
  stat,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  stat?: string;
}) {
  return (
    <div className="glass-soft rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-panel-2 text-teal">
          {icon}
        </span>
        <ArrowUpRight size={16} className="text-ink-2" />
      </div>
      <h3 className="font-display text-base font-semibold text-ink-0">{title}</h3>
      <p className="text-sm text-ink-1">{description}</p>
      {stat && <p className="font-data text-xs text-ink-2 mt-1">{stat}</p>}
    </div>
  );
}
