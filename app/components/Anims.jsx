"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";



const Anims = ({
  children,
  inAnimation = "fadeIn",
  outAnimation = "fadeOut",
  delay = 0,
  duration = 0.8,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // animate only once for performance
  });

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  // Define reusable motion variants
  const variants = {
    fadeIn: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } },
    fadeOut: { opacity: 0, y: 0, transition: { duration, ease: "easeIn" } },

    slideInLeft: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" } },
    slideOutLeft: { opacity: 0, x: -40, transition: { duration, ease: "easeIn" } },

    slideInRight: { opacity: 1, x: 0, transition: { duration, delay, ease: "easeOut" } },
    slideOutRight: { opacity: 0, x: 40, transition: { duration, ease: "easeIn" } },

    slideInUp: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" } },
    slideOutDown: { opacity: 0, y: 40, transition: { duration, ease: "easeIn" } },

    scaleIn: { opacity: 1, scale: 1, transition: { duration, delay, ease: "easeOut" } },
    scaleOut: { opacity: 0, scale: 0.95, transition: { duration, ease: "easeIn" } },
  };

  // Start and end variants
  const initialVariant =
    outAnimation && variants[outAnimation] ? outAnimation : "fadeOut";
  const animateVariant =
    inAnimation && variants[inAnimation] ? inAnimation : "fadeIn";

  return (
    <motion.div
      ref={ref}
      initial={initialVariant}
      animate={isVisible ? animateVariant : initialVariant}
      variants={variants}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default Anims;
