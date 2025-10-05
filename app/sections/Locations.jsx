'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Volunteers from '../components/Volunteers';

function Process() {
  return (
    <div className="flex flex-col">
      <Volunteers />
      <div className='flex flex-col md:flex-row md:gap-12 md:mb-12 gap-6 items-center w-full h-full justify-center py-14 px-6 md:px-14'>

        <div className='flex flex-col gap-6 px-6 md:px-12 py-12 items-center  m-4 text-center'>
          <h1 className='text-4xl md:text-5xl w-[300px] md:w-[500px] font-bold'>
            Our <span className='text-primary'>Volunteers</span> are available across India!
          </h1>
          <p className='text-xl md:text-3xl text-gray-500  w-[300px] md:w-[500px]'>
            They offer you step by step guidance and assistance to provide you an easy experience.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src='/map.png'
            className='w-full md:w-[700px] h-auto md:h-[650px] object-contain'
            alt='About Us'
          />
        </motion.div>

      </div>
    </div>
  );
}

export default Process;
