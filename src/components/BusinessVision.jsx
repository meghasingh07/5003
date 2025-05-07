import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const visionContent = [
  {
    title: "INNOVATE",
    description: [
      "Always have a desire to solve simple day to day problems.",
      "To challenge the status quo with creativity & can-do attitude.",
      "To commit in creating new products which add & create value.",
    ],
  },
  {
    title: "IMPLEMENT",
    description: [
      "To strive towards a harmony between Innovation & Resource Management.",
      "To be careful in planning and organizing.",
      "To ensure a seamless transition to achieve the full potential of the product.",
    ],
  },
  {
    title: "INTEGRATE",
    description: [
      "To ensure that new ideas can be easily translated into sustainable solutions.",
      "To create adaptable & adjustable products.",
      "To provide a hassle-free transition in legacy and new systems.",
    ],
  },
];

const cardItems = [
  {
    icon: "/cross.svg",
    title: "Diversity and Inclusion",
    subtitle: "International Partners",
  },
  {
    icon: "/person.svg",
    title: "Diversity and Inclusion",
    subtitle: "International Partners",
  },
  {
    icon: "/plus.svg",
    title: "Diversity and Inclusion",
    subtitle: "International Partners",
  },
  {
    icon: "/tick.svg",
    title: "Diversity and Inclusion",
    subtitle: "International Partners",
  },
];

const BusinessVision = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 px-4 md:px-12 py-12">
     <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-start">

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Inspiration, innovation, and opportunities.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Take advantage of the experiential-learning opportunities built into
            many programs. You can work in labs on and off.
          </p>

          <div className="space-y-4">
            {visionContent.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded shadow overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleSection(idx)}
                    className={`w-full flex justify-between items-center px-6 py-4 text-left text-white text-xl font-semibold 
                      ${isOpen ? "bg-[#004b93]" : "bg-[#0b77db]"} transition-colors duration-300`}
                  >
                    {item.title}
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 text-gray-700 bg-white ${
                      isOpen
                        ? "max-h-[500px] py-4 opacity-100"
                        : "max-h-0 opacity-0 py-0"
                    } overflow-hidden`}
                  >
                    <ul className="list-disc list-inside space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl h-[500px]">
          <img
            src="/work.jpg"
            alt="Teamwork"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          {cardItems.map((item, index) => (
            <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg text-center"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          
          

              <div className="absolute inset-x-0 bottom-0.5 flex justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessVision;
