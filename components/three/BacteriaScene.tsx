"use client";

import { createContext, ReactNode, useContext, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { Capsule, Tablet } from "./Pills";

const AnimateContext = createContext(true);

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fine procedural surface grain so cell walls read as organic, not plastic. */
function useSkinTexture() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const g = c.getContext("2d")!;
    g.fillStyle = "#808080";
    g.fillRect(0, 0, 256, 256);
    const r = rng(11);
    for (let i = 0; i < 2600; i++) {
      const v = r() > 0.5 ? 175 : 85;
      g.fillStyle = `rgba(${v},${v},${v},0.32)`;
      g.beginPath();
      g.arc(r() * 256, r() * 256, 1 + r() * 3.2, 0, Math.PI * 2);
      g.fill();
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(2, 2);
    return t;
  }, []);
}

function Skin({ color, tex }: { color: string; tex: THREE.Texture }) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={0.42}
      clearcoat={0.65}
      clearcoatRoughness={0.32}
      sheen={1}
      sheenColor="#ff8f99"
      sheenRoughness={0.5}
      bumpMap={tex}
      bumpScale={1.2}
    />
  );
}

function Flagellum({ from, dir, length = 1.3, waves = 2.4, amp = 0.09 }: { from: THREE.Vector3; dir: THREE.Vector3; length?: number; waves?: number; amp?: number }) {
  const geo = useMemo(() => {
    const d = dir.clone().normalize();
    const ref = Math.abs(d.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    const u = new THREE.Vector3().crossVectors(d, ref).normalize();
    const v = new THREE.Vector3().crossVectors(d, u).normalize();
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 28; i++) {
      const t = i / 28;
      const ph = t * waves * Math.PI * 2;
      const a = amp * Math.min(1, t * 2.5);
      pts.push(from.clone().addScaledVector(d, length * t).addScaledVector(u, Math.cos(ph) * a).addScaledVector(v, Math.sin(ph) * a));
    }
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 64, 0.013, 6, false);
  }, [from, dir, length, waves, amp]);
  return (
    <mesh geometry={geo}>
      <meshStandardMaterial color="#38383d" roughness={0.55} />
    </mesh>
  );
}

/** Rod-shaped bacterium (bacillus) with peritrichous flagella. */
function Bacillus({ color, tex, seed }: { color: string; tex: THREE.Texture; seed: number }) {
  const flagella = useMemo(() => {
    const r = rng(seed);
    return Array.from({ length: 7 }, () => {
      const a = r() * Math.PI * 2;
      const y = (r() - 0.5) * 1.0;
      return {
        from: new THREE.Vector3(Math.cos(a) * 0.26, y, Math.sin(a) * 0.26),
        dir: new THREE.Vector3(Math.cos(a) * 0.8, y * 0.6 + (r() - 0.5) * 0.6, Math.sin(a) * 0.8),
        len: 1.0 + r() * 0.7,
      };
    });
  }, [seed]);
  return (
    <group>
      <mesh>
        <capsuleGeometry args={[0.26, 0.9, 10, 28]} />
        <Skin color={color} tex={tex} />
      </mesh>
      {flagella.map((f, i) => (
        <Flagellum key={i} from={f.from} dir={f.dir} length={f.len} />
      ))}
    </group>
  );
}

/** Grape-like cluster of cocci (Staphylococcus-style). */
function CocciCluster({ count, tex, seed }: { count: number; tex: THREE.Texture; seed: number }) {
  const cells = useMemo(() => {
    const r = rng(seed);
    const R = 0.25;
    const pts: THREE.Vector3[] = [new THREE.Vector3()];
    let guard = 0;
    while (pts.length < count && guard++ < 4000) {
      const base = pts[Math.floor(r() * pts.length)];
      const dir = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize();
      const p = base.clone().addScaledVector(dir, R * 1.82);
      if (pts.every((q) => q.distanceTo(p) > R * 1.7)) pts.push(p);
    }
    const c = new THREE.Vector3();
    pts.forEach((p) => c.add(p));
    c.divideScalar(pts.length);
    const shades = ["#c1121f", "#a30d19", "#d8323f", "#b31020"];
    return pts.map((p, i) => ({ p: p.sub(c), s: 0.94 + r() * 0.12, color: shades[i % shades.length] }));
  }, [count, seed]);
  return (
    <group>
      {cells.map((c, i) => (
        <mesh key={i} position={c.p} scale={c.s}>
          <sphereGeometry args={[0.25, 32, 24]} />
          <Skin color={c.color} tex={tex} />
        </mesh>
      ))}
    </group>
  );
}

