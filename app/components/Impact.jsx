"use client";

import React from 'react';
import RollingNumber from './RollCount';
import Anims from '../components/Anims';
import Image from 'next/image';

function Impact() {
  return (
    <div className="impact-section  py-16 px-6 md:px-12 lg:px-24">
      
      {/* YouTube Play Buttons Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
        {/* <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.1}> */}
   <div className="relative group">
  {/* Subtle glass glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 via-transparent to-yellow-500/30 rounded-md blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* Card Container */}
  <div className="relative flex flex-col items-center text-center bg-white/80 backdrop-blur-lg border border-yellow-200 rounded-md  p-8 w-72 md:w-80  transition-all duration-500 ease-in-out">
    
    {/* Play Button Image */}
    <div className="relative w-36 h-36 mb-6 overflow-hidden rounded-md ">
      <Image
        src="/images/1m.jpeg"
        alt="YouTube Gold Play Button"
        fill
        className="object-cover"
      />
      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 to-yellow-400/30 opacity-0 group-hover:opacity-80 rounded-md transition duration-500"></div>
    </div>

    {/* Subscriber Text */}
    <p className="text-2xl font-bold text-gray-900 mb-2">1 Million Subscribers</p>

    {/* Badge */}
    <div className="px-4 py-1 rounded-full bg-yellow-50 border border-yellow-300 text-yellow-800 font-semibold text-sm tracking-wide">
      Gold Milestone
    </div>
  </div>
</div>

        {/* </Anims> */}

        {/* <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.2}> */}
          <div className="relative group">
  {/* Subtle glass glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 via-transparent to-yellow-500/30 rounded-md blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* Card Container */}
  <div className="relative flex flex-col items-center text-center bg-white/80 backdrop-blur-lg border border-yellow-200 rounded-md  p-8 w-72 md:w-80   transition-all duration-500 ease-in-out">
    
    {/* Play Button Image */}
    <div className="relative w-36 h-36 mb-6 overflow-hidden rounded-md ">
      <Image
        src="/images/100.jpeg"
        alt="YouTube Gold Play Button"
        fill
        className="object-cover"
      />
      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/20 to-gray-400/30 opacity-0 group-hover:opacity-80 rounded-md transition duration-500"></div>
    </div>

    {/* Subscriber Text */}
    <p className="text-2xl font-bold text-gray-900 mb-2">100K Subscribers</p>

    {/* Badge */}
    <div className="px-4 py-1 rounded-full bg-gray-200 border border-gray/30 text-gray-800 font-semibold text-sm tracking-wide ">
      Silver Milestone
    </div>
  </div>
</div>

        {/* </Anims> */}
      </div>

      {/* Rolling Numbers Section */}
      <div className="flex flex-col md:flex-row justify-around items-center text-center gap-10">
        <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.3}>
          <div className="p-10 bg-primary rounded-md flex flex-col items-center w-64">
            <RollingNumber count="1M+" countname="Subscribers" />
          </div>
        </Anims>

        <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.4}>
          <div className="p-10 bg-primary rounded-md flex flex-col items-center w-64 ">
            <RollingNumber count="50+" countname="Saloons" />
          </div>
        </Anims>

        <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.5}>
          <div className="p-10 bg-primary rounded-md flex flex-col items-center w-64 ">
            <RollingNumber count="3000+" countname="Donors" />
          </div>
        </Anims>
      </div>

    </div>
  );
}

export default Impact;