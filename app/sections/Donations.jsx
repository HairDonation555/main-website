import React from 'react';

function Donations() {
  return (
    <div id='donations' className='flex flex-col md:flex-row md:gap-24 md:mb-12 gap-8 items-center w-full h-full justify-center py-10 px-4 md:px-14'>
      <div className='flex flex-col gap-4 px-4 md:px-12 py-8 text-center  max-w-[90%] md:max-w-[500px]'>
        <h1 className='text-3xl md:text-5xl font-bold'>WIG DONATION</h1>
        <p className='text-lg md:text-3xl text-gray-500'>
          Wig donation is a generous way to support individuals experiencing hair loss due to medical conditions like cancer or alopecia.
        </p>
      </div>
      <img 
        src='/images/hr8.png' 
        className='w-full max-w-[90%] md:max-w-[700px] h-auto rounded-3xl object-cover' 
        alt='Wig Donation'
      />
    </div>
  );
}

export default Donations;
