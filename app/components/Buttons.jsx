"use client";

import React, { useState } from 'react';
import Anims from './Anims';
import TouchPopup from './TouchPopup';

function Buttons(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative z-100">
      {/* BUTTON */}
      <Anims inAnimation="fadeIn" outAnimation="fadeOut">
        <button
          onClick={() => setShowModal(true)}
          className="group relative inline-flex hover:cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark hover:pointer focus:outline-none"
        >
          <span className="absolute inset-0 rounded-xl bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
          <span className="relative z-10">{props.text}</span>
        </button>
      </Anims>

      {/* MODAL OVERLAY */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center px-4 py-10">
          {/* Background blur */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/50 z-0" />
          {/* Modal content */}
          <div className="relative z-70">
            <TouchPopup onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Buttons;
