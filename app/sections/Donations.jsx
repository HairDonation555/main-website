"use client";
import React, { useState, useEffect } from "react";
import Anims from "../components/Anims";
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
    <div className="flex flex-col mb-10 px-10 py-6">

        <div className="flex flex-col gap-6 mb-10 items-center">
        <Anims inAnimation='slideInUp' outAnimation='slideOutDown'>
       
        <h2 className="text-black md:text-5xl text-left text-3xl mb-4 font-bold">Wig Donations</h2>
        <p className='w-24 border-2 border-primary justify-center md:ml-[100px] ml-[50px] mb-4'></p>
        </Anims>  
        </div>
    <div id="donations" className="relative w-full min-h-screen md:gap-[100px] gap-12 flex flex-col md:flex-row md:ml-[200px] items-center">
      {/* Skewed Background for Text Section */}


      {/* Content Wrapper */}


        {/* Image Section (Responsive - Below Text on Mobile) */}
 
       
        <div className="relative w-full md:ml-24 h-[500px] md:h-[700px] md:w-[800px] bg-white shadow-xl rounded-2xl overflow-hidden">
        <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
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
        </Anims>  
          {/* Navigation Buttons */}
          <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
            >
 
            ❮
          </button>
          </Anims> 
          <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
            >
              ❯
            </button>
          </Anims> 
        </div>

        <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center md:px-6  md:px-12 md:py-16 gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col md:gap-12 gap-6 w-full md:mt-6 md:mt-0 md:pl-10">

  
         
              <p className="text-gray-700 text-left text-xl leading-relaxed">
              Wig donation is a generous way to support individuals experiencing hair loss due to medical conditions like cancer or alopecia.
              </p>

                <h3 className="text-xl text-left font-semibold text-gray-900">How Your Donation Helps</h3>
                <ul className="mt-2 space-y-2">
                <Anims inAnimation='slideInUp' outAnimation='slideOutDown'>
       
                  <li className="flex items-center text-left gap-2">
                  <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><FaCheck /></span>
                    100% of donated hair is used to create high quality wigs.
                   
                  </li>

                  </Anims> 
                  <Anims inAnimation='slideInUp' outAnimation='slideOutDown'>       
                  <li className="flex items-center text-left gap-2">
                    <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><FaCheck /></span>
                      Wigs are provided for free with no fees/charges to the recipients 

                  </li>
                </Anims> 

                <Anims inAnimation='slideInUp' outAnimation='slideOutDown'>
       
                  <li className="flex items-center text-left gap-2">
                  <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><FaCheck /></span>
                  Custom fittings ensure comfort and natural appearance.

                </li>

                </Anims> 
                </ul>
            
        </div>
      </div>
    </div>
    </div>
  );
}

export default Donations;
