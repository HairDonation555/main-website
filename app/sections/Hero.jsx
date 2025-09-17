"use client";

import React, { useEffect, useState } from 'react';
import Button from '../components/Buttons';

const images = [
  '/images/nh1.jpeg',
  '/images/hr1.png',
  '/images/don1.jpeg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size reliably
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // More typical mobile breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Slide images only in mobile view
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      
      {/* Background image(s) */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <img
            key={currentImage} // Force re-render on currentImage change
            src={images[currentImage]}
            alt="Hero Mobile"
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        ) : (
          <div className="flex w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hero Image ${index + 1}`}
                className="w-1/3 h-full object-cover"
              />
            ))}
          </div>
        )}
      </div>

      {/* Dark overlay blur */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
         Gift Hair, Gift Hope,

          <span className="block text-5xl md:text-5xl">Donate Hair, Change lives!</span>
        </h1>
        <p className="text-2xl mb-6">Be a Smile on someone’s Face!</p>
        <Button text="Donate" btnlink="/" />
      </div>
    </div>
  );
};

export default Hero;
