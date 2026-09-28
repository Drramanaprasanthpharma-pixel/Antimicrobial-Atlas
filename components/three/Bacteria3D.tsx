"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const BacteriaScene = dynamic(() => import("./BacteriaScene"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

/** Static illustration shown only when WebGL is unavailable. */
function BacteriaFallback() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full" role="img" aria-label="Bacteria illustration">
      <defs>
        <radialGradient id="bf-red" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#ff6b78" />
          <stop offset="0.45" stopColor="#c1121f" />
          <stop offset="1" stopColor="#6e0a12" />
        </radialGradient>
        <radialGradient id="bf-dark" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#6a6a70" />
          <stop offset="1" stopColor="#1c1c1f" />
        </radialGradient>
      </defs>
      <g stroke="#38383d" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M78 96 q-18 -8 -30 -2 t-24 6" />
        <path d="M84 118 q-16 6 -28 14 t-22 4" />
        <path d="M150 60 q10 -14 6 -28 t8 -22" />
      </g>
      <rect x="70" y="86" width="150" height="52" rx="26" transform="rotate(-18 145 112)" fill="url(#bf-red)" />
      <rect x="95" y="150" width="110" height="38" rx="19" transform="rotate(12 150 169)" fill="url(#bf-red)" opacity="0.92" />
      {[[228, 70, 22], [252, 92, 20], [238, 116, 21], [214, 96, 19], [262, 66, 17]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="url(#bf-red)" />
      ))}
      <path d="M40 176 q14 -30 28 0 t28 0 t28 0" stroke="url(#bf-dark)" strokeWidth="9" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Decorative 3D bacteria (bacilli, cocci, spirillum) with flagella.
 *  Falls back to a static illustration without WebGL; with reduced motion the
 *  scene renders once, without animation. */
export default function Bacteria3D({ variant = "compact" }: { variant?: "compact" | "hero" }) {
  const [state, setState] = useState<{ ready: boolean; webgl: boolean; animate: boolean }>({ ready: false, webgl: false, animate: true });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Feature detection is only possible after mount in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ ready: true, webgl: hasWebGL(), animate: !reduced });
  }, []);

  if (!state.ready) return <div className="h-full w-full" aria-hidden />;
  if (!state.webgl) return <BacteriaFallback />;
  return <BacteriaScene variant={variant} animate={state.animate} />;
}
