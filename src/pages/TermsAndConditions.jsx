import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";

const termsData = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Vihan India website, you accept and agree to be bound by the terms and provision of this agreement.",
  },
  {
    title: "2. Modification of Terms",
    content:
      "We reserve the right to change or modify these terms at any time. Continued use of the site after changes constitutes acceptance of the updated terms.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "You agree to use the website responsibly and not to engage in any activity that could harm the site or its users.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All content on this website is the intellectual property of Vihan India. Reproduction without permission is prohibited.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "We are not liable for any damages that may arise from the use of or inability to use the website.",
  },
];

const AccordionItem = ({ index, title, content, isOpen, setOpenIndex }) => {
  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={handleToggle}
        className={`w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center transition-all duration-300 ${
          isOpen ? "bg-sky-100" : "bg-white hover:bg-gray-50"
        }`}
      >
        <span className="text-sky-600 text-lg font-medium">{title}</span>
        <span className="text-gray-400 text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-6 pb-4 text-gray-700"
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-blue-300 min-h-screen flex flex-col">
      <NavBarTop />
      <NavBarMain />

      <main className="flex-grow px-4 md:px-20 py-12 flex justify-center items-start">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden text-gray-800">
          {/* Header Bar */}
          <div className="py-4 px-6 bg-sky-500">
            <h1 className="text-white text-3xl font-bold sm:text-2xl md:text-3xl">
              Terms & Conditions
            </h1>
          </div>

          {/* Divider */}
          <div className="h-1 bg-sky-700 w-full"></div>

          {/* Accordion */}
          <div className="divide-y divide-gray-200">
            {termsData.map((term, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={term.title}
                content={term.content}
                isOpen={openIndex === index}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
