import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="sticky z-40 bg-paper"
      style={{ top: 0, paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/agents" className="text-lg font-bold tracking-tight text-ink-0">
          Antimicrobial Atlas
        </Link>

        <nav>
          <Link
            href="/agents"
            className="text-base text-ink-0 hover:text-red transition-colors"
          >
            Antimicrobial Agents
          </Link>
        </nav>
      </div>
      <div className="rule-red" aria-hidden />
    </header>
  );
}
