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
    // Improved random placement with collision avoidance
    const tempPositions = [];
    const minDistance = 12; // minimum spacing between bubbles

    prominentLocations.forEach(() => {
      let top, left;
      let valid = false;

      while (!valid) {
        top = Math.random() * 90 + 2; // keep inside viewport
        left = Math.random() * 90 + 4;

        valid = tempPositions.every(
          (pos) =>
            Math.sqrt(Math.pow(pos.top - top, 2) + Math.pow(pos.left - left, 2)) >
            minDistance
        );
      }

      tempPositions.push({ top, left });
    });

    setPositions(tempPositions);
  }, []);

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

      <div className="relative w-full h-[100vh] z-20">
        {prominentLocations.map((name, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              className={`absolute font-semibold px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isActive ? "ring-2 ring-white shadow-lg" : "shadow-md"
              }`}
              style={{
                top: `${positions[index]?.top || 50}%`,
                left: `${positions[index]?.left || 50}%`,
                transform: "translate(-50%, -50%)",
                background: isActive ? "#ffffff" : "#b6e2dd",
                color: isActive ? "#006c7c" : "#003c40",
                animation: isActive ? "pulse-glow 3s ease-in-out infinite" : "none",
                fontSize: "0.7rem",
              }}
            >
              <span className="flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
                <FaMapMarkerAlt
                  className={isActive ? "text-[#006c7c]" : "text-[#004d55]"}
                />
                {name}
              </span>
            </button>
          );
        })}
      </div>

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
