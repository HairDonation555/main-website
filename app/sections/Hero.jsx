"use client"
import React, { useEffect, useState } from 'react';
import Button from '../components/Buttons';

const images = [
  '/images/nh1.jpeg',
  '/images/hr1.png',
  '/images/hr4.png',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen width
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust for tablet/mobile
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Stop switching images on desktop

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Loop through images
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white text-center">
      <div className="absolute inset-0 flex md:flex-row flex-col justify-around items-center">
        {isMobile ? (
          <img 
            src={images[currentImage]} 
            alt="Mobile Image" 
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
        ) : (
          images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Image ${index}`} 
              className="w-1/3 h-full md:object-cover" 
            />
          ))
        )}
      </div>
      <div className="relative bg-black/40 w-full h-full items-center justify-center z-10">
        <div className="md:mt-[600px] justify-center items-center text-center lg:mt-[300px]">
          <h1 className="md:text-6xl md:w-full mt-[300px] md:mt-[600px] text-4xl font-bold mb-4">
            Donate hair, give hope,
            <span className="block cursive text-5xl md:text-7xl">change lives!</span>
          </h1>
          <p className="text-2xl mb-6">Be a Smile on someone’s Face!</p>
          <Button text="Donate" btnlink="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
