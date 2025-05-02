import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 1,
    label: "finance",
    title: "banking and business partnership",
    image: "/flip-1.jpg",
    backType: "button",
  },
  {
    id: 2,
    label: "analytics",
    title: "big data integration for startups",
    image: "/flip-2.jpg",
    backType: "text",
    backText:
      "As a partner of corporates, Liquid has more than 9,000 partners of all sizes and all potential of session.",
  },
  {
    id: 3,
    label: "consulting",
    title: "analyzing company reports",
    image: "/flip-3.jpg",
    backType: "button",
  },
];

export default function FlipCardsSection() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0F3E3D] mb-2">global experts</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Hub IT allows your business and technology computers to store,
          transmit, analyze, and manipulate big data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ perspective: 1000 }}
          >
            <div
              className={`relative w-full h-[400px] transition-transform duration-700`}
              style={{
                transformStyle: "preserve-3d",
                transform:
                  hovered === index ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
             
              <div
                className="absolute w-full h-full rounded-xl overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col justify-end h-full p-6 space-y-4 bg-black/30">
                  {card.label && (
                    <span className="inline-block px-3 py-1 bg-white text-[#0F3E3D] rounded text-sm font-semibold w-fit shadow">
                      {card.label}
                    </span>
                  )}
                  {card.title && (
                    <div className="text-white text-2xl font-bold leading-snug">
                      {card.title}
                    </div>
                  )}
                </div>
              </div>

             
              <div
                className="absolute w-full h-full bg-[#0F3E3D] text-white rounded-xl p-6 flex items-center justify-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                {card.backType === "button" ? (
                  <button
                    onClick={() => navigate("/send-message")}
                    className="bg-white text-[#0F3E3D] font-semibold px-6 py-3 rounded shadow hover:shadow-lg transition"
                  >
                    Send message
                  </button>
                ) : (
                  <div className="flex flex-col items-center text-center gap-4">
                    <p className="text-sm max-w-xs">{card.backText}</p>
                    <button
                      onClick={() => navigate("/send-message")}
                      className="bg-white text-[#0F3E3D] font-semibold px-6 py-3 rounded shadow hover:shadow-lg transition"
                    >
                      Send message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
