"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Anims = ({
  children,
  inAnimation = "fadeIn",
  outAnimation = "fadeOut",
  delay = 0,
  duration = 0.8,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // run only once
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  // Dynamic inline styles
  const style = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };

  // Animation class mappings
  const animations = {
    fadeIn: "animate-fadeIn",
    fadeOut: "animate-fadeOut",
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
