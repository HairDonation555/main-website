"use client";

import React, { useState } from "react";
import { FaPlantWilt, FaHandshakeSimple, FaScissors } from "react-icons/fa6";
import Anims from "./Anims";

const Volunteers = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(e.target);
    formData.append("formType", "volunteer");

    await fetch(
      "https://script.google.com/macros/s/AKfycbyB34cvcgdh0aHp3C1JPKj43RxSvt6agnQkMILlzHpCWEgwx43IiARn_5KV9L1nLOsw/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    setIsSending(false);
    setSuccessMessage("Volunteer application submitted successfully!");
    e.target.reset();
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Volunteer Opportunities
        </h2>
        <p className="text-gray-600 mt-2">
          Join our team of dedicated volunteers making a difference
        </p>

        {/* Volunteer Roles */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Anims inAnimation="fadeIn" outAnimation="fadeOut">
            <div className="bg-white shadow-lg rounded-lg p-6 text-left">
              <span className="text-primary text-3xl">
                <FaScissors />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Hair Sorting
              </h3>
              <p className="text-gray-600">
                Help sort and prepare donated hair bundles for wig production.
              </p>
              <p className="text-gray-500 mt-2">⏳ 4 hours/week commitment</p>
            </div>
          </Anims>

          <Anims inAnimation="fadeIn" outAnimation="fadeOut">
            <div className="bg-white shadow-lg rounded-lg p-6 text-left">
              <span className="text-primary text-3xl">
                <FaHandshakeSimple />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Outreach Ambassador
              </h3>
              <p className="text-gray-600">
                Represent us at community events and hair donation drives.
              </p>
              <p className="text-gray-500 mt-2">⏳ Flexible hours</p>
            </div>
          </Anims>

          <Anims inAnimation="fadeIn" outAnimation="fadeOut">
            <div className="bg-white shadow-lg rounded-lg p-6 text-left">
              <span className="text-primary text-3xl">
                <FaPlantWilt />
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                Wig Assembly
              </h3>
              <p className="text-gray-600">
                Trained volunteers help with wig construction (training provided).
              </p>
              <p className="text-gray-500 mt-2">⏳ 6 hours/week commitment</p>
            </div>
          </Anims>
        </div>

        {/* Volunteer Signup Form */}
        <Anims inAnimation="fadeIn" outAnimation="fadeOut">
          <div className="mt-12 bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              Become a Volunteer
            </h3>

            <form className="mt-6 space-y-4" onSubmit={handleVolunteerSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <select
                name="role"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select volunteer role</option>
                <option>Doorstep Haircut</option>
                <option>Outreach Ambassador</option>
                <option>Doorstep Pick-up</option>
              </select>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
              >
                {isSending ? "Sending..." : "Apply Now"}
              </button>

              {successMessage && (
                <p className="text-green-600 text-center font-medium mt-3">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </Anims>
      </div>
    </div>
  );
};

export default Volunteers;
