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
      <div className="flex justify-between items-center px-6 md:px-16 py-3 ">
        <div className="flex items-center gap-2 font-bold text-xl">
          <img src="/logoo.webp" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-10 font-semibold text-center ml-auto">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="relative flex items-start gap-1 font-bold hover:text-[#004b93]"
            >
              <a
                href={item.href}
                className="cursor-pointer hover:text-[#004b93]"
              >
                {item.label}
              </a>
            </div>
          ))}
          <div className="text-left text-sm pl-6 border-l border-white/30">
            <p>call us now</p>
            <p className="text-white text-lg font-bold">+91-9099032638</p>
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
                  <img src="/logoo.webp" alt="Logo" className="h-10 w-auto" />
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
