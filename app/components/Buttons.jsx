"use client";

import React, { useState } from "react";
import TouchPopup from "./TouchPopup";

function Buttons(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative z-100">
      {/* BUTTON */}
      <button
        onClick={() => setShowModal(true)}
        className="group relative inline-flex hover:cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark hover:pointer focus:outline-none shadow-[0_4px_12px_rgba(0,108,124,0.3)] animate-fade-in active:scale-95"
      >
        <span className="absolute inset-0 rounded-xl bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
        <span className="relative z-10">{props.text}</span>
      </button>

      {/* MODAL OVERLAY */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center px-4 py-10 animate-fade-in">
          {/* Background blur */}
          <div
            className="absolute inset-0 backdrop-blur-md bg-black/50 z-0 animate-fade-in"
            onClick={() => setShowModal(false)}
          />

          {/* Modal content */}
          <div className="relative z-70 animate-scale-in">
            <TouchPopup onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Buttons;