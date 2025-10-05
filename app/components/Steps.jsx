import React from "react";
import { motion } from "framer-motion";

function Steps(props) {
  return (
    <div className="relative flex flex-col items-start justify-start w-full mb-10 pl-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {/* Step Number + Title */}
        <div className="flex items-center gap-4 mb-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
            {props.num}
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {props.title}
          </h2>
        </div>

        {/* Description row with vertical line beside the text */}
        <div className="flex flex-row items-start gap-4 ml-4">
          {/* Vertical Line beside description text */}
          <div className="w-[4px] h-12 border-2 border-primary mt-1 rounded" />

          {/* Step text */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md">
            {props.step}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Steps;
