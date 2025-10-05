"use client";

import React from "react";
import { motion } from "framer-motion";
import RollingNumber from "./RollCount";
import Image from "next/image";

// Simple reusable fade-in variant
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

function Impact() {
  return (
    <div className="impact-section py-16 px-6 md:px-12 lg:px-24">
      {/* YouTube Play Buttons Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
        {/* GOLD PLAY BUTTON */}
        <motion.div
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 via-transparent to-yellow-500/30 rounded-md blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative flex flex-col items-center text-center bg-white/80 backdrop-blur-lg border border-yellow-200 rounded-md p-8 w-72 md:w-80 transition-all duration-500 ease-in-out">
            <div className="relative w-36 h-36 mb-6 overflow-hidden rounded-md">
              <Image
                src="/images/1m.jpeg"
                alt="YouTube Gold Play Button"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 to-yellow-400/30 opacity-0 group-hover:opacity-80 rounded-md transition duration-500"></div>
            </div>

            <p className="text-2xl font-bold text-gray-900 mb-2">
              1 Million Subscribers
            </p>

            <div className="px-4 py-1 rounded-full bg-yellow-50 border border-yellow-300 text-yellow-800 font-semibold text-sm tracking-wide">
              Gold Milestone
            </div>
          </div>
        </motion.div>

        {/* SILVER PLAY BUTTON */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 via-transparent to-gray-400/30 rounded-md blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative flex flex-col items-center text-center bg-white/80 backdrop-blur-lg border border-gray-200 rounded-md p-8 w-72 md:w-80 transition-all duration-500 ease-in-out">
            <div className="relative w-36 h-36 mb-6 overflow-hidden rounded-md">
              <Image
                src="/images/100.jpeg"
                alt="YouTube Silver Play Button"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/20 to-gray-400/30 opacity-0 group-hover:opacity-80 rounded-md transition duration-500"></div>
            </div>

            <p className="text-2xl font-bold text-gray-900 mb-2">
              100K Subscribers
            </p>

            <div className="px-4 py-1 rounded-full bg-gray-200 border border-gray-300 text-gray-800 font-semibold text-sm tracking-wide">
              Silver Milestone
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rolling Numbers Section */}
      <div className="flex flex-col md:flex-row justify-around items-center text-center gap-10">
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-10 bg-primary text-white rounded-md flex flex-col items-center w-64 shadow-lg"
        >
          <RollingNumber count="1M+" countname="Subscribers" />
        </motion.div>

        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-10 bg-primary text-white rounded-md flex flex-col items-center w-64 shadow-lg"
        >
          <RollingNumber count="50+" countname="Saloons" />
        </motion.div>

        <motion.div
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-10 bg-primary text-white rounded-md flex flex-col items-center w-64 shadow-lg"
        >
          <RollingNumber count="3000+" countname="Donors" />
        </motion.div>
      </div>
    </div>
  );
}

export default Impact;
