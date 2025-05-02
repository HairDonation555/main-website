"use client";

import React, { useState } from "react";
import Anims from "../components/Anims";

const ContactSection = () => {
  const [formType, setFormType] = useState("consent"); // Default is "consent"

  const toggleForm = () => {
    setFormType((prev) => (prev === "consent" ? "contact" : "consent"));
  };

  return (
    <div className="bg-primary py-12 items-center justify-center md:px-12 lg:px-24">
      <div className="w-full items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Get In Touch
        </h2>
        <p className="text-center text-white mt-2">
          Have questions? We're here to help with your hair donation journey.
        </p>

        {/* Toggle Button */}
        <div className="text-center mt-6">
          <button
            onClick={toggleForm}
            className="bg-white text-primary font-semibold px-6 py-2 rounded-md shadow-md hover:bg-opacity-90 transition duration-200"
          >
            {formType === "consent" ? "Get Contact Form" : "Get Consent Form"}
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center p-2 justify-center gap-8">
          {/* Conditionally Render Consent or Contact Form */}

          {formType === "consent" ? (
            <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.2}>
              <div className="bg-white shadow-lg md:w-[500px] w-[300px] rounded-lg mb-8 p-6">
                <h3 className="text-xl md:text-3xl font-semibold text-center text-primary mb-4">
                  Hair Donation Consent Form
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-gray-700 block mb-1">Name of the Donor</label>
                    <input type="text" placeholder="Enter full name" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Age</label>
                    <input type="number" placeholder="Enter age" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Gender</label>
                    <select className="input">
                      <option>-- Select --</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Address</label>
                    <textarea rows={2} placeholder="Enter address" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Date of Haircut</label>
                    <input type="date" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Date of Courier</label>
                    <input type="date" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Guardian's Name (if minor)</label>
                    <input type="text" placeholder="Guardian's name" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Before Haircut Picture</label>
                    <input type="file" accept="image/*" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">After Haircut Picture</label>
                    <input type="file" accept="image/*" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Have you donated hair before?</label>
                    <div className="flex gap-4 mt-1">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="donatedBefore" value="yes" /> Yes
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="donatedBefore" value="no" /> No
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">If Yes, where?</label>
                    <input type="text" placeholder="Mention organization/place" className="input" />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Feedback</label>
                    <textarea rows={3} placeholder="Your experience or comments" className="input" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
                  >
                    Submit Consent Form
                  </button>
                </form>
              </div>
            </Anims>
          ) : (
            <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.2}>
              <div className="bg-white shadow-lg md:w-[500px] w-[300px] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-gray-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Message</label>
                    <textarea
                      rows="4"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Anims>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
