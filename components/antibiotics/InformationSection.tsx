import { ReactNode } from "react";

export default function InformationSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="glass-soft rounded-2xl p-5 sm:p-6">
      <h2 className="font-display text-base sm:text-lg font-semibold text-ink-0 flex items-center gap-2 mb-3">
        {icon}
        {title}
      </h2>
      <div className="text-sm text-ink-1 leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
