import React from "react";
import './case.css';
const cardData = [
  {
    title: "grow your brand and business",
    image: "/cross.svg",
  },
  {
    title: "business plan consulting",
    image: "/person.svg",
  },
  {
    title: "increase your conversion rate",
    image: "/plus.svg",
  },
  {
    title: "business startup analysis",
    image: "/tick.svg",
  },
];

export default function CaseStudies() {
  return (
    <div className="text-center py-20 bg-white px-4 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-[#083c3c] mb-4">case studies</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Hub IT allows your business and technology computers to store, transmit,
        analyze, and manipulate big data.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group bg-gray-100 hover:bg-[#083c3c] transition-all duration-300 rounded-xl p-6 h-60 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transform"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-16 h-16 object-contain mb-4 transition-transform duration-300 transform group-hover:scale-110"
            />
            <h3 className="text-base md:text-lg font-semibold text-[#083c3c] group-hover:text-white transition-colors duration-300 px-2">
              {card.title}
            </h3>
            <p className="text-white opacity-0 group-hover:opacity-100 mt-2 transition duration-300 text-sm font-medium hover:text-yellow-400 cursor-pointer  learn-more-text">
              Learn more ↑
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-[#083c3c] font-semibold cursor-pointer hover:underline hover:text-yellow-500 transition duration-200 text-lg">
        See more services
      </p>
    </div>
  );
}
