import React from 'react';
import Buttons from '../components/Buttons';
import { FaCheck } from "react-icons/fa6";

const steps = [
  { num: '1', title: 'Hairwash', step: 'Wash your hair thoroughly.', img: '/images/step-1.jpg' },
  { num: '2', title: 'Secure Hair', step: 'Secure your hair with a rubber band.', img: '/images/step-2.jpg' },
  { num: '3', title: 'Secure Again', step: 'Secure the middle with another rubber band.', img: '/images/step-2.jpg' },
  { num: '4', title: 'Min Hair Length', step: 'Ensure the hair length is at least 12 inches.', img: '/images/step-4.webp' },
  { num: '5', title: 'Cut your Hair', step: 'Cut above the top rubber band.', img: '/images/step-5.jpg' },
  { num: '6', title: 'Store your Hair', step: 'Wrap the hair in a paper and store in a ziplock bag.', img: '/images/step-6.jpg' },
];

function Process() {
  return (
    <div id="donations" className="relative w-full py-12 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-black">Our Process</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
          >
            {/* Step Image */}
            <img
              src={step.img}
              alt={step.title}
              className="w-full md:w-[300px] h-auto object-contain rounded-xl shadow-md"
            />

            {/* Step Text */}
            <div className="flex flex-col items-start text-left">
              <div className="text-sm bg-primary text-white rounded-full px-3 py-1 mb-2">
                Step {step.num}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.step}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
      <button
              
                className="group relative inline-flex hover:cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-dark hover:pointer focus:outline-none"
              >
                <a   href='https://drive.google.com/file/d/1x6KyTJZNue3x-DPkF29fKsmswkyUHNp0/view?usp=sharing'
                target= "_blank">
                <span className="absolute inset-0 rounded-xl bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
                <span className="relative z-10">Get Poster</span>
                </a>
              </button>

      </div>
    </div>
  );
}

export default Process;
