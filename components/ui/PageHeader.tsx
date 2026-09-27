import { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 sm:pt-14 pb-6">
      {eyebrow && <p className="text-sm text-red font-bold mb-1.5">{eyebrow}</p>}
      <h1 className="text-3xl sm:text-4xl font-bold text-ink-0 max-w-2xl">{title}</h1>
      {description && (
        <p className="text-ink-1 mt-3 max-w-2xl text-base leading-relaxed">{description}</p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
