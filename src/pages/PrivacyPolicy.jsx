import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";

const PrivacyPolicy = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex flex-col">
      <NavBarTop />
      <NavBarMain />

      <main className="flex-grow px-4 md:px-20 py-12 flex justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden text-gray-800"
        >
          {/* Header Bar */}
          <div className="py-4 px-6 bg-sky-500">
            <h1 className="text-white text-3xl font-bold">Privacy Policy</h1>
          </div>

          {/* Horizontal Rule */}
          <div className="h-1 bg-sky-700 w-full"></div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* 1. Data Collection */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-sky-600">1. Data Collection</h2>
              <p className="text-gray-700 mt-4">
                At <strong>Vihan India</strong>, we collect personal information such as your name, email address, and phone number, which is provided by you voluntarily. This information is used to respond to inquiries, improve our services, and ensure a better user experience.
              </p>
            </motion.div>

            {/* 2. Information Sharing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-sky-600">2. Information Sharing</h2>
              <p className="text-gray-700 mt-4">
                We do not share, sell, or distribute your personal information with third parties without your consent. We may, however, share information with third parties as required by law to comply with legal obligations.
              </p>
            </motion.div>

            {/* 3. Cookies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-sky-600">3. Cookies</h2>
              <p className="text-gray-700 mt-4">
                Our website uses cookies to enhance user experience. You may choose to disable cookies in your browser settings, but this may affect some features on our website.
              </p>
            </motion.div>

            {/* 4. Security */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-sky-600">4. Security</h2>
              <p className="text-gray-700 mt-4">
                We implement security measures to protect your personal data. However, no system is 100% secure, and we cannot guarantee absolute protection.
              </p>
            </motion.div>

            {/* 5. Policy Updates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-sky-600">5. Policy Updates</h2>
              <p className="text-gray-700 mt-4">
                We reserve the right to update our Privacy Policy at any time. All changes will be reflected on this page, and we encourage you to review this policy periodically.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
