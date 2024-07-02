"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 150,
    globeColor: "#10132E",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.2,
    emissive: "#10132E",
    emissiveIntensity: 0.1,
    shininess: 2,
    polygonColor: "rgba(255,255,255,1)",
    ambientLight: "#FFFFFF",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 600,
    arcLength: 0.9,
    rings: 2,
    maxRings: 2,
    initialPosition: { lat: 33.7398, lng: 130.7229 },
    autoRotate: true,
    autoRotateSpeed: 0,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 51.233592,
      startLng: 6.783191,
      endLat: 33.7398,
      endLng: 130.7229,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 33.7398,
      startLng: 130.7229,
      endLat: 51.233592,
      endLng: 6.783191,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    }
  ];

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-48 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden px-4 h-96">

        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  );
}
