import React from "react";
import { motion } from "framer-motion";

const socialIcons = [
  { src: "/facebook.svg", alt: "Facebook", href: "#" },
  { src: "/instgram.svg", alt: "Instagram", href: "#" },
  { src: "/pinterest.svg", alt: "Pinterest", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
     <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* Left Column - Logo, Info, Links, Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <img src="/logoo.webp" alt="Vihan Logo" className="h-14 mb-4" />

          {/* Paragraph */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Vihan offers innovative, durable plastic piping solutions for homes
            and infrastructure across India since 1994.
          </p>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <div className="flex flex-col space-y-1 text-gray-300 text-sm">
              <a href="/" className="hover:text-blue-400">Home</a>
              <a href="/about" className="hover:text-blue-400">About Us</a>
              <a href="/products" className="hover:text-blue-400">Our Products</a>
              <a href="/news" className="hover:text-blue-400">News</a>
              <a href="/contact" className="hover:text-blue-400">Contact Us</a>
              <a href="/enquiry" className="hover:text-blue-400">Enquiry</a>
            </div>
          </div>

          {/* Social Icons Below Links */}
          <div className="flex space-x-4">
            {socialIcons.map((icon, i) => (
              <motion.a
                key={i}
                href={icon.href}
                whileHover={{ scale: 1.2 }}
                className="transition"
              >
                <img src={icon.src} alt={icon.alt} className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Middle Column - Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-gray-300 mb-2">
            <strong>Registered Office:</strong><br />
            Block No. 22B, Near Claris Pharmaceuticals,<br />
            Sarkhej - Bavla Highway, Ahmedabad, Gujarat
          </p>

          <p className="text-white font-semibold mt-4">Email:</p>
          <a href="mailto:sales@vihanindia.com" className="text-gray-300 hover:underline">
            sales@vihanindia.com
          </a>
          <br />
          <a href="mailto:service@vihanindia.com" className="text-gray-300 hover:underline">
            service@vihanindia.com
          </a>

          <p className="text-white font-semibold mt-4">Sales:</p>
          <p className="text-gray-300">
            +91-9099032638, +91-9510689295, +91-9510689272
          </p>

          <p className="text-white font-semibold mt-2">Service:</p>
          <p className="text-gray-300">+91-9510689218</p>
        </motion.div>

        {/* Right Column - Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
          <div className="text-gray-300 space-y-4">
            <div>
              <p><strong>Manufacturing Plant:</strong></p>
              <p>8:30 AM - 05:40 PM IST</p>
              <p>Mon - Sat, 1/3 Sat C-OFF, Sun WOFF</p>
            </div>
            <div>
              <p><strong>Office Hours:</strong></p>
              <p>8:30 AM - 05:40 PM IST</p>
              <p>Mon - Sat, 1/3 Sat C-OFF, Sun WOFF</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>
          ©{new Date().getFullYear()} <span className="text-white">Vihan India</span>. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#004b93] transition">Privacy</a>
          <a href="#" className="hover:text-[#004b93] transition">Terms</a>
          <a href="#" className="hover:text-[#004b93] transition">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
