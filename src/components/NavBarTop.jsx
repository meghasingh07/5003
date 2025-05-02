import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function NavBarTop() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-30 hidden md:flex justify-between items-center px-6 md:px-16 py-3 border-b border-white/20 bg-black/30 backdrop-blur text-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/mail.svg" alt="mail" className="w-4 h-4 invert" />
          invest@liquid.com
        </div>
        <div className="border-l border-white/40 h-5"></div>
        <div className="flex items-center gap-2">
          <img src="/street.svg" alt="location" className="w-4 h-4 invert" />
          14th Street, Soho
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span
          id="consultation"
          className="cursor-pointer"
          onClick={handleScrollToAbout} // Scroll to About section
        >
          Consultation
        </span>
        <div className="border-l border-white/40 h-5"></div>
        <span
          id="contact-us"
          className="cursor-pointer"
          onClick={() => handleScrollToAbout()}
        >
          Contact us
        </span>
        <div className="border-l border-white/40 h-5"></div>
        <div className="relative z-50" ref={langRef}>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            us English <ChevronDown className="w-4 h-4" />
          </div>
          {isLangOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg z-[100]">
              <ul className="divide-y divide-gray-200">
                <li className="p-3 hover:bg-gray-100 cursor-pointer">
                  Privacy Policy
                </li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">
                  Terms of Use
                </li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">
                  Help Center
                </li>
              </ul>
            </div>
          )}
        </div>
        <Search className="w-4 h-4 cursor-pointer" />
      </div>
    </div>
  );
}
