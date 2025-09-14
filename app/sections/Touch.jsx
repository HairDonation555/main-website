"use client";

import React, { useState } from "react";
import Feedback from "../components/Feedback";
// import Anims from "../components/Anims";

const ContactSection = () => {
  const [formType, setFormType] = useState("consent");
  const [successMessage, setSuccessMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false); // ✅ added state to track sending

  const toggleForm = () => {
    setFormType((prev) => (prev === "consent" ? "contact" : "consent"));
    setSuccessMessage("");
    setSendingMessage(false);
  };

  const handleConsentSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setSendingMessage(true); // ✅ show "sending..." state

    const beforeFile = form.beforeImage.files[0];
    const afterFile = form.afterImage.files[0];

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
      });

    const beforeBase64 = await toBase64(beforeFile);
    const afterBase64 = await toBase64(afterFile);

    formData.append('beforeImage', beforeBase64);
    formData.append('afterImage', afterBase64);
    formData.append('formType', 'consent');

    await fetch("https://script.google.com/macros/s/AKfycbyB34cvcgdh0aHp3C1JPKj43RxSvt6agnQkMILlzHpCWEgwx43IiARn_5KV9L1nLOsw/exec", {
      method: "POST",
      body: formData,
    });

    setSendingMessage(false);
    setSuccessMessage("Consent form submitted successfully!");
    form.reset();
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setSendingMessage(true); // ✅ show "sending..." state

    formData.append("formType", "contact");

    await fetch("https://script.google.com/macros/s/AKfycbyB34cvcgdh0aHp3C1JPKj43RxSvt6agnQkMILlzHpCWEgwx43IiARn_5KV9L1nLOsw/exec", {
      method: "POST",
      body: formData,
    });

    setSendingMessage(false);
    setSuccessMessage("Message sent successfully!");
    form.reset();
  };

  return (
    <div id="contactus" className="bg-primary py-12 items-center justify-center md:px-12 lg:px-24">
      <div className="w-full items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Get In Touch</h2>
       
        <p className="text-center text-white mt-2">
          Have questions? We're here to help with your hair donation journey.
        </p>

          <p className="text-center text-white mt-2">
          Contact us now, if you're a cancer patient to get a <p className="text-white font-bold"> Free Wig! </p>
        </p>

        <div className="text-center mt-6">
          <button
            onClick={toggleForm}
            className="bg-white text-primary font-semibold px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-200"
          >
            {formType === "consent" ? "Get Contact Form" : "Get Consent Form"}
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center p-2 justify-center gap-8">
          {formType === "consent" ? (
            // <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.2}>
              <div className="bg-white  w-full max-w-6xl rounded-lg mb-8 p-8">
                <h3 className="text-xl md:text-3xl font-semibold text-center text-primary mb-6">Hair Donation Consent Form</h3>
                <form className="space-y-6" onSubmit={handleConsentSubmit}>
                  {/* form fields unchanged */}
                  
                  <input name="formType" type="hidden" value="consent" />
                  <input name="timestamp" type="hidden" value={new Date().toISOString()} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-700 block mb-1">Name of the Donor</label>
                      <input name="name" type="text" placeholder="Enter full name" className="input" required />
                    </div>
                    <div>
                      <label className="text-gray-700 block mb-1">Age</label>
                      <input name="age" type="number" placeholder="Enter age" className="input" required />
                    </div>
                    <div>
                      <label className="text-gray-700 block mb-1">Gender</label>
                      <select name="gender" className="input" required>
                        <option value="">-- Select --</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-700 block mb-1">Guardian's Name (if minor)</label>
                      <input name="guardianName" type="text" placeholder="Guardian's name" className="input" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-gray-700 block mb-1">Address</label>
                      <textarea name="address" rows={2} placeholder="Enter address" className="input w-full" required />
                    </div>
                    <div>
                      <label className="text-gray-700 block mb-1">Date of Haircut</label>
                      <input name="haircutDate" type="date" className="input" required />
                    </div>
                    <div>
                      <label className="text-gray-700 block mb-1">Date of Courier</label>
                      <input name="courierDate" type="date" className="input" required />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-gray-700 block mb-1">Have you donated hair before?</label>
                      <div className="flex gap-6 mt-1">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="donatedBefore" value="Yes" required /> Yes
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="donatedBefore" value="No" /> No
                        </label>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="text-gray-700 block mb-1">If Yes, where?</label>
                      <input name="donatedWhere" type="text" placeholder="Mention organization/place" className="input w-full" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-gray-700 block mb-1">Upload Before Image</label>
                      <input type="file" name="beforeImage" accept="image/*" className="input w-full" required />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-gray-700 block mb-1">Upload After Image</label>
                      <input type="file" name="afterImage" accept="image/*" className="input w-full" required />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-gray-700 block mb-1">Feedback</label>
                      <textarea name="feedback" rows={3} placeholder="Your experience or comments" className="input w-full" />
                    </div>
                  </div>
                  {/* Final Section */}
                  <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition hover:cursor-pointer duration-200 mt-4">
                    Submit Consent Form
                  </button>

                  {sendingMessage && (
                    <p className="text-yellow-600 text-center font-medium mt-3">Sending your consent form...</p>
                  )}
                  {successMessage && (
                    <p className="text-green-600 text-center font-medium mt-3">{successMessage}</p>
                  )}
                </form>
              </div>
            // </Anims>
          ) : (
            // <Anims inAnimation="fadeIn" outAnimation="fadeOut" delay={0.2}>
              <div className="bg-white md:w-[500px] w-[300px] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  {/* form fields unchanged */}

                  <input name="formType" type="hidden" value="contact" />
                  <input name="timestamp" type="hidden" value={new Date().toISOString()} />

                  <div>
                    <label className="text-gray-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 block mb-1">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200">
                    Send Message
                  </button>

                  {sendingMessage && (
                    <p className="text-yellow-600 text-center font-medium mt-3">Sending your message...</p>
                  )}
                  {successMessage && (
                    <p className="text-green-600 text-center font-medium mt-3">{successMessage}</p>
                  )}
                </form>
              </div>

              
            // </Anims>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
