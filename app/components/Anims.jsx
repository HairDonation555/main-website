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
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  const animations = {
    fadeIn: { opacity: 1, transition: { duration, delay } },
    fadeOut: { opacity: 0, transition: { duration, delay } },

    // Use relative units for better mobile responsiveness
    slideInLeft: {
      x: 0,
      opacity: 1,
      transition: { duration, delay },
    },
    slideOutLeft: {
      x: "-10vw",
      opacity: 0,
      transition: { duration, delay },
    },
    slideInRight: {
      x: 0,
      opacity: 1,
      transition: { duration, delay },
    },
    slideOutRight: {
      x: "10vw",
      opacity: 0,
      transition: { duration, delay },
    },
    slideInUp: {
      y: 0,
      opacity: 1,
      transition: { duration, delay },
    },
    slideOutDown: {
      y: "10vh",
      opacity: 0,
      transition: { duration, delay },
    },
    scaleIn: {
      scale: 1,
      opacity: 1,
      transition: { duration, delay },
    },
    scaleOut: {
      scale: 1.2,
      opacity: 0,
      transition: { duration, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isVisible ? animations[inAnimation] : animations[outAnimation]}
    >
      {children}
    </motion.div>
  );
};

export default Anims;
