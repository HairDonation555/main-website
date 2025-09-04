"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppBubble = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip (only shows if not clicked) */}
      {!clicked && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-md"
        >
          Reach us
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setClicked(true)}
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -6, 0] }} // bounce effect
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg"
      >
        <FaWhatsapp className="text-3xl" />
      </motion.a>
    </div>
  );
};

export default WhatsAppBubble;
