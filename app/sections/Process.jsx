import React from 'react';
import Buttons from '../components/Buttons';

function Process() {
  return (
    <div className='flex flex-col md:flex-row md:gap-12 md:mb-12 gap-6 items-center w-full h-full justify-center py-14 px-6 md:px-14'>

      <div className='flex flex-col gap-6 px-6 md:px-12 py-12 items-center m-4 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold'>Process of Hair donation:</h1>
        <p className='text-xl md:text-2xl text-gray-500 w-full md:w-[650px]'>
        The entire process of the hair donation is provided in the poster beside please kindly go through it for further information. 
        </p>
        <Buttons text="Download" btnlink="/" />
      </div>
      <img 
        src='/images/poster.png' 
        className='w-full md:w-[400px] md:mr-[250px] md:scale-120 border-2 h-auto md:h-[580px] object-contain' 
        alt='About Us'
      />
    </div>
  );
}

export default Process;
