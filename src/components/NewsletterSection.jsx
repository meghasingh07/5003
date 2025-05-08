import React from "react";
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

const NewsletterSection = () => {
  return (
    <div className="bg-white text-white px-6 py-5 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="flex-1">
          <p className="text-sm tracking-widest text-black mb-2 uppercase">
            Newsletter
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            GET HOOKED! SIGN UP TO <br /> GET THE LATEST CATCH SENT <br /> TO
            YOUR INBOX.
          </h2>
        </div>

        {/* Right Input + Icons */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-4">
          <div className="w-full md:w-[400px] flex items-center border-b border-blue-700 py-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent w-full px-2 py-2 text-black placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-800 hover:bg-blue-500 transition-colors duration-300 rounded-full p-3 ml-2">
              <span className="text-black text-lg">→</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <FaInstagram
              className="text-blue-500 hover:scale-110 transition-transform duration-300 cursor-pointer"
              size={20}
            />
            <FaFacebookF
              className="text-blue-500 hover:scale-110 transition-transform duration-300 cursor-pointer"
              size={20}
            />
            <FaTripadvisor
              className="text-blue-500 hover:scale-110 transition-transform duration-300 cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
