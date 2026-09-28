"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ringPositions(count: number, radius: number, y = 0) {
  return new Array(count).fill(0).map((_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
  });
}

function Atom({ position, color, size }: { position: THREE.Vector3; color: string; size: number }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 20, 20]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color === "#ffffff" ? "#000000" : color}
        emissiveIntensity={0.18}
        roughness={0.2}
        metalness={0.25}
        clearcoat={1}
        clearcoatRoughness={0.12}
      />
    </mesh>
  );
}

function Bonds({ points, color }: { points: THREE.Vector3[]; color: string }) {
  const positions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      const b = points[(i + 1) % points.length];
      arr.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
    return new Float32Array(arr);
  }, [points]);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.55} />
    </lineSegments>
  );
}

function MoleculeGroup({ dense }: { dense: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ringCount = dense ? 8 : 6;
  const ring = useMemo(() => ringPositions(ringCount, 1.5), [ringCount]);
  const satellites = useMemo(
    () =>
      ringPositions(dense ? 5 : 4, 2.6, 0.9).map((p) =>
        p.applyAxisAngle(new THREE.Vector3(1, 0.3, 0), 0.6)
      ),
    [dense]
  );

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.22;
      group.current.rotation.x = Math.sin(Date.now() * 0.0002) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <Bonds points={ring} color="#e30016" />
      {ring.map((p, i) => (
        <Atom key={`ring-${i}`} position={p} color={i % 2 === 0 ? "#e30016" : "#ffffff"} size={0.18} />
      ))}
      {satellites.map((p, i) => (
        <group key={`sat-${i}`}>
          <Atom position={p} color="#ffffff" size={0.1} />
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([0, 0, 0, p.x, p.y, p.z]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#9c0018" transparent opacity={0.4} />
          </lineSegments>
        </group>
      ))}
    </group>
  );
}

export default function MoleculeScene({ dense = true }: { dense?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.4, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={45} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#e30016" />
      <MoleculeGroup dense={dense} />
    </Canvas>
  );
}
