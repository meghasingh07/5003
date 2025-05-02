import React from "react";
import "./case.css";

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
    image: "/Pipe Packaging0.webp",
  },
  {
    title: "Special Purpose PVC Solution",
    image: "/Special Purpose PVC Solution0.webp",
  },
  {
    title: "Belling or Scoketing",
    image: "/Pipe Packaging0.webp",
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
        Get worry-free pipe producing solutions. Choose from our range of
        machinery to shape pipeline requirements.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {topCards.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bottomCards.map((card, index) => (
          <Card key={index + 4} card={card} index={index + 4} />
        ))}
      </div>

      <button
        type="button"
        className="mt-12 text-white bg-[#004b93] hover:bg-[#083c3c] font-semibold cursor-pointer hover:text-black transition duration-200 text-lg px-6 py-3 rounded"
      >
        See more products
      </button>
    </div>
  );
}

function Card({ card, index }) {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`
        group transition-all duration-300 rounded-xl p-6 h-60 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transform
        ${
          isEven ? "bg-[#004b93] hover:bg-white" : "bg-white hover:bg-[#004b93]"
        }
      `}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-auto h-30 object-contain mb-4 transition-transform duration-300 transform group-hover:scale-110"
      />
      <h3
        className={`
          text-base md:text-lg font-semibold transition-colors duration-300 px-2
          ${
            isEven
              ? "text-white group-hover:text-[#083c3c]"
              : "text-[#083c3c] group-hover:text-white"
          }
        `}
      >
        {card.title}
      </h3>
      <p
        className={`
          mt-2 transition duration-300 text-sm font-medium opacity-0 group-hover:opacity-100
          ${isEven ? "text-[#004b93]" : "text-white"}
        `}
      >
        Explore →
      </p>
    </div>
  );
}
