"use client";

import Lottie from "lottie-react";

import Kelsey from "@/public/01-Kelsey-updated.json";
import Koy from "@/public/02-Koy-updated-Lottie.json";
import Miles from "@/public/03-Miles-Lottie.json";
import Pistakio from "@/public/04-Pistakio-Lottie.json";
import Zay from "@/public/05-Zay-Lottie.json";

const animations = [
    Kelsey,
    Koy,
    Miles,
    Pistakio,
    Zay,
];

export default function HeroAnimation() {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            <div className="hero-tower">

                {/* First set */}
                {animations.map((animation, index) => (
                    <div
                        key={`first-${index}`}
                        className="hero-card"
                    >
                        <div className="lottie-rounded">
                            <Lottie
                                animationData={animation}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                    </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {animations.map((animation, index) => (
                    <div
                        key={`second-${index}`}
                        className="hero-card"
                    >
                        <div className="lottie-rounded">
                            <Lottie
                                animationData={animation}
                                loop={true}
                                autoplay={true}
                            />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}