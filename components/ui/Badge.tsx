import { ReactNode } from "react";

export type BadgeTone =
  | "cyan"
  | "teal"
  | "blue"
  | "violet"
  | "emerald"
  | "amber"
  | "rose"
  | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  cyan: "text-cyan border-cyan/30 bg-cyan/10",
  teal: "text-teal border-teal/30 bg-teal/10",
  blue: "text-blue border-blue/30 bg-blue/10",
  violet: "text-violet border-violet/30 bg-violet/10",
  emerald: "text-emerald border-emerald/30 bg-emerald/10",
  amber: "text-amber border-amber/30 bg-amber/10",
  rose: "text-rose border-rose/30 bg-rose/10",
  neutral: "text-ink-2 border-line bg-panel-2/50",
};

export default function Badge({
  tone = "neutral",
  mono = false,
  uppercase = false,
  children,
  className = "",
}: {
  tone?: BadgeTone;
  mono?: boolean;
  uppercase?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium leading-none whitespace-nowrap ${
        mono ? "font-data" : ""
      } ${uppercase ? "uppercase tracking-wide" : ""} ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
