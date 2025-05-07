import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    text: "I had a great experience with Vihan India. Their website was easy to navigate and find the products I was looking for. The prices were also very reasonable. I would definitely recommend Vihan India to others.",
    author: "Ken Gwynn",
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
      className="relative bg-cover bg-no-repeat text-white py-20 px-6 lg:px-20"
      style={{ backgroundImage: "url('/testimonials.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left Title */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6 text-white">Testimonials</h2>
          <p className="text-gray-300 text-base">
            What our customers are saying about their experience with Vihan India.
            Hear how Vihan India is transforming businesses with cutting-edge innovation and unmatched customer satisfaction.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-xl text-white relative shadow-lg border border-white/20 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <FaQuoteLeft className="text-blue-800 text-2xl mb-4" />
              <p className="text-lg leading-relaxed italic">{testimonial.text}</p>
              <div className="flex items-center justify-between mt-6">
                <p className="font-semibold text-sm text-white">
                  — {testimonial.author}
                </p>
                <FaQuoteRight className="text-blue-800 text-xl" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-8 text-lg text-white">
            <button
              onClick={handlePrev}
              className="hover:text-black transition-colors"
            >
              ←
            </button>
            <span className="text-gray-300">
              {index + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="hover:text-black transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
