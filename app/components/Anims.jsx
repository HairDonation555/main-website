"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import clsx from "clsx";

/**
 * Anims Component
 * Handles entry/exit animations when elements scroll into view.
 * fadeIn/fadeOut now replaced with smooth slide animations (mobile-safe)
 */
const Anims = ({
  children,
  inAnimation = "fadeIn",
  outAnimation = "fadeOut",
  delay = 0,
  duration = 0.8,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // run only once for performance
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  // Animation style
  const style = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };

  // Remap fade animations to slide ones (for compatibility)
  const animations = {
    fadeIn: "animate-slideInSmooth",
    fadeOut: "animate-slideOutSmooth",
    slideInLeft: "animate-slideInLeft",
    slideOutLeft: "animate-slideOutLeft",
    slideInRight: "animate-slideInRight",
    slideOutRight: "animate-slideOutRight",
    slideInUp: "animate-slideInUp",
    slideOutDown: "animate-slideOutDown",
    scaleIn: "animate-scaleIn",
    scaleOut: "animate-scaleOut",
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "will-change-transform will-change-opacity",
        isVisible ? animations[inAnimation] : animations[outAnimation]
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Anims;
