"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Buttons";

const imageArray = [
  "/images/hr8.png",
  "/images/hr9.png",
  "/images/after.jpg",
  "/images/before.jpg",
  "/images/hr11.png",
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
    <div id="donations" className="relative w-full min-h-screen flex flex-col md:flex-row items-center">
      {/* Skewed Background for Text Section */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-primary transform -skew-y-6 origin-bottom-left"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center px-6 md:px-12 py-16 gap-12">
        
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-5xl font-bold text-white">WIG DONATION</h1>
          <p className="text-xl text-gray-200 leading-relaxed md:mb-18 max-w-lg">
            Wig donation is a generous way to support individuals experiencing hair loss due to medical conditions like cancer or alopecia.
          </p>
          <Button text="Donate Now" />
        </div>

        {/* Image Section (Responsive - Below Text on Mobile) */}
        <div className="relative w-full md:ml-24 md:w-1/2 h-[400px] md:h-[800px] md:w-[800px] bg-white shadow-xl rounded-2xl overflow-hidden">
          {imageArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Wig Donation"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            ❮
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donations;
