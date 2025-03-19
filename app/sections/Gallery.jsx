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

      <h2 className="text-4xl font-bold text-center mt-10 mb-6">Events</h2>
      <div className="text-center">
        <Buttons text="Host an Event" btnlink="/" />
      </div>
    </div>
  );
};

export default EventGallery;
