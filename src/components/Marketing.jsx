import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Engineering Brilliance For Pipe Plants.",
    description:
      "We engineer machines that solve day-to-day problems. Create pipes with no cracks, only seamless flow.",
  },
  {
    title: "Building Performance-First Machines.",
    description:
      "We aim to elevate your pipe production line with our machinery. Evolve pipe industry through our innovative technology.",
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
            Crafting The Future Of Pipe Manufacturing Machines.
          </h1>
          <p className="text-gray-500 max-w-md text-sm md:text-base">
            We help our customers in building smart infrastructure through our
            reliable and smart machines.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#004b93] text-white border-2 border-[#004b93] font-semibold px-6 py-3 w-fit rounded shadow transition-all duration-300 hover:bg-white hover:text-black"
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
                    : "text-[#0F3E3D] border-l-4 border-[#004b93]"
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
