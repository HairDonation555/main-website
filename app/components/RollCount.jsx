"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const RollingNumber = ({ count = "1M+", countname = "" }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const ref = useRef(null);
  const duration = 1000; // Animation duration in ms

  // Function to convert formatted numbers like "1M+" to actual numbers
  const parseCount = (countString) => {
    if (typeof countString === "number") return countString;

    let numericValue = parseFloat(countString.replace(/[^0-9.]/g, ""));
    if (countString.includes("M")) numericValue *= 1_000_000;
    if (countString.includes("K")) numericValue *= 1_000;

    return Math.floor(numericValue); // Ensure it's an integer
  };

  // Framer Motion hook to detect if element is in viewport
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const targetCount = parseCount(count);

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCurrentCount(Math.floor(progress * targetCount));

      if (progress < 1) requestAnimationFrame(updateCounter);
    };

    setCurrentCount(0);
    requestAnimationFrame(updateCounter);
  }, [isInView, count]);

  return (
    <motion.h2
      ref={ref}
      className="text-center text-2xl flex flex-col w-36 font-bold text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-white font-bold">{currentCount.toLocaleString()}+</span>
      {countname}
    </motion.h2>
  );
};

export default RollingNumber;
