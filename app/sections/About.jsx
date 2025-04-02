"use client"
import React, { useEffect, useRef, useState } from 'react';

function About() {
  const videoRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrolling(false); // Text stays at initial position
          videoRef.current?.play(); // Play video when visible
        } else {
          setScrolling(true); // Move text downward on scroll
          videoRef.current?.pause(); // Pause video when out of view
        }
      },
      { threshold: 0.6 } // Trigger when 60% of video is visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/videos/vid2.mp4" // Replace with your actual video file
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        />
      </div>

      {/* Full-Screen Text Section with Moving Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black/50">
        <div
          className={`transition-transform duration-700 ${
            scrolling ? "translate-y-[100%]" : "translate-y-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary drop-shadow-2xl">
            ABOUT US
          </h1>
          <p className="text-lg md:text-2xl text-white mt-4 max-w-3xl mx-auto drop-shadow-2xl">
            Our mission is to raise awareness about the importance of hair donation and make the process easy for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
