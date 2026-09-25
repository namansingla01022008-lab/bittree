"use client";

import Lottie from "lottie-react";
import animationData from "@/public/04-Pistakio-Lottie.json";

export default function PistakioAnimation() {
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