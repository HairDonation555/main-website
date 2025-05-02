"use client";

import React from "react";
import Anims from "../components/Anims";

// All images
const events = [
  "/gallery/dono05.jpg",
  "/gallery/donor1.jpg",
  "/gallery/donor01.jpg",
  "/gallery/donor2.jpg",
  "/gallery/donor02.jpg",
  "/gallery/donor3.jpg",
  "/gallery/donor03.jpg",
  "/gallery/donor4.jpg",
  "/gallery/donor04.jpg",
  "/gallery/donor5.jpg",
  "/gallery/donor6.jpg",
  "/gallery/donor06.jpg",
  "/gallery/donor7.jpg",
  "/gallery/donor07.jpg",
  "/gallery/door8.jpg",
  "/gallery/donor08.jpg",
  "/gallery/donor9.jpg",
];

// Split the events array into two halves
const midpoint = Math.ceil(events.length / 2);
const marqueeOne = events.slice(0, midpoint);
const marqueeTwo = events.slice(midpoint);

const EventGallery = () => {
  return (
    <div id="events" className="p-5 md:mt-12 md:mb-12 overflow-hidden bg-white">
      {/* Marquee Left to Right */}
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {[...marqueeOne, ...marqueeOne].map((url, index) => (
            <img
              key={`left-${index}`}
              src={url}
              alt={`Donor ${index + 1}`}
              className="inline-block h-48 md:h-56 w-auto object-cover rounded-xl mx-2"
            />
          ))}
        </div>
      </div>

      {/* Marquee Right to Left */}
      <div className="relative w-full overflow-hidden whitespace-nowrap mt-8">
        <div className="inline-block animate-marquee-reverse">
          {[...marqueeTwo, ...marqueeTwo].map((url, index) => (
            <img
              key={`right-${index}`}
              src={url}
              alt={`Donor Reverse ${index + 1}`}
              className="inline-block h-48 md:h-56 w-auto object-cover rounded-xl mx-2"
            />
          ))}
        </div>
      </div>

      {/* Section Text */}
      <Anims inAnimation="fadeIn" outAnimation="fadeOut">
        <div className="flex flex-col gap-2 items-center mt-10">
          <h2 className="text-black md:text-5xl text-3xl mb-4 font-bold">Donors Gallery</h2>
          <p className="w-24 border-2 border-primary mb-2"></p>
          <p className="text-gray-700 text-center leading-relaxed">
            Celebrating our generous donors and their beautiful donations!
          </p>
        </div>
      </Anims>
    </div>
  );
};

export default EventGallery;
