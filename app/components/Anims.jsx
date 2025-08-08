"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Anims = ({
  children,
  inAnimation,
  outAnimation,
  delay = 0,
  duration = 0.8,
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Avoid triggering twice during hydration
    requestAnimationFrame(() => {
      setIsVisible(inView);
    });
  }, [inView]);

  const animations = {
    fadeIn: {
      opacity: 1,
      transition: { duration, delay },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration, delay },
    },

    slideInLeft: {
      x: "0%",
      opacity: 1,
      transition: { duration, delay },
    },
    slideOutLeft: {
      x: "-10%",
      opacity: 0,
      transition: { duration, delay },
    },
    slideInRight: {
      x: "0%",
      opacity: 1,
      transition: { duration, delay },
    },
    slideOutRight: {
      x: "10%",
      opacity: 0,
      transition: { duration, delay },
    },
    slideInUp: {
      y: "0%",
      opacity: 1,
      transition: { duration, delay },
    },
    slideOutDown: {
      y: "10%",
      opacity: 0,
      transition: { duration, delay },
    },
    scaleIn: {
      scale: 1,
      opacity: 1,
      transition: { duration, delay },
    },
    scaleOut: {
      scale: 1.05,
      opacity: 0,
      transition: { duration, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={false} // ✅ Prevents re-running animation on mount in iOS
      animate={isVisible ? animations[inAnimation] : animations[outAnimation]}
      style={{
        willChange: "transform, opacity", // ✅ Hints GPU acceleration
        WebkitBackfaceVisibility: "hidden", // ✅ Fixes Safari flicker
        WebkitTransform: "translateZ(0)", // ✅ Forces GPU compositing on iOS
      }}
    >
      {children}
    </motion.div>
  );
};

export default Anims;
