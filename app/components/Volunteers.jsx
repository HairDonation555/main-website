"use client";

import React from "react";
import { FaPlantWilt } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import Anims from './Anims'

const Volunteers = () => {
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
          {/* Hair Sorting */}
          <Anims inAnimation='slideInUp' outAnimation='slideOutDown'>
       
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <span className="text-primary text-3xl"><FaScissors /></span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              Hair Sorting
            </h3>
            <p className="text-gray-600">
              Help sort and prepare donated hair bundles for wig production.
            </p>
            <p className="text-gray-500 mt-2">⏳ 4 hours/week commitment</p>
          </div>
          </Anims>  
          <Anims inAnimation='slideInUp' outAnimation='slideOutDown'>
       
          {/* Outreach Ambassador */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <span className="text-primary text-3xl"><FaHandshakeSimple /></span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              Outreach Ambassador
            </h3>
            <p className="text-gray-600">
              Represent us at community events and hair donation drives.
            </p>
            <p className="text-gray-500 mt-2">⏳ Flexible hours</p>
          </div>
          </Anims>  

          <Anims inAnimation='slideInUp' outAnimation='slideOutDown'>
       
          {/* Wig Assembly */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <span className="text-primary text-3xl"><FaPlantWilt /></span>
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
        <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">
            Become a Volunteer
          </h3>

          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Select volunteer role</option>
              <option>Hair Sorting</option>
              <option>Outreach Ambassador</option>
              <option>Wig Assembly</option>
            </select>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200"
            >
              Apply Now
            </button>
          </form>
        </div>
        </Anims>  
      </div>
    </div>
  );
};

export default Volunteers;
