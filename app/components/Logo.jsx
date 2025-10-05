"use client";

import React from "react";

function Logo() {
  return (
    <a href="/" className="inline-block">
      <div className="flex items-center gap-2">
        {/* Logo Image Animation */}
        <img
          src="/images/logo.png"
          alt="logo"
          className="rounded-full w-22 h-16 scale-175 animate-fade-in"
        />

        {/* Text Animation */}
        <div className="flex text-left flex-col animate-fade-in delay-200">
          <h1 className="md:text-xl md:w-[200px] text-lg font-bold text-foreground">
            Hair Donation555
          </h1>
          <p className="font-lg text-primary">Gift your hair!</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(0);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </a>
  );
}

export default Logo;