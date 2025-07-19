"use client";

import React, { useEffect, useState } from 'react';
import Impact from './../components/Impact';

const shortsData = [
  { id: 1, videoId: 'oYt_AkV0Mz0' },
  { id: 2, videoId: 'vadEprPWEHI' },
  { id: 3, videoId: 'Oqy66jytiVA' },
  { id: 4, videoId: 'EvrLErqwlmY' },
  { id: 5, videoId: 't_QGbZGcJgQ' },
  { id: 6, videoId: '-QB02h031uM' },
  { id: 7, videoId: 'KMzBXBFUcss' },
  { id: 8, videoId: 'EbGll731G2U' },
  { id: 9, videoId: '1xMy8Ed_ks0' },
];

function Shorts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shortsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.ceil(shortsData.length / shortsPerPage));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentShorts = () => {
    const start = currentIndex * shortsPerPage;
    return shortsData.slice(start, start + shortsPerPage);
  };

  return (
    <div id='achievements' className='shorts-container py-12 px-6 bg-gray-50'>
      {/* Textual Impact Section */}
      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className="text-black text-4xl md:text-5xl text-center mb-4 font-extrabold">Our Impact</h2>
        <div className='w-20 border-b-4 border-primary mb-4'></div>
        <p className='text-gray-600 text-center mb-10 px-4 max-w-2xl'>
          These aren't just numbers — they represent restored smiles, self-confidence, and the incredible power of giving back.
        </p>
        <Impact />
      </div>

      {/* Shorts Display Section */}
      <div className='mt-16 flex flex-col items-center'>
        <h3 className='text-3xl font-bold text-primary mb-8'>Featured Stories</h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl'>
          {getCurrentShorts().map(short => (
            <div
              key={short.id}
              className='bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105'
            >
              <iframe
                className='w-full h-[400px] md:h-[500px]'
                src={`https://www.youtube.com/embed/${short.videoId}`}
                title={`YouTube Short ${short.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className='flex gap-3 mt-8'>
          {Array.from({ length: Math.ceil(shortsData.length / shortsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary scale-110' : 'bg-gray-300 hover:bg-primary/60'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shorts;
