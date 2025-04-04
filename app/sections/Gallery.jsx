"use client";

import React from "react";
import Buttons from "../components/Buttons";

const events = [
  "/images/hr9.png",
  "/images/hr9.png",
  "/images/hr9.png",
  "/images/hr9.png",
  "/images/hr9.png",
  "/images/hr9.png",
  "/images/hr9.png",
  "/images/hr9.png",
];

const EventGallery = () => {
  return (
    <div id="events" className="p-5 md:mt-12 md:mb-12">
      {/* First Marquee (Left to Right) */}
      <div className="marquee-containerG group">
        <div className="marqueeG animate-marquee-left group-hover:paused p-6">
          {[...events, ...events].map((url, index) => (
            <div key={index} className="gallery-card">
              <img src={url} alt={`Event ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Second Marquee (Right to Left) */}
      <div className="marquee-containerG group mt-6">
        <div className="marqueeG animate-marquee-right group-hover:paused p-6">
          {[...events, ...events].map((url, index) => (
            <div key={index} className="gallery-card">
              <img src={url} alt={`Event ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-black md:text-5xl text-right text-3xl mb-4 font-bold">Donors Gallery</h2>
        <p className='w-24 border-2 border-primary mb-2'></p>
        <p className="text-gray-700 text-center leading-relaxed">
            Celebrating our generous donors and their beutiful donations!
        </p>
        </div>
    </div>
  );
};

export default EventGallery;
