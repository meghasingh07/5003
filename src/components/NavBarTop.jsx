import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function NavBarTop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-30 hidden md:flex justify-between items-center px-6 md:px-16 py-3 border-b border-white/20 text-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/mail.svg" alt="mail" className="w-4 h-4 invert" />
          sales@vihanindia.com
        </div>
        <div className="border-l border-white/40 h-5"></div>
        <div className="flex items-center gap-2">
          <img src="/locationn.png" alt="location" className="w-4 h-4 " />
          Ahmedabad: 380058, Gujarat, India
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span
          id="contact-us"
          className="cursor-pointer"
          onClick={handleScrollToContact}
        >
          Contact us
        </span>
        <div className="border-l border-white/40 h-5"></div>
        
        <div className="relative z-50" ref={dropdownRef}>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Policies <ChevronDown className="w-4 h-4" />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg z-[100]">
              <ul className="divide-y divide-gray-200">
                <li className="p-3 hover:bg-gray-100 cursor-pointer">
                 Disclaimer
                </li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">
                  Privacy Policies
                </li>
                <li className="p-3 hover:bg-gray-100 cursor-pointer">
                  Terms and Conditions
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
