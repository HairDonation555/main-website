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
    }, 10000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white bg-[#ffffff]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <img
            key={currentImage}
            src={mobileImages[currentImage]}
            alt="Hero Mobile"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        ) : (
          <img
            src={desktopImage}
            alt="Hero Desktop"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Depth & Tone Overlays (same palette, different intensities) */}
      <div className="absolute inset-0 z-10">
        {/* Dark vignette using foreground tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/50 via-[#171717]/30 to-transparent" />

        {/* Subtle bottom depth gradient using darkened primary */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#004f5b]/80 via-[#006c7c]/20 to-transparent" /> */}

        {/* Gentle top light gradient for contrast */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 via-transparent to-transparent" />

        {/* Soft radial shadow for center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,#171717_100%)] opacity-30" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-4 mt-28 md:mt-0">
        <h1 className="text-2xl md:text-5xl font-bold text-[#ffffff] drop-shadow-[0_2px_6px_rgba(23,23,23,0.6)]">
          Gift Hair, Gift Hope,
          <span className="block text-xl md:text-5xl text-white ">
            Donate Hair, Change Lives!
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-6 mt-3 text-gray-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
          Be a Smile on Someone’s Face!
        </p>

        <Button text="Donate" btnlink="/" />
      </div>

      {/* Subtle reflective light at bottom for expensive look */}
      <div className="absolute bottom-0 w-full h-[10px] bg-gradient-to-t from-white/10 via-transparent to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Hero;
