"use client";
import React, { useState, useEffect } from "react";
import Anims from "../components/Anims";
import { FaCheck } from "react-icons/fa6";

const imageArray = 
[
  "/images/e_pics/wig (1).jpeg",
  "/images/e_pics/wig (2).jpeg",
  "/images/e_pics/wig (3).jpeg",
  "/images/e_pics/wig (4).jpeg",
];

function Donations() {
  const [currentImage, setCurrentImage] = useState(0);

  // Preload images once
  useEffect(() => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
    setCurrentImage(
      (prevImage) => (prevImage - 1 + imageArray.length) % imageArray.length
    );
  };

  return (
    <div id="donations" className="flex flex-col bg-primary md:px-10">
      {/* Section Heading */}
      <div className="text-center md:p-2">
        <Anims inAnimation="fadeIn" outAnimation="fadeOut">
          <h2 className="text-3xl md:text-5xl md:mt-12 mt-6 font-bold text-white">
            Wig Donations
          </h2>
          <div className="w-24 border-2 border-primary mx-auto mt-2"></div>
        </Anims>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center m-6 p-4 gap-14">
        {/* Image Slider Section */}
        <div className="relative w-full md:w-[600px] h-[400px] md:h-[600px]  rounded-md overflow-hidden">
          {imageArray.map((image, index) => (
          
              <img
                src={image}
                 key={index}
                alt={`Wig Donation ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
        
          ))}

          {/* Nav Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-primary text-white p-2 w-10 rounded-full  hover:bg-opacity-80 transition"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-2 w-10 rounded-full  hover:bg-opacity-80 transition"
          >
            →
          </button>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full flex flex-col gap-6 text-left">
         <p className="text-left text-xl text-white mt-2">
          Contact us now, if you're a cancer patient to get a <b className="text-white font-bold"> Free Wig! </b>
        </p>

        <a className="text-xl text-left font-bold text-white underline hover:cursor-pointer" href='https://forms.gle/CWpj6LSHAMzGiKE86' target="_blank">Contact Us →</a>
          <p className="text-white text-lg md:text-xl md:mb-6 leading-relaxed">
            Wig donation is a generous way to support individuals experiencing
            hair loss due to medical conditions like cancer or alopecia.
          </p>

          <h3 className="text-xl font-bold text-white">How Your Donation Helps</h3>
          <ul className="space-y-4">
            <Anims inAnimation="fadeIn" outAnimation="fadeOut">
              <li className="flex items-start gap-3">
                <span className="bg-green-300 text-primary text-xl p-2 rounded-xl">
                  <FaCheck />
                </span>
                <span className="text-white/70 text-base md:text-lg">
                  100% of donated hair is used to create high quality wigs.
                </span>
              </li>
            </Anims>

            <Anims inAnimation="fadeIn" outAnimation="fadeOut">
              <li className="flex items-start gap-3"> 
                <span className="bg-green-300 text-primary text-xl p-2 rounded-xl">
                  <FaCheck />
                </span>
                <span className="text-white/70 text-base md:text-lg">
                  Wigs are provided for free with no fees/charges to the
                  recipients.
                </span>
              </li>
            </Anims>

             <Anims inAnimation="fadeIn" outAnimation="fadeOut">
              <li className="flex items-start gap-3"> 
                <span className="bg-green-300 text-primary text-xl p-2 rounded-xl">
                  <FaCheck />
                </span>
                <span className="text-white/70 text-base md:text-lg">
                Every donor receives a professional free haircut as a token of appreciation for their noble contribution.
                </span>
              </li>
            </Anims>

            <Anims inAnimation="fadeIn" outAnimation="fadeOut">
              <li className="flex items-start gap-3">
                <span className="bg-green-300 text-primary text-xl p-2 rounded-xl">
                  <FaCheck />
                </span>
                <span className="text-white/70 text-base md:text-lg">
                  Custom fittings ensure comfort and natural appearance.
                </span>
              </li>
            </Anims>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Donations;
