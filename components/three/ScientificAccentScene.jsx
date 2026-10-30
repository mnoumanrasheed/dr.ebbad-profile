"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MoleculeCluster() {
  const group = useRef();

  const nodes = useMemo(() => {
    return [
      { pos: [0, 0, 0], r: 0.38 },
      { pos: [0.85, 0.45, 0.2], r: 0.22 },
      { pos: [-0.75, 0.5, -0.3], r: 0.24 },
      { pos: [0.2, -0.85, 0.3], r: 0.2 },
      { pos: [-0.6, -0.65, -0.15], r: 0.18 },
      { pos: [0.95, -0.4, -0.4], r: 0.16 },
    ];
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#E2E5EA",
        roughness: 0.2,
        metalness: 0.92,
      }),
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.25;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos} material={material}>
          <sphereGeometry args={[node.r, 24, 24]} />
        </mesh>
      ))}

      {/* Connection bonds */}
      <mesh rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 1.6, 12]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[0.8, 0.4, -0.6]}>
        <cylinderGeometry args={[0.02, 0.02, 1.8, 12]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[-0.5, 0.7, 0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 1.7, 12]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

export default function ScientificAccentScene({ className = "" }) {
  return (
    <div className={`relative w-full h-64 sm:h-80 flex items-center justify-center ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 2]} intensity={2.0} color="#FFFFFF" />
        <directionalLight position={[-3, -3, -2]} intensity={1.2} color="#A8B0BE" />
        <MoleculeCluster />
      </Canvas>
    </div>
  );
}
