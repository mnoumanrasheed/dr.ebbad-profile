"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HeartSculpture() {
  const groupRef = useRef();
  const pulseRef = useRef();

  // Create curves for major anatomical vessels
  const {
    aortaCurve,
    pulmonaryCurve,
    pulmonaryBranchLeft,
    pulmonaryBranchRight,
    svcCurve,
    branch1Curve,
    branch2Curve,
    branch3Curve,
  } = useMemo(() => {
    // 1. Aorta: Ascending from central base, arching up & left, descending
    const aortaPoints = [
      new THREE.Vector3(-0.05, 0.4, 0.05),
      new THREE.Vector3(-0.02, 0.95, 0.1),
      new THREE.Vector3(0.08, 1.4, 0.05),
      new THREE.Vector3(0.35, 1.6, -0.05),
      new THREE.Vector3(0.7, 1.45, -0.2),
      new THREE.Vector3(0.85, 1.0, -0.35),
      new THREE.Vector3(0.85, 0.3, -0.4),
    ];
    const aortaCurve = new THREE.CatmullRomCurve3(aortaPoints);

    // 2. Pulmonary Trunk: Emerging anteriorly to aorta, crossing in front
    const pulmonaryPoints = [
      new THREE.Vector3(0.1, 0.25, 0.35),
      new THREE.Vector3(0.0, 0.75, 0.38),
      new THREE.Vector3(-0.15, 1.15, 0.25),
      new THREE.Vector3(-0.25, 1.3, 0.1),
    ];
    const pulmonaryCurve = new THREE.CatmullRomCurve3(pulmonaryPoints);

    // Left and Right Pulmonary branch arteries
    const pulmonaryBranchLeft = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.25, 1.3, 0.1),
      new THREE.Vector3(-0.65, 1.32, 0.0),
      new THREE.Vector3(-0.95, 1.25, -0.15),
    ]);
    const pulmonaryBranchRight = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.25, 1.3, 0.1),
      new THREE.Vector3(0.15, 1.25, -0.15),
      new THREE.Vector3(0.65, 1.15, -0.25),
    ]);

    // 3. Superior Vena Cava: Entering superior right atrium
    const svcPoints = [
      new THREE.Vector3(-0.7, 1.7, -0.1),
      new THREE.Vector3(-0.65, 1.2, -0.05),
      new THREE.Vector3(-0.6, 0.7, 0.0),
    ];
    const svcCurve = new THREE.CatmullRomCurve3(svcPoints);

    // 4. Three Great Branches from the Aortic Arch
    // Brachiocephalic artery
    const branch1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.18, 1.52, 0.0),
      new THREE.Vector3(0.12, 1.95, 0.02),
    ]);
    // Left common carotid
    const branch2Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.38, 1.62, -0.06),
      new THREE.Vector3(0.38, 2.05, -0.06),
    ]);
    // Left subclavian
    const branch3Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.55, 1.55, -0.14),
      new THREE.Vector3(0.62, 1.95, -0.15),
    ]);

    return {
      aortaCurve,
      pulmonaryCurve,
      pulmonaryBranchLeft,
      pulmonaryBranchRight,
      svcCurve,
      branch1Curve,
      branch2Curve,
      branch3Curve,
    };
  }, []);

  // Shared high-end brushed metallic silver material
  const silverMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#D8DBE2"),
        roughness: 0.22,
        metalness: 0.94,
        envMapIntensity: 1.2,
      }),
    []
  );

  const silverAccentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#E8EBF0"),
        roughness: 0.18,
        metalness: 0.98,
      }),
    []
  );

  // Subtle pulsing and mouse tracking
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Gentle ambient floating & rotation
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.25 - 0.2;
    groupRef.current.rotation.x = Math.cos(t * 0.25) * 0.08 + 0.05;
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;

    // Interactive pointer parallax response (damped)
    const targetX = state.pointer.x * 0.45;
    const targetY = -state.pointer.y * 0.35;
    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.04;

    // Elegant resting pulse rhythm (systole & diastole)
    if (pulseRef.current) {
      // Dual-beat heartbeat pulse wave: P-wave and QRS contraction
      const beat = (t * 1.1) % 1;
      let pulseScale = 1.0;
      if (beat < 0.15) {
        pulseScale = 1.0 + Math.sin((beat / 0.15) * Math.PI) * 0.035;
      } else if (beat > 0.2 && beat < 0.38) {
        pulseScale = 1.0 + Math.sin(((beat - 0.2) / 0.18) * Math.PI) * 0.02;
      }
      pulseRef.current.scale.set(pulseScale, pulseScale, pulseScale);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={1.25}>
      <group ref={pulseRef}>
        {/* Left Ventricle (apex pointing down, left and forward) */}
        <mesh position={[0.2, -0.4, 0.08]} rotation={[0.2, 0, -0.28]} material={silverMaterial}>
          <sphereGeometry args={[0.78, 48, 48]} />
        </mesh>

        {/* Right Ventricle (anterior and rightward) */}
        <mesh position={[-0.32, -0.28, 0.22]} rotation={[0.1, 0.2, 0.18]} material={silverMaterial}>
          <sphereGeometry args={[0.68, 48, 48]} />
        </mesh>

        {/* Apex conical tip blending lower ventricles */}
        <mesh position={[0.08, -1.0, 0.02]} rotation={[Math.PI, 0, 0.2]} material={silverMaterial}>
          <coneGeometry args={[0.55, 0.95, 36]} />
        </mesh>

        {/* Right Atrium (superior, right side) */}
        <mesh position={[-0.62, 0.4, -0.05]} material={silverMaterial}>
          <sphereGeometry args={[0.54, 36, 36]} />
        </mesh>

        {/* Left Atrium & Auricle (posterior / superior) */}
        <mesh position={[0.48, 0.48, -0.2]} material={silverMaterial}>
          <sphereGeometry args={[0.52, 36, 36]} />
        </mesh>

        {/* Interventricular sulcus groove line (subtle sculptural detail) */}
        <mesh position={[-0.05, -0.5, 0.62]} rotation={[0, 0, 0.4]} material={silverAccentMaterial}>
          <cylinderGeometry args={[0.025, 0.015, 1.1, 16]} />
        </mesh>
      </group>

      {/* 1. Ascending Aorta & Arch */}
      <mesh material={silverMaterial}>
        <tubeGeometry args={[aortaCurve, 64, 0.21, 24, false]} />
      </mesh>

      {/* 2. Brachiocephalic Branch */}
      <mesh material={silverMaterial}>
        <tubeGeometry args={[branch1Curve, 20, 0.065, 16, false]} />
      </mesh>

      {/* 3. Left Common Carotid Branch */}
      <mesh material={silverMaterial}>
        <tubeGeometry args={[branch2Curve, 20, 0.06, 16, false]} />
      </mesh>

      {/* 4. Left Subclavian Branch */}
      <mesh material={silverMaterial}>
        <tubeGeometry args={[branch3Curve, 20, 0.06, 16, false]} />
      </mesh>

      {/* 5. Pulmonary Trunk */}
      <mesh material={silverMaterial}>
        <tubeGeometry args={[pulmonaryCurve, 36, 0.19, 20, false]} />
      </mesh>

      {/* Pulmonary Branches */}
      <mesh material={silverMaterial}>
        <tubeGeometry args={[pulmonaryBranchLeft, 24, 0.12, 16, false]} />
      </mesh>
      <mesh material={silverMaterial}>
        <tubeGeometry args={[pulmonaryBranchRight, 24, 0.12, 16, false]} />
      </mesh>

      {/* 6. Superior Vena Cava */}
      <mesh material={silverMaterial}>
        <tubeGeometry args={[svcCurve, 32, 0.16, 18, false]} />
      </mesh>

      {/* Subtle orbital anatomical coordinate rings (precision luxury motif) */}
      <mesh rotation={[Math.PI / 2.8, 0, 0]}>
        <torusGeometry args={[1.9, 0.006, 16, 100]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.16} />
      </mesh>
      <mesh rotation={[-Math.PI / 3.4, Math.PI / 5, 0]}>
        <torusGeometry args={[2.15, 0.005, 16, 100]} />
        <meshBasicMaterial color="#C1C5CC" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}
