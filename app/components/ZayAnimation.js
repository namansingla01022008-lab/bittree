"use client";

import Lottie from "lottie-react";
import animationData from "@/public/05-Zay-Lottie.json";

export default function ZayAnimation() {
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