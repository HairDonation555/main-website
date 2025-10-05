"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TouchPopup from "./TouchPopup";

function Buttons(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative z-100">
      {/* BUTTON */}
      <motion.button
        onClick={() => setShowModal(true)}
        className="group relative inline-flex hover:cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark hover:pointer focus:outline-none shadow-[0_4px_12px_rgba(0,108,124,0.3)]"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      >
        <span className="absolute inset-0 rounded-xl bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
        <span className="relative z-10">{props.text}</span>
      </motion.button>

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-start justify-center px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* Background blur */}
            <motion.div
              className="absolute inset-0 backdrop-blur-md bg-black/50 z-0"
              onClick={() => setShowModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              className="relative z-70"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }}
            >
              <TouchPopup onClose={() => setShowModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Buttons;
