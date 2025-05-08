import React from "react";
import { motion } from "framer-motion";

const socialIcons = [
  { src: "/facebook.svg", alt: "Facebook", href: "#" },
  { src: "/instgram.svg", alt: "Instagram", href: "#" },
  { src: "/pinterest.svg", alt: "Pinterest", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logoo.webp" alt="Vihan Logo" className="h-14 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-sm">
              Since 1994, Vihan India has been a pioneer in delivering durable,
              innovative, and efficient piping solutions. Our products are
              trusted by homeowners, engineers, and infrastructure developers
              across the country for their reliability and performance.
            </p>

            <div className="flex space-x-4 mt-6">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="hover:scale-110 transition-transform"
                >
                  <img src={icon.src} alt={icon.alt} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white font-semibold text-lg mb-3 ">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-1 text-gray-300 text-sm ">
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
              <a href="/products" className="hover:text-blue-400">
                Our Products
              </a>
              <a href="/news" className="hover:text-blue-400">
                News
              </a>
              <a href="/enquiry" className="hover:text-blue-400">
                Enquiry
              </a>
              <a href="/contact" className="hover:text-blue-400">
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <p className="text-white font-semibold mt-3">Email:</p>
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

            <p className="text-white font-semibold mt-3">Sales:</p>
            <p className="text-gray-300">
              +91-9099032638, +91-9510689295, +91-9510689272
            </p>

            <p className="text-white font-semibold mt-2">Service:</p>
            <p className="text-gray-300">+91-9510689218</p>
          </motion.div>

          {/* Column 4: Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-semibold text-lg mb-3">Opening Hours</h3>
            <div className="text-gray-300 text-sm space-y-4">
              <div>
                <p>
                  <strong>Manufacturing Plant:</strong>
                </p>
                <p>8:30 AM - 05:40 PM IST</p>
                <p>Mon - Sat, 1/3 Sat C-OFF, Sun WOFF</p>
              </div>
              <div>
                <p>
                  <strong>Office Hours:</strong>
                </p>
                <p>8:30 AM - 05:40 PM IST</p>
                <p>Mon - Sat, 1/3 Sat C-OFF, Sun WOFF</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-3 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>
            ©{new Date().getFullYear()}{" "}
            <span className="text-white">Vihan India</span>. All rights
            reserved. | Developed by{" "}
            <a
              href="https://www.weblozy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              weblozy.com
            </a>
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
      </div>
    </footer>
  );
};

export default Footer;
