import { ReactNode } from "react";
import Bacteria3D from "@/components/three/Bacteria3D";

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
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
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
      {/* Decorative 3D bacteria: banner strip on small screens, corner accent on large */}
      <div
        className="pointer-events-none relative mt-6 h-44 w-full sm:h-52 lg:absolute lg:right-10 lg:top-2 lg:mt-0 lg:h-64 lg:w-64"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(227,0,22,0.09), transparent 65%)" }}
        />
        <Bacteria3D variant="compact" />
      </div>
    </div>
  );
}
