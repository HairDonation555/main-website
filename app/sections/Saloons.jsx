"use client";

import React, { useState, useEffect } from "react";

// Sample data for the saloons
const saloonsData = [
  { id: 1, name: "Saloon A", details: "Best hair treatments and styling.", imageUrl: "/images/hr5.png" },
  { id: 2, name: "Saloon B", details: "Expert hair stylists at your service.", imageUrl: "/images/hr3.png" },
  { id: 3, name: "Saloon C", details: "Relaxing ambience with the best services.", imageUrl: "/images/hr12.png" },
  { id: 4, name: "Saloon D", details: "Best quality products used.", imageUrl: "/images/hr5.png" },
  { id: 5, name: "Saloon E", details: "Stylish cuts and colors.", imageUrl: "/images/hr3.png" },
  { id: 6, name: "Saloon F", details: "Pampering services available.", imageUrl: "/images/hr12.png" },
  { id: 7, name: "Saloon G", details: "Expert nail care.", imageUrl: "/images/hr5.png" },
  { id: 8, name: "Saloon H", details: "Specialized in spa services.", imageUrl: "/images/hr3.png" },
  { id: 9, name: "Saloon I", details: "Professional makeup artists.", imageUrl: "/images/hr12.png" },
];

const Saloons = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const totalSlides = Math.ceil(saloonsData.length / cardsPerSlide);

  // Handle responsiveness
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); // 1 card for small screens
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); // 2 cards for tablets
      } else {
        setCardsPerSlide(3); // 3 cards for desktops
      }
    };

    updateCardsPerSlide(); // Initial check
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Slide changes every 4 seconds
    return () => clearInterval(interval);
  }, [currentSlide, cardsPerSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentCards = saloonsData.slice(currentSlide * cardsPerSlide, (currentSlide + 1) * cardsPerSlide);

  return (
    <div className="flex flex-col items-center p-5 bg-[#006c7c] text-white w-full">
      <h2 className="text-4xl font-bold mt-12">Our Saloons</h2>

      {/* Cards Container */}
      <div className="flex justify-center gap-6 mt-6 md:p-12 w-full overflow-hidden">
        {currentCards.map((saloon) => (
          <div
            key={saloon.id}
            className="bg-white p-4 rounded-lg w-72 shadow-lg transform transition duration-300 hover:scale-105 sm:hover:scale-100"
          >
            <img src={saloon.imageUrl} alt={saloon.name} className="w-full h-[400px] rounded-t-lg rounded-br-[80px]" />
            <div className="p-4 text-center">
              <h3 className="text-2xl text-primary font-bold">{saloon.name}</h3>
              <p className="text-gray-600 text-lg">{saloon.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center my-6">
        <button onClick={handlePrev} className="bg-white text-black p-2 rounded-full hover:bg-gray-300">Prev</button>
        <button onClick={handleNext} className="bg-white text-black p-2 rounded-full hover:bg-gray-300">Next</button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Saloons;
