"use client";

import Lottie from "lottie-react";
import animationData from "@/public/02-Koy-updated-Lottie.json";

export default function KoyAnimation() {
  return (
    <div className="w-150 h-150">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}