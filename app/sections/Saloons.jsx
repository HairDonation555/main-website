"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const prominentLocations = [
  "Hyderabad", "Bangalore", "Delhi", "Kolkata", "Pune",
  "Kerala", "Rajasthan", "Haryana", "Punjab", "Gujarat",
  "Mysore", "Uttarpradesh", "Goa", "Dehradun", "Chandigarh",
  "Assam", "Uttarakhand", "Vijayawada", "Guntur", "Karimnagar",
  "Nizamabad", "Tamilnadu", "Nepal", "Coimbatore", "Tirupati",
  "Maharashtra", "Mumbai", "Visakhapatnam", "Westbengal",
  "Bhopal", "Lucknow", "Jaipur", "Patna", "Pondicherry",
  "Warangal", "Ongole", "Andhrapradesh", "Madhyapradesh",
  "Indore", "Kashmir", "Howrah", "Kanyakumari"
];

const Saloons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [positions, setPositions] = useState([]);
  const marqueeRef = useRef(null);
  const itemRefs = useRef([]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile: track which item is in center
  useEffect(() => {
    if (!isMobile) return;

    const checkCenter = () => {
      if (!marqueeRef.current) return;
      const centerX = window.innerWidth / 2;
      let closestIndex = null;
      let closestDist = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(centerX - itemCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
      requestAnimationFrame(checkCenter);
    };

    requestAnimationFrame(checkCenter);
  }, [isMobile]);

  // Desktop: generate random scatter positions
  useEffect(() => {
    if (isMobile) return;
    const tempPositions = [];
    const minDistance = 12;

    prominentLocations.forEach(() => {
      let top, left;
      let valid = false;

      while (!valid) {
        top = Math.random() * 90 + 2;
        left = Math.random() * 90 + 4;
        valid = tempPositions.every(
          (pos) =>
            Math.sqrt((pos.top - top) ** 2 + (pos.left - left) ** 2) >
            minDistance
        );
      }
      tempPositions.push({ top, left });
    });
    setPositions(tempPositions);
  }, [isMobile]);

  // Desktop: random active glow
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * prominentLocations.length);
      setActiveIndex(randomIndex);
    }, 2500); // glow changes every 2.5s
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative flex flex-col items-center p-6 bg-primary text-white w-full overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4 text-center z-20">
        Partner Salon Locations
      </h2>
      <p className="w-24 border-2 border-white mb-4 z-20" />
      <p className="text-lg text-gray-200 mt-2 text-center max-w-2xl mb-12 md:mb-6 z-20">
        Our certified salon partners are located in the most prominent areas of India,
        offering convenient hair donation support throughout the country.
      </p>

      {/* Mobile Marquee */}
      {isMobile ? (
        <div ref={marqueeRef} className="w-full overflow-hidden whitespace-nowrap relative py-4">
          <div className="inline-flex animate-marquee gap-6">
            {prominentLocations.concat(prominentLocations).map((name, index) => {
              const isActive = index === activeIndex;
              return (
                <span
                  ref={(el) => (itemRefs.current[index] = el)}
                  key={index}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#006c7c] ring-2 ring-white scale-110 shadow-lg"
                      : "bg-[#b6e2dd] text-[#003c40]"
                  }`}
                >
                  <FaMapMarkerAlt
                    className={isActive ? "text-[#006c7c]" : "text-[#004d55]"}
                  />
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        // Desktop scatter
        <div className="relative w-full h-[100vh] z-20 flex items-center justify-center">
          <div className="relative w-full h-[100vh] z-20">
            {prominentLocations.map((name, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  className={`absolute font-semibold px-2 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isActive ? "ring-2 ring-white shadow-lg" : "shadow-md"
                  }`}
                  style={{
                    top: `${positions[index]?.top || 50}%`,
                    left: `${positions[index]?.left || 50}%`,
                    transform: "translate(-50%, -50%)",
                    background: isActive ? "#ffffff" : "#b6e2dd",
                    color: isActive ? "#006c7c" : "#003c40",
                    animation: isActive ? "pulse-glow 3s ease-in-out infinite" : "none",
                  }}
                >
                  <span className="flex items-center gap-2 text-sm whitespace-nowrap">
                    <FaMapMarkerAlt
                      className={isActive ? "text-[#006c7c]" : "text-[#004d55]"}
                    />
                    {name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Saloons;
