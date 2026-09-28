"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 0.42;
const BODY = 0.9;

function Capsule({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const redMat = { color: "#e30016", roughness: 0.18, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.08 };
  const whiteMat = { color: "#f4f4f5", roughness: 0.22, metalness: 0.02, clearcoat: 1, clearcoatRoughness: 0.1 };
  return (
    <group position={position} rotation={rotation}>
      {/* red half */}
      <mesh position={[0, BODY / 4, 0]}>
        <cylinderGeometry args={[RADIUS, RADIUS, BODY / 2, 48]} />
        <meshPhysicalMaterial {...redMat} />
      </mesh>
      <mesh position={[0, BODY / 2, 0]}>
        <sphereGeometry args={[RADIUS, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial {...redMat} />
      </mesh>
      {/* white half */}
      <mesh position={[0, -BODY / 4, 0]}>
        <cylinderGeometry args={[RADIUS, RADIUS, BODY / 2, 48]} />
        <meshPhysicalMaterial {...whiteMat} />
      </mesh>
      <mesh position={[0, -BODY / 2, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[RADIUS, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial {...whiteMat} />
      </mesh>
      {/* seam ring */}
      <mesh>
        <torusGeometry args={[RADIUS + 0.004, 0.012, 12, 64]} />
        <meshStandardMaterial color="#1a1a1c" roughness={0.6} />
      </mesh>
    </group>
  );
}

function Tablet({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0.9, 0.3, 0.2]}>
      <mesh>
        <cylinderGeometry args={[0.36, 0.36, 0.14, 64]} />
        <meshPhysicalMaterial color="#fafafa" roughness={0.35} clearcoat={0.6} clearcoatRoughness={0.25} />
      </mesh>
      {/* score line */}
      <mesh position={[0, 0.072, 0]}>
        <boxGeometry args={[0.72, 0.004, 0.02]} />
        <meshStandardMaterial color="#c9c9cc" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Rig() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.35;
  });
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <Capsule position={[0, 0.1, 0]} rotation={[0.35, 0, -0.75]} />
      </Float>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
        <Tablet position={[-0.95, -0.55, 0.35]} />
      </Float>
    </group>
  );
}

export default function CapsuleScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.4, 4.2], fov: 38 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 3]} intensity={1.6} />
      {/* offline studio lighting: no HDR download needed */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 2]} scale={[8, 2, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={2} position={[-4, 0, 2]} scale={[2, 6, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={2.5} position={[4, -1, -2]} scale={[2, 6, 1]} color="#ff2a3d" />
      </Environment>
      <Rig />
      <ContactShadows position={[0, -1.25, 0]} opacity={0.5} scale={6} blur={2.6} far={2.5} color="#000000" />
    </Canvas>
  );
}
