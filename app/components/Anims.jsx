"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Anims = ({
  children,
  inAnimation,
  outAnimation,
  delay = 0,
  duration = 0.8,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.1, // Slightly stricter threshold
    triggerOnce: true, // ✅ Only trigger inView ONCE
  });

  const variants = {
    fadeIn: { opacity: 1, transition: { duration, delay } },
    fadeOut: { opacity: 0, transition: { duration, delay } },
    slideInLeft: { x: "0%", opacity: 1, transition: { duration, delay } },
    slideOutLeft: { x: "-10%", opacity: 0, transition: { duration, delay } },
    slideInRight: { x: "0%", opacity: 1, transition: { duration, delay } },
    slideOutRight: { x: "10%", opacity: 0, transition: { duration, delay } },
    slideInUp: { y: "0%", opacity: 1, transition: { duration, delay } },
    slideOutDown: { y: "10%", opacity: 0, transition: { duration, delay } },
    scaleIn: { scale: 1, opacity: 1, transition: { duration, delay } },
    scaleOut: { scale: 1.05, opacity: 0, transition: { duration, delay } },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[outAnimation]}
      animate={
        shouldReduceMotion
          ? variants[inAnimation]
          : inView
          ? variants[inAnimation]
          : variants[outAnimation]
      }
      style={{
        willChange: "transform, opacity",
        WebkitBackfaceVisibility: "hidden",
        WebkitTransform: "translateZ(0)",
        WebkitTransformStyle: "preserve-3d",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Anims;
