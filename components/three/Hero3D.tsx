"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MoleculeScene = dynamic(() => import("./MoleculeScene"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

interface ClientCapabilities {
  ready: boolean;
  canRender3D: boolean;
  dense: boolean;
}

export default function Hero3D() {
  const [state, setState] = useState<ClientCapabilities>({
    ready: false,
    canRender3D: false,
    dense: true,
  });

  useEffect(() => {
    // Feature detection (WebGL, reduced-motion, viewport width) is only
    // possible once mounted in the browser, so a one-time effect is required.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({
      ready: true,
      canRender3D: hasWebGL() && !reducedMotion,
      dense: window.innerWidth > 640,
    });
  }, []);

  const { ready, canRender3D, dense } = state;

  if (!ready) {
    return <div className="h-full w-full" aria-hidden />;
  }

  if (!canRender3D) {
    return (
      <div className="relative h-full w-full flex items-center justify-center">
        <div
          className="h-56 w-56 rounded-full blur-2xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(47,224,194,0.55), rgba(76,201,240,0.25) 55%, transparent 75%)",
          }}
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <MoleculeScene dense={dense} />
    </div>
  );
}
