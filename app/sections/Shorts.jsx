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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % Math.ceil(shortsData.length / 3));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getCurrentShorts = () => {
        const start = currentIndex * 3;
        return shortsData.slice(start, start + 3);
    };

    return (
        <div id='achievements' className='shorts-container'>
            <div className='flex flex-col items-center justify-center w-full'>
               <h2 className="text-black md:text-5xl text-center text-3xl mb-6 font-bold">Our Impact</h2>
               <p className='w-24 justify-center items-center border-2 border-primary mb-4'></p>
               <p className='text-gray-500 text-center'>These aren't just numbers, they all represent restored smiles and confidence!</p>
              <Impact />
            </div>

            <div className='marquee'>
                <div className='marquee-content gap-2 flex' style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                    {shortsData.map(short => (
                        <iframe
                            className='short-iframe md:w-[310px] md:h-[506px] w-[200px] h-[406px]'
                            key={short.id}
                            src={`https://www.youtube.com/embed/${short.videoId}`}
                            title={`YouTube Short ${short.id}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    ))}
                </div>
            </div>

            <div className='flex gap-2 mt-4'>
                {Array.from({ length: Math.ceil(shortsData.length / 3) }).map((_, index) => (
                    <div
                        key={index}
                        className={`dot-indicator ${currentIndex === index ? 'dot-active' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Shorts;