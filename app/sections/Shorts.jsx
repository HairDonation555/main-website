"use client";
import React, { useEffect, useState } from 'react';
import RollingNumber from '../components/RollCount';

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
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const getCurrentShorts = () => {
        const start = currentIndex * 3;
        return shortsData.slice(start, start + 3);
    };

    return (
        <div className='shorts-container'>
            <div className='shorts-header bg-primary'>
              <div className='flex md:flex-row flex-col items-center justify-between md:ml-12 gap-2'>
               <RollingNumber />
                <h2 className='text-center text-2xl text-white md:ml-[430px] font-bold px-4'>Wig Donations</h2>
                <h2 className='text-center text-2xl text-white md:w-[250px] md:ml-[380px] font-bold px-4'>Hair Donation Events</h2>
            </div>
            </div>

            <div className='marquee'>
                <div className='marquee-content' style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                    {shortsData.map(short => (
                        <iframe
                            className='short-iframe md:w-[310px] md:h-[506px] w-[110px] h-[306px]'
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