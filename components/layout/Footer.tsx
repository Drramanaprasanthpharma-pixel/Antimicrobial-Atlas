import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-line mt-24"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-ink-0">Antimicrobial Atlas</p>
          <p className="text-xs text-ink-2 mt-1 max-w-md">
            Frontend scaffold with demo/placeholder clinical content. Not a substitute for
            institutional protocols or verified clinical references.
          </p>
        </div>
        <div className="flex gap-5 text-xs text-ink-1">
          <Link href="/antibiotics" className="hover:text-teal">Antibiotics</Link>
          <Link href="/classes" className="hover:text-teal">Classes</Link>
          <Link href="/ams" className="hover:text-teal">AMS</Link>
          <Link href="/admin" className="hover:text-teal">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
