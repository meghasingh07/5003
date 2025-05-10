import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Sneha Mehta",
    company: "Vihan India Pvt. Ltd.",
    image: "/team-1.jpg",
    text: "Vihan India has played a vital role in driving innovation and delivering reliable solutions tailored to our business needs. Their support has been instrumental in our growth.",
  },
  {
    name: "Rajesh Kumar",
    company: "Vihan India Pvt. Ltd.",
    image: "/team-3.jpg",
    text: "Working with Vihan India has been an outstanding experience. Their commitment to excellence and customer satisfaction sets them apart in the industry.",
  },
];


const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BusinessPartners = () => {
  return (
    <motion.section
      className="bg-gray-50 py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariant}
    >
      <motion.div
        className="text-center max-w-4xl mx-auto mb-12"
        variants={fadeUpVariant}
      >
        <p className="text-sm font-medium text-gray-600">
          A deep commitment to diversity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Business Partners
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.3, duration: 0.6 },
              },
            }}
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full sm:w-1/3 h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-center text-left">
              <h3 className="text-md font-bold text-gray-900">
                {partner.name},{" "}
                <span className="text-gray-700 font-normal">
                  {partner.company}
                </span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">{partner.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-10 text-sm text-gray-600"
        variants={fadeUpVariant}
      >
        Our nearly <strong>8,000 committed staff members</strong> are ready to
        help.
      </motion.div>
    </motion.section>
  );
};

export default BusinessPartners;
