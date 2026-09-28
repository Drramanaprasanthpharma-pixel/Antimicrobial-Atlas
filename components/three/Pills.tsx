"use client";

const RADIUS = 0.42;
const BODY = 0.9;

/** Two-tone glossy pharmaceutical capsule (red / black), long axis = Y. */
export function Capsule() {
  const red = { color: "#e30016", roughness: 0.16, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.06 } as const;
  const black = { color: "#131315", roughness: 0.2, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.08 } as const;
  return (
    <group>
      <mesh position={[0, BODY / 4, 0]}>
        <cylinderGeometry args={[RADIUS, RADIUS, BODY / 2, 48]} />
        <meshPhysicalMaterial {...red} />
      </mesh>
      <mesh position={[0, BODY / 2, 0]}>
        <sphereGeometry args={[RADIUS, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial {...red} />
      </mesh>
      <mesh position={[0, -BODY / 4, 0]}>
        <cylinderGeometry args={[RADIUS, RADIUS, BODY / 2, 48]} />
        <meshPhysicalMaterial {...black} />
      </mesh>
      <mesh position={[0, -BODY / 2, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[RADIUS, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial {...black} />
      </mesh>
      <mesh>
        <torusGeometry args={[RADIUS + 0.004, 0.012, 12, 64]} />
        <meshStandardMaterial color="#f2f2f2" roughness={0.5} />
      </mesh>
    </group>
  );
}

/** Round scored tablet. */
export function Tablet() {
  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.36, 0.36, 0.14, 64]} />
        <meshPhysicalMaterial color="#ececee" roughness={0.38} clearcoat={0.5} clearcoatRoughness={0.3} />
      </mesh>
      <mesh position={[0, 0.072, 0]}>
        <boxGeometry args={[0.72, 0.004, 0.02]} />
        <meshStandardMaterial color="#9a9aa0" roughness={0.8} />
      </mesh>
    </group>
  );
}
