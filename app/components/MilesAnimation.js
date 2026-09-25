"use client";

import Lottie from "lottie-react";
import animationData from "@/public/03-Miles-Lottie.json";

export default function MilesAnimation() {
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