import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const socialIcons = [
  { src: "/facebook.svg", alt: "Facebook" },
  { src: "/instgram.svg", alt: "Instagram" },
  { src: "/pinterest.svg", alt: "Pinterest" },
];

const contactIcons = {
  email: "/mail1.svg",
  location: "/location.svg",
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <img src="/logoo.webp" alt="Vihan Logo" className="h-8" />
          </div>
          <p className="text-gray-300">
            Vihan offers innovative, durable plastic piping solutions for homes
            and infrastructure across India since 1994.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-lg mb-4">Our Address</h3>
          <p className="text-gray-300 mb-2">
            <strong>Registered Office and Works:</strong>
            <br />
            Block No. 22B, Near Claris Pharmaceuticals, Sarkhej - Bavla Highway,
            <br />
            Ahmedabad: 382213, Gujarat, India
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Corporate Office:</strong>
            <br />
            613 & 614, B Block, Navratna Corporate Park,
            <br />
            Bopal - Ambli Road, Ahmedabad: 380058, Gujarat, India
          </p>
          <div className="mt-4">
            <p className="text-white font-semibold">Email:</p>
            <a
              href="mailto:sales@vihanindia.com"
              className="text-gray-300 hover:underline"
            >
              sales@vihanindia.com
            </a>
            <br />
            <a
              href="mailto:service@vihanindia.com"
              className="text-gray-300 hover:underline"
            >
              service@vihanindia.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
          <div className="text-gray-300 space-y-4">
            <div>
              <p>
                <strong>Manufacturing Plant:</strong>
              </p>
              <p>8:30 AM - 05:40 PM IST</p>
              <p>Monday - Saturday</p>
              <p>1/3 Saturday C-OFF; Sunday WOFF</p>
            </div>
            <div>
              <p>
                <strong>Office Hours:</strong>
              </p>
              <p>8:30 AM - 05:40 PM IST</p>
              <p>Monday - Saturday</p>
              <p>1/3 Saturday C-OFF; Sunday WOFF</p>
            </div>
            <div className="mt-3">
              <p className="text-white font-semibold">Sales:</p>
              <p>+91-9099032638, +91-9510689295, +91-9510689272</p>
              <p className="text-white font-semibold mt-2">Service:</p>
              <p>+91-9510689218</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>
          ©{new Date().getFullYear()}{" "}
          <span className="text-white">Vihan India</span>. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#004b93] transition">
            Privacy
          </a>
          <a href="#" className="hover:text-[#004b93] transition">
            Terms
          </a>
          <a href="#" className="hover:text-[#004b93] transition">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
