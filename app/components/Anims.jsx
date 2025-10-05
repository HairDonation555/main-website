"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Anims = ({
  children,
  inAnimation = "fadeIn",
  outAnimation = "fadeOut",
  delay = 0,
  duration = 0.8,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // animate only once
  });

  // Define animation variants
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

  const initial = variants[outAnimation] || variants.fadeOut;
  const animate = inView ? variants[inAnimation] || variants.fadeIn : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default Anims;
