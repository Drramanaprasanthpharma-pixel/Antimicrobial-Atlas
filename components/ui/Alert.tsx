import { ReactNode } from "react";

export type AlertTone = "info" | "success" | "warning" | "danger";

const toneClasses: Record<AlertTone, string> = {
  info: "border-cyan/25 bg-cyan/10 text-cyan",
  success: "border-emerald/25 bg-emerald/10 text-emerald",
  warning: "border-amber/25 bg-amber/10 text-amber",
  danger: "border-rose/25 bg-rose/10 text-rose",
};

export default function Alert({
  tone = "info",
  icon,
  children,
  className = "",
}: {
  tone?: AlertTone;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-xs leading-relaxed ${toneClasses[tone]} ${className}`}
    >
      {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
