import React from 'react';
import Buttons from '../components/Buttons';
import { FaCheck } from "react-icons/fa6";
import Steps from '../components/Steps';

function Process() {
  return (
    <div id="donations" className="relative w-full  min-h-screen flex flex-col md:flex-row items-center">
      {/* Skewed Background for Text Section */}


      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col  md:flex-row w-full  mx-auto items-center justify-around px-6 md:px-12 py-12 gap-24">
        
        {/* Text Section */}
      <div className="md:w-1/2 flex flex-col gap-12 w-full mt-6 md:mt-0 md:pl-10">

        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-black md:text-5xl text-right text-3xl mb-4 font-bold">Our Process</h2>
          <p className='w-24 border-2 border-primary mb-0'></p>
        </div>
        <div className="mt-0">
          <ul className="mt-0 flex flex-col items-center space-y-4">
             <Steps num='1' step="Wash your hair thoroughly." />
             <Steps num='2' step="secure your hair with a rubber band." />
             <Steps num='3' step="Secure the middle with another rubber band." />
             <Steps num='4' step="Ensure the hair length is atleast 12 inches." />
             <Steps num='5' step="Cut above the top rubber band." />
             <Steps num='6' step="wrap the hair in a paper and store in a ziplock bag." />
          </ul>
        </div>
      </div>

        {/* Image Section (Responsive - Below Text on Mobile) */}
        <img 
        src='/images/poster.png' 
        className='w-full md:w-[400px] md:mr-[250px] md:scale-120 border-2 shadow-lg h-auto md:h-[580px] object-contain' 
        alt='About Us'
      />
      </div>
    </div>
  );
}

export default Process;
