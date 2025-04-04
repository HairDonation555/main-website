"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaHandshakeAngle, FaHeart } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { IoMdMan } from "react-icons/io";


function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play(); // Auto-play when visible
        } else {
          videoRef.current?.pause(); // Pause when out of view
        }
      },
      { threshold: 0.6 } // Trigger when 60% visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="w-full flex flex-col md:flex-row items-center justify-center py-10 px-5 md:px-20">
      {/* Video Section */}
      <div className="md:w-1/2 w-full flex justify-center">
        <video
          ref={videoRef}
          src="/videos/vid2.mp4" // Replace with your actual video file
          className="w-full md:w-[500px] md:h-[800px] rounded-lg md:rounded-xl "
          loop
          muted
          playsInline
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col gap-12 w-full mt-6 md:mt-0 md:pl-10">

        <div className="flex flex-col gap-2 item-center">
        <h2 className="text-black md:text-5xl text-left text-3xl mb-4 font-bold">Our Mission</h2>
        <p className='w-24 text-right flex-end border-2 border-primary mb-4'></p>
        <p className="text-gray-700 leading-relaxed">
          At <strong className="text-primary">Hair Donation 555</strong>, we believe everyone deserves to feel confident and beautiful, regardless of medical conditions that cause hair loss. We facilitate the process of hair donation to create high-quality wigs for those in need.
        </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900">Why Your Donation Helps</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center">
              <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><IoIosHeart /></span>
              Provides wigs for cancer patients undergoing chemotherapy
            </li>
            <li className="flex items-center">
              <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><IoMdMan /></span>
              Supports children with alopecia or other medical hair loss conditions
            </li>
            <li className="flex items-center">
              <span className="text-primary text-xl mr-2  bg-green-300 rounded-xl p-2"><FaHandshakeAngle /></span>
              Boosts self-esteem and confidence for recipients
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
