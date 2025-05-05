import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const newsData = [
  {
    title: "Investment trend monitor: Top trends in 2021",
    description:
      "I think that you should be able to select more than one reason for rating. This team is",
    image: "/blog-1.webp",
  },
  {
    title: "Mind power the ultimate success formula",
    description:
      "I think that you should be able to select more than one reason for rating.",
    image: "/blog-2.webp",
  },
  {
    title: "Working from home: Update",
    description:
      "I think that you should be able to select more than one reason for rating. This team is",
    image: "/blog-3.webp",
  },
];

const HubNews = () => {
  return (
    <section id="news" className="py-16 px-4 md:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Blog Posts </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get useful insights from the world of plastic pipe solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {newsData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="border-b border-gray-300 pb-6 group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md w-full h-56 object-cover mb-6"
            />
            <h3 className="text-lg font-semibold text-[#0A2C2C] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">{item.description}</p>

            <a
              href="#"
              className="inline-flex items-center font-semibold text-[#003366] transition-all duration-300"
            >
              <span className="inline-block w-5 border-t-2  border-[#003366] mr-2"></span>
              CONTINUE READING
              <motion.span className="ml-2 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                <FaArrowRight className="text-[#003366]" />
              </motion.span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HubNews;
