import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBarMain({ pagesRef, isPagesOpen, setIsPagesOpen }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);

  const menuItems = [
    { num: "01", label: "Home", href: "/" },
    { num: "02", label: "About Us", href: "#about" },
    { num: "03", label: "Services", href: "#services" },
    { num: "04", label: "Pages", hasDropdown: true },
    { num: "05", label: "News", href: "#news" },
    { num: "06", label: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href) => {
    setIsMobileOpen(false);
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  };

  return (
    <>
      <div className="flex justify-between items-center px-6 md:px-16 py-3 bg-black/30 backdrop-blur">
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-10 font-semibold text-center ml-auto">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="relative flex items-start gap-1 font-bold hover:text-yellow-400"
            >
              {item.hasDropdown ? (
                <div ref={pagesRef} className="relative z-50">
                  <div
                    onClick={() => setIsPagesOpen(!isPagesOpen)}
                    className="flex items-center gap-1 cursor-pointer hover:text-yellow-400"
                  >
                    {item.label}
                    <span className="text-xs text-white translate-y-[-6px] hidden md:inline-block">
                      {item.num}
                    </span>
                  </div>
                  {isPagesOpen && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg z-[100]">
                      <ul className="divide-y divide-gray-200">
                        <li className="p-3 hover:bg-gray-100 cursor-pointer">
                          What We Do
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <a
                    href={item.href}
                    className="cursor-pointer hover:text-yellow-400"
                  >
                    {item.label}
                  </a>
                  <span className="text-xs text-white translate-y-[-6px] hidden md:inline-block">
                    {item.num}
                  </span>
                </>
              )}
            </div>
          ))}
          <div className="text-left text-sm pl-6 border-l border-white/30">
            <p>call us now</p>
            <p className="text-yellow-400 text-lg font-bold">+1 714 7788</p>
          </div>
        </div>

        <div className="md:hidden">
          <Menu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsMobileOpen(true)}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <Dialog
            open={isMobileOpen}
            onClose={() => setIsMobileOpen(false)}
            className="fixed inset-0  z-50"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute right-0 top-0 w-4/5 sm:w-1/2 h-full bg-white text-black p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center gap-2 font-bold text-xl">
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>{" "}
                  hub
                </div>
                <motion.button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  &times;
                </motion.button>
              </div>

              <div className="space-y-4 font-semibold text-lg mt-4">
                {menuItems.map((item, index) =>
                  item.hasDropdown ? (
                    <div key={index}>
                      <div
                        className="flex justify-between items-center border-b pb-2 cursor-pointer"
                        onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isMobilePagesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {isMobilePagesOpen && (
                        <div className="pl-4 pt-2 space-y-2 text-base text-gray-600">
                          <div
                            className="border-b pb-2 cursor-pointer"
                            onClick={() => handleNavigation("#what-we-do")}
                          >
                            What We Do
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="border-b pb-2 cursor-pointer"
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.label}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
