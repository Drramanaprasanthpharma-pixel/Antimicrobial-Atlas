"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Atom, Menu, X } from "lucide-react";

const links = [
  { href: "/antibiotics", label: "Antibiotics" },
  { href: "/agents", label: "Agents" },
  { href: "/classes", label: "Classes" },
  { href: "/spectrum", label: "Spectrum" },
  { href: "/ams", label: "AMS" },
  { href: "/microbiology", label: "Microbiology" },
  { href: "/resistance", label: "Resistance" },
  { href: "/admin", label: "Admin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky z-40 nav-glass"
      style={{ top: 0, paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-cyan text-abyss shadow-[0_0_18px_rgba(45,212,191,0.35)]">
            <Atom size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink-0">
            Antimicrobial Atlas
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "text-teal nav-active-indicator"
                    : "text-ink-1 hover:text-ink-0"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden text-ink-0 p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line px-4 py-3 flex flex-col gap-1 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm text-ink-1 hover:bg-panel hover:text-ink-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
