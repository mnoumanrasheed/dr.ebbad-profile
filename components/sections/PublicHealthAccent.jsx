"use client";

import dynamic from "next/dynamic";

const ScientificAccentScene = dynamic(
  () => import("@/components/three/ScientificAccentScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-white/10 animate-spin" />
      </div>
    ),
  }
);

export default function PublicHealthAccent() {
  return <ScientificAccentScene />;
}
