"use client";
import React, { useState, useEffect, useRef } from "react";
import Anims from "./Anims";

const RollingNumber = ({ count = "1M+", countname = "" }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const ref = useRef(null);
  const duration = 1000; // Animation duration (3 seconds)

  // Function to convert formatted numbers like "1M+" to actual numbers
  const parseCount = (countString) => {
    if (typeof countString === "number") return countString;
    
    let numericValue = parseFloat(countString.replace(/[^0-9.]/g, ""));
    if (countString.includes("M")) numericValue *= 1_000_000;
    if (countString.includes("K")) numericValue *= 1_000;

    return Math.floor(numericValue); // Ensure it's an integer
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting(); // Start count animation when visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    let startTime;
    const targetCount = parseCount(count); // Convert input to a number

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1

      setCurrentCount(Math.floor(progress * targetCount));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    setCurrentCount(0); // Reset count before starting
    requestAnimationFrame(updateCounter);
  };

  return (
    <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
    <h2
      ref={ref}
      className="text-center text-2xl text-white flex flex-col w-36 text-center font-bold"
    >
      <span className="text-white font-bold">{currentCount.toLocaleString()}+</span> {countname}
    </h2>
    </Anims>
  );
};

export default RollingNumber;
