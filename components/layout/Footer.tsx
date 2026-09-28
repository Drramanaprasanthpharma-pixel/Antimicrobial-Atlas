import Link from "next/link";
import { Atom } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-24 border-t border-line surface-light"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3 max-w-md">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red to-red-2 text-white shadow-[0_0_16px_rgba(227,0,22,0.4)]">
            <Atom size={16} strokeWidth={2.5} />
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-ink-0">Antimicrobial Atlas</p>
            <p className="text-xs text-ink-2 mt-1.5 leading-relaxed">
              Frontend scaffold with demo/placeholder clinical content. Not a substitute for
              institutional protocols or verified clinical references.
            </p>
            <p className="text-[11px] text-ink-2/80 mt-3 font-data">
              &copy; {year} Antimicrobial Atlas
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-1">
          <Link href="/antibiotics" className="hover:text-teal transition-colors">Antibiotics</Link>
          <Link href="/agents" className="hover:text-teal transition-colors">Agents</Link>
          <Link href="/classes" className="hover:text-teal transition-colors">Classes</Link>
          <Link href="/spectrum" className="hover:text-teal transition-colors">Spectrum</Link>
          <Link href="/ams" className="hover:text-teal transition-colors">AMS</Link>
          <Link href="/microbiology" className="hover:text-teal transition-colors">Microbiology</Link>
          <Link href="/resistance" className="hover:text-teal transition-colors">Resistance</Link>
          <Link href="/admin" className="hover:text-teal transition-colors">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
