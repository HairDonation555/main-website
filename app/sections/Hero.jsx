"use client";

import React, { useEffect, useState } from "react";
import Button from "../components/Buttons";

// Mobile slideshow images
const mobileImages = [
  "/images/nh1.jpeg",
  "/images/hr1.png",
  "/images/don1.jpeg",
];

// Desktop hero background
const desktopImage = "/images/e_pics/Home.png";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-slide only on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mobileImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <img
            key={currentImage}
            src={mobileImages[currentImage]}
            alt="Hero Mobile"
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        ) : (
          <img
            src={desktopImage}
            alt="Hero Desktop"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center mt-28 mb:mt-0 justify-center w-full h-full text-center px-4">
        <h1 className="text-2xl md:text-5xl font-bold">
          Gift Hair, Gift Hope,
          <span className="block text-xl md:text-5xl">
            Donate Hair, Change lives!
          </span>
        </h1>
        <p className="text-xl mb-6">Be a Smile on someone’s Face!</p>
        <Button text="Donate" btnlink="/" />
      </div>
    </div>
  );
};

export default Hero;
