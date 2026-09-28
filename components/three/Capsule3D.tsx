"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CapsuleScene = dynamic(() => import("./CapsuleScene"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

/** Decorative 3D pharmaceutical capsule + tablet. Renders nothing when WebGL is
 *  unavailable or the user prefers reduced motion, so content is never affected. */
export default function Capsule3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Feature detection is only possible after mount in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(hasWebGL() && !reduced);
  }, []);

  if (!enabled) return null;
  return <CapsuleScene />;
}
