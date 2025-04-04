"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Buttons";
import { FaCheck } from "react-icons/fa6";


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


      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center px-6 md:px-12 py-16 gap-12">
        
        {/* Text Section */}
      <div className="md:w-1/2 flex flex-col gap-12 w-full mt-6 md:mt-0 md:pl-10">

        <div className="flex flex-col gap-2 items-center">
        <h2 className="text-black md:text-5xl text-right text-3xl mb-4 font-bold">Wig Donations</h2>
        <p className='w-24 border-2 border-primary md:ml-[230px] ml-[15px] mb-4'></p>
        <p className="text-gray-700 text-right leading-relaxed">
        Wig donation is a generous way to support individuals experiencing hair loss due to medical conditions like cancer or alopecia.
        </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl text-right font-semibold text-gray-900">How Your Donation Helps</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center text-right gap-2">
              
              100% of donated hair is used to create high quality wigs.
              <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><FaCheck /></span>
            </li>
            <li className="flex items-center text-right gap-2">
              Wigs are provided for free with no fees/charges to the recipients 
              <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><FaCheck /></span>
           </li>
            <li className="flex items-center text-right gap-2">
             Custom fittings ensure comfort and natural appearance.
              <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><FaCheck /></span>
           </li>
          </ul>
        </div>
      </div>

        {/* Image Section (Responsive - Below Text on Mobile) */}
        <div className="relative w-full md:ml-24 md:w-1/2 h-[400px] md:h-[700px] md:w-[800px] bg-white shadow-xl rounded-2xl overflow-hidden">
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
