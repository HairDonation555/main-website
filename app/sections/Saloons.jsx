"use client";

import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const prominentLocations = [
  "Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur", "Warangal",
  "Tirupati", "Nellore", "Karimnagar", "Rajahmundry", "Kakinada",
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Coimbatore",
  "Kurnool", "Kadapa", "Anantapur", "Ongole", "Eluru",
  "Nizamabad", "Adilabad", "Srikakulam", "Vizianagaram", "Machilipatnam",
  "Mangalagiri", "Bhadradri", "Amaravati", "Medak", "Khammam"
];

const Saloons = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % prominentLocations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Distribute points evenly in a grid pattern, with slight random offsets
    const rows = 6;
    const cols = 6;
    const tempPositions = prominentLocations.map((_, idx) => {
      const row = Math.floor(idx / cols);
      const col = idx % cols;
      return {
        top: (row + 0.5) * (100 / rows) + (Math.random() * 5 - 2.5),
        left: (col + 0.5) * (100 / cols) + (Math.random() * 5 - 2.5)
      };
    });
    setPositions(tempPositions);
  }, []);

  return (
    <div className="relative flex flex-col items-center p-6 bg-primary text-white w-full overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-primary via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-primary via-transparent to-transparent z-10 pointer-events-none" />

      <h2 className="text-4xl font-bold mt-12 mb-4 text-center z-20">
        Partner Salon Locations
      </h2>
      <p className="w-24 border-2 border-white mb-4 z-20" />
      <p className="text-lg text-gray-200 mt-2 text-center max-w-2xl z-20">
        Our certified salon partners are located in the most prominent areas of India,
        offering convenient hair donation support throughout the country.
      </p>

      <div className="relative w-full h-[100vh] z-20">
        {prominentLocations.map((name, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              className={`absolute font-semibold px-2 py-1 md:px-4 md:py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:z-[60] ${
                isActive ? "ring-2 ring-white" : ""
              }`}
              style={{
                top: `${positions[index]?.top || 50}%`,
                left: `${positions[index]?.left || 50}%`,
                transform: "translate(-50%, -50%) translateZ(0)",
                background: isActive ? "#ffffff" : "#b6e2dd",
                color: isActive ? "#006c7c" : "#003c40",
                animation: isActive ? "pulse-glow 3s ease-in-out infinite" : "none",
                willChange: "transform, opacity",
                fontSize: "0.6rem"
              }}
            >
              <span className="flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
                <FaMapMarkerAlt
                  className={isActive ? "text-[#006c7c]" : "text-[#004d55]"}
                />{" "}
                {name}
              </span>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
        }

        @media (min-width: 768px) {
          button {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Saloons;
