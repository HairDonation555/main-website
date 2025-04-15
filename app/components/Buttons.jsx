"use client"
import React, { useState } from 'react';
import Anims from './Anims';
import TouchPopup from './TouchPopup';

function Buttons(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative z-10">
      {/* BUTTON */}
      <Anims inAnimation="fadeIn" outAnimation="fadeOut">
        <button
          onClick={() => setShowModal(true)}
          className="primary text-2xl text-white px-4 py-2 border-2 border-white hover:drop-shadow-xl rounded-xl hover:cursor-pointer hover:font-bold"
        >
          {props.text}
        </button>
      </Anims>

      {/* FULLSCREEN MODAL OVERLAY */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-10 bg-black-40 bg-opacity-50 backdrop-blur-md transition duration-300">
          <TouchPopup onClose={() => setShowModal(false)} />
        </div>
      )}
    </div>
  );
}

export default Buttons;
