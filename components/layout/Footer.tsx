import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-20 border-t border-line bg-paper"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-ink-0">Antimicrobial Atlas</p>
          <p className="text-xs text-ink-2 mt-1">
            Reference material transcribed from source. Not a substitute for institutional
            protocols or verified clinical guidance.
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs text-ink-1">
          <Link href="/agents" className="link-red">
            Antimicrobial Agents
          </Link>
          <span className="text-ink-2">&copy; {year} Antimicrobial Atlas</span>
        </div>
      </div>
    </footer>
  );
}
