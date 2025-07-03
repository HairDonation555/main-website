"use client";

import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Anims from "../components/Anims";

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
    const buffer = 5;
    const radius = 8;
    const attempts = [];
    const newPositions = [];

    const generateNonOverlappingPosition = (existing) => {
      let top, left, tries = 0, collision;
      do {
        top = buffer + Math.random() * (100 - 2 * buffer);
        left = buffer + Math.random() * (100 - 2 * buffer);
        collision = existing.some(pos => {
          const dx = pos.left - left;
          const dy = pos.top - top;
          return Math.sqrt(dx * dx + dy * dy) < radius;
        });
        tries++;
      } while (collision && tries < 100);
      return { top, left };
    };

    prominentLocations.forEach(() => {
      const pos = generateNonOverlappingPosition(newPositions);
      newPositions.push(pos);
    });

    setPositions(newPositions);
  }, []);

  return (
    <div className="relative flex flex-col items-center p-6 bg-primary text-white w-full overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-primary via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-primary via-transparent to-transparent z-10 pointer-events-none" />

      <h2 className="text-4xl font-bold mt-12 mb-4 text-center z-20">Partner Salon Locations</h2>
      <p className="w-24 border-2 border-white mb-4 z-20" />
      <p className="text-lg text-gray-200 mt-2 text-center max-w-2xl z-20">
        Our certified salon partners are located in the most prominent areas of India,
        offering convenient hair donation support throughout the country.
      </p>

      <div className="relative w-full h-[100vh] z-20">
        {prominentLocations.map((name, index) => {
          const isActive = index === activeIndex;
          return (
            <Anims key={index} inAnimation="fadeIn" outAnimation="fadeOut" delay={index * 0.05}>
              <button
                className={`absolute font-semibold px-2 py-1 md:px-4 md:py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:z-[60] ${
                  isActive ? "ring-2 ring-white glow" : ""
                }`}
                style={{
                  top: `${positions[index]?.top}%`,
                  left: `${positions[index]?.left}%`,
                  transform: "translate(-50%, -50%)",
                  background: isActive ? "#ffffff" : "#b6e2dd",
                  color: isActive ? "#006c7c" : "#003c40",
                  animation: isActive ? "pulse-glow 3s ease-in-out infinite" : "none",
                  boxShadow: isActive
                    ? "0 0 20px rgba(255, 255, 255, 0.6)"
                    : "0 0 6px rgba(0,0,0,0.15)",
                  zIndex: isActive ? 50 : 10,
                  opacity: 0.95,
                  fontSize: "0.6rem",
                }}
              >
                <span className="flex items-center gap-2 text-xs md:text-sm whitespace-nowrap">
                  <FaMapMarkerAlt className={isActive ? "text-[#006c7c]" : "text-[#004d55]"} /> {name}
                </span>
              </button>
            </Anims>
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
