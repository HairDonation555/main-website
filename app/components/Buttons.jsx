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
          className="primary text-2xl text-white px-4 py-2 border-2 border-white hover:drop-shadow-xl rounded-xl hover:cursor-pointer hover:font-bold"
        >
          {props.text}
        </button>
      </Anims>

      {/* MODAL OVERLAY */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center px-4 py-10">
          
          {/* Background blur */}
          <div className="absolute inset-0 backdrop-blur-md bg-black-30 bg-opacity-50 z-0" />

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
