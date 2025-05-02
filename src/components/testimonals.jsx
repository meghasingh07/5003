import React, { useState } from "react";

const testimonials = [
  {
    text: "You made it so simple. My site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    author: "Liquid",
    title: "Founder",
  },
  {
    text: "Switching was the best decision I made. Everything just works and the support is amazing. It saved me hours each week!",
    author: "Sky",
    title: "Designer",
  },
  {
    text: "I've never had an easier experience building a website. It’s intuitive and powerful — perfect for solo entrepreneurs like me.",
    author: "River",
    title: "Freelancer",
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
      style={{ backgroundImage: "url('/testimonals.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-yellow-400 text-4xl font-bold mb-6">
            testimonials
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
