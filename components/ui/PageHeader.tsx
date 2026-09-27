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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
      {eyebrow && <p className="text-sm text-teal font-medium mb-2">{eyebrow}</p>}
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink-0 max-w-2xl">
        {title}
      </h1>
      {description && (
        <p className="text-ink-1 mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
