// components/TouchPopup.jsx
import React from 'react';

const TouchPopup = ({ onClose }) => {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-6 animate-slideDown border border-gray-200"
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-gray-900 text-2xl font-bold transition"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-2 text-primary">
        Donate for a Cause
      </h1>
      <p className="text-xl text-center mb-6 text-gray-600">
        Please fill the below form & we'll reach you out shortly.
      </p>
      {/* Contact Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg text-primary h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-primary cursor-pointer text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.01] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default TouchPopup;
