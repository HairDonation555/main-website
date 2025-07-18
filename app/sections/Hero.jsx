"use client";

import React, { useEffect, useState } from 'react';
import Button from '../components/Buttons';
import Anims from '../components/Anims';

const images = [
  '/images/nh1.jpeg',
  '/images/hr1.png',
  '/images/hr4.png',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
            src={images[currentImage]} 
            alt="Mobile Image" 
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
        ) : (
          <div className="flex h-full">
            {images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Image ${index}`} 
                className="w-1/3 h-full object-cover" 
              />
            ))}
          </div>
        )}
      </div>

      {/* Dark overlay blur */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <div className="mt-[300px] md:mt-[600px] px-4">
          <Anims inAnimation='fadeIn' outAnimation='fadeOut' delay={0.25}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Donate hair, give hope,
              <Anims inAnimation='fadeIn' outAnimation='fadeOut' delay={0.25}>
                <span className="block cursive text-5xl md:text-7xl">
                  Change lives!
                </span>
              </Anims>
            </h1>
          </Anims>
          <p className="text-2xl mb-6">Be a Smile on someone’s Face!</p>
          <Button text="Donate" btnlink="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
