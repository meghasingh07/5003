import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "First-class investment solutions",
    description:
      "Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data.",
  },
  {
    title: "Building the idea of future",
    description:
      "Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data.",
  },
  {
    title: "Business consultation for startups",
    description:
      "Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data.",
  },
];

export default function MarketingTeamPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-10 font-sans">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F3E3D] leading-tight">
            leading the best <br /> marketing team.
          </h1>
          <p className="text-gray-500 max-w-md">
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly, achieve
            marketing.
          </p>
          <button className="bg-[#FFD129] text-[#0F3E3D] font-semibold px-8 py-4 w-fit rounded shadow hover:shadow-lg transition-all">
            learn more
          </button>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center justify-between px-6 py-4 rounded transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#0F3E3D] text-white"
                    : "text-[#0F3E3D] border-l-4 border-[#0F3E3D]"
                }`}
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                {index === activeIndex && <span className="text-xl">«</span>}
              </div>

              {index === activeIndex && (
                <AnimatePresence>
                  <motion.p
                    key="description"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[#6B7280] text-sm px-6"
                  >
                    {service.description}
                  </motion.p>
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
