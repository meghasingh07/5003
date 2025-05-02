import React from "react";
import './case.css';

const cardData = [
  {
    title: "PVC Pipe Bending",
    image: "/PVC Pipe Bending1.webp",
  },
  {
    title: "Haul Off",
    image: "/HAUL OFF1.webp",
  },
  {
    title: "Pipe Packaging",
    image: "/Pipe Packaging1.webp",
  },
  {
    title: "Special Purpose PVC Solution",
    image: "/Special Purpose PVC Solution1.webp",
  },
  {
    title: "Belling or Scoketing",
    image: "/Pipe Packaging1.webp",
  },
  {
    title: "Cutter Series",
    image: "/CUTTER SERIES1.webp",
  },
  {
    title: "Pipe Repair Coupler",
    image: "/Pipe Repair Coupler1.webp",
  },
];

export default function CaseStudies() {
  const topCards = cardData.slice(0, 4);
  const bottomCards = cardData.slice(4);

  return (
    <div className="text-center py-20 bg-white px-4 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-[#083c3c] mb-4">Our Products</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Get Worry-Free Pipe Solutions.<br />
        Choose from our range of products to shape tomorrow’s pipeline in your building today.
      </p>

      {/* Top row with 4 cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {topCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      {/* Bottom row with 3 cards, centered */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bottomCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      <p className="mt-12 text-[#083c3c] font-semibold cursor-pointer hover:underline hover:text-yellow-500 transition duration-200 text-lg">
        See more products
      </p>
    </div>
  );
}

function Card({ card }) {
  return (
    <div
      className="group bg-gray-100 hover:bg-[#083c3c] transition-all duration-300 rounded-xl p-6 h-60 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transform"
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-auto h-30 object-contain mb-4 transition-transform duration-300 transform group-hover:scale-110"
      />
      <h3 className="text-base md:text-lg font-semibold text-[#083c3c] group-hover:text-white transition-colors duration-300 px-2">
        {card.title}
      </h3>
      <p className="text-white opacity-0 group-hover:opacity-100 mt-2 transition duration-300 text-sm font-medium hover:text-yellow-400 cursor-pointer  learn-more-text">
        Explore →
      </p>
    </div>
  );
}
