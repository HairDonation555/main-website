"use client";
import React, { useState } from "react";

const eventImages = [
  "/images/e_pics/1.jpeg",
  "/images/e_pics/2.jpeg",
  "/images/e_pics/3.jpeg",
  "/images/e_pics/4.jpeg",
  "/images/e_pics/5.jpeg",
  "/images/e_pics/6.jpeg",
  "/images/e_pics/7.jpeg",
  "/images/e_pics/8.jpeg",
  "/images/e_pics/9.jpeg",
  "/images/e_pics/10.jpeg",
];

const eventVideos = [
  "/videos/e_vids/v1.mp4",
  "/videos/e_vids/v2.mp4",
  "/videos/e_vids/v3.mp4",
  "/videos/e_vids/v4.mp4",
  "/videos/e_vids/v5.mp4",
  "/videos/e_vids/v6.mp4",
  "/videos/e_vids/v7.mp4",
  "/videos/e_vids/v8.mp4",
];

const EventsGallery = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % eventVideos.length);
  };

  const handlePrev = () => {
    setCurrentVideo((prev) =>
      prev === 0 ? eventVideos.length - 1 : prev - 1
    );
  };

  return (
    <div id="events" className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">
      {/* Section Text */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">Events Gallery</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-4 rounded-full" />
        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
          Capturing memorable moments from our events and activities!
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg flex shadow-inner">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === "images"
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Images ({eventImages.length})
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-primary text-white shadow-md"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Videos ({eventVideos.length})
          </button>
        </div>
      </div>

      {/* Images Gallery */}
      {activeTab === "images" && (
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {eventImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Event ${index + 1}`}
              className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-lg"
            />
          ))}
        </div>
      )}

      {/* Videos Gallery */}
      {activeTab === "videos" && eventVideos.length > 0 && (
        <div className="flex flex-col items-center">
          {/* Video Container */}
          <div className="w-full max-w-4xl bg-black rounded-xl shadow-lg overflow-hidden">
            <video
              key={currentVideo} // ensures video resets when switching
              src={eventVideos[currentVideo]}
              autoPlay
              className="w-full h-[500px] object-contain bg-black"
              poster={`/events/video${currentVideo + 1}-thumb.jpg`}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition"
            >
              ‹ 
            </button>
            <span className="text-gray-700 font-medium">
              Video {currentVideo + 1} of {eventVideos.length}
            </span>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition"
            >
               ›
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {((activeTab === "images" && eventImages.length === 0) ||
        (activeTab === "videos" && eventVideos.length === 0)) && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-gray-500">No {activeTab} available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default EventsGallery;
