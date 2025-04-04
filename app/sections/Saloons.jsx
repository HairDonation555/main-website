"use client";

import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const saloonsData = [
  { id: 1, name: "Glamour Cuts", location: "123 Beauty Ave, New York, NY", phone: "(212) 555-1234", timing: "Mon-Sat: 9AM-7PM", offer: "Free cut for donors", imageUrl: "/images/hr5.png" },
  { id: 2, name: "Shear Elegance", location: "456 Style St, Los Angeles, CA", phone: "(310) 555-5678", timing: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM", offer: "20% discount for donors", imageUrl: "/images/hr3.png" },
  { id: 3, name: "Tress Studio", location: "789 Hair Blvd, Chicago, IL", phone: "(312) 555-9012", timing: "Tue-Sat: 10AM-8PM", offer: "Free styling with donation", imageUrl: "/images/hr12.png" },
  { id: 4, name: "Salon D", location: "101 Main St, Miami, FL", phone: "(305) 555-7890", timing: "Mon-Fri: 10AM-6PM", offer: "Discounted hair treatments", imageUrl: "/images/hr5.png" },
  { id: 5, name: "Salon E", location: "202 Broadway, San Francisco, CA", phone: "(415) 555-4567", timing: "Wed-Sun: 11AM-7PM", offer: "Special offers for donors", imageUrl: "/images/hr3.png" },
  { id: 6, name: "Salon E", location: "202 Broadway, San Francisco, CA", phone: "(415) 555-4567", timing: "Wed-Sun: 11AM-7PM", offer: "Special offers for donors", imageUrl: "/images/hr3.png" },
  { id: 7, name: "Salon E", location: "202 Broadway, San Francisco, CA", phone: "(415) 555-4567", timing: "Wed-Sun: 11AM-7PM", offer: "Special offers for donors", imageUrl: "/images/hr3.png" },
  { id: 8, name: "Salon E", location: "202 Broadway, San Francisco, CA", phone: "(415) 555-4567", timing: "Wed-Sun: 11AM-7PM", offer: "Special offers for donors", imageUrl: "/images/hr3.png" },
  { id: 9, name: "Salon E", location: "202 Broadway, San Francisco, CA", phone: "(415) 555-4567", timing: "Wed-Sun: 11AM-7PM", offer: "Special offers for donors", imageUrl: "/images/hr3.png" },
];

const Saloons = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const totalSlides = Math.ceil(saloonsData.length / cardsPerSlide);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
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
    <div className="flex flex-col items-center p-6 bg-primary text-white w-full">
      <h2 className="text-4xl font-bold mt-12 mb-4">Partner Salons</h2>
      <p className='w-24 border-2 border-white mb-4'></p>
      <p className="text-lg text-gray-200 mt-2">Our certified salon partners provide professional hair cutting services for donors</p>

      <div className="flex justify-center gap-6 mt-6 md:p-12 w-full overflow-hidden">
        {currentCards.map((saloon) => (
          <div key={saloon.id} className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex items-center gap-3 mb-4">
              <img src={saloon.imageUrl} alt={saloon.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{saloon.name}</h3>
                <div className="flex items-center text-yellow-500">★★★★★</div>
              </div>
            </div>
            <div className="text-gray-600">
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> {saloon.location}</p>
              <p className="flex items-center gap-2"><FaPhone /> {saloon.phone}</p>
              <p className="flex items-center gap-2"><FaClock /> {saloon.timing}</p>
            </div>
            <div className="flex justify-between mt-4">
              <span className="bg-pink-200 text-pink-600 px-2 py-1 rounded text-sm">Certified</span>
              <span className="text-gray-800 text-sm">{saloon.offer}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center my-6">
        <button onClick={handlePrev} className="bg-white cursor-pointer text-black p-2 rounded-full hover:bg-gray-300"><FaArrowLeft /></button>
        <button onClick={handleNext} className="bg-white cursor-pointer text-black p-2 rounded-full hover:bg-gray-300"><FaArrowRight /></button>
      </div>

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