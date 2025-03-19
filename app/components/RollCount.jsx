import React, { useState, useEffect } from 'react';

const RollingNumber = () => {
  const [count, setCount] = useState(0);
  const target = 1000000; // 1 Million
  const duration = 3000; // 3 seconds
  const frameRate = 1000 / 60; // 60 FPS

  useEffect(() => {
    let startTime;
    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount("1M+"); // Final display
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  return (
    <h2 className="text-center text-2xl text-white md:ml-28 font-bold px-4">
      {typeof count === "number" ? count.toLocaleString() : count} Donors
    </h2>
  );
};

export default RollingNumber;
