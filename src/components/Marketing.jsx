import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./case.css";
const services = [
  {
    title: "Engineering Smart Solutions for Pipe Production",
    description:
      "Our machines are designed to solve real-world manufacturing challenges — enabling precise, crack-free, and efficient pipe fitting production.",
  },
  {
    title: "Performance-Driven & Environment-Conscious Machinery",
    description:
      "We build high-performance machines with eco-friendly practices, helping pipe plants achieve quality and sustainability together.",
  },
  {
    title: "Eco-Friendly Method Of Manufacturing",
    description:
      "Our machines perform non-polluting methods, revolutionizing raw materials into pipe perfection.",
  },
];

export default function MarketingTeamPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white flex items-center justify-center py-12 px-4 md:px-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            Shaping the Future of Pipe Fitting Machinery
          </h1>
          <p className="text-gray-500 max-w-md text-sm md:text-base">
            We support pipe manufacturers in building smarter infrastructure
            with our advanced, reliable machines designed for seamless pipe
            fitting production.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="button-outline-blue"
          >
            Learn More
          </motion.button>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <div
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center justify-between px-6 py-3 rounded transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#004b93] text-white"
                    : "text-black border-l-4 border-[#004b93]"
                }`}
              >
                <h3 className="text-base md:text-lg font-semibold">
                  {service.title}
                </h3>
                {index === activeIndex && <span className="text-xl">«</span>}
              </div>

              <AnimatePresence>
                {index === activeIndex && (
                  <motion.p
                    key="description"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[#6B7280] text-sm px-6"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
