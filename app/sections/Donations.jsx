"use client";

import React, { useState, useEffect } from 'react';

const imageArray = [
  '/images/hr8.png',
  '/images/hr9.png',
  '/images/after.jpg',
  '/images/before.jpg',
  '/images/hr11.png',
];

function Donations() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageArray.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + imageArray.length) % imageArray.length);
  };

  return (
    <div id='donations' className='flex flex-col md:flex-row md:gap-24 md:mb-12 gap-8 items-center w-full h-full justify-center py-10 px-4 md:px-14'>
      <div className='flex flex-col gap-4 px-4 md:px-12 py-8 text-center max-w-[90%] md:max-w-[500px]'>
        <h1 className='text-3xl md:text-5xl font-bold'>WIG DONATION</h1>
        <p className='text-lg md:text-3xl text-gray-500'>
          Wig donation is a generous way to support individuals experiencing hair loss due to medical conditions like cancer or alopecia.
        </p>
      </div>
      <div className='relative flex items-center'>
        <button onClick={prevImage} className='absolute left-0 bg-black text-white p-2 rounded-full shadow-md'>❮</button>
        <img 
          src={imageArray[currentImage]} 
          className='w-[600px] h-[500px] rounded-3xl object-cover transition-opacity duration-500 ease-in-out' 
          alt='Wig Donation'
        />
        <button onClick={nextImage} className='absolute right-0 bg-black text-white p-2 rounded-full shadow-md'>❯</button>
      </div>
    </div>
  );
}

export default Donations;
