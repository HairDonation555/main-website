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
    <div className="p-5 bg-white">
   
      
      {/* First marquee (Left to Right) */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
          {events.map((url, index) => (
            <div key={index} className="gallery-card">
              <img src={url} alt={`Event ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Second marquee (Right to Left) */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
          {events.map((url, index) => (
            <div key={index} className="gallery-card">
              <img src={url} alt={`Event ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-10">Events</h2>
      <div className="text-center mt-10">
        <Buttons text="Host an Event" btnlink="/" />
      </div>
    </div>
  );
};

export default EventGallery;
