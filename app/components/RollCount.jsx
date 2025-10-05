"use client";

import React, { useState, useEffect, useRef } from "react";

const RollingNumber = ({ count = "1M+", countname = "" }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
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

  // Intersection Observer to detect if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);

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
    <h2
      ref={ref}
      className={`text-center text-2xl flex flex-col w-36 font-bold text-white ${
        isInView ? "animate-fade-in-count" : "opacity-0"
      }`}
    >
      <span className="text-white font-bold">{currentCount.toLocaleString()}+</span>
      {countname}

      <style jsx>{`
        @keyframes fadeInCount {
          from {
            opacity: 0;
            transform: translateY(0);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-count {
          animation: fadeInCount 0.6s ease-out forwards;
        }
      `}</style>
    </h2>
  );
};

export default RollingNumber;