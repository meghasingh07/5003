import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-300">
      <NavBarTop />
      <NavBarMain />

      <main className="flex-grow flex items-center justify-center px-4 md:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white max-w-4xl w-full rounded-lg shadow-lg overflow-hidden text-gray-800"
        >
          {/* Header Bar */}
          <div className="py-4 px-6 bg-sky-500">
            <h1 className="text-white text-3xl font-bold">Disclaimer</h1>
          </div>

          {/* Horizontal Rule */}
          <div className="h-1 bg-sky-700 w-full"></div>

          {/* Content */}
          <div className="px-6 py-8 text-justify space-y-5 text-base leading-relaxed">
            <p>
              The information provided by <strong>Vihan India</strong> ("we", "our", or "us") on this website is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
            </p>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of using the site or relying on any information provided. Your use of the site is solely at your own risk.
            </p>
            <p>
              This site may contain links to external websites that are not provided or maintained by us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
            <p>
              All trademarks and logos used or mentioned belong to their respective owners and are used for identification purposes only.
            </p>
          </div>

          {/* Important Notes Section */}
          <div className="bg-yellow-100 text-yellow-800 px-6 py-4 my-6 rounded-lg shadow-md">
            <strong>Important Notice:</strong> The information on this site is subject to change without notice. Please ensure that you review the latest information regularly.
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
