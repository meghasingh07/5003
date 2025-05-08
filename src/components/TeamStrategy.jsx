import React from "react";

const teamData = [
  {
    id: 1,
    image: "/planing1.webp",
    label: " Planning",
    layout: "md:row-span-2 md:col-span-2",
  },
  {
    id: 2,
    image: "/workflow.webp",
    label: " Workforce",
  },
  {
    id: 3,
    image: "/training.webp",
    label: "Training",
  },
  {
    id: 4,
    image: "/pipe.jpg",
    label: "Automation",
    layout: "md:col-span-3",
  },
];

const TeamStrategy = () => {
  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black ">Qualified Team</h2>
        <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
          As a leading company, we aim to go beyond the norm by combining
          experience, collaboration, and a results-driven mindset.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamData.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg shadow-lg group ${
              item.layout || ""
            } ${item.id === 1 ? "h-60 md:h-125" : "h-48 md:h-60"}`}
          >
            <img
              src={item.image}
              alt={item.label}
              className={`w-full h-full transform transition duration-500 group-hover:scale-105 object-cover ${
                item.id === 1 ? "object-top" : item.id === 4 ? "object-center" : "object-top"
              }`}
              
              
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <h3 className="text-white text-2xl font-bold">{item.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamStrategy;
