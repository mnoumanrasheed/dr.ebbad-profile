"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function OrbitalScan() {
  const group = useRef();
  const particles = useMemo(() => {
    const points = new Float32Array(72 * 3);
    for (let index = 0; index < 72; index += 1) {
      const angle = index * 2.399;
      const radius = 1.2 + (index % 9) * 0.09;
      points[index * 3] = Math.cos(angle) * radius;
      points[index * 3 + 1] = Math.sin(angle) * radius;
      points[index * 3 + 2] = ((index % 7) - 3) * 0.08;
    }
    return points;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    group.current.rotation.z = time * 0.09;
    group.current.rotation.y = Math.sin(time * 0.22) * 0.22;
    group.current.rotation.x = Math.cos(time * 0.18) * 0.1;
  });

  return (
    <group ref={group}>
      <mesh rotation={[1.1, 0.25, 0]}>
        <torusGeometry args={[1.45, 0.012, 10, 120]} />
        <meshBasicMaterial color="#E2C98E" transparent opacity={0.48} />
      </mesh>
      <mesh rotation={[-0.6, 0.85, 0.35]}>
        <torusGeometry args={[1.86, 0.007, 8, 120]} />
        <meshBasicMaterial color="#B7D4E2" transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[0.1, -0.72, 0.8]}>
        <torusGeometry args={[2.16, 0.005, 8, 120]} />
        <meshBasicMaterial color="#E2C98E" transparent opacity={0.2} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshBasicMaterial color="#EAD39D" wireframe transparent opacity={0.26} />
      </mesh>
      <mesh position={[0.72, 1.25, 0.14]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#FFF4D7" />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#D8EDF5" size={0.025} transparent opacity={0.65} sizeAttenuation />
      </points>
    </group>
  );
}

export default function CinematicHeroAccent() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <OrbitalScan />
    </Canvas>
  );
}
