"use client";

import React, { useEffect, useState } from "react";
import {
  m,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "motion/react";

export default function TextLoop({
  rotatingTexts = ["writers", "DJs", "indie artists" , "producers", "recording studios", "touring companies", "event spaces", "managers" , "labels", "live events", "brand collaborators", "publishers", "taste makers", "global artists", "creators", "influencers", "small bussinesses" , "athletes" , "models", "monetizers", "health educators", "streamers", "vloggers", "fitness coaches", "musicians"],
  className = "",
  interval = 3000,
  transition = { duration: 1.2, ease: "easeInOut" },
  rotatingTextClassName = "",
  backgroundClassName = "",
  cursorClassName = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [rotatingTexts.length, interval]);

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`flex tracking-tight ${className } `}
      >

        <div className="relative flex items-center">
          <AnimatePresence mode="wait">
            <m.div
              key={rotatingTexts[index]}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={transition}
              className="overflow-hidden whitespace-nowrap relative"
            >
              {/* Background gradient box */}
              <div
                className={`absolute `}
              />

              <span
                className={`relative ${ rotatingTextClassName } `}
              >
                {rotatingTexts[index]}
              </span>
            </m.div>
          </AnimatePresence>

          {/* Cursor Line */}
          <m.div
            className={`${ cursorClassName } `}
            animate={{ opacity: [1, 0.5] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>
    </LazyMotion>
  );
}
