"use client";

import Lottie from "lottie-react";
import animationData from "@/public/01-Kelsey-updated.json";

export default function KelseyAnimation() {
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