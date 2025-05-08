import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBarMain({ pagesRef, isPagesOpen, setIsPagesOpen }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Enquiry", href: "/enquiry" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href) => {
    setIsMobileOpen(false);
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  };

  return (
    <>
      <div className="flex justify-between items-center px-6 md:px-16 py-3">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-xl transition-transform duration-300 hover:scale-105"
          style={{
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))",
          }}
        >
          <img src="/log.png" alt="Logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-10 font-semibold text-center ml-auto group">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="relative flex items-start gap-1 font-bold transition duration-300 cursor-pointer hover:text-[#004b93] group-hover:opacity-60 hover:opacity-100"
            >
              <a href={item.href}>{item.label}</a>
            </div>
          ))}

          {/* Call info */}
          <div className="text-left text-sm pl-6 border-l border-white/30">
            <p>call us now</p>
            <p className="text-white text-lg font-bold">+91-9099032638</p>
          </div>
        </div>

        {/* Mobile menu icon */}
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
            className="fixed inset-0 z-50"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute right-0 top-0 w-4/5 sm:w-1/2 h-full bg-blue-200 text-black p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b pb-4">
                <motion.img
                  src="/log.png"
                  alt="Logo"
                  className="h-10 w-auto drop-shadow-md"
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 12 }}
                />

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
