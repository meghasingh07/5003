import React, { useState } from "react";

const cardData = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Director",
    linkedin: "https://www.linkedin.com",
    image: "/flip-img-2.webp",
    backText:
      "Rohit leads our financial strategy with a sharp eye for detail and over 15 years of experience in corporate finance.",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "Director",
    linkedin: "https://www.linkedin.com",
    image: "/flip-img-1.webp",
    backText:
      "Rohan specializes in big data integration and helps transform insights into real business decisions.",
  },
  {
    id: 3,
    name: "Ankit Verma",
    role: " Director",
    linkedin: "https://www.linkedin.com",
    image: "/flip-img-3.webp",
    backText:
      "Ankit brings a wealth of knowledge in business consulting, helping clients scale and optimize their operations.",
  },
];

export default function FlipCardsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-2">Our Team Experts</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We're trusted machinery partners for world-class pipes.
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
              className="relative w-full h-[400px] transition-transform duration-700"
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
                <div className="flex flex-col justify-end h-full p-6 space-y-2 bg-black/40">
                  <div className="text-white text-xl font-bold">
                    {card.name}
                  </div>
                  <div className="text-white text-sm">{card.role}</div>
                </div>
              </div>

              <div
                className="absolute w-full h-full bg-[#004b93] text-white rounded-xl p-6 flex flex-col items-center justify-center space-y-4"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-center text-sm max-w-xs">{card.backText}</p>
                <a
                  href={card.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black border border-[#004b93] px-4 py-2 rounded hover:bg-[#004b93] hover:text-white transition"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
