import React, { useState } from "react";

const testimonials = [
  {
    text: "I had a great experience with Vihan India. Their website was easy to navigate and find the products I was looking for. The prices were also very reasonable. I would definitely recommend Vihan India to others.",
    author: "Ken Gwynn ",
   
  },
  {
    text: "Vihan India is an amazing company to deal with. Their customer service is top-notch and they always go above and beyond to ensure customer satisfaction. I am really impressed with their products as well.",
    author: "Tobias Kluge",
   
  },
  {
    text: "I recently purchased a few items from Vihan India and I am extremely satisfied with the overall experience. The quality of the products is superb and the customer service provided by them exceeded my expectations.",
    author: "Vijayapandiyan Bose",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="relative bg-cover  bg-no-repeat text-white py-20 px-6 lg:px-20"
      style={{ backgroundImage: "url('/testimonials.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-white text-4xl font-bold mb-6">
          Testimonials 
          </h2>
          <div className="min-h-[140px] text-xl leading-relaxed max-w-xl mb-6">
            {testimonial.text}
          </div>
          <p className="text-gray-300 font-semibold">
            {testimonial.author}, {testimonial.title}
          </p>

          <div className="flex items-center gap-4 mt-6 text-lg">
            <button onClick={handlePrev} className="hover:text-yellow-400">
              ←
            </button>
            <span>
              {index + 1} — {testimonials.length}
            </span>
            <button onClick={handleNext} className="hover:text-yellow-400">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