/** Chain of cocci (Streptococcus-style). */
function CocciChain({ count, tex }: { count: number; tex: THREE.Texture }) {
  return (
    <group>
      {Array.from({ length: count }, (_, i) => {
        const t = i - (count - 1) / 2;
        return (
          <mesh key={i} position={[t * 0.36, Math.sin(i * 0.9) * 0.14, 0]}>
            <sphereGeometry args={[0.2, 28, 20]} />
            <Skin color={i % 2 ? "#a30d19" : "#c1121f"} tex={tex} />
          </mesh>
        );
      })}
    </group>
  );
}

/** Helical bacterium (spirillum) with polar flagella tufts. */
function Spirillum({ tex }: { tex: THREE.Texture }) {
  const { geo, ends } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 120; i++) {
      const t = i / 120;
      const th = t * Math.PI * 4;
      pts.push(new THREE.Vector3(Math.cos(th) * 0.32, Math.sin(th) * 0.32, (t - 0.5) * 2));
    }
    return {
      geo: new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.1, 14, false),
      ends: [
        { from: pts[0], dir: new THREE.Vector3(0.1, 0, -1) },
        { from: pts[0], dir: new THREE.Vector3(-0.3, 0.2, -1) },
        { from: pts[0], dir: new THREE.Vector3(0.2, -0.3, -1) },
        { from: pts[120], dir: new THREE.Vector3(0.1, 0, 1) },
        { from: pts[120], dir: new THREE.Vector3(-0.3, 0.2, 1) },
        { from: pts[120], dir: new THREE.Vector3(0.2, -0.3, 1) },
      ],
    };
  }, []);
  return (
    <group>
      <mesh geometry={geo}>
        <Skin color="#26262a" tex={tex} />
      </mesh>
      {ends.map((e, i) => (
        <Flagellum key={i} from={e.from} dir={e.dir} length={0.9} waves={2} amp={0.07} />
      ))}
    </group>
  );
}

function Drift({ children, position, rotation = [0, 0, 0], scale = 1, rx = 0.08, rz = 0.06, bob = 1 }: { children: ReactNode; position: [number, number, number]; rotation?: [number, number, number]; scale?: number; rx?: number; rz?: number; bob?: number }) {
  const animate = useContext(AnimateContext);
  const g = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (animate && g.current) {
      g.current.rotation.x += dt * rx;
      g.current.rotation.z += dt * rz;
    }
  });
  return (
    <group position={position} scale={scale}>
      <Float speed={animate ? 1.2 * bob : 0} floatIntensity={0.5} rotationIntensity={0}>
        <group ref={g} rotation={rotation}>
          {children}
        </group>
      </Float>
    </group>
  );
}

/** Scales the whole scene to fit the canvas and gives it a gentle bounded sway. */
function Rig({ children, halfW, halfH }: { children: ReactNode; halfW: number; halfH: number }) {
  const animate = useContext(AnimateContext);
  const g = useRef<THREE.Group>(null);
  const viewport = useThree((s) => s.viewport);
  const scale = Math.min(1, viewport.width / (2 * halfW), viewport.height / (2 * halfH));
  useFrame(({ clock }) => {
    if (animate && g.current) {
      const t = clock.elapsedTime;
      g.current.rotation.y = Math.sin(t * 0.35) * 0.4;
      g.current.rotation.x = Math.sin(t * 0.23) * 0.12;
    }
  });
  return (
    <group scale={scale}>
      <group ref={g}>{children}</group>
    </group>
  );
}

