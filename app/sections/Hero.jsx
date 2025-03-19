"use client"
import React, { useEffect, useState } from 'react';
import Button from '../components/Buttons';

const images = [
  '/images/nh1.jpeg', // Replace with your actual image URLs
  '/images/nh2.jpeg',
  '/images/nh3.jpeg',
];

const Hero = () => {
  const [visibleImages, setVisibleImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        // Shuffle and return a new order without repeating the last shown images
        const newOrder = [...prev].sort(() => Math.random() - 0.5);
        return newOrder;
      });
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white text-center">
      <div className="absolute inset-0 flex justify-around items-center">
        {visibleImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Image ${index}`} 
            className="w-1/3 h-full object-cover" 
          />
        ))}
      </div>
      <div className="relative bg-black/40 w-full h-full items-center justify-center z-10">
       <div className='md:mt-[600px] justify-center items-center text-center lg:mt-[300px] '>
        <h1 className="md:text-6xl md:w-full  mt-[300px] md:mt-[600px] text-4xl font-bold mb-4">
          Donate hair, give hope,
          <span className="block cursive text-5xl md:text-7xl">change lives!</span>
        </h1>
        <p className="text-2xl mb-6">Be a Smile on someone’s Face!</p>
        <Button text="Donate" btnlink="/" />
        </div>
      </div>
    </div>
  );
}

export default Hero;