"use client";

import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const prominentLocations = [
  "Hyderabad", "Bangalore", "Delhi", "Kolkata", "Pune",
   "Kerala", "Rajasthan", "Haryana", "Punjab",
  "Gujarat", "Mysore", "Uttarpradesh", "Goa", "Dehradun",
  "Chandigarh", "Assam", "Uttarakhand", "Vijayawada", "Guntur",
  "Karimnagar", "Nizamabad", "Tamilnadu", "Nepal", "Coimbatore",
  "Tirupati", "Maharashtra", "Mumbai", "Visakhapatnam", "Westbengal",
  "Bhopal", "Lucknow", "Jaipur", "Patna", "Pondicherry", "Warangal",
  "Ongole", "Andhrapradesh", "Madhyapradesh", "Indore", "Kashmir",
  "Howrah", "Kanyakumari"
];

const Saloons = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [positions, setPositions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % prominentLocations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Random scatter positions only for desktop
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

      {/* Desktop random scatter */}
      {!isMobile ? (
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
      ) : (
        // Mobile grid layout
        <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 w-full pb-16">
          {prominentLocations.map((name, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                className={`font-semibold px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 mx-auto ${
                  isActive ? "ring-2 ring-white shadow-lg" : "shadow-md"
                }`}
                style={{
                  background: isActive ? "#ffffff" : "#b6e2dd",
                  color: isActive ? "#006c7c" : "#003c40",
                  animation: isActive ? "pulse-glow 3s ease-in-out infinite" : "none",
                  transform: `translateY(${Math.random() * 10 - 5}px)`, // small unaligned effect
                }}
              >
                <span className="flex items-center gap-1 text-xs md:text-sm whitespace-nowrap">
                  <FaMapMarkerAlt
                    className={isActive ? "text-[#006c7c]" : "text-[#004d55]"}
                  />
                  {name}
                </span>
              </button>
            );
          })}
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
      `}</style>
    </div>
  );
};

export default Saloons;
