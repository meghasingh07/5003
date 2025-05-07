import React from "react";
import "./case.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "PVC Pipe Bending",
    image: "/PVC Pipe Bending1.webp",
    slug: "pvc-pipe-bending",
  },
  {
    title: "Haul Off",
    image: "/HAUL OFF1.webp",
    slug: "haul-off",
  },
  {
    title: "Pipe Packaging",
    image: "/Pipe Packaging0.webp",
    slug: "pipe-packaging",
  },
  {
    title: "Special Purpose PVC Solution",
    image: "/Special Purpose PVC Solution0.webp",
    slug: "special-purpose-pvc-solution",
  },
  {
    title: "Belling or Scoketing",
    image: "/logoo.webp",
    slug: "belling-or-socketing",
  },
  {
    title: "Cutter Series",
    image: "/CUTTER SERIES1.webp",
    slug: "cutter-series",
  },
  {
    title: "Pipe Repair Coupler",
    image: "/Pipe Repair Coupler1.webp",
    slug: "pipe-repair-coupler",
  },
];

export default function CaseStudies() {
  const navigate = useNavigate();
  const topCards = cardData.slice(0, 4);
  const bottomCards = cardData.slice(4);

  return (
    <div className="text-center py-5 bg-white px-4 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-black mb-4">Our Products</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Get worry-free pipe producing solutions. Choose from our range of
        machinery to shape pipeline requirements.
      </p>

      {/* Top Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {topCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

     
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bottomCards.map((card, index) => (
          <Card key={index + 4} card={card} />
        ))}
      </div>

   
      <button
  type="button"
  onClick={() => navigate("/products")}
  className="mt-12 mb-10 bg-[#004b93] text-white border-2 border-[#004b93] font-semibold text-lg px-6 py-3 rounded 
             transition-all duration-500 ease-in-out transform 
             hover:bg-white hover:text-[#004b93] hover:scale-105 hover:-translate-y-1 
             active:scale-95"
>
  See more products
</button>




    </div>
  );
}

function Card({ card }) {
  return (
    <Link to={`/products/${card.slug}`}>
      <div
        className="group transition-all duration-500 border-2 border-[#004b93] rounded-xl p-6 h-60 flex flex-col items-center justify-center text-center cursor-pointer 
        bg-white hover:bg-[#004b93] transform hover:-translate-y-1 shadow-md hover:shadow-xl"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-auto h-24 object-contain mb-4 transition-transform duration-300 transform group-hover:scale-110"
        />
        <h3 className="text-base md:text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">
          {card.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-black group-hover:text-white transition-colors duration-300">
          Explore →
        </p>
      </div>
    </Link>
  );
}
