import React from 'react';

function About() {
  return (
    <div className='flex flex-col md:flex-row md:gap-12 gap-6 items-center w-full h-full justify-center py-14 px-6 md:px-14'>
      <img 
        src='/images/about.png' 
        className='w-full md:w-[700px] h-auto md:h-[650px] object-cover' 
        alt='About Us'
      />
      <div className='flex flex-col gap-4 px-6 md:px-12 py-12 m-4 text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl font-bold'>ABOUT US</h1>
        <p className='text-xl md:text-3xl text-gray-500 w-full md:w-[500px]'>
          Our mission is to raise awareness about the importance of hair donation and make the process easy for everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
