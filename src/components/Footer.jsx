import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const footerLinks = {
  useful: ["Management", "Reporting", "Press", "Company", "Careers"],
  company: ["Company", "Careers", "Press media", "Our Blog"],
  bottom: ["Management", "Reporting", "Press", "Company", "Careers"],
};

const socialIcons = [
  { src: "/facebook.svg", alt: "Facebook" },
  { src: "/instgram.svg", alt: "Instagram" },
  { src: "/pinterest.svg", alt: "Pinterest" },
];

const contactIcons = {
  email: "/mail1.svg",
  location: "/location.svg"
};

const Footer = () => {
  return (
    <footer className="bg-[#0A2C2C] text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Left Section with images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="hub logo" className="h-8" />
          </div>
          <p className="text-gray-300">
            Hub IT allows your business and technology computers to store,
            transmit, analyze, and manipulate big data.
          </p>
          <div className="flex space-x-4 mt-6 text-xl">
            {socialIcons.map((icon, i) => (
              <img
                key={i}
                src={icon.src}
                alt={icon.alt}
                className="h-6 w-6 cursor-pointer hover:opacity-70 transition"
              />
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <img src={contactIcons.email} alt="Email" className="h-5 mt-1" />
              <div>
                <p>Looking for collaboration?</p>
                <a href="mailto:hub@liquid.com" className="text-white hover:underline">
                  hub@liquid.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={contactIcons.location} alt="Location" className="h-5 mt-1" />
              <div>
                <p>Visit our Local Store</p>
                <p className="text-white">14th Street, Soho</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-yellow-400 mt-1" />
              <div>
                <p>Monday–Friday: 08am–9pm</p>
                <p className="text-white">+(1) 123 456 7890</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            {footerLinks.useful.map((link, i) => (
              <li key={i} className="hover:text-yellow-400 transition">
                {link}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            {footerLinks.company.map((link, i) => (
              <li key={i} className="hover:text-yellow-400 transition">
                {link}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>
          ©2020 <span className="text-white">Hub Corporation</span>.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {footerLinks.bottom.map((link, i) => (
            <a key={i} href="#" className="hover:text-yellow-400 transition">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
