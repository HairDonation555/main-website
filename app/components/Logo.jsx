"use client";

import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <a href="/" className="inline-block">
      <div className="flex items-center gap-2">
        {/* Logo Image Animation */}
        <motion.img
          src="/images/logo.png"
          alt="logo"
          className="rounded-full w-22 h-16 scale-175"
          initial={{ opacity: 0, y: -15, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        {/* Text Animation */}
        <motion.div
          className="flex text-left flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <h1 className="md:text-xl md:w-[200px] text-lg font-bold text-foreground">
            Hair Donation555
          </h1>
          <p className="font-lg text-primary">Gift your hair!</p>
        </motion.div>
      </div>
    </a>
  );
}

export default Logo;
