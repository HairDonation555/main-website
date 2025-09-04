"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppBubble = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip (shows until clicked) */}
      {!clicked && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/50 text-green-800 outline-2 outline-green-800 text-sm px-3 py-2 rounded-lg shadow-lg"
        >
          Reach us!
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setClicked(true)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }} // bounce
        transition={{ repeat: Infinity, duration: 2 }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl
                   bg-gradient-to-br from-green-400 to-green-600 text-white"
      >
        {/* Glowing Pulse */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

        {/* Icon */}
        <FaWhatsapp className="text-3xl relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppBubble;
