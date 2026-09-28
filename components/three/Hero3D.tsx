"use client";

import Bacteria3D from "./Bacteria3D";

/** Homepage hero visual: 3D bacteria with an antibiotic capsule and tablet. */
export default function Hero3D() {
  return (
    <div className="relative h-full w-full">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(227,0,22,0.10), transparent 62%)" }}
        aria-hidden
      />
      <Bacteria3D variant="hero" />
    </div>
  );
}
