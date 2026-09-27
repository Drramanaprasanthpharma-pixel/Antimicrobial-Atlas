import { ReactNode } from "react";

export type AlertTone = "info" | "success" | "warning" | "danger";

const toneClasses: Record<AlertTone, string> = {
  info: "border-line-strong bg-red-tint text-ink-0",
  success: "border-line bg-surface-muted text-ink-0",
  warning: "border-red bg-red-tint text-ink-0",
  danger: "border-red bg-red-tint-strong text-ink-0",
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
      className={`flex items-start gap-2.5 rounded-md border px-4 py-3 text-sm leading-relaxed ${toneClasses[tone]} ${className}`}
    >
      {icon && <span className="mt-0.5 shrink-0 text-red">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
