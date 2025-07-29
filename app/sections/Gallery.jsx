"use client";

import React from "react";
import Anims from "../components/Anims";

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

const EventGallery = () => {
  return (
    <div id="events" className="bg-white py-10 px-4 sm:px-6 lg:px-10">
      {/* Section Text */}
      <Anims inAnimation="fadeIn" outAnimation="fadeOut">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black">Donors Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-4 rounded-full" />
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            Celebrating our generous donors and their beautiful donations!
          </p>
        </div>
      </Anims>

      {/* Responsive Gallery Grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {events.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Donor ${index + 1}`}
            className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
