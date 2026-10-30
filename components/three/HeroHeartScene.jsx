"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import HeartSculpture from "./HeartSculpture";
import * as THREE from "three";

function AtmosphericDust({ count = 35 }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 8;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 8;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return coords;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#C1C5CC"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroHeartScene() {
  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[620px] flex items-center justify-center">
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-white/[0.06] via-transparent to-transparent blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.8]} // Performance capping
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          {/* Studio Lighting Rig */}
          {/* 1. Soft cool ambient light */}
          <ambientLight intensity={0.7} color="#BAC2D1" />

          {/* 2. Key directional light with high brilliance */}
          <directionalLight
            position={[5, 6, 4]}
            intensity={2.2}
            color="#FFFFFF"
          />

          {/* 3. Rim/Back light for sculptural silver contour */}
          <directionalLight
            position={[-5, -4, -3]}
            intensity={1.8}
            color="#A4ACB8"
          />

          {/* 4. Platinum accent point light */}
          <pointLight position={[0, -2.5, 2]} intensity={0.9} color="#E2E6ED" />
          <pointLight position={[0, 3, -1]} intensity={0.7} color="#FFFFFF" />

          {/* Subtle anatomical dust particles */}
          <AtmosphericDust count={40} />

          {/* Central 3D Sculpture */}
          <HeartSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
