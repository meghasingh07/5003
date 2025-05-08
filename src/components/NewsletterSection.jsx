import React from "react";
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

const NewsletterSection = () => {
  return (
    <div className="bg-white text-white px-4 py-10 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm tracking-widest text-blue-800 mb-2 uppercase">
            Newsletter
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-snug">
            GET HOOKED! SIGN UP TO <br className="hidden sm:block" />
            GET THE LATEST CATCH SENT TO YOUR INBOX.
          </h2>
        </div>

        {/* Right Input + Icons */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6">
          {/* Input & Button */}
          <div className="w-full sm:w-[80%] md:w-[400px] flex items-center border border-blue-700 rounded-full px-2 py-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent w-full px-4 py-2 text-black placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-blue-800 hover:bg-blue-600 transition-colors duration-300 rounded-full ml-2 p-2 w-10 h-10 flex items-center justify-center">
              <span className="text-white text-base">→</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <FaInstagram className="text-blue-800 hover:scale-110 transition-transform duration-300 cursor-pointer" size={24} />
            <FaFacebookF className="text-blue-800 hover:scale-110 transition-transform duration-300 cursor-pointer" size={24} />
            <FaTripadvisor className="text-blue-800 hover:scale-110 transition-transform duration-300 cursor-pointer" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