function Organisms({ variant }: { variant: "compact" | "hero" }) {
  const tex = useSkinTexture();
  if (variant === "hero") {
    return (
      <Rig halfW={3.5} halfH={2.3}>
        <Drift position={[0.2, 0.3, 0]} rotation={[0, 0, 0.6]} scale={1.25}><Bacillus color="#c1121f" tex={tex} seed={3} /></Drift>
        <Drift position={[-1.6, 1.3, -0.8]} rotation={[0.5, 0, -0.4]} scale={0.9} rx={0.05}><Bacillus color="#a30d19" tex={tex} seed={8} /></Drift>
        <Drift position={[1.9, -0.9, 0.5]} rotation={[0, 0, 1.1]}><Bacillus color="#d8323f" tex={tex} seed={21} /></Drift>
        <Drift position={[-0.4, -1.55, 0.4]} rotation={[0, 0, -1.2]} scale={0.8}><Bacillus color="#b31020" tex={tex} seed={34} /></Drift>
        <Drift position={[-2.5, -0.3, 0]} scale={0.95} rx={0.05} rz={0.04}><CocciCluster count={16} tex={tex} seed={5} /></Drift>
        <Drift position={[2.4, 1.5, -0.5]} rotation={[0, 0, 0.4]} rx={0.03} rz={0.03}><CocciChain count={8} tex={tex} /></Drift>
        <Drift position={[0.7, 1.8, -0.6]} rotation={[0, Math.PI / 2, 0.5]} scale={0.8}><Spirillum tex={tex} /></Drift>
        {/* antibiotic capsule + tablet in the foreground */}
        <Drift position={[1.15, -0.2, 1.6]} rotation={[0.3, 0, -0.6]} scale={0.9} rx={0.15} rz={0.05}><Capsule /></Drift>
        <Drift position={[-0.95, -0.35, 1.5]} rotation={[0.9, 0.3, 0.2]} scale={0.8} rx={0.2} rz={0.1}><Tablet /></Drift>
      </Rig>
    );
  }
  return (
    <Rig halfW={2.3} halfH={1.45}>
      <Drift position={[0.1, 0.35, 0]} rotation={[0, 0, 0.55]}><Bacillus color="#c1121f" tex={tex} seed={3} /></Drift>
      <Drift position={[-0.2, -0.6, 0.4]} rotation={[0, 0, -0.5]} scale={0.85}><Bacillus color="#a30d19" tex={tex} seed={8} /></Drift>
      <Drift position={[-1.6, -0.5, -0.2]} scale={0.5} rx={0.05} rz={0.04}><CocciCluster count={12} tex={tex} seed={5} /></Drift>
      <Drift position={[1.4, 0.55, 0]} rotation={[0, Math.PI / 2, 0.5]} scale={0.65}><Spirillum tex={tex} /></Drift>
    </Rig>
  );
}

export default function BacteriaScene({ variant = "compact", animate = true }: { variant?: "compact" | "hero"; animate?: boolean }) {
  const hero = variant === "hero";
  return (
    <AnimateContext.Provider value={animate}>
      <Canvas
        dpr={[1, 1.5]}
        frameloop={animate ? "always" : "demand"}
        camera={{ position: [0, hero ? 0.2 : 0, hero ? 7.5 : 5.2], fov: hero ? 38 : 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 4]} intensity={1.5} />
        {/* offline studio lighting, no HDR download */}
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={3} position={[0, 4, 2]} scale={[8, 2, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={2} position={[-4, 0, 2]} scale={[2, 6, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={2} position={[4, -1, -2]} scale={[2, 6, 1]} color="#ff4d5e" />
        </Environment>
        <Organisms variant={variant} />
      </Canvas>
    </AnimateContext.Provider>
  );
}
