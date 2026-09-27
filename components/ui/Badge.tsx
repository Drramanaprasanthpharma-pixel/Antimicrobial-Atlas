import { ReactNode } from "react";

export type BadgeTone = "red" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  red: "text-red border-red bg-red-tint",
  neutral: "text-ink-1 border-line bg-surface-muted",
};

export default function Badge({
  tone = "neutral",
  uppercase = false,
  children,
  className = "",
}: {
  tone?: BadgeTone;
  uppercase?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1 rounded border px-2 py-0.5 text-xs font-medium leading-none whitespace-nowrap ${
        uppercase ? "uppercase tracking-wide" : ""
      } ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
